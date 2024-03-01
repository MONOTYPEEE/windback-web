import { Center } from "../../../components/layout/Center";
import StatisticList from "../../../components/StatisticList";
import { Text36Bold, Text48Black, Text24Regular } from "../../../components/Texts";

const data = [
    {
        title: '근데',
        value: 950
    },
    {
        title: 'ㅋㅋ',
        value: 867
    },
]

export default function ServerWOTY(){
    return(
        <>
            <Text36Bold>Keyword of the Year</Text36Bold>
            <Center>
                <Text48Black $align='center'>거짓말이야ᅲᅲᅲ스타필드는</Text48Black>
                <Text24Regular $align='center'>1134회</Text24Regular>
                <StatisticList data={data} valueSuffix="회"/>
            </Center>
        </>
    )
}