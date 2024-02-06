import { ArrowRight } from "lucide-react";
import Button from "../../components/Button";
import { Text16Regular, Text20Regular, Text36Bold } from "../../components/Texts";
import { Center } from "../../components/layout/Center";
import styled from "@emotion/styled";

export default function IntroMain(){
    const servername = '놀이터'
    return(
        <Center>
            <ServerIcon src="/image/demo.png"/>
            <Text36Bold $align='center'>{servername} 연말결산</Text36Bold>
            <Text16Regular $align='center' $color='#FFFFFF88'>by WindBack</Text16Regular>
            <Text20Regular $align='center'>userName님의 올 해 돌아보기</Text20Regular>
            <Button icon={<ArrowRight size={20}/>} text="다음"/>
        </Center>
    )
}

const ServerIcon = styled.img`
    width: 96px;
    height: 96px;

    border-radius: 99px;
`