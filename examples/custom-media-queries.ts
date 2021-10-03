import { toCustomMediaQueriesString } from '../src'

const cssVariables = toCustomMediaQueriesString({
  phone: '(max-width: 414px)',
  tablet: '(max-width: 768px)',
  laptop: '(max-width: 1024px)',
  desktop: '(max-width: 1440px)',
})

console.log(cssVariables)
