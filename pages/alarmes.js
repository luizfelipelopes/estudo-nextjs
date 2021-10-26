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
                        <h3>Recomendação Comida</h3>
                        <p>Melhore sua Alimentação, pois seu IMC está dentro de valores normais, porém você possui muita massa gordurosa no corpo.</p>
                        <div>
                            <p>Ativar alarme para ser lembrado de Comer Saudável</p>
                            <div>
                                <p>ALARME 1   7:00</p>
                                <p>ALARME 2   9:00</p>
                                <p>ALARME 3   13:00</p>
                                <p>ALARME 4   15:00</p>
                                <p>ALARME 5   18:00</p>
                                <a href="#"><p>ADICIONAR MAIS ALARMES</p></a>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h3>Recomendação Água</h3>
                        <p>Beba pelo menos 500ml de Água 5 vezes ao dia.</p>
                        <div>
                            <p>Ativar alarme para ser lembrado de Beber Água</p>
                            <div>
                                <p>ALARME 1   7:00</p>
                                <p>ALARME 2   9:00</p>
                                <p>ALARME 3   13:00</p>
                                <p>ALARME 4   15:00</p>
                                <p>ALARME 5   18:00</p>
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