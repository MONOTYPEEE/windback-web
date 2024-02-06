import { Text32Bold } from "../../../components/Texts";
import { Center } from "../../../components/layout/Center";
import { ChartByTime, ChartByDay } from "../../../components/Charts";
import Button from "../../../components/Button";

const data = {time: 23, day: '토'}
    ,weekChartData = [
        {
            day: '월',
            count: 8658
        },
        {
            day: '화',
            count: 9235
        },
        {
            day: '수',
            count: 9760
        },
        {
            day: '목',
            count: 11370
        },
        {
            day: '금',
            count: 10540
        },
        {
            day: '토',
            count: 13269
        },
        {
            day: '일',
            count: 12927
        },
    ]
    ,timeChartData = [{value: 11298}, {value: 4768}, {value: 2549}, {value: 2036}, {value: 734}, {value: 260}, {value: 241}, {value: 439}, {value: 1219}, {value: 673}, {value: 1228}, {value: 1314}, {value: 2558}, {value: 3328}, {value: 4670}, {value: 4538}, {value: 4823}, {value: 8437}, {value: 7957}, {value: 8256}, {value: 8500}, {value: 10676}, {value: 9903}, {value: 9430}]

export default function PersonalMostActive(){
    

    return(
        <>
            <Center>
                <ChartByDay data={weekChartData}/>
                <ChartByTime data={timeChartData}/>
                <Text32Bold $align="center">일주일 중 {data.day}요일, {data.time}시에 가장 활동적이었어요</Text32Bold>
            </Center>
            <Button color="transparent" text="다음" $fill/>
        </>
    )
}