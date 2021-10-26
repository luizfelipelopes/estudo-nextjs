import GlobalStyle  from "../styles/globals";
import Link from 'next/link';
import TesteFrequenciaAlimentar from '../components/TesteFrequenciaAlimentar';
import { Body } from '../styles/FrequenciaAlimentar/styles';

function FrequenciaAlimentar() {
    return (
            <div>
                <style>@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');</style>
                <GlobalStyle />
                <Body>
                   <header>
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/alarmes"><a>Alarmes Água e Comida</a></Link>
                        <Link href="/calendario"><a>Calendário Saudável</a></Link>
                        <h2>Teste Frequência Alimentar</h2>
                        <p>Descubra se sua alimentação é saudável:</p>
                    </header>
                    <TesteFrequenciaAlimentar />
                </Body>
            </div>
        )
}

export default FrequenciaAlimentar