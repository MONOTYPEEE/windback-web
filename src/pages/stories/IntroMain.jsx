import { ArrowRight } from "lucide-react";
import Button from "../../components/Button";
import { Text16Regular, Text20Regular, Text36Bold } from "../../components/Texts";
import { Center } from "../../components/layout/Center";
import styled from "@emotion/styled";

export default function IntroMain(){
    const servername = '놀이터'
    return(
        <Center>
            <DuoIcons server="/image/demo.png" profile="/image/demo.png"/>
            <Text36Bold $align='center'>{servername} 연말결산</Text36Bold>
            <Text16Regular $align='center' $color='#FFFFFF88'>by WindBack</Text16Regular>
            <Text20Regular $align='center'>userName님의 올 해 돌아보기</Text20Regular>
            <Button icon={<ArrowRight size={20}/>} text="다음"/>
        </Center>
    )
}

function DuoIcons({server, profile}){
    return(
        <div>
            <ServerIcon src={server}/>
            <UserProfile src={profile}/>
        </div>
    )
}

const ServerIcon = styled.img`
    height: 96px;
    width: 96px;

    border-radius: 88px;

    clip-path: url('/image/Subtract.svg#shape');
`

const UserProfile = styled.img`
    height: 48px;
    width: 48px;

    margin-left: -24px;

    border-radius: 88px;
`