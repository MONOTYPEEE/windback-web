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
export const Text36Bold = styled.div`
    font-size: 36px;
    font-weight: 700;
    width: ${({$noFill})=> !$noFill && '100%'};
    text-align: ${({$align})=>$align};
    color: ${({$color})=> $color ? $color : null};
`
export const Text32Bold = styled.div`
    font-size: 32px;
    font-weight: 700;
    width: ${({$noFill})=> !$noFill && '100%'};
    text-align: ${({$align})=>$align};
    color: ${({$color})=> $color ? $color : null};
`
export const Text28Bold = styled.div`
    font-size: 28px;
    font-weight: 700;
    width: ${({$noFill})=> !$noFill && '100%'};
    text-align: ${({$align})=>$align};
    color: ${({$color})=> $color ? $color : null};
`
export const Text24Regular = styled.div`
    font-size: 24px;
    font-weight: 500;
    width: ${({$noFill})=> !$noFill && '100%'};
    text-align: ${({$align})=>$align};
    color: ${({$color})=> $color ? $color : null};
`
export const Text20Regular = styled.div`
    font-size: 20px;
    font-weight: 500;
    width: ${({$noFill})=> !$noFill && '100%'};
    text-align: ${({$align})=>$align};
    color: ${({$color})=> $color ? $color : null};
`
export const Text16Regular = styled.div`
    font-size: 16px;
    font-weight: 500;
    width: ${({$noFill})=> !$noFill && '100%'};
    text-align: ${({$align})=>$align};
    color: ${({$color})=> $color ? $color : null};
`