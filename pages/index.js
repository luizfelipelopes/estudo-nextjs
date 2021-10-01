import { useState } from 'react';

function Home() {
    return (
            <div>
                <h2>Teste Frequência Alimentar</h2>
                <p>Descubra se sua alimentação é saudável:</p>
                <TesteFrequenciaAlimentar />

            </div>
        )
}

function TesteFrequenciaAlimentar()
{

    let pontos = 0;
    let porcentagem = 0;
    let resultado = '';
    const[avaliacao, setAvaliacao] = useState(pontos);
    const[percentual, setPercentual] = useState(porcentagem);
    const[classificacao, setClassificacao] = useState(resultado);


    let frutas = {
        'nuncaRaramente' : 0,
        '1A2VezesMes'    : 2,
        '1A2VezesSemana' : 5,
        '3A5VezesSemana' : 8,
        'todosOsDias'    : 10
    };

    let massas = {
        'nuncaRaramente' : 10,
        '1A2VezesMes'    : 8,
        '1A2VezesSemana' : 5,
        '3A5VezesSemana' : 2,
        'todosOsDias'    : 1
    };

    let folhas = {
        'nuncaRaramente' : 0,
        '1A2VezesMes'    : 2,
        '1A2VezesSemana' : 5,
        '3A5VezesSemana' : 8,
        'todosOsDias'    : 10
    };

    let legumes = {
        'nuncaRaramente' : 0,
        '1A2VezesMes'    : 2,
        '1A2VezesSemana' : 5,
        '3A5VezesSemana' : 8,
        'todosOsDias'    : 10
    };

    let laticinios = {
        'nuncaRaramente' : 0,
        '1A2VezesMes'    : 2,
        '1A2VezesSemana' : 5,
        '3A5VezesSemana' : 8,
        'todosOsDias'    : 10
    };

    let comidasProntas = {
        'nuncaRaramente' : 10,
        '1A2VezesMes'    : 8,
        '1A2VezesSemana' : 5,
        '3A5VezesSemana' : 2,
        'todosOsDias'    : 0
    };

    let ultraprocessados = {
        'nuncaRaramente' : 10,
        '1A2VezesMes'    : 8,
        '1A2VezesSemana' : 5,
        '3A5VezesSemana' : 2,
        'todosOsDias'    : 0
    };

    let embutidos = {
        'nuncaRaramente' : 10,
        '1A2VezesMes'    : 8,
        '1A2VezesSemana' : 5,
        '3A5VezesSemana' : 2,
        'todosOsDias'    : 0
    };

    let docesSobremesas = {
        'nuncaRaramente' : 10,
        '1A2VezesMes'    : 8,
        '1A2VezesSemana' : 5,
        '3A5VezesSemana' : 2,
        'todosOsDias'    : 0
    };

    let bebidasAlcoolicas = {
        'nuncaRaramente' : 10,
        '1A2VezesMes'    : 8,
        '1A2VezesSemana' : 5,
        '3A5VezesSemana' : 2,
        'todosOsDias'    : 0
    };

    let oleaginosasSementes = {
        'nuncaRaramente' : 0,
        '1A2VezesMes'    : 2,
        '1A2VezesSemana' : 5,
        '3A5VezesSemana' : 8,
        'todosOsDias'    : 10
    };

    let alimentosIntegrais = {
        'nuncaRaramente' : 0,
        '1A2VezesMes'    : 2,
        '1A2VezesSemana' : 5,
        '3A5VezesSemana' : 8,
        'todosOsDias'    : 10
    };

    let oleosGorduras = {
        'nuncaRaramente' : 10,
        '1A2VezesMes'    : 8,
        '1A2VezesSemana' : 5,
        '3A5VezesSemana' : 2,
        'todosOsDias'    : 0
    };

    let gordurasSaudaveis = {
        'nuncaRaramente' : 0,
        '1A2VezesMes'    : 2,
        '1A2VezesSemana' : 5,
        '3A5VezesSemana' : 8,
        'todosOsDias'    : 10
    };

    let bebe2LitrosDia = {
        'nuncaRaramente' : 0,
        '1A2VezesMes'    : 2,
        '1A2VezesSemana' : 5,
        '3A5VezesSemana' : 8,
        'todosOsDias'    : 10
    };

    let comeDevagar = {
        'nuncaRaramente' : 0,
        '1A2VezesMes'    : 2,
        '1A2VezesSemana' : 5,
        '3A5VezesSemana' : 8,
        'todosOsDias'    : 10
    };

    let comeRapido = {
        'nuncaRaramente' : 10,
        '1A2VezesMes'    : 8,
        '1A2VezesSemana' : 5,
        '3A5VezesSemana' : 2,
        'todosOsDias'    : 0
    };


    function calcularAvaliacao()
    {
        let pontosFrutas = frutas.todosOsDias;
        let pontosMassas = massas.nuncaRaramente;
        let pontosFolhas = folhas.todosOsDias;
        let pontosLegumes = legumes.todosOsDias;
        let pontosLaticinios = laticinios.todosOsDias;
        let pontosComidasProntas = comidasProntas.nuncaRaramente;
        let pontosUltraprocessados = ultraprocessados.nuncaRaramente;
        let pontosEmbutidos = embutidos.nuncaRaramente;
        let pontosDocesSobremesas = docesSobremesas.nuncaRaramente;
        let pontosBebidasAlcoolicas = bebidasAlcoolicas.nuncaRaramente;
        let pontosOleaginosasSementes = oleaginosasSementes.todosOsDias;
        let pontosAlimentosIntegrais = alimentosIntegrais.todosOsDias;
        let pontosOleosGorduras = oleosGorduras.nuncaRaramente;
        let pontosGordurasSaudaveis = gordurasSaudaveis.todosOsDias;
        let pontosBebe2LitrosDia = bebe2LitrosDia.todosOsDias;
        let pontosComeDevagar = comeDevagar.nuncaRaramente;
        let pontosComeRapido = comeRapido.todosOsDias;

        let pontos = pontosFrutas
        + pontosMassas
        + pontosFolhas
        + pontosLegumes
        + pontosLaticinios
        + pontosComidasProntas
        + pontosUltraprocessados
        + pontosEmbutidos
        + pontosDocesSobremesas
        + pontosBebidasAlcoolicas
        + pontosOleaginosasSementes
        + pontosAlimentosIntegrais
        + pontosOleosGorduras
        + pontosGordurasSaudaveis
        + pontosBebe2LitrosDia
        + pontosComeDevagar
        + pontosComeRapido;

        let total = 170;
        let porcentagem = ((pontos * 100)/total).toFixed(2);
        let resultado = 'Não Identificada';

        if(porcentagem >= 0 && porcentagem <= 39){
            resultado = 'Ruim';
        }

        if(porcentagem >= 40 && porcentagem <= 59){
            resultado = 'Desequilibrada';
        }

        if(porcentagem >= 60 && porcentagem <= 69){
            resultado = 'Regular';
        }

        if(porcentagem >= 70 && porcentagem <= 89){
            resultado = 'Boa';
        }

        if(porcentagem >= 90 && porcentagem <= 100){
            resultado = 'Ótima';
        }

        setAvaliacao(pontos);
        setPercentual(porcentagem);
        setClassificacao(resultado);
    }

    return (
        <div>
            <div><strong>Minha Pontuacao é:</strong> {avaliacao} pontos</div><br></br>
            <div><strong>Meu Percentual é:</strong> {percentual} %</div><br></br>
            <div><strong>Minha Frequência Alimentar está:</strong> {classificacao} </div><br></br>
            <button onClick={calcularAvaliacao}>Calcular Avaliação</button>
        </div>
    );

}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>

    );
}

export default Home