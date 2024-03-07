import styled from '@emotion/styled'

/**
 * background of stories
 * @param {React.ReactNode} props.children
 * @returns {React.ReactNode}
 */
export default function Story({children}){
    return(
        <StoryBackground>
            {children}
        </StoryBackground>
    )
}

const StoryBackground = styled.div`
    display: flex;
    width: 100%;
    max-height: 100dvh;
    max-width: 37.5rem;
    aspect-ratio: 2/3;
    padding: 1.5rem;

    gap: 1rem;
    flex-direction: column;
    align-items: flex-start;

    border-radius: 1rem;
    background: linear-gradient(156deg, #1C1E18 0%, #2E4F14 100%);
`