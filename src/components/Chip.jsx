import styled from "@emotion/styled"
import { Text20Regular } from "./Texts"

/**
 * Chip(not potato)
 * @param {string} props.title 
 * @param {number} props.value 
 * @param {string} props.valueSuffix 
 * @param {string} props.img 
 * @param {boolean} props.isProfile 
 * @returns 
 */
export default function Chip({title, value, valueSuffix, img, isProfile}){
    return(
        <ChipStyle>
            {img && <ChipImage src={img} circle={isProfile}/>}
            <Text20Regular $noFill>{title}</Text20Regular>
            <Text20Regular $color="#ffffff80" $noFill>{value}{valueSuffix}</Text20Regular>
        </ChipStyle>
    )
}

const ChipStyle = styled.div`
    display: flex;
    gap: 0.5rem;

    background: #ffffff1A;
    border: #ffffff1A 1px solid;

    padding: 0.5rem 0.75rem;
    border-radius: 888rem;
`

const ChipImage = styled.img`
    width: 1.5rem;
    height: 1.5rem;

    border-radius: ${({circle})=> circle ? '999rem' : '0'}
`