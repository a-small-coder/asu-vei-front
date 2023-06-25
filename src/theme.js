import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const Heading = {
  variants: {
    secondary: (props) => ({
      color: mode('gray.300', 'gray.600')(props),
    }),
  },
}

const components = { Heading }

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const colors = {
  bgGray: '#eef0f8',
  gradient: 'linear-gradient(102.83deg, #FDF59E 13.29%, #EE9EA4 50.64%, #9389BE 88.78%);',
  control: '#9389BE',
  control2: '#FDF59E',
  greenGradient: 'linear-gradient(180deg, rgba(168, 255, 120, 0.3) 0%, rgba(120, 255, 214, 0.3) 100%)'
  
}

export const scrollbar = {
  '&::-webkit-scrollbar': {
    width: '12px',
    borderRadius: '8px',
    backgroundColor: colors.control,
},
'&::-webkit-scrollbar-thumb': {
    borderRadius: '8px',
    backgroundColor: colors.control,
},
}

export const styles = {
  global: (props) => ({
    'html, body, #root': {
      height: '100%',
    },
    body: {
      bg: mode('white', '#303030')(props),
    },
    colors
  }),
}



export default extendTheme({ config, styles, components })
