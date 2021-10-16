function Tempo(props) {
    console.log('> Passsando pelo Frontend;')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} Dinâmico</div>
            <div>{props.staticDateString} Estático - com delay</div>
        </div>
    );

}

export async function getStaticProps() {
    console.log('> Passsando pelo getStaticProps();');
    console.log('> Adicionando delay de 5 segundos');

    await delay(5000);
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));


export default Tempo;