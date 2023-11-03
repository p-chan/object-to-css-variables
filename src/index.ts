import { colord } from 'colord'
import { kebabCase } from 'change-case'

type CSSObject = {
  [key: string]: string | number | CSSObject
}

type KeyValueObject = {
  key: string
  value: string | number
}

type Options = Partial<{
  prefix: string
}>

type CustomPropertiesOptions = Options &
  Partial<{
    withRGB: boolean
  }>

type CustomMediaQueriesOptions = Options

const threeDigitHexPattern = /^#([a-f]|[A-F]|[0-9]){3}$/
const sixDigitHexPattern = /^#([a-f]|[A-F]|[0-9]){6}$/

const isHex = (hex: string) => {
  return threeDigitHexPattern.test(hex) || sixDigitHexPattern.test(hex)
}

const toCSSVariables = (object: CSSObject, options?: Options) => {
  const cssVariables: KeyValueObject[] = []

  const addCSSVariable = (currentValue: CSSObject, parentKeys: string[]) => {
    Object.entries(currentValue).map(([key, value]) => {
      if (typeof value !== 'string' && typeof value !== 'number') {
        addCSSVariable(value, [...parentKeys, kebabCase(key)])
      } else {
        cssVariables.push({
          key: `--${(options && options.prefix && `${options.prefix}-`) || ''}${[...parentKeys, kebabCase(key)].join(
            '-',
          )}`,
          value,
        })
      }
    })
  }

  addCSSVariable(object, [])

  return cssVariables
}

export const toCustomPropertiesArray = (object: CSSObject, options?: CustomPropertiesOptions) => {
  if (options && options.withRGB) {
    return toCSSVariables(object, options).reduce((prev, { key, value }) => {
      if (!isHex(value.toString())) return [...prev, { key, value }]

      const { r, g, b } = colord(value.toString()).toRgb()

      return [...prev, { key, value }, { key: `${key}-rgb`, value: `${r}, ${g}, ${b}` }]
    }, [] as KeyValueObject[])
  }

  return toCSSVariables(object, options)
}

export const toCustomMediaQueriesArray = (object: CSSObject, options?: CustomMediaQueriesOptions) => {
  return toCSSVariables(object, options)
}

export const toCustomPropertiesString = (object: CSSObject, options?: CustomPropertiesOptions) => {
  return toCustomPropertiesArray(object, options)
    .map(({ key, value }) => `${key}: ${value};`)
    .join(' ')
}

export const toCustomMediaQueriesString = (object: CSSObject, options?: CustomMediaQueriesOptions) => {
  return toCustomMediaQueriesArray(object, options)
    .map(({ key, value }) => `@custom-media ${key} ${value};`)
    .join(' ')
}
