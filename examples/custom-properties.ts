import { toCustomPropertiesArray, toCustomPropertiesString } from '../src'

const customProperties = {
  success: {
    100: '#F4FDCD',
    200: '#E6FB9C',
    300: '#D1F46A',
    400: '#BAE944',
    500: '#9ADB0D',
    600: '#7EBC09',
    700: '#649D06',
    800: '#4C7F04',
    900: '#3B6902',
  },
  info: {
    100: '#CEFEF7',
    200: '#9DFEF6',
    300: '#6CFEFD',
    400: '#48F0FD',
    500: '#0CD8FC',
    600: '#08A9D8',
    700: '#067FB5',
    800: '#035B92',
    900: '#024278',
  },
  warning: {
    100: '#FEF6D9',
    200: '#FEEAB3',
    300: '#FEDB8C',
    400: '#FDCC70',
    500: '#FCB441',
    600: '#D8902F',
    700: '#B57020',
    800: '#925314',
    900: '#783E0C',
  },
  danger: {
    100: '#FFE6D6',
    200: '#FFC6AD',
    300: '#FFA083',
    400: '#FF7C65',
    500: '#FF4032',
    600: '#DB2427',
    700: '#B71928',
    800: '#930F27',
    900: '#7A0927',
  },
}

const customPropertiesArray = toCustomPropertiesArray(customProperties)
const customPropertiesString = toCustomPropertiesString(customProperties)

console.log(customPropertiesArray)
console.log(customPropertiesString)
