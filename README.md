# object-to-css-variables

> A library to convert JavaScript Object to CSS Variables

## Install

```sh
npm install object-to-css-variables
```

or

```sh
yarn add object-to-css-variables
```

## Usage

### Object to Custom Properties

```ts
// to Array
toCustomPropertiesArray(object, options)

// to String
toCustomPropertiesString(object, options)
```

<details>
<summary>Examples</summary>

```ts
import { toCustomPropertiesArray, toCustomPropertiesString } from 'object-to-css-variables'

const customProperties = {
  success: {
    400: '#BAE944',
    700: '#649D06',
  },
  info: {
    400: '#48F0FD',
    700: '#067FB5',
  },
  warning: {
    400: '#FDCC70',
    700: '#B57020',
  },
  danger: {
    400: '#FF7C65',
    700: '#B71928',
  },
}

toCustomPropertiesArray(customProperties)
/* log ->
[
  { key: '--success-400', value: '#BAE944' },
  { key: '--success-700', value: '#649D06' },
  { key: '--info-400', value: '#48F0FD' },
  { key: '--info-700', value: '#067FB5' },
  { key: '--warning-400', value: '#FDCC70' },
  { key: '--warning-700', value: '#B57020' },
  { key: '--danger-400', value: '#FF7C65' },
  { key: '--danger-700', value: '#B71928' }
]
*/

toCustomPropertiesString(customProperties)
/* log ->
--success-400: #BAE944; --success-700: #649D06; --info-400: #48F0FD; --info-700: #067FB5; --warning-400: #FDCC70; --warning-700: #B57020; --danger-400: #FF7C65; --danger-700: #B71928;
*/
```

</details>

#### Paramaters

- `object`
- `options`
  - Type: `Options?`

#### Options

- `prefix`
  - Type: `string?`
  - Description: Add a prefix before all variables
- `withRGB`
  - Type: `boolean?`
  - Description: Add a RGB variable when a variable is HEX

### Object to Custom Media Queries

```ts
// to Array
toCustomPropertiesArray(object, options)

// to String
toCustomPropertiesString(object, options)
```

<details>
<summary>Examples</summary>

```ts
import { toCustomMediaQueriesArray, toCustomMediaQueriesString } from 'object-to-css-variables'

const customMediaQueries = {
  phone: '(max-width: 414px)',
  tablet: '(max-width: 768px)',
  laptop: '(max-width: 1024px)',
  desktop: '(max-width: 1440px)',
}

toCustomMediaQueriesArray(customMediaQueries)
/* log ->
[
  { key: '--phone', value: '(max-width: 414px)' },
  { key: '--tablet', value: '(max-width: 768px)' },
  { key: '--laptop', value: '(max-width: 1024px)' },
  { key: '--desktop', value: '(max-width: 1440px)' }
]
*/

toCustomMediaQueriesString(customMediaQueries)
/* log ->
@custom-media --phone (max-width: 414px); @custom-media --tablet (max-width: 768px); @custom-media --laptop (max-width: 1024px); @custom-media --desktop (max-width: 1440px);
*/
```

</details>

#### Paramaters

- `object`
- `options`
  - Type: `Options?`

#### Options

- `prefix`
  - Type: `string?`
  - Description: Add a prefix before all variables

## Author

[@p-chan](https://github.com/p-chan)

## License

MIT
