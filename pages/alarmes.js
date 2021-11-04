import React from "react";
import { useState } from 'react';
import GlobalStyle  from "../styles/globals";
import Link from 'next/link';
import FormAlarme from "../components/FormAlarme";
import Modal from '../components/ModalTeste';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import { Cat, Ghost, IceCream, Mug, Planet } from "react-kawaii";
import { FcAlarmClock } from "react-icons/fc";
import {FormsAlarme} from "../components/FormAlarme/styles";

function Alarmes (props)
{
    const inputs = {};
    const [input, setInput] = useState({});
    const [state, setState] = useState({showModal: false});

    let toggleModal = () => {

        setState({ showModal: !state.showModal });
    };

    let handleSubmit = async (event) => {

        event.preventDefault();
        const total = event.target.elements.length;

        for(let i = 0; i < total; i++){

            let target = event.target.elements[i];

            if((target.type === 'checkbox' || target.type === 'radio') && !target.checked){
                continue;
            }

            if(target.type !== 'submit'){
                let value = target.value;
                let name = target.name;
                inputs[name] = value;
            }

        }

        recoverIMC();


    }

        const recoverIMC = async () => {

            let imc = Number(inputs.peso)/(Number(inputs.altura)*Number(inputs.altura));
            inputs['imc'] = imc.toFixed(2);
            setInput(inputs);
            console.log(inputs);

        }

        const theme = {
            backgroundColor: "white",
            accentColor: "#14BD95"
        };

        return (

            <ThemeProvider theme={theme}>

                <div>

                    <Helmet>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" />
                    </Helmet>
                    <GlobalStyle />

                    <header>
                        <h1>Alarmes</h1>
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/frequencia-alimentar"><a>Frequência Alimentar</a></Link>
                        <Link href="/calendario"><a>Calendário Saudável</a></Link>
                    </header>

                    {state.showModal && (

                    <Modal toggleModal={toggleModal} >

                        <div>
                            <header>
                                <p><strong>IMC:</strong> {input.imc}</p>
                                <p><strong>Ingestão de Água:</strong> 2310</p>
                            </header>

                            <Planet size={170} />
                            <h3>Recomendação Comida</h3>
                            <p>Melhore sua Alimentação, pois seu IMC está dentro de valores normais, porém você possui muita massa gordurosa no corpo.</p>

                        </div>
                        <div>
                            <FcAlarmClock size={70} />
                            <h3>Recomendação Comida</h3>
                            <p>Ativar alarme para ser lembrado de Comer Saudável</p>

                            <div className="form-section">

                                    <div className="form-group">
                                        <label htmlFor="alarmComida1">Alarme 1: </label>
                                        <input id="alarmComida1" type="text" name="alarmComida1" value="7:00" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="alarmComida2">Alarme 2: </label>
                                        <input id="alarmComida2" type="text" name="alarmComida2" value="9:00" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="alarmComida3">Alarme 3: </label>
                                        <input id="alarmComida3" type="text" name="alarmComida3" value="13:00" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="alarmComida4">Alarme 4: </label>
                                        <input id="alarmComida4" type="text" name="alarmComida4" value="15:00" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="alarmComida5">Alarme 5: </label>
                                        <input id="alarmComida5" type="text" name="alarmComida5" value="18:00" />
                                    </div>
                                    <a href="#"><p>Adicionar Mais Alarmes</p></a>
                                    </div>

                        </div>

                        <div>
                            <header>
                                <p><strong>IMC:</strong> 23,1</p>
                                <p><strong>Ingestão de Água:</strong> 2310</p>
                            </header>

                            <Mug mood="lovestruck" size={150} color="#A6E191" />
                            <h3>Recomendação Água</h3>
                            <p>Beba pelo menos 500ml de Água 5 vezes ao dia.</p>

                        </div>

                        <div>
                            <FcAlarmClock size={70} />
                            <h3>Recomendação Água</h3>
                            <p>Ativar alarme para ser lembrado de Comer Saudável</p>

                            <div className="form-section">

                                <div className="form-group">
                                    <label htmlFor="alarmAgua1">Alarme 1: </label>
                                    <input id="alarmAgua1" type="text" name="alarmAgua1" value="7:00" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="alarmAgua2">Alarme 2: </label>
                                    <input id="alarmAgua2" type="text" name="alarmAgua2" value="9:00" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="alarmAgua3">Alarme 3: </label>
                                    <input id="alarmAgua3" type="text" name="alarmAgua3" value="13:00" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="alarmAgua4">Alarme 4: </label>
                                    <input id="alarmAgua4" type="text" name="alarmAgua4" value="15:00" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="alarmAgua5">Alarme 5: </label>
                                    <input id="alarmAgua5" type="text" name="alarmAgua5" value="18:00" />
                                </div>
                                    <a href="#"><p>Adicionar Mais Alarmes</p></a>
                                </div>

                        </div>

                    </Modal>

                    )}
                    <FormsAlarme>
                        <FormAlarme toggleModal={toggleModal} recoverData={handleSubmit} />
                    </FormsAlarme>

                </div>
            </ThemeProvider>

        );
}


export default Alarmes;