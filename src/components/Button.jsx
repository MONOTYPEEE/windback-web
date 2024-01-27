import styled from '@emotion/styled'

/**
 * a Button Component
 * @param {object} props 
 * @param {React.ReactNode} props.icon
 * @param {string} props.text 
 * @param {'white'|'transparent'} props.text
 * @param {boolean} props.$fill
 * @returns {React.ReactNode}
 */
export default function Button({icon, text, color='white', ...props}){
    if(color === 'white'){
        return(
            <WhiteButton {...props}>
                {icon}
                {text}
            </WhiteButton>
        )
    }
    else if(color === 'transparent'){
        return(
            <TrnasparentButton {...props}>
                {icon}
                {text}
            </TrnasparentButton>
        )
    }
}

const ButtonBase = styled.button`
    display: flex;
    height: 40px;
    padding: 8px 12px;
    gap: 4px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: none;
    font-size: 20px;
    cursor: pointer;
    transition: 250ms all ease-in-out;
    width: ${({$fill})=>$fill && '100%'};

    &:disabled{
        cursor: not-allowed;
    }
`

const WhiteButton = styled(ButtonBase)`
    border: 1px solid rgba(255, 255, 255, 0.10);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.13) 100%);
    color: #FFF;

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
const TrnasparentButton = styled(ButtonBase)`
    background: #ffffff00;
    color: #ffffff80;

    &:hover{
        background: #ffffff19;
        color: #ffffffBF;
    }
    &:active{
        background: #ffffff0D;
        color: #ffffffBF;
    }
    &:disabled{
        color: #ffffff40;
    }
`