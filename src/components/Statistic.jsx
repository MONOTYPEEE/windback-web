import styled from "@emotion/styled"
import { Text20Regular } from "./Texts"

/**
 * Wider Chip(not potato)
 * @param {string} props.title 
 * @param {number} props.value 
 * @param {string} props.valueSuffix 
 * @param {string} props.img 
 * @param {boolean} props.isProfile 
 * @returns 
 */
export default function Statistic({title, value, valueSuffix, img, isProfile}){
    return(
        <ListStyle>
            {img && <ChipImage src={img} circle={isProfile}/>}
            <Text20Regular $noFill>{title}</Text20Regular>
            <Layout/>
            <Text20Regular $color="#ffffff80" $noFill>{value}{valueSuffix}</Text20Regular>
        </ListStyle>
    )
}

const ListStyle = styled.div`
    display: flex;
    gap: 8px;

    width: 100%;

    background: #ffffff1A;
    border: #ffffff1A 1px solid;

    padding: 8px 12px;
    border-radius: 8px;
`

const ChipImage = styled.img`
    width: 24px;
    height: 24px;
    
    object-fit: contain;
    border-radius: ${({circle})=> circle ? '999px' : '0'};
`

const Layout = styled.div`
    flex: 1;
`