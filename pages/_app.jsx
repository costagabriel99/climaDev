import { createGlobalStyle, ThemeProvider } from 'styled-components'
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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
