import styled from "styled-components"
import BackgroundImageWithChildren from "../src/components/layouts/backgroundImageWithChildren/BackgroundImageWithChildren"

const StyledDiv = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    min-width: 500px;

    @media (max-width: 500px) {
        min-width:100%;
    }
`

export default function Homepage() {
    return (
        <BackgroundImageWithChildren>
            <StyledDiv>
                HomePage 123
            </StyledDiv>
        </BackgroundImageWithChildren>

    )
}