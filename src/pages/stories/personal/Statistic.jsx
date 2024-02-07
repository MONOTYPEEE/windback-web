import styled from "@emotion/styled";
import { Text20Regular, Text28Bold, Text32Bold, Text36Bold } from "../../../components/Texts";
import { Center } from "../../../components/layout/Center";

const data = {
    message: 10622,
    media: 886,
    url: 288,
}

export default function PersonalStatistic(){
    return(
        <Center>
            <Text32Bold $align="center">서버에서</Text32Bold>
                <StatisticItem emoji="💬" value={data.message} title="메시지"/>
                <StatisticItem emoji="🔗" value={data.url} title="링크"/>
                <StatisticItem emoji="🖼️" value={data.media} title="미디어"/>
            <Text32Bold $align="center">만큼 보냈어요</Text32Bold>
        </Center>
    )
}

function StatisticItem({emoji, value, title}){
    return(
        <ItemBackground>
            <Text36Bold>{emoji}</Text36Bold>
            <Text28Bold $color="#ACE54F">{value}개</Text28Bold>
            <Text20Regular $color="#FFFFFF80">{title}</Text20Regular>
        </ItemBackground>
    )
}

const ItemBackground = styled.div`
    display: flex;
    padding: 8px 16px;
    gap: 8px;
    align-items: center;

    font-size: 28px;

    background: #BBBBBB1A;
    
    border-radius: 888px;
`