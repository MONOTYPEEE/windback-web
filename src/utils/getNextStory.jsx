export default function getNextStory(storyName){
    const nextStory = {
        'IntroMain': 'PersonalIntro',
        'PersonalIntro': 'PersonalMostActive',
        'PersonalMostActive': 'PersonalStatistic',
        'PersonalStatistic': 'ServerIntro',
        'ServerIntro': 'ServerEOTY',
        'ServerEOTY': 'ServerWOTY',
        'ServerWOTY': 'ServerGOTY',
        'ServerGOTY': 'AwardIntro',
        'AwardIntro': 'AwardMentioned',
        'AwardMentioned': 'AwardSex',
        'AwardSex': 'AwardAbuse',
        'AwardAbuse': 'AwardHappy',
        'AwardHapppy': 'AwardCensor'
    }

    if(nextStory[storyName]){
        return nextStory[storyName]
    }
    else{
        console.error('cannot find storyName')
    }
}