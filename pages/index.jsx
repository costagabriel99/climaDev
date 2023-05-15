import styled from "styled-components"
import BackgroundImageWithChildren from "../src/components/layouts/backgroundImageWithChildren/BackgroundImageWithChildren"

const StyledDiv = styled.div`
    background-color: ${({theme}) => theme.colors.white};
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