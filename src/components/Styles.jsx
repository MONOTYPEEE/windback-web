import styled from "@emotion/styled"

export const Censored = styled.span`
    filter: blur(4px);
    transition: 50ms ease-in-out all;

    &:hover{
        filter: none;
    }
`