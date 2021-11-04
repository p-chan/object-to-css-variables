import { toCustomMediaQueriesArray, toCustomMediaQueriesString } from '../src'

const customMediaQueries = {
  phone: '(max-width: 428px)',
  tablet: '(max-width: 768px)',
  laptop: '(max-width: 1024px)',
  desktop: '(max-width: 1440px)',
}

const customMediaQueriesArray = toCustomMediaQueriesArray(customMediaQueries)
const customMediaQueriesString = toCustomMediaQueriesString(customMediaQueries)

console.log(customMediaQueriesArray)
console.log(customMediaQueriesString)
