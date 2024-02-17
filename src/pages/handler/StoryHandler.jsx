import IntroMain from '../stories/IntroMain'
import PersonalIntro from '../stories/personal/Intro'
import PersonalMostActive from '../stories/personal/MostActive'
import ServerIntro from '../stories/server/Intro'
import ServerEOTY from '../stories/server/EOTY'
import ServerWOTY from '../stories/server/WOTY'
import ServerGOTY from '../stories/server/GOTY'
import AwardIntro from '../stories/award/Intro'
import AwardMentioned from '../stories/award/Mentioned'
import AwardSex from '../stories/award/Sex'
import AwardAbuse from '../stories/award/Abuse'
import AwardHappy from '../stories/award/Happy'
import AwardCensor from '../stories/award/Censor'

export default function StoryHandler({ page }){
    const components = {
        'IntroMain': ()=> IntroMain,
        'PersonalIntro': ()=> PersonalIntro,
        'PersonalMostActive': ()=> PersonalMostActive,
        'ServerIntro': ()=> ServerIntro,
        'ServerEOTY': ()=> ServerEOTY,
        'ServerWOTY': ()=> ServerWOTY,
        'ServerGOTY': ()=> ServerGOTY,
        'AwardIntro': ()=> AwardIntro,
        'AwardMentioned': ()=> AwardMentioned,
        'AwardSex': ()=> AwardSex,
        'AwardAbuse': ()=> AwardAbuse,
        'AwardHappy': ()=> AwardHappy,
        'AwardCensor': ()=> AwardCensor,
    }
    , Selected = components[page]()

    return <Selected/>
}