import styled from "@emotion/styled"
import Statistic from "./Statistic"

export default function StatisticList({data, valueSuffix = '', isProfile = false}){
    return(
        <Lister>
            {data.map(d => <Statistic key={d.img} title={d.title} value={d.value} valueSuffix={valueSuffix} img={d.img} isProfile={isProfile}/> )}
        </Lister>
    )
}

const Lister = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 100%;
`