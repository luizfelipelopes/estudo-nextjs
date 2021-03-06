function Tempo(props) {
    console.log('> Passsando pelo Frontend;')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} Dinâmico</div>
            <div>{props.staticDateString} Estático</div>
        </div>
    );

}

export function getStaticProps() {
    console.log('> Passsando pelo getStaticProps();');
    console.log('> Adicionando delay de 5 segundos');

    // await delay(5000);
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));


export default Tempo;