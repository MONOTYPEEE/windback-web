import { Text36Bold } from "../../../components/Texts";
import { Center } from "../../../components/layout/Center";
import Button from "../../../components/Button";
import { useContext } from "react";
import { PageContext } from "../../handler/StoryProvider";
import getNextStory from "../../../utils/getNextStory";

export default function AwardIntro(){
    const serverName = 'Acme',
        PageState = useContext(PageContext)

    return(
        <Center>
            <Text36Bold $align='center'>{serverName} 시상식을 시작할게요 🏆</Text36Bold>
            <Button text='다음' onClick={()=>PageState.set(getNextStory(PageState.state))}/>
        </Center>
    )
}