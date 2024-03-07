import { css } from '@emotion/react'

export const GlobalStyle = css`
    * {
        font-family: 'Twemoji', 'Wanted Sans';
        font-feature-settings: 'cv10' on, 'cv14' on, 'cv16' on, 'cv17' on, 'cv22' on;
        word-break : keep-all;
        word-wrap : break-word;
        margin: 0;
        box-sizing: border-box;
        color: #ffffff;
        font-size: 16px;
    }
    @font-face {
        font-family: 'Wanted Sans';
        src: url('/font/WantedSans.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Twemoji';
        src: url('/font/Twemoji.ttf') format('truetype');
    }
    #root{
        display: flex;
        background-color: #000000;
        height: 100dvh;
        align-items: center;
        justify-content: center;
    }
    svg{
        height: 1.5rem;
        width: 1.5rem;
    }
`