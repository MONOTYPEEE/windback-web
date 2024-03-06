import styled from "@emotion/styled"
import { Text24Regular, Text32Bold } from "./Texts"

export default function AwardProfile({icon, name, tag, id}){
    return(
        <>
            <LargeProfile src={`https://cdn.discordapp.com/avatars/${id}/${icon}.png?size=256`}/>
            <Text32Bold $align='center'>{name}</Text32Bold>
            <Text24Regular $align='center' $color='#FFFFFF88'>{tag}</Text24Regular>
        </>
    )
}

const LargeProfile = styled.img`
    height: 160px;
    width: 160px;

    border-radius: 888px;
`