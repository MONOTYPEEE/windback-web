import { Center } from '../../../components/layout/Center';
import Button from  '../../../components/Button';
import { Text36Bold } from '../../../components/Texts';

export default function ServerIntro(){
    return(
        <Center>
            <Text36Bold $align='center'>
                Acme에서 가장 많이 선택받은 것들이에요
            </Text36Bold>
            <Button text='다음'/>
        </Center>
    )
}