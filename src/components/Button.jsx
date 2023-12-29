import styled from '@emotion/styled'

/**
 * a Button Component
 * @param {object} props 
 * @param {React.ReactNode} props.icon
 * @param {string} props.text 
 * @returns {React.ReactNode}
 */
export default function Button({icon, text,...props}){
    return(
        <StyledButton {...props}>
            {icon}
            {text}
        </StyledButton>
    )
}


const StyledButton = styled.button`
    display: flex;
    height: 40px;
    padding: 8px 12px;

    gap: 4px;
    justify-content: center;
    align-items: center;

    border: 1px solid rgba(255, 255, 255, 0.10);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.13) 100%);
    border-radius: 8px;
    
    color: #FFF;
    font-size: 20px;

    transition: 250ms all ease-in-out;

    &:hover{
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.15) 100%);
    }
    &:active{
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.10) 100%);
        color: rgba(255, 255, 255, 0.75)
    }
    &:disabled{
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.10) 100%);
        color: rgba(255, 255, 255, 0.50);
    }
`