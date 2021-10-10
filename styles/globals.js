import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`



    *, *:before, *:after{

        margin:0;
        padding:0;
        outline:0;

        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;

    }

    body{
        background: #FA4179;
        color: #fff;
        padding: 10px;
    }

    header {
        text-align: center;
    }

    p{
        margin-bottom: 30px;
    }


`;

export default GlobalStyle;