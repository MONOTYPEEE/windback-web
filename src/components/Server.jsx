import styled from "@emotion/styled"
import { Text20Regular } from "./Texts"
import { ChevronRight } from "lucide-react"

/**
 * show name, icon of server
 * @param {string} props.img
 * @param {string} props.name 
 * @returns 
 */
export default function Server({img, name}){
    return(
        <ServerBackground>
            <ServerIcon src={img}/>
            <Text20Regular>{name}</Text20Regular>
            <ChevronRight color="#FFFFFF80"/>
        </ServerBackground>
    )
}

const ServerBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: #ffffff1A;

    width: 100%;
    border-radius: 0.5rem;
    padding: 0.5rem;
    gap: 0.5rem;

    transition: 250ms all ease-in-out;

    cursor: pointer;

    &:hover{
        background: #ffffff33;
    }
`
const ServerIcon = styled.img`
    border-radius: 888rem;
    width: 3rem;
    height: 3rem;
`