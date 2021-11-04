import styled from "styled-components";

const borderWith = 120;
const maxWidth = 680;

export const OverlayWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background: rgba(34, 47, 62, 0.9);
  color: white;
`;

export const ModalClose = styled.div`
  svg {
    position: fixed;
    top: 16px;
    right: 26px;
    width: 34px;
    height: 34px;
    cursor: pointer;
    z-index: 4;

    @media only screen and (max-width: 768px) {
      right: 50%;
      transform: translateX(50%);
    }
  }
`;

export const ModalNav = styled.div`
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    z-index: 3;
  }

  svg {
    position: absolute;
    top: 340px;
    width: 34px;
    height: 34px;
    font-size: 32px;
    text-align: center;
    line-height: 64px;
    cursor: pointer;
    z-index: 3;

    @media only screen and (max-width: 768px) {
      background: rgba(0, 0, 0, 0.7);
      border-radius: 50%;
    }
  }

  svg:first-child {
    left: 300px;

    @media only screen and (max-width: 1300px) {
      left: 16px;
    }
  }
  svg:last-child {
    right: 300px;

    @media only screen and (max-width: 1300px) {
      right: 16px;
    }
  }
`;

export const ModalCardWrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const ModalCard = styled.div`
  width: 90%;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  max-width: 600px;
  background: ${props => props.theme.accentColor};
  margin: 80px auto;
  padding: 0 ${borderWith}px;
  border-radius: 20px;

  @media only screen and (max-width: 680px) {
    padding: 0 40px;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  height: 100%;
  min-height: 510px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.backgroundColor};
  text-align: center;
  line-height: 1.5;
  color: #222f3e;
  z-index: 2;
  font-size: 1em;


  svg {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .react-icons{
      margin-top: 30px;
  }

  a {
      color: #000 !important;
      text-decoration: none;
  }

  a:hover {
    color: #14BD95 !important;
  }


  h2,
  p {
    margin: 0;
  }

  h2 {
    font-size: 25px;
  }

  p {
    font-size: 1em;
  }

  header {
    margin-bottom: 30px;
    font-size: 1.2em;
  }

  .form-section{
    padding-top: 30px;
    font-size: 0.9em;
  }

  .form-section .form-group {
    margin-bottom: 10px;
  }

  .form-section label{
    font-weight:bold;
  }

  .form-section input[type=text]{
    width: 100px;
    padding: 5px 0;
    padding-left: 5px;
  }

  @media only screen and (max-width: 680px) {
    font-size: 0.9em;
  }


`;

export const BorderLeftEl = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  width: ${borderWith}px;

  @media only screen and (max-width: 680px) {
    left: -40px;
  }

`;

export const BorderRightEl = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  width: ${borderWith}px;

  @media only screen and (max-width: 680px) {
    right: -40px;
  }
`;


export const Planet = styled.div`
  font-size: 0.5em !important;


  #kawaii-planet__shape {
    fill: red !important;
    background: red !important;
    width: 10px !important;
  }
`;
