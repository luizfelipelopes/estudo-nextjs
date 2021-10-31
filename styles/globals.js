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
        font-family: 'Open Sans', sans-serif !important;
        background: #14BD95 !important;
        color: #fff !important;
        padding: 10px !important;
    }

    header {
        text-align: center !important;
    }

    h1{
        margin-bottom: 30px;
    }

    p{
        margin-bottom: 30px;
    }

    a{
        color #fff !important;
        margin: 0 5px 30px 5px !important;
    }

    // .modal {
    //     position: fixed;
    //     left: 0;
    //     top: 0;
    //     right: 0;
    //     bottom: 0;
    //     // height: 200px;
    //     background-color: rgba(0,0,0,0.5);
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     opacity: 0;
    //     transition: all 0.3s ease-in-out;
    //     pointer-events: none;
    //     // overflow-y: auto;
    // }

    // .modal.show{
    //     opacity: 1;
    //     pointer-events: visible;
    // }

    // .modal-content {
    //     width: 90%;
    //     height: 620px;
    //     overflow-y: auto;
    //     background-color: #fff;
    //     color: #333;
    //     transform: translateY(-200px);
    //     transition: all 0.3s ease-in-out;
    // }

    // .modal.show .modal-content {
    //     transform: translateY(0);
    // }

    // .modal-header, .modal-footer {
    //     padding: 10px;
    // }

    // .modal-title {
    //     margin: 0;
    //     color: #333;
    // }

    // .modal-body {
    //     padding: 10px;
    //     border-top: 1px solid #eee;
    //     border-bottom: 1px solid #eee;
    // }

    // .modal .sections {
    //     // background: red;
    //     display: flex;
    //     justify-content: space-between;
    //     flex-wrap: wrap;
    // }

    // .modal .sections a{
    //     color: inherit;
    // }

    // .modal header {
    //     font-weight: bold;
    //     text-align: center;
    // }

    // .modal section {
    //     width: 50%;
    //     padding: 0 30px;
    //     // margin-right: 5px;
    //     // background: red;
    // }

    // .modal section header {
    //     font-weight: normal;
    //     min-height: 150px;
    //     text-align: left;
    // }

    // .modal section h3 {
    //     margin-bottom: 30px;
    // }

    // .modal section .form-group label{
    //     font-weight:bold;
    // }

    // @media(max-width: 768px){
    //     .modal section {
    //         text-align: center;
    //         width: 100%;
    //         // padding: 0 30px;
    //     }

    //     .modal section header {
    //         text-align: center;
    //     }

    //     .modal section .form-group input{
    //         text-align:center;
    //     }

    //     .modal .modal-footer{
    //         text-align: center;
    //     }
    // }


`;

export default GlobalStyle;