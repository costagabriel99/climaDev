import styled from 'styled-components'

import Navbar from '../../../src/components/layouts/navbar/Navbar'
import Container from '../../../src/components/layouts/container/Container'

const Body = styled.div`
  background-color: ${(props) => props.theme.colors.bggrey};
  min-height: 100vh;
`

export default function InfoPage() {
  return (
    <>
      <Navbar />
      <Body>
        <Container>Batata2</Container>
      </Body>
    </>
  )
}
