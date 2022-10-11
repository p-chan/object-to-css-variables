import { describe, test, expect } from 'vitest'

import {
  toCustomPropertiesArray,
  toCustomPropertiesString,
  toCustomMediaQueriesArray,
  toCustomMediaQueriesString,
} from './index'

describe('Custom Properties', () => {
  describe('toCustomPropertiesArray', () => {
    test('base', () => {
      expect(
        toCustomPropertiesArray({
          black: { 100: '#999999', 900: '#000000' },
          white: { 100: '#ffffff', 900: '#aaaaaa' },
        })
      ).toEqual([
        { key: '--black-100', value: '#999999' },
        { key: '--black-900', value: '#000000' },
        { key: '--white-100', value: '#ffffff' },
        { key: '--white-900', value: '#aaaaaa' },
      ])
    })

    test('nest', () => {
      expect(
        toCustomPropertiesArray({
          color: {
            black: { 100: '#999999', 900: '#000000' },
            white: { 100: '#ffffff', 900: '#aaaaaa' },
          },
        })
      ).toEqual([
        { key: '--color-black-100', value: '#999999' },
        { key: '--color-black-900', value: '#000000' },
        { key: '--color-white-100', value: '#ffffff' },
        { key: '--color-white-900', value: '#aaaaaa' },
      ])
    })

    test('camelCase', () => {
      expect(
        toCustomPropertiesArray({
          strongBlack: { 100: '#999999', 900: '#000000' },
          strongWhite: { 100: '#ffffff', 900: '#aaaaaa' },
        })
      ).toEqual([
        { key: '--strong-black-100', value: '#999999' },
        { key: '--strong-black-900', value: '#000000' },
        { key: '--strong-white-100', value: '#ffffff' },
        { key: '--strong-white-900', value: '#aaaaaa' },
      ])
    })

    test('prefix option', () => {
      expect(
        toCustomPropertiesArray(
          { black: { 100: '#999999', 900: '#000000' }, white: { 100: '#ffffff', 900: '#aaaaaa' } },
          { prefix: 'color' }
        )
      ).toEqual([
        { key: '--color-black-100', value: '#999999' },
        { key: '--color-black-900', value: '#000000' },
        { key: '--color-white-100', value: '#ffffff' },
        { key: '--color-white-900', value: '#aaaaaa' },
      ])
    })

    test('withRGB option', () => {
      expect(
        toCustomPropertiesArray(
          { black: { 100: '#999999', 900: '#000000' }, white: { 100: '#ffffff', 900: '#aaaaaa' } },
          { withRGB: true }
        )
      ).toEqual([
        { key: '--black-100', value: '#999999' },
        { key: '--black-100-rgb', value: '153, 153, 153' },
        { key: '--black-900', value: '#000000' },
        { key: '--black-900-rgb', value: '0, 0, 0' },
        { key: '--white-100', value: '#ffffff' },
        { key: '--white-100-rgb', value: '255, 255, 255' },
        { key: '--white-900', value: '#aaaaaa' },
        { key: '--white-900-rgb', value: '170, 170, 170' },
      ])
    })

    test('withRGB option with no color values', () => {
      expect(
        toCustomPropertiesArray(
          {
            black: { 100: '#999999', 900: '#000000' },
            white: { 100: '#ffffff', 900: '#aaaaaa' },
            margin: { 1: '8px', 2: '16px' },
          },
          { withRGB: true }
        )
      ).toEqual([
        { key: '--black-100', value: '#999999' },
        { key: '--black-100-rgb', value: '153, 153, 153' },
        { key: '--black-900', value: '#000000' },
        { key: '--black-900-rgb', value: '0, 0, 0' },
        { key: '--white-100', value: '#ffffff' },
        { key: '--white-100-rgb', value: '255, 255, 255' },
        { key: '--white-900', value: '#aaaaaa' },
        { key: '--white-900-rgb', value: '170, 170, 170' },
        { key: '--margin-1', value: '8px' },
        { key: '--margin-2', value: '16px' },
      ])
    })
  })

  describe('toCustomPropertiesString', () => {
    test('base', () => {
      expect(
        toCustomPropertiesString({
          black: { 100: '#999999', 900: '#000000' },
          white: { 100: '#ffffff', 900: '#aaaaaa' },
        })
      ).toBe('--black-100: #999999; --black-900: #000000; --white-100: #ffffff; --white-900: #aaaaaa;')
    })

    test('nest', () => {
      expect(
        toCustomPropertiesString({
          color: {
            black: { 100: '#999999', 900: '#000000' },
            white: { 100: '#ffffff', 900: '#aaaaaa' },
          },
        })
      ).toBe(
        '--color-black-100: #999999; --color-black-900: #000000; --color-white-100: #ffffff; --color-white-900: #aaaaaa;'
      )
    })

    test('camelCase', () => {
      expect(
        toCustomPropertiesString({
          strongBlack: { 100: '#999999', 900: '#000000' },
          strongWhite: { 100: '#ffffff', 900: '#aaaaaa' },
        })
      ).toBe(
        '--strong-black-100: #999999; --strong-black-900: #000000; --strong-white-100: #ffffff; --strong-white-900: #aaaaaa;'
      )
    })

    test('prefix option', () => {
      expect(
        toCustomPropertiesString(
          { black: { 100: '#999999', 900: '#000000' }, white: { 100: '#ffffff', 900: '#aaaaaa' } },
          { prefix: 'color' }
        )
      ).toBe(
        '--color-black-100: #999999; --color-black-900: #000000; --color-white-100: #ffffff; --color-white-900: #aaaaaa;'
      )
    })

    test('withRGB option', () => {
      expect(
        toCustomPropertiesString(
          { black: { 100: '#999999', 900: '#000000' }, white: { 100: '#ffffff', 900: '#aaaaaa' } },
          { withRGB: true }
        )
      ).toBe(
        '--black-100: #999999; --black-100-rgb: 153, 153, 153; --black-900: #000000; --black-900-rgb: 0, 0, 0; --white-100: #ffffff; --white-100-rgb: 255, 255, 255; --white-900: #aaaaaa; --white-900-rgb: 170, 170, 170;'
      )
    })

    test('withRGB option with no color values', () => {
      expect(
        toCustomPropertiesString(
          {
            black: { 100: '#999999', 900: '#000000' },
            white: { 100: '#ffffff', 900: '#aaaaaa' },
            margin: { 1: '8px', 2: '16px' },
          },
          { withRGB: true }
        )
      ).toBe(
        '--black-100: #999999; --black-100-rgb: 153, 153, 153; --black-900: #000000; --black-900-rgb: 0, 0, 0; --white-100: #ffffff; --white-100-rgb: 255, 255, 255; --white-900: #aaaaaa; --white-900-rgb: 170, 170, 170; --margin-1: 8px; --margin-2: 16px;'
      )
    })
  })
})

describe('Custom Media Queries', () => {
  describe('toCustomMediaQueriesArray', () => {
    test('base', () => {
      expect(
        toCustomMediaQueriesArray({
          phone: '(max-width: 428px)',
          tablet: '(max-width: 768px)',
          laptop: '(max-width: 1024px)',
          desktop: '(max-width: 1440px)',
        })
      ).toEqual([
        { key: '--phone', value: '(max-width: 428px)' },
        { key: '--tablet', value: '(max-width: 768px)' },
        { key: '--laptop', value: '(max-width: 1024px)' },
        { key: '--desktop', value: '(max-width: 1440px)' },
      ])
    })

    test('nest', () => {
      expect(
        toCustomMediaQueriesArray({
          screen: {
            phone: '(max-width: 428px)',
            tablet: '(max-width: 768px)',
            laptop: '(max-width: 1024px)',
            desktop: '(max-width: 1440px)',
          },
        })
      ).toEqual([
        { key: '--screen-phone', value: '(max-width: 428px)' },
        { key: '--screen-tablet', value: '(max-width: 768px)' },
        { key: '--screen-laptop', value: '(max-width: 1024px)' },
        { key: '--screen-desktop', value: '(max-width: 1440px)' },
      ])
    })
  })

  describe('toCustomMediaQueriesString', () => {
    test('base', () => {
      expect(
        toCustomMediaQueriesString({
          phone: '(max-width: 428px)',
          tablet: '(max-width: 768px)',
          laptop: '(max-width: 1024px)',
          desktop: '(max-width: 1440px)',
        })
      ).toBe(
        '@custom-media --phone (max-width: 428px); @custom-media --tablet (max-width: 768px); @custom-media --laptop (max-width: 1024px); @custom-media --desktop (max-width: 1440px);'
      )
    })

    test('nest', () => {
      expect(
        toCustomMediaQueriesString({
          screen: {
            phone: '(max-width: 428px)',
            tablet: '(max-width: 768px)',
            laptop: '(max-width: 1024px)',
            desktop: '(max-width: 1440px)',
          },
        })
      ).toBe(
        '@custom-media --screen-phone (max-width: 428px); @custom-media --screen-tablet (max-width: 768px); @custom-media --screen-laptop (max-width: 1024px); @custom-media --screen-desktop (max-width: 1440px);'
      )
    })
  })
})
