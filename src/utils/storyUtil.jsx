export function getNextStory(storyName){
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
    ],
    foundIndex = StoryArray.findIndex(d=> d===storyName)

    console.log(foundIndex)

    if(foundIndex < StoryArray.length-1){
        return StoryArray[foundIndex+1]
    }
    else{
        return StoryArray[0]
    }
}