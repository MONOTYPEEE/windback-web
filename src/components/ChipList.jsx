import styled from "@emotion/styled"
import Chip from "./Chip"

export default function ChipList({data, valueSuffix = '', isProfile}){
    return(
        <Container>
            {data.map(d=> <Chip key={d.name+d.count} isProfile={isProfile} title={d.name} value={d.count} valueSuffix={valueSuffix} img={isProfile && `https://cdn.discordapp.com/avatars/${d.id}/${d.icon}.png?size=128`}/>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    width: 100%;
`