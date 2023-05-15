import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
    html, body {
      padding: 0;
      margin: 0;
      background-color: ${ ({theme}) => theme.colors.white};
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



  