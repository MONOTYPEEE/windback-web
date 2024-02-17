import { useState } from 'react'
import StoryHandler from './StoryHandler'
import Story from '../../components/Story'
import { createContext } from 'react'
import Button from '../../components/Button'
import { ArrowRight } from 'lucide-react'
import getNextStory from '../../utils/getNextStory'

export const PageContext = createContext()

export default function StoryProvider(){
    const [Page, setPage] = useState('IntroMain')

    return(
        <PageContext.Provider value={{state: Page, set: setPage}}>
            <Story>
                <StoryHandler page={Page}/>
                {
                    !Page.match('Intro')
                    && <Button text='다음' color='transparent' icon={<ArrowRight opacity={0.5}/>} $fill onClick={()=>setPage(getNextStory(Page))}/>
                }
            </Story>
        </PageContext.Provider>
    )
}