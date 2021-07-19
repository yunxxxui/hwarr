import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const globalStyles = createGlobalStyle`
    ${reset};

    a{
        text-decoration: none;
        color: inherit;
    }
    *{  
        box-sizing: border-box;
    }
    body {
        overflow-x: hidden;
        overflow-y: scroll;
        width: 100%;
        color: white;
        font: -apple-system,'SF Pro Display','Spoqa Han Sans Neo', 'Helvetica Neue',  'Apple SD Gothic Neo', 'Roboto', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        font-size: 16px;
        line-height: 1.7;
        background-color: black;
    }
`;

export default globalStyles;