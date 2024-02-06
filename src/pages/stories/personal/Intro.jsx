import Button from '../../../components/Button'
import { Text36Bold } from '../../../components/Texts'
import { Center } from '../../../components/layout/Center'

export default function PersonalIntro(){
    return(
        <Center>
            <Text36Bold $align='center'>
                userName님은 얼마나 활동했을까요?
            </Text36Bold>
            <Button text='다음'/>
        </Center>
    )
}