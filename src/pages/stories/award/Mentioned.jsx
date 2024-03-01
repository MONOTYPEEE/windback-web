import { Center } from "../../../components/layout/Center";
import { Text24Regular, Text36Bold } from "../../../components/Texts";
import AwardProfile from "../../../components/Awardprofile";
import ChipList from "../../../components/ChipList";

const data = [
    {
        name: '니간우',
        id: '984407929048432701',
        tag: 'kimkw',
        count: 672,
        icon: 'eac8e9a725a38f99dd21120881088ad9'
    },
    {
        name: '건불',
        id: '1117077090894884975',
        tag: 'quokka0119',
        count: 568,
        icon: '60f06d460d779519b5207567b1a6aa38'
    },
    {
        name: '모노타입(popo)',
        id: '383028502456172566',
        tag: 'mntp.kr',
        count: 517,
        icon: 'bdcae0384ed46a14bd3434d7e0406f11'
    }
]

export default function AwardMentioned(){
    return(
        <>
            <Text36Bold>{data[0].name} 따운! 너 나와!</Text36Bold>
            <Center>
                <AwardProfile {...data[0]}/>
                <Text24Regular $align='center'>{data[0].count}회 멘션됨</Text24Regular>
                <ChipList data={data.slice(1)} valueSuffix="회"/>
            </Center>
        </>
    )
}