import AwardProfile from "../../../components/Awardprofile";
import { Center } from "../../../components/layout/Center";
import { Text16Regular, Text24Regular, Text36Bold } from "../../../components/Texts";
import ChipList from "../../../components/ChipList"
import { Censored } from "../../../components/Styles"

const Data = {
    name: '니간우',
    id: '984407929048432701',
    tag: 'kimkw',
    count: 672,
    icon: 'eac8e9a725a38f99dd21120881088ad9',
    censors:[
        {
            name: 'ㅅㅂ',
            count: 2392
        },
        {
            name: 'ㅂㅅ',
            count: 1999
        },
        {
            name: '좆',
            count: 1828
        }
    ]
}

export default function AwardAbuse(){
    return(
        <>
            <Text36Bold>욕하지 마 한국말 다 알아</Text36Bold>
            <Center>
                <AwardProfile {...Data}/>
                <Text24Regular $align="center">욕설 2934회 전송</Text24Regular>
                <Text16Regular $align="center">목록</Text16Regular>
                <Censored>
                <ChipList data={Data.censors} valueSuffix="회"/>
                </Censored>
            </Center>
        </>
    )
}