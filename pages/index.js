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


    const recoverFoodFrequency = async event => {

        event.preventDefault();

        let selectFrutas = document.getElementById('frutas').value;
        let pontoFrutas = frutas[selectFrutas];

        let selectMassas = document.getElementById('massas').value;
        let pontoMassas = massas[selectMassas];

        let selectFolhas = document.getElementById('folhas').value;
        let pontoFolhas = folhas[selectFolhas];

        let selectLegumes = document.getElementById('legumes').value;
        let pontoLegumes = legumes[selectLegumes];

        let selectLaticinios = document.getElementById('laticinios').value;
        let pontoLaticinios = laticinios[selectLaticinios];

        let selectComidasProntas = document.getElementById('comidasProntas').value;
        let pontoComidasProntas = comidasProntas[selectComidasProntas];

        let selectUltraprocessados = document.getElementById('ultraprocessados').value;
        let pontoUltraprocessados = ultraprocessados[selectUltraprocessados];

        let selectEmbutidos = document.getElementById('embutidos').value;
        let pontoEmbutidos = embutidos[selectEmbutidos];

        let selectDocesSobremesas = document.getElementById('docesSobremesas').value;
        let pontoDocesSobremesas = docesSobremesas[selectDocesSobremesas];

        let selectBebidasAlcoolicas = document.getElementById('bebidasAlcoolicas').value;
        let pontoBebidasAlcoolicas = bebidasAlcoolicas[selectBebidasAlcoolicas];

        let selectOleaginosasSementes = document.getElementById('oleaginosasSementes').value;
        let pontoOleaginosasSementes = oleaginosasSementes[selectOleaginosasSementes];

        let selectAlimentosIntegrais = document.getElementById('alimentosIntegrais').value;
        let pontoAlimentosIntegrais = alimentosIntegrais[selectAlimentosIntegrais];

        let selectOleosGorduras = document.getElementById('oleosGorduras').value;
        let pontoOleosGorduras = oleosGorduras[selectOleosGorduras];

        let selectGordurasSaudaveis = document.getElementById('gordurasSaudaveis').value;
        let pontoGordurasSaudaveis = gordurasSaudaveis[selectGordurasSaudaveis];

        let selectBebe2LitrosDia = document.getElementById('bebe2LitrosDia').value;
        let pontoBebe2LitrosDia = bebe2LitrosDia[selectBebe2LitrosDia];

        let selectComeDevagar = document.getElementById('comeDevagar').value;
        let pontoComeDevagar = comeDevagar[selectComeDevagar];

        let selectComeRapido = document.getElementById('comeRapido').value;
        let pontoComeRapido = comeRapido[selectComeRapido];

        calcularAvaliacao(pontoFrutas, pontoMassas, pontoFolhas, pontoLegumes,
            pontoLaticinios, pontoComidasProntas, pontoUltraprocessados,
            pontoEmbutidos, pontoDocesSobremesas, pontoBebidasAlcoolicas,
            pontoOleaginosasSementes, pontoAlimentosIntegrais, pontoOleosGorduras,
            pontoGordurasSaudaveis, pontoBebe2LitrosDia, pontoComeDevagar, pontoComeRapido);

    }

    function calcularAvaliacao(frutas, massas, folhas, legumes, laticinios, comidasProntas,
        ultraprocessados, embutidos, docesSobremesas, bebidasAlcoolicas, oleaginosasSementes,
        alimentosIntegrais, oleosGorduras, gordurasSaudaveis, bebe2LitrosDia, comeDevagar,
        comeRapido)
    {
        let pontosFrutas = frutas;
        let pontosMassas = massas;
        let pontosFolhas = folhas;
        let pontosLegumes = legumes;
        let pontosLaticinios = laticinios;
        let pontosComidasProntas = comidasProntas;
        let pontosUltraprocessados = ultraprocessados;
        let pontosEmbutidos = embutidos;
        let pontosDocesSobremesas = docesSobremesas;
        let pontosBebidasAlcoolicas = bebidasAlcoolicas;
        let pontosOleaginosasSementes = oleaginosasSementes;
        let pontosAlimentosIntegrais = alimentosIntegrais;
        let pontosOleosGorduras = oleosGorduras;
        let pontosGordurasSaudaveis = gordurasSaudaveis;
        let pontosBebe2LitrosDia = bebe2LitrosDia;
        let pontosComeDevagar = comeDevagar;
        let pontosComeRapido = comeRapido;

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

            <form onSubmit={recoverFoodFrequency}>
                <label htmlFor="frutas">Frutas</label>
                <select id="frutas">
                    <option value="">Selecione</option>
                    <option value="nuncaRaramente">Nunca / Raramente</option>
                    <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                    <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                    <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                    <option value="todosOsDias">Todos os Dias</option>
                </select>

                <br></br><br></br>

                <label htmlFor="massas">Massas</label>
                <select id="massas">
                    <option value="">Selecione</option>
                    <option value="nuncaRaramente">Nunca / Raramente</option>
                    <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                    <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                    <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                    <option value="todosOsDias">Todos os Dias</option>
                </select>

                <br></br><br></br>

                <label htmlFor="folhas">Folhas</label>
                <select id="folhas">
                    <option value="">Selecione</option>
                    <option value="nuncaRaramente">Nunca / Raramente</option>
                    <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                    <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                    <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                    <option value="todosOsDias">Todos os Dias</option>
                </select>

                <br></br><br></br>

                <label htmlFor="legumes">Legumes</label>
                <select id="legumes">
                    <option value="">Selecione</option>
                    <option value="nuncaRaramente">Nunca / Raramente</option>
                    <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                    <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                    <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                    <option value="todosOsDias">Todos os Dias</option>
                </select>

                <br></br><br></br>

                <label htmlFor="laticinios">Laticínios</label>
                <select id="laticinios">
                    <option value="">Selecione</option>
                    <option value="nuncaRaramente">Nunca / Raramente</option>
                    <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                    <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                    <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                    <option value="todosOsDias">Todos os Dias</option>
                </select>

                <br></br><br></br>

                <label htmlFor="comidasProntas">Comidas Prontas</label>
                <select id="comidasProntas">
                    <option value="">Selecione</option>
                    <option value="nuncaRaramente">Nunca / Raramente</option>
                    <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                    <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                    <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                    <option value="todosOsDias">Todos os Dias</option>
                </select>

                <br></br><br></br>

                <label htmlFor="ultraprocessados">UltraProcessados</label>
                <select id="ultraprocessados">
                    <option value="">Selecione</option>
                    <option value="nuncaRaramente">Nunca / Raramente</option>
                    <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                    <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                    <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                    <option value="todosOsDias">Todos os Dias</option>
                </select>

                <br></br><br></br>

                <label htmlFor="embutidos">Embutidos</label>
                <select id="embutidos">
                    <option value="">Selecione</option>
                    <option value="nuncaRaramente">Nunca / Raramente</option>
                    <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                    <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                    <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                    <option value="todosOsDias">Todos os Dias</option>
                </select>

                <br></br><br></br>

                <label htmlFor="docesSobremesas">Doces e Sobremesas</label>
                <select id="docesSobremesas">
                    <option value="">Selecione</option>
                    <option value="nuncaRaramente">Nunca / Raramente</option>
                    <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                    <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                    <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                    <option value="todosOsDias">Todos os Dias</option>
                </select>

                <br></br><br></br>

                <label htmlFor="bebidasAlcoolicas">Bebidas Alcoólicas</label>
                <select id="bebidasAlcoolicas">
                    <option value="">Selecione</option>
                    <option value="nuncaRaramente">Nunca / Raramente</option>
                    <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                    <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                    <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                    <option value="todosOsDias">Todos os Dias</option>
                </select>

                <br></br><br></br>

                <label htmlFor="oleaginosasSementes">Oleaginosas e Sementes</label>
                <select id="oleaginosasSementes">
                    <option value="">Selecione</option>
                    <option value="nuncaRaramente">Nunca / Raramente</option>
                    <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                    <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                    <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                    <option value="todosOsDias">Todos os Dias</option>
                </select>

                <br></br><br></br>

                <label htmlFor="alimentosIntegrais">Alimentos Integrais</label>
                <select id="alimentosIntegrais">
                    <option value="">Selecione</option>
                    <option value="nuncaRaramente">Nunca / Raramente</option>
                    <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                    <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                    <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                    <option value="todosOsDias">Todos os Dias</option>
                </select>

                <br></br><br></br>

                <label htmlFor="oleosGorduras">Óleos e Gorduras</label>
                <select id="oleosGorduras">
                    <option value="">Selecione</option>
                    <option value="nuncaRaramente">Nunca / Raramente</option>
                    <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                    <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                    <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                    <option value="todosOsDias">Todos os Dias</option>
                </select>

                <br></br><br></br>

                <label htmlFor="gordurasSaudaveis">Gorduras Saudáveis</label>
                <select id="gordurasSaudaveis">
                    <option value="">Selecione</option>
                    <option value="nuncaRaramente">Nunca / Raramente</option>
                    <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                    <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                    <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                    <option value="todosOsDias">Todos os Dias</option>
                </select>

                <br></br><br></br>

                <label htmlFor="bebe2LitrosDia">Bebe 2 Litros de Água por Dia</label>
                <select id="bebe2LitrosDia">
                    <option value="">Selecione</option>
                    <option value="nuncaRaramente">Nunca / Raramente</option>
                    <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                    <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                    <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                    <option value="todosOsDias">Todos os Dias</option>
                </select>

                <br></br><br></br>

                <label htmlFor="comeDevagar">Come Devagar</label>
                <select id="comeDevagar">
                    <option value="">Selecione</option>
                    <option value="nuncaRaramente">Nunca / Raramente</option>
                    <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                    <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                    <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                    <option value="todosOsDias">Todos os Dias</option>
                </select>

                <br></br><br></br>

                <label htmlFor="comeRapido">Come Rápido</label>
                <select id="comeRapido">
                    <option value="">Selecione</option>
                    <option value="nuncaRaramente">Nunca / Raramente</option>
                    <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                    <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                    <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                    <option value="todosOsDias">Todos os Dias</option>
                </select>

                <br></br><br></br>

                <br></br>
                <button type="submit">Calcular Avaliação</button>
            </form>

        </div>
    );

}

export default Home