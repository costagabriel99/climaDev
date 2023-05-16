import styled from "styled-components"
import BackgroundImage from "../src/components/layouts/backgroundImage/BackgroundImage"
import Logo from "../src/components/logo/Logo"

const StyledDiv = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    min-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 40px;

    @media (max-width: 500px) {
        min-width:100%;
    }
`

const StyledInput = styled.input`
    padding: 10px 20px;
    background-color: ${props => props.theme.colors.grey};
    border: none;
    border-radius: 5px;

`

export default function Homepage() {
    return (
        <BackgroundImage>
            <StyledDiv>
                <Logo showImage type='vertical'/>
                <StyledInput />
            </StyledDiv>
        </BackgroundImage>

    )
}