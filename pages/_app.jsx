import { useEffect } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import moment from 'moment/moment'
import 'moment/locale/pt-br'

import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
    html, body {
      padding: 0;
      margin: 0;
      background-color: ${({ theme }) => theme.colors.white};
      font-family: sans-serif;
      color: ${(props) => props.theme.colors.black}
    }

    *{   
       box-sizing: border-box;
      }
  `

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    moment.locale('pt-br')
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
