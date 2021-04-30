import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
   colors: {
       gray: {
           "50": "#F5F8FA",
           "100": "DADADA",
           "200": "rgba(153, 153, 153, 0.5)",
           "300": "#999999",
           "700": "#47585B",
       },
       yellow: {
           "400": "rgba(255, 186, 8, 0.5)",
           "600": "#FFBA08",
       }
   },
   fonts: {
       heading: 'Poppins',
       body: 'Poppins',
   },
   styles: {
       global: {
           bg: 'white',
           color: 'gray.700',
       }
   }
})