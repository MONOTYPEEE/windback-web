import Button from "../../components/Button";
import Server from "../../components/Server";
import Story from "../../components/Story";
import { Text36Bold } from "../../components/Texts";
import { Center } from "../../components/layout/Center";

/**
 * Discord Server Select Page
 */
export default function ServerSelect(){
    const serverData = [
        {icon: '/image/demo.png', name: 'servername', id: '0923458091728945'},
        {icon: '/image/demo.png', name: 'electrik people', id:'2093548234023'}
    ]

    return(
        <Story>
            <Center>
                <Text36Bold $align='center'>서버 선택</Text36Bold>
                {serverData.map(d=>
                    <Server img={d.icon} name={d.name} key={d.id}/> 
                )}
                <Button color='transparent' text='로그아웃' />
            </Center>
        </Story>
    )
}