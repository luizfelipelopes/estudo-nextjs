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
        font-family: 'Open Sans', sans-serif;
        background: #14BD95;
        color: #fff;
        padding: 10px;
    }

    header {
        text-align: center;
    }

    h1{
        margin-bottom: 30px;
    }

    p{
        margin-bottom: 30px;
    }

    a{
        color #fff;
        margin: 0 5px 30px 5px;
    }


`;

export default GlobalStyle;