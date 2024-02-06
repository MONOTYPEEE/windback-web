import { css } from '@emotion/react'

export const GlobalStyle = css`
    * {
        font-family: 'Wanted Sans';
        font-feature-settings: 'cv10' on, 'cv14' on, 'cv16' on, 'cv17' on, 'cv22' on;
        word-break : keep-all;
        word-wrap : break-word;
        margin: 0;
        box-sizing: border-box;
        color: #ffffff;
    }
    #root{
        display: flex;
        background-color: #000000;
        height: 100dvh;
        align-items: center;
        justify-content: center;
    }

    @font-face {
        font-family: 'Wanted Sans';
        src: url('/font/WantedSans.woff2') format('woff2');
    }
`