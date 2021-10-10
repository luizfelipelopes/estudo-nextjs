import TesteFrequenciaAlimentar from './TesteFrequenciaAlimentar';
// import { Body } from './styles';

function Home() {
    return (


            <div>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
                </style>
                {/* <Body> */}
                    <h2>Teste Frequência Alimentar</h2>
                    <p>Descubra se sua alimentação é saudável:</p>
                    <TesteFrequenciaAlimentar />
                {/* </Body> */}
            </div>
        )
}

export default Home