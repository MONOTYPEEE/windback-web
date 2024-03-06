import Button from '../../../components/Button'
import { Text36Bold } from '../../../components/Texts'
import { Center } from '../../../components/layout/Center'
import { useContext } from 'react'
import { PageContext } from '../../handler/StoryProvider'
import { getNextStory } from '../../../utils/storyUtil'

export default function PersonalIntro(){
    const PageState = useContext(PageContext)

    return(
        <Center>
            <Text36Bold $align='center'>
                userName님은 얼마나 활동했을까요?
            </Text36Bold>
            <Button text='다음' onClick={()=>PageState.set(getNextStory(PageState.state))}/>
        </Center>
    )
}