import styled from "styled-components"

const Img = styled.img`

`

const VerticalH1 = styled.h1`
    font-size: 80px;
    color: ${({theme}) => theme.colors.black};
    line-height: 70px;
    margin-left: 150px;
    margin-top: -80px;
`

const PrimaryColor = styled.span`
    color: ${({theme}) => theme.colors.primary};
`
const HorizontalH1 = styled.h1`

`

export default function Logo({ showImage, type }) {
    return (
        <div>
            {showImage && <Img src="/woman.svg" /> }
            {type === 'vertical' && 
                <VerticalH1>
                    Clima <br/> <PrimaryColor>DEV</PrimaryColor>
                </VerticalH1>}
        </div>
    )
}