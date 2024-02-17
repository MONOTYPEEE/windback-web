import { Center } from '../../../components/layout/Center';
import Button from  '../../../components/Button';
import { Text36Bold } from '../../../components/Texts';
import { PageContext } from '../../handler/StoryProvider';
import { useContext } from 'react';
import getNextStory from '../../../utils/getNextStory';

export default function ServerIntro(){
    const PageState = useContext(PageContext)
    
    return(
        <Center>
            <Text36Bold $align='center'>
                Acme에서 가장 많이 선택받은 것들이에요
            </Text36Bold>
            <Button text='다음' onClick={()=> PageState.set(getNextStory(PageState.state))}/>
        </Center>
    )
}