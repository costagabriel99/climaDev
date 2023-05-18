import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment'

import Navbar from '../../../src/components/layouts/navbar/Navbar'
import Container from '../../../src/components/layouts/container/Container'
import ClimaCard from '../../../src/components/layouts/card/Card'
import Footer from '../../../src/components/layouts/footer/Footer'

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`

const Body = styled.div`
  background-color: ${(props) => props.theme.colors.bggrey};
  min-height: calc(100vh -200px);
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
  const [currentWeather, setCurrentWeather] = useState()
  const [futureWeather, setFutureWeather] = useState()

  const router = useRouter()
  const { lat, lon } = router.query // = router.query.lat router.query.lon

  const date0 = futureWeather?.list[0].dt_txt
  const date1 = futureWeather?.list[1].dt_txt
  const formatDate0 = ['Às ', moment(date0).format('HH:mm')]
  const formatDate1 = ['Às ', moment(date1).format('HH:mm')]

  const fetchCurrentInfo = async () => {
    const response = await fetch(`
    https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}&units=metric&lang=pt_br`)
    const json = await response.json()
    setCurrentWeather(json)
  }

  const fetchFutureInfo = async () => {
    const response = await fetch(`
    https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}&units=metric&lang=pt_br`)
    const json = await response.json()
    setFutureWeather(json)
  }

  useEffect(() => {
    if (lat && lon) {
      fetchCurrentInfo()
      fetchFutureInfo()
    }
  }, [lat, lon])

  return (
    <>
      <Navbar />
      <Body>
        <Container>
          <Content>
            <Text>Previsão do tempo para</Text>
            <CityName>
              {currentWeather?.name}, {currentWeather?.sys.country}
            </CityName>
          </Content>
          <CardContainer>
            <ClimaCard
              title="Agora"
              icon={currentWeather?.weather[0].icon}
              description={currentWeather?.weather[0].description}
              temp={currentWeather?.main.temp}
              humidity={currentWeather?.main.humidity}
              min={currentWeather?.main.temp_min}
              max={currentWeather?.main.temp_max}
            />
            <ClimaCard
              title={formatDate0}
              icon={futureWeather?.list[0].weather[0].icon}
              description={futureWeather?.list[0].weather[0].description}
              temp={futureWeather?.list[0].main.temp}
              humidity={futureWeather?.list[0].main.humidity}
              min={futureWeather?.list[0].main.temp_min}
              max={futureWeather?.list[0].main.temp_max}
            />
            <ClimaCard
              title={formatDate1}
              icon={futureWeather?.list[1].weather[0].icon}
              description={futureWeather?.list[1].weather[0].description}
              temp={futureWeather?.list[1].main.temp}
              humidity={futureWeather?.list[1].main.humidity}
              min={futureWeather?.list[1].main.temp_min}
              max={futureWeather?.list[1].main.temp_max}
            />
          </CardContainer>
        </Container>
      </Body>
      <Footer />
    </>
  )
}
