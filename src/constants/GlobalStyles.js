import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --color-1: rgba(91, 155, 213, 1);
        --color-2: rgba(230, 230, 230, 1);
        --color-3: rgba(68, 68, 68, 1);
        --color-4: rgba(255, 255, 255, 1);
        --color-5: rgba(0, 147, 253, 1);
        --color-6: rgba(254, 0, 55, 1);
        --color-7: rgba(20,20,20,1);

        --border-radius-1: 7px;
        --border-radius-2: 15px;

        --padding-1: 5px;
        --padding-2: 13px;
        --margin: 15px;
        --shadow-width-inset: 10px;
        --shadow-width-outset: 15px;

        --gap-1: 0.5rem;
        --gap-2: 1.1rem;

        --transition: 250ms;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        width: 100vw;
        height: 100vh;
        overflow: hidden;

        #root {
            width: 100%;
            height: 100%;
        }
    }
`

export default GlobalStyles
