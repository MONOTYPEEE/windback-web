import AwardProfile from "../../../components/Awardprofile";
import { Center } from "../../../components/layout/Center";
import { Text24Regular, Text36Bold } from "../../../components/Texts";

const Data = {
    name: '니간우',
    id: '984407929048432701',
    tag: 'kimkw',
    count: 672,
    icon: 'eac8e9a725a38f99dd21120881088ad9'
}

export default function AwardHappy(){
    return(
        <>
            <Text36Bold>엌ㅋㅋㅋㅋㅋ</Text36Bold>
            <Center>
                <AwardProfile {...Data}/>
                <Text24Regular $align="center">ㅋㅋㅋ 9283회 ㅋㅋㅋㅋ</Text24Regular>
            </Center>
        </>
    )
}