import { useState } from 'react'
import StoryHandler from './StoryHandler'
import Story from '../../components/Story'
import { createContext } from 'react'
import Button from '../../components/Button'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { getNextStory, getPreviousStory } from '../../utils/storyUtil'
import styled from '@emotion/styled'

export const PageContext = createContext()

export default function StoryProvider(){
    const [Page, setPage] = useState('IntroMain')

    function goPrevious(){
        setPage(getPreviousStory(Page))
    }

    function goNext(){
        setPage(getNextStory(Page))
    }

    return(
        <PageContext.Provider value={{state: Page, set: setPage}}>
            <Story>
                <StoryHandler page={Page}/>
                {!Page.match('Intro') &&
                    <ButtonContainer>
                        <Button text='이전' color='transparent' icon={<ArrowLeft opacity={0.5}/>} $fill onClick={goPrevious}/>
                        <Button text='다음' color='transparent' icon={<ArrowRight opacity={0.5}/>} $fill onClick={goNext}/>
                    </ButtonContainer>
                }
            </Story>
        </PageContext.Provider>
    )
}

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
`