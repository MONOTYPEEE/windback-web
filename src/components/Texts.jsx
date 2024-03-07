import styled from '@emotion/styled'

/**
 * a Text Styles
 * @param {object} props 
 * @param {React.ReactNode} props.children
 * @param {string} props.text
 * @param {boolean} props.$noFill
 * @param {string} props.$color
 * @param {'start'|'end'|'left'|'right'|'center'|'justify'} props.$align
 * @returns {React.ReactNode}
 */
export const Text48Black = styled.div`
    font-size: 3rem;
    font-weight: 900;
    width: ${({$noFill})=> !$noFill && '100%'};
    text-align: ${({$align})=>$align};
    color: ${({$color})=> $color ? $color : null};
`
export const Text36Bold = styled.div`
    font-size: 2.25rem;
    font-weight: 700;
    width: ${({$noFill})=> !$noFill && '100%'};
    text-align: ${({$align})=>$align};
    color: ${({$color})=> $color ? $color : null};
`
export const Text32Bold = styled.div`
    font-size: 2rem;
    font-weight: 700;
    width: ${({$noFill})=> !$noFill && '100%'};
    text-align: ${({$align})=>$align};
    color: ${({$color})=> $color ? $color : null};
`
export const Text28Bold = styled.div`
    font-size: 1.75rem;
    font-weight: 700;
    width: ${({$noFill})=> !$noFill && '100%'};
    text-align: ${({$align})=>$align};
    color: ${({$color})=> $color ? $color : null};
`
export const Text24Regular = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    width: ${({$noFill})=> !$noFill && '100%'};
    text-align: ${({$align})=>$align};
    color: ${({$color})=> $color ? $color : null};
`
export const Text20Regular = styled.div`
    font-size: 1.25rem;
    font-weight: 500;
    width: ${({$noFill})=> !$noFill && '100%'};
    text-align: ${({$align})=>$align};
    color: ${({$color})=> $color ? $color : null};
`
export const Text16Regular = styled.div`
    font-size: 1rem;
    font-weight: 500;
    width: ${({$noFill})=> !$noFill && '100%'};
    text-align: ${({$align})=>$align};
    color: ${({$color})=> $color ? $color : null};
`