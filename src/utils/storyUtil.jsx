const StoryArray = [
    'IntroMain',
    'PersonalIntro',
    'PersonalMostActive',
    'PersonalStatistic',
    'ServerIntro',
    'ServerEOTY',
    'ServerWOTY',
    'ServerGOTY',
    'AwardIntro',
    'AwardMentioned',
    'AwardSex',
    'AwardAbuse',
    'AwardHappy',
]

export function getNextStory(storyName){
    const foundIndex = StoryArray.findIndex(d=> d === storyName)

    if(foundIndex !== -1){
        return StoryArray[foundIndex+1]
    }
    else{
        console.error('Cannot find story ' + storyName)
        return 'Error'
    }
}

export function getPreviousStory(storyName) {
    const foundIndex = StoryArray.findIndex(d => d === storyName)

    if (foundIndex !== -1) {
        return foundIndex === 0 ? 'Error' : StoryArray[foundIndex - 1]
    } else {
        console.error('Cannot find story ' + storyName)
        return 'Error'
    }
}