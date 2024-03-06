import styled from '@emotion/styled';
import { Center } from '../../../components/layout/Center';
import { Text24Regular, Text32Bold, Text36Bold } from '../../../components/Texts';
import StatisticList from '../../../components/StatisticList';

const data = [
    {
        img: 'https://cdn.discordapp.com/emojis/1069672112786251888.png',
        title: ':free_tivet_seok:',
        value: 563
    },
    {
        img: 'https://cdn.discordapp.com/emojis/1104399571217559682.png',
        title: ':Gunwu_FU:',
        value: 561
    },
]

export default function ServerEOTY(){
    return(
        <>
            <Text36Bold>Emoji of the Year</Text36Bold>
            <Center>
                <EmojiImage src='https://cdn.discordapp.com/emojis/1069619644098424912.png'/>
                <Text32Bold $align='center'>:tawan_SAD:</Text32Bold>
                <Text24Regular $color='#FFFFFF88' $align='center'>i1rj이 업로드</Text24Regular>
                <Text24Regular $align='center'>716회</Text24Regular>
                <StatisticList data={data} valueSuffix='회'/>
            </Center>
        </>
    )
}

const EmojiImage = styled.img`
    width: 96px;
    height: 96px;
    object-fit: contain;
`