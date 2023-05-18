import styled from 'styled-components'

import Navbar from '../../../src/components/layouts/navbar/Navbar'
import Container from '../../../src/components/layouts/container/Container'
import ClimaCard from '../../../src/components/layouts/card/Card'

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`

const Body = styled.div`
  background-color: ${(props) => props.theme.colors.bggrey};
  min-height: 100vh;
`
const Content = styled.div`
  padding: 80px 0;
`

const Text = styled.p`
  font-size: 20px;
  padding: 0;
  margin: 0;
`

const CityName = styled.h2`
  font-size: 60px;
  padding: 0;
  margin: 0;
`

export default function InfoPage() {
  return (
    <>
      <Navbar />
      <Body>
        <Container>
          <Content>
            <Text>Previsão do tempo para</Text>
            <CityName>Lavras, MG, Brasil</CityName>
          </Content>
          <CardContainer>
              <ClimaCard />
              <ClimaCard />
              <ClimaCard />
            </CardContainer>
        </Container>
      </Body>
    </>
  )
}
