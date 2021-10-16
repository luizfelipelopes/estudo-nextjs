import Link from 'next/link';
import MyApp from './_app';

function Home(){

    return(

        <div>
            <MyApp />

            <h1>App Vida Saudável</h1>

            <Link href="/frequencia-alimentar">
                <a>Frequência Alimentar</a>
            </Link>
        </div>
    );


}

export default Home