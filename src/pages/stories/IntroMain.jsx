import { ArrowRight } from "lucide-react";
import Button from "../../components/Button";
import { Text16Regular, Text36Bold } from "../../components/Texts";
import { Center } from "../../components/layout/Center";

export default function IntroMain(){
    const servername = '놀이터'
    return(
        <Center>
            <Text36Bold>{servername} 연말결산</Text36Bold>
            <Text16Regular>by WindBack</Text16Regular>
            <Button icon={<ArrowRight size={20}/>} text="다음"/>
        </Center>
    )
}
