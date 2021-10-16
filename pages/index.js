import GlobalStyle  from "../styles/globals";
import Link from 'next/link';

function Home(){

    return(

        <div>
            {/* <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
            </style>
            <GlobalStyle /> */}


            <h1>App Vida Saudável</h1>

            <Link href="/frequencia-alimentar">
                <a>Frequência Alimentar</a>
            </Link>
        </div>
    );


}

export default Home