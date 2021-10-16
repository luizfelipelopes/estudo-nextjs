import GlobalStyle  from "../styles/globals";
import FrequenciaAlimentar from "./FrequenciaAlimentar";
import Link from 'next/link';

function Frequencia(){

    return(

        <div>
            {/* <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
            </style>
            <GlobalStyle /> */}


            <h1>Frequência Alimentar</h1>
            <Link href="/">
                <a>Home</a>
            </Link>

            {/* <FrequenciaAlimentar /> */}
        </div>
    );


}

export default Frequencia