import styled from "styled-components"

const StyledInput = styled.input`
    padding: 20px;
    background-color: ${props => props.theme.colors.grey};
    border: none;
    outline: 0;
    border-radius: 10px;
    color: #9C9C9C;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
`

export default function Input(props) {
    return <StyledInput {...props}/>
}