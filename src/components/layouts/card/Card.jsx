import styled from 'styled-components'

const StyledClimaCard = styled.div`
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 300px;
  padding: 15px;
`

const Title = styled.h6`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  margin: 0px;
  padding: 0px;
`
const BasicInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BasicInfoImg = styled.img`
  width: 100px;
  height: 100px;
`

const BasicInfoText = styled.div`
  flex: 1;
  text-align: center;
`

const InfoLine = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 0 20px;
`

const InfoTemperature = styled.span`
  font-size: 20px;
  font-weight: 700;

  ${props => props.blue && 'color: #00C9F5'}
  ${props => props.red && 'color: #FF0000'}
`

export default function ClimaCard() {
  return (
    <StyledClimaCard>
      <Title>Title</Title>
      <BasicInfo>
        <BasicInfoImg src="http://openweathermap.org/img/wn/02d@2x.png" />
        <BasicInfoText>Algumas Nuvens</BasicInfoText>
      </BasicInfo>
      <InfoLine>
        Temperatura<InfoTemperature>29°C</InfoTemperature>
      </InfoLine>
      <InfoLine>
        Sensação<InfoTemperature>29°C</InfoTemperature>
      </InfoLine>
      <InfoLine>
        Mínima<InfoTemperature blue>29°C</InfoTemperature>
      </InfoLine>
      <InfoLine>
        Máxima<InfoTemperature red>29°C</InfoTemperature>
      </InfoLine>
    </StyledClimaCard>
  )
}
