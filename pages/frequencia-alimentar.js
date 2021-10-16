import MyApp from './_app';
import Link from 'next/link';
import TesteFrequenciaAlimentar from '../components/TesteFrequenciaAlimentar';
import { Body } from '../styles/FrequenciaAlimentar/styles';

function FrequenciaAlimentar() {
    return (
            <div>
                <MyApp pageProps={FrequenciaAlimentar}/>
                <Body>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                   <header>
                        <h2>Teste Frequência Alimentar</h2>
                        <p>Descubra se sua alimentação é saudável:</p>
                    </header>
                    <TesteFrequenciaAlimentar />
                </Body>
            </div>
        )
}

export default FrequenciaAlimentar

// function Frequencia(){

//     return(

//         <div>
//             {/* <style>
//                 @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
//             </style>
//             <GlobalStyle /> */}


//             <h1>Frequência Alimentar</h1>
//             <Link href="/">
//                 <a>Home</a>
//             </Link>

//             {/* <FrequenciaAlimentar /> */}
//         </div>
//     );


// }

// export default Frequencia