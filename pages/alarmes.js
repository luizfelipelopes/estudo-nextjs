import { useState } from 'react';
import GlobalStyle  from "../styles/globals";
import Link from 'next/link';
import FormAlarme from "../components/FormAlarme";
import Modal from '../components/FormAlarme/Modal.js';

function Alarmes ()
{

    const [show, setShow] = useState(false);

    const recoverIMC = async event => {

        event.preventDefault();

        let peso = Number(document.getElementById('peso').value);
        let altura = Number(document.getElementById('altura').value);
        let idade = document.getElementById('idade').value;
        let massa = document.querySelector('input[name=massa]:checked').value;

        let imc = peso/(altura*altura);

        console.log(peso, altura, imc.toFixed(2));

        setShow(true);

    }


    return (
        <div>
            <style>@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');</style>
            <GlobalStyle />
            <header>
                <h1>Alarmes</h1>
                <Link href="/"><a>Home</a></Link>
                <Link href="/frequencia-alimentar"><a>Frequência Alimentar</a></Link>
                <Link href="/calendario"><a>Calendário Saudável</a></Link>
            </header>

            <Modal title="Resultado" onClose={() => setShow(false)} show={show} >
                <header>
                    <p>IMC: 23,1</p>
                    <p>Ingestão de Água: 2310</p>
                </header>

                <div className="sections">
                    <section>
                        <header>
                            <h3>Recomendação Comida</h3>
                            <p>Melhore sua Alimentação, pois seu IMC está dentro de valores normais, porém você possui muita massa gordurosa no corpo.</p>
                        </header>
                        <div>
                            <p>Ativar alarme para ser lembrado de Comer Saudável</p>
                            <div>

                            <div class="form-group">
                                <label htmlFor="alarmComida1">ALARME 1: </label>
                                <input id="alarmComida1" type="text" name="alarmComida1" value="7:00" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="alarmComida2">ALARME 2: </label>
                                <input id="alarmComida2" type="text" name="alarmComida2" value="9:00" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="alarmComida3">ALARME 3: </label>
                                <input id="alarmComida3" type="text" name="alarmComida3" value="13:00" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="alarmComida4">ALARME 4: </label>
                                <input id="alarmComida4" type="text" name="alarmComida4" value="15:00" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="alarmComida5">ALARME 5: </label>
                                <input id="alarmComida5" type="text" name="alarmComida5" value="18:00" />
                            </div>
                            <a href="#"><p>ADICIONAR MAIS ALARMES</p></a>
                            </div>
                        </div>
                    </section>
                    <section>
                        <header>
                            <h3>Recomendação Água</h3>
                            <p>Beba pelo menos 500ml de Água 5 vezes ao dia.</p>
                        </header>
                        <div>
                            <p>Ativar alarme para ser lembrado de Beber Água</p>
                            <div>
                            <div class="form-group">
                                <label htmlFor="alarmAgua1">ALARME 1: </label>
                                <input id="alarmAgua1" type="text" name="alarmAgua1" value="7:00" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="alarmAgua2">ALARME 2: </label>
                                <input id="alarmAgua2" type="text" name="alarmAgua2" value="9:00" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="alarmAgua3">ALARME 3: </label>
                                <input id="alarmAgua3" type="text" name="alarmAgua3" value="13:00" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="alarmAgua4">ALARME 4: </label>
                                <input id="alarmAgua4" type="text" name="alarmAgua4" value="15:00" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="alarmAgua5">ALARME 5: </label>
                                <input id="alarmAgua5" type="text" name="alarmAgua5" value="18:00" />
                            </div>
                                <a href="#"><p>ADICIONAR MAIS ALARMES</p></a>
                            </div>
                        </div>
                    </section>
                </div>


            </Modal>
            <FormAlarme recoverIMC={recoverIMC} />
        </div>
    );

}


export default Alarmes;