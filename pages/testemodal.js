import React from "react";
import { render } from "react-dom";
import Modal from "../components/ModalTeste";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Cat, Ghost, IceCream, Planet } from "react-kawaii";
import Button from "../components/ButtonTeste";
import {Helmet} from "react-helmet";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
        background: ${props => props.theme.backgroundColor};

        h2 {
            font-weight: 600;
        }
        background-attachment: fixed;
    }

`;

class TesteModal extends React.Component {
    state = {
        showModal: false
    }

    toggleModal = () => {
       this.setState(prevState => {
        return { showModal: !prevState.showModal };
       });
    };

    render() {
        const theme = {
            backgroundColor: "white",
            accentColor: "#14BD95"
        };

        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Helmet>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600" />
                    </Helmet>
                    <GlobalStyles />
                    {this.state.showModal && (
                        <Modal toggleModal={this.toggleModal}>
                            <div>
                                <Planet size={170} />
                                <h2>Recomendação Comida!</h2>
                                <p>Melhore sua Alimentação, pois seu IMC está dentro de valores normais, porém você possui muita massa gordurosa no corpo.</p>
                            </div>
                            <div>
                                <Cat mood="lovestruck" size={220} />
                                <h2>Recomendação Comida!</h2>
                                <p>Ativar alarme para ser lembrado de Comer Saudável!</p>
                            </div>
                            <div>
                                <Ghost mood="sad" size={180} color="#d7d8e4" />
                                <h2>Recomendação Água!</h2>
                                <p>Beba pelo menos 500ml de Água 5 vezes ao dia!</p>
                            </div>
                            <div>
                                <IceCream mood="shocked" size={240} />
                                <h2>Recomendação Água!</h2>
                                <p>Ativar alarme para ser lembrado de Beber Água!</p>
                            </div>
                        </Modal>
                    )}
                    <Button onClick={this.toggleModal} text="Open Modal" />
                </div>
            </ThemeProvider>
        );
    }
}

// render(<TesteModal />, document.getElementById("root"));
export default TesteModal;




