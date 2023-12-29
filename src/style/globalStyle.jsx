import { css } from '@emotion/react'

export const GlobalStyle = css`
    * {
        font-family: 'Wanted Sans';
        font-feature-settings: 'cv10' on, 'cv14' on, 'cv16' on, 'cv17' on, 'cv22' on;
        margin: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'Wanted Sans';
        src: url('/font/WantedSans.woff2') format('woff2');
    }
`