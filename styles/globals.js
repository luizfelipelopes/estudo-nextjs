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

    .modal {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all 0.3s ease-in-out;
        pointer-events: none;
    }

    .modal.show{
        opacity: 1;
        pointer-events: visible;
    }

    .modal-content {
        width: 90%;
        background-color: #fff;
        color: #333;
        transform: translateY(-200px);
        transition: all 0.3s ease-in-out;
    }

    .modal.show .modal-content {
        transform: translateY(0);
    }

    .modal-header, .modal-footer {
        padding: 10px;
    }

    .modal-title {
        margin: 0;
        color: #333;
    }

    .modal-body {
        padding: 10px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }

    .modal .sections {
        // background: red;
        display: flex;
        justify-content: space-between;
    }

    .modal header {
        text-align: center;
    }

    .modal section {
        width: 50%;
        padding: 0 30px;
    }


`;

export default GlobalStyle;