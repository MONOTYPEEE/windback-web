import { Center } from "../../../components/layout/Center";
import { Text24Regular, Text36Bold } from "../../../components/Texts";
import AwardProfile from "../../../components/Awardprofile"
import { Censored } from "../../../components/Styles";

const Data = {
    name: '니간우',
    id: '984407929048432701',
    tag: 'kimkw',
    count: 672,
    icon: 'eac8e9a725a38f99dd21120881088ad9'
}

export default function AwardSex(){
    return(
        <>
            <Text36Bold>큰 소리로 말하지 마</Text36Bold>
            <Center>
                <AwardProfile {...Data}/>
                <Text24Regular $align="center">
                    <Censored>섹스 </Censored>
                    717회 전송
                </Text24Regular>
            </Center>
        </>
    )
}