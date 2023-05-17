import styled from 'styled-components'

import BackgroundImage from '../src/components/layouts/backgroundImage/BackgroundImage'
import Logo from '../src/components/logo/Logo'
import SearchCity from '../src/components/form/input/SearchCity'

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;

  @media (max-width: 500px) {
    min-width: 100%;
  }
`
const StyledInput = styled(SearchCity)`
  width: 100%;
  box-sizing: border-box;
`

const InputContainer = styled.div`
  @media (min-width: 700px) {
    width: 150%;
  }
  z-index: 100;
`

export default function Homepage() {
  return (
    <BackgroundImage>
      <StyledDiv>
        <Logo showImage type="vertical" />
        <InputContainer>
          <StyledInput />
        </InputContainer>
      </StyledDiv>
    </BackgroundImage>
  )
}
