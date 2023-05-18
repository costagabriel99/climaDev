import styled from 'styled-components'

const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  text-align: center;
  padding: 30px 0;
  font-weight: 400;
  font-size: 20px;
`

export default function Footer() {
  return (
    <StyledFooter>
      Criado por{' '}
      <a target="_blank" href="https://www.linkedin.com/in/costagabriel-99/" rel="noreferrer">
        Gabriel Costa
      </a>{' '}
      durante o <b>DevChallenge - SejaDev</b>
    </StyledFooter>
  )
}
