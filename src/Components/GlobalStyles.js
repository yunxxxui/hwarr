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
        width: 100%;
        color: white;
        font: -apple-system, 'SF Pro Display', 'Helvetica Neue',  'Apple SD Gothic Neo', 'Roboto', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        font-size: 16px;
        background-color: black;
    }
`;

export default globalStyles;