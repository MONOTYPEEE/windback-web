import Story from "../components/Story";
import { Center } from "../components/layout/Center";
import { Text36Bold } from "../components/Texts";
import Button from "../components/Button";
import { Bot } from "lucide-react";

export default function Landing(){
    return(
        <Story>
            <Center>
                <img src="/image/logo_transparent.png" width={100}/>
                <Text36Bold $align="center">WindBack</Text36Bold>
                <Button text="Discord로 로그인" color='white'/>
                <Button text="서버에 봇 추가" icon={<Bot size={20}/>} disabled/>
            </Center>
        </Story>
    )
}