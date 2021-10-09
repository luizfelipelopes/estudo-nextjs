import { useState } from 'react';
var Avaliacao = require ('../classes/Avaliacao.js');

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


    const[avaliacao, setAvaliacao]         = useState(pontos);
    const[percentual, setPercentual]       = useState(porcentagem);
    const[classificacao, setClassificacao] = useState(resultado);
    const[recomendacoes, setRecomendacoes] = useState({});

    const recomendacaoFrutas              = 'frutas';
    const recomendacaoMassas              = 'massas';
    const recomendacaoFolhas              = 'folhas';
    const recomendacaoLegumes             = 'legumes';
    const recomendacaoLaticinios          = 'laticinios';
    const recomendacaoComidasProntas      = 'comidasProntas';
    const recomendacaoUltraProcessadados  = 'ultraProcessados';
    const recomendacaoEmbutidos           = 'embutidos';
    const recomendacaoDocesSobremesas     = 'docesSobremesas';
    const recomendacaoBebidasAlcoolicas   = 'bebidasAlcoolicas';
    const recomendacaoOleaginosasSementes = 'oleaginosasSementes';
    const recomendacaoAlimentosIntegrais  = 'alimentosIntegrais';
    const recomendacaoOleosGorduras       = 'oleosGorduras';
    const recomendacaoGordurasSaudaveis   = 'gordurasSaudaveis';
    const recomendacaoBebe2LitrosDia      = 'bebe2LitrosDia';
    const recomendacaoComeDevagar         = 'comeDevagar';
    const recomendacaoComeRapido          = 'comeRapido';

    const otima = 10;
    const boa = 8;

    const recoverFoodFrequency = async event => {

        event.preventDefault();

        let selectFrutas = document.getElementById('frutas').value;
        let selectMassas = document.getElementById('massas').value;
        let selectFolhas = document.getElementById('folhas').value;
        let selectLegumes = document.getElementById('legumes').value;
        let selectLaticinios = document.getElementById('laticinios').value;
        let selectComidasProntas = document.getElementById('comidasProntas').value;
        let selectUltraprocessados = document.getElementById('ultraprocessados').value;
        let selectEmbutidos = document.getElementById('embutidos').value;
        let selectDocesSobremesas = document.getElementById('docesSobremesas').value;
        let selectBebidasAlcoolicas = document.getElementById('bebidasAlcoolicas').value;
        let selectOleaginosasSementes = document.getElementById('oleaginosasSementes').value;
        let selectAlimentosIntegrais = document.getElementById('alimentosIntegrais').value;
        let selectOleosGorduras = document.getElementById('oleosGorduras').value;
        let selectGordurasSaudaveis = document.getElementById('gordurasSaudaveis').value;
        let selectBebe2LitrosDia = document.getElementById('bebe2LitrosDia').value;
        let selectComeDevagar = document.getElementById('comeDevagar').value;
        let selectComeRapido = document.getElementById('comeRapido').value;

        let instanciaAvaliacao = new Avaliacao(selectFrutas, selectMassas, selectFolhas, selectLegumes,
            selectLaticinios, selectComidasProntas, selectUltraprocessados,
            selectEmbutidos, selectDocesSobremesas, selectBebidasAlcoolicas,
            selectOleaginosasSementes, selectAlimentosIntegrais, selectOleosGorduras,
            selectGordurasSaudaveis, selectBebe2LitrosDia, selectComeDevagar, selectComeRapido);

        setAvaliacao(instanciaAvaliacao.getPontos());
        setPercentual(instanciaAvaliacao.getPorcentagem());
        setClassificacao(instanciaAvaliacao.getResultado());

        let arrayRecomendacoes = {

            'frequenciaFrutas'                       : instanciaAvaliacao.recuperarFrequencia(selectFrutas),
            'classificacaoFrutas'                    : instanciaAvaliacao.recuperarClassificacao(instanciaAvaliacao.pontoFrutas),
            'recomendacaoOtimaFrutas'                : instanciaAvaliacao.gerarRecomendacao(recomendacaoFrutas, otima),
            'recomendacaoBoaFrutas'                  : instanciaAvaliacao.gerarRecomendacao(recomendacaoFrutas, boa),

            'frequenciaMassas'                       : instanciaAvaliacao.recuperarFrequencia(selectMassas),
            'classificacaoMassas'                    : instanciaAvaliacao.recuperarClassificacao(instanciaAvaliacao.pontoMassas),
            'recomendacaoOtimaMassas'                : instanciaAvaliacao.gerarRecomendacao(recomendacaoMassas, otima),
            'recomendacaoBoaMassas'                  : instanciaAvaliacao.gerarRecomendacao(recomendacaoMassas, boa),

            'frequenciaFolhas'                       : instanciaAvaliacao.recuperarFrequencia(selectFolhas),
            'classificacaoFolhas'                    : instanciaAvaliacao.recuperarClassificacao(instanciaAvaliacao.pontoFolhas),
            'recomendacaoOtimaFolhas'                : instanciaAvaliacao.gerarRecomendacao(recomendacaoFolhas, otima),
            'recomendacaoBoaFolhas'                  : instanciaAvaliacao.gerarRecomendacao(recomendacaoFolhas, boa),

            'frequenciaLegumes'                      : instanciaAvaliacao.recuperarFrequencia(selectLegumes),
            'classificacaoLegumes'                   : instanciaAvaliacao.recuperarClassificacao(instanciaAvaliacao.pontoLegumes),
            'recomendacaoOtimaLegumes'               : instanciaAvaliacao.gerarRecomendacao(recomendacaoLegumes, otima),
            'recomendacaoBoaLegumes'                 : instanciaAvaliacao.gerarRecomendacao(recomendacaoLegumes, boa),

            'frequenciaLaticinios'                   : instanciaAvaliacao.recuperarFrequencia(selectLaticinios),
            'classificacaoLaticinios'                : instanciaAvaliacao.recuperarClassificacao(instanciaAvaliacao.pontoLaticinios),
            'recomendacaoOtimaLaticinios'            : instanciaAvaliacao.gerarRecomendacao(recomendacaoLaticinios, otima),
            'recomendacaoBoaLaticinios'              : instanciaAvaliacao.gerarRecomendacao(recomendacaoLaticinios, boa),

            'frequenciaComidasProntas'               : instanciaAvaliacao.recuperarFrequencia(selectComidasProntas),
            'classificacaoComidasProntas'            : instanciaAvaliacao.recuperarClassificacao(instanciaAvaliacao.pontoComidasProntas),
            'recomendacaoOtimaComidasProntas'        : instanciaAvaliacao.gerarRecomendacao(recomendacaoComidasProntas, otima),
            'recomendacaoBoaComidasProntas'          : instanciaAvaliacao.gerarRecomendacao(recomendacaoComidasProntas, boa),

            'frequenciaUltraProcessados'             : instanciaAvaliacao.recuperarFrequencia(selectUltraprocessados),
            'classificacaoUltraProcessados'          : instanciaAvaliacao.recuperarClassificacao(instanciaAvaliacao.pontoUltraprocessados),
            'recomendacaoOtimaUltraProcessados'      : instanciaAvaliacao.gerarRecomendacao(recomendacaoUltraProcessadados, otima),
            'recomendacaoBoaUltraProcessados'        : instanciaAvaliacao.gerarRecomendacao(recomendacaoUltraProcessadados, boa),

            'frequenciaEmbutidos'                    : instanciaAvaliacao.recuperarFrequencia(selectEmbutidos),
            'classificacaoEmbutidos'                 : instanciaAvaliacao.recuperarClassificacao(instanciaAvaliacao.pontoEmbutidos),
            'recomendacaoOtimaEmbutidos'             : instanciaAvaliacao.gerarRecomendacao(recomendacaoEmbutidos, otima),
            'recomendacaoBoaEmbutidos'               : instanciaAvaliacao.gerarRecomendacao(recomendacaoEmbutidos, boa),

            'frequenciaDocesSobremesas'              : instanciaAvaliacao.recuperarFrequencia(selectDocesSobremesas),
            'classificacaoDocesSobremesas'           : instanciaAvaliacao.recuperarClassificacao(instanciaAvaliacao.pontoDocesSobremesas),
            'recomendacaoOtimaDocesSobremesas'       : instanciaAvaliacao.gerarRecomendacao(recomendacaoDocesSobremesas, otima),
            'recomendacaoBoaDocesSobremesas'         : instanciaAvaliacao.gerarRecomendacao(recomendacaoDocesSobremesas, boa),

            'frequenciaBebidasAlcoolicas'            : instanciaAvaliacao.recuperarFrequencia(selectBebidasAlcoolicas),
            'classificacaoBebidasAlcoolicas'         : instanciaAvaliacao.recuperarClassificacao(instanciaAvaliacao.pontoBebidasAlcoolicas),
            'recomendacaoOtimaBebidasAlcoolicas'     : instanciaAvaliacao.gerarRecomendacao(recomendacaoBebidasAlcoolicas, otima),
            'recomendacaoBoaBebidasAlcoolicas'       : instanciaAvaliacao.gerarRecomendacao(recomendacaoBebidasAlcoolicas, boa),

            'frequenciaOleaginosasSementes'          : instanciaAvaliacao.recuperarFrequencia(selectOleaginosasSementes),
            'classificacaoOleaginosasSementes'       : instanciaAvaliacao.recuperarClassificacao(instanciaAvaliacao.pontoOleaginosasSementes),
            'recomendacaoOtimaOleaginosasSementes'   : instanciaAvaliacao.gerarRecomendacao(recomendacaoOleaginosasSementes, otima),
            'recomendacaoBoaOleaginosasSementes'     : instanciaAvaliacao.gerarRecomendacao(recomendacaoOleaginosasSementes, boa),

            'frequenciaAlimentosIntegrais'           : instanciaAvaliacao.recuperarFrequencia(selectAlimentosIntegrais),
            'classificacaoAlimentosIntegrais'        : instanciaAvaliacao.recuperarClassificacao(instanciaAvaliacao.pontoAlimentosIntegrais),
            'recomendacaoOtimaAlimentosIntegrais'    : instanciaAvaliacao.gerarRecomendacao(recomendacaoAlimentosIntegrais, otima),
            'recomendacaoBoaAlimentosIntegrais'      : instanciaAvaliacao.gerarRecomendacao(recomendacaoAlimentosIntegrais, boa),

            'frequenciaOleosGorduras'                : instanciaAvaliacao.recuperarFrequencia(selectOleosGorduras),
            'classificacaoOleosGorduras'             : instanciaAvaliacao.recuperarClassificacao(instanciaAvaliacao.pontoOleosGorduras),
            'recomendacaoOtimaOleosGorduras'         : instanciaAvaliacao.gerarRecomendacao(recomendacaoOleosGorduras, otima),
            'recomendacaoBoaOleosGorduras'           : instanciaAvaliacao.gerarRecomendacao(recomendacaoOleosGorduras, boa),

            'frequenciaGordurasSaudaveis'            : instanciaAvaliacao.recuperarFrequencia(selectGordurasSaudaveis),
            'classificacaoGordurasSaudaveis'         : instanciaAvaliacao.recuperarClassificacao(instanciaAvaliacao.pontoGordurasSaudaveis),
            'recomendacaoOtimaGordurasSaudaveis'     : instanciaAvaliacao.gerarRecomendacao(recomendacaoGordurasSaudaveis, otima),
            'recomendacaoBoaGordurasSaudaveis'       : instanciaAvaliacao.gerarRecomendacao(recomendacaoGordurasSaudaveis, boa),

            'frequenciaBebe2LitrosDia'               : instanciaAvaliacao.recuperarFrequencia(selectBebe2LitrosDia),
            'classificacaoBebe2LitrosDia'            : instanciaAvaliacao.recuperarClassificacao(instanciaAvaliacao.pontoBebe2LitrosDia),
            'recomendacaoOtimaBebe2LitrosDia'        : instanciaAvaliacao.gerarRecomendacao(recomendacaoBebe2LitrosDia, otima),
            'recomendacaoBoaBebe2LitrosDia'          : instanciaAvaliacao.gerarRecomendacao(recomendacaoBebe2LitrosDia, boa),

            'frequenciaComeDevagar'                  : instanciaAvaliacao.recuperarFrequencia(selectComeDevagar),
            'classificacaoComeDevagar'               : instanciaAvaliacao.recuperarClassificacao(instanciaAvaliacao.pontoComeDevagar),
            'recomendacaoOtimaComeDevagar'           : instanciaAvaliacao.gerarRecomendacao(recomendacaoComeDevagar, otima),
            'recomendacaoBoaComeDevagar'             : instanciaAvaliacao.gerarRecomendacao(recomendacaoComeDevagar, boa),

            'frequenciaComeRapido'                   : instanciaAvaliacao.recuperarFrequencia(selectComeRapido),
            'classificacaoComeRapido'                : instanciaAvaliacao.recuperarClassificacao(instanciaAvaliacao.pontoComeRapido),
            'recomendacaoOtimaComeRapido'            : instanciaAvaliacao.gerarRecomendacao(recomendacaoComeRapido, otima),
            'recomendacaoBoaComeRapido'              : instanciaAvaliacao.gerarRecomendacao(recomendacaoComeRapido, boa),

        };

        setRecomendacoes(arrayRecomendacoes);

    }

    return (
        <div>
            <div><strong>Minha Pontuacao é:</strong> {avaliacao} pontos</div><br></br>
            <div><strong>Meu Percentual é:</strong> {percentual} %</div><br></br>
            <div><strong>Sua vida saudável está:</strong> {classificacao} </div><br></br>

            <Recomendacao recomendacao={recomendacoes} />

            <Form recoverFrequency={recoverFoodFrequency}/>

        </div>
    );

}


function Recomendacao(props)
{
    console.log(props.recomendacao.frequenciaFrutas);

    return(
        <div>
            <h2><strong>Seu Resultado:</strong></h2>

            <h3><strong>Frutas:</strong></h3>

            <div><strong>Frequencia: {props.recomendacao.frequenciaFrutas}</strong></div><br></br>
            <div><strong>Classificação: {props.recomendacao.classificacaoFrutas}</strong></div><br></br>

            <h3><strong>Resultado Ótimo:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoOtimaFrutas}</strong></div><br></br>

            <h3><strong>Resultado Bom:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoBoaFrutas}</strong></div><br></br>

            <h3><strong>Massas:</strong></h3>

            <div><strong>Frequencia: {props.recomendacao.frequenciaMassas}</strong></div><br></br>
            <div><strong>Classificação: {props.recomendacao.classificacaoMassas}</strong></div><br></br>

            <h3><strong>Resultado Ótimo:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoOtimaMassas}</strong></div><br></br>

            <h3><strong>Resultado Bom:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoBoaMassas}</strong></div><br></br>

            <h3><strong>Folhas:</strong></h3>

            <div><strong>Frequencia: {props.recomendacao.frequenciaFolhas}</strong></div><br></br>
            <div><strong>Classificação: {props.recomendacao.classificacaoFolhas}</strong></div><br></br>

            <h3><strong>Resultado Ótimo:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoOtimaFolhas}</strong></div><br></br>

            <h3><strong>Resultado Bom:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoBoaFolhas}</strong></div><br></br>

            <h3><strong>Legumes:</strong></h3>

            <div><strong>Frequencia: {props.recomendacao.frequenciaLegumes}</strong></div><br></br>
            <div><strong>Classificação: {props.recomendacao.classificacaoLegumes}</strong></div><br></br>

            <h3><strong>Resultado Ótimo:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoOtimaLegumes}</strong></div><br></br>

            <h3><strong>Resultado Bom:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoBoaLegumes}</strong></div><br></br>

            <h3><strong>Laticinios:</strong></h3>

            <div><strong>Frequencia: {props.recomendacao.frequenciaLaticinios}</strong></div><br></br>
            <div><strong>Classificação: {props.recomendacao.classificacaoLaticinios}</strong></div><br></br>

            <h3><strong>Resultado Ótimo:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoOtimaLaticinios}</strong></div><br></br>

            <h3><strong>Resultado Bom:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoBoaLaticinios}</strong></div><br></br>

            <h3><strong>Comidas Prontas:</strong></h3>

            <div><strong>Frequencia: {props.recomendacao.frequenciaComidasProntas}</strong></div><br></br>
            <div><strong>Classificação: {props.recomendacao.classificacaoComidasProntas}</strong></div><br></br>

            <h3><strong>Resultado Ótimo:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoOtimaComidasProntas}</strong></div><br></br>

            <h3><strong>Resultado Bom:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoBoaComidasProntas}</strong></div><br></br>

            <h3><strong>Ultraprocessados:</strong></h3>

            <div><strong>Frequencia: {props.recomendacao.frequenciaUltraProcessados}</strong></div><br></br>
            <div><strong>Classificação: {props.recomendacao.classificacaoUltraProcessados}</strong></div><br></br>

            <h3><strong>Resultado Ótimo:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoOtimaUltraProcessados}</strong></div><br></br>

            <h3><strong>Resultado Bom:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoBoaUltraProcessados}</strong></div><br></br>

            <h3><strong>Embutidos:</strong></h3>

            <div><strong>Frequencia: {props.recomendacao.frequenciaEmbutidos}</strong></div><br></br>
            <div><strong>Classificação: {props.recomendacao.classificacaoEmbutidos}</strong></div><br></br>

            <h3><strong>Resultado Ótimo:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoOtimaEmbutidos}</strong></div><br></br>

            <h3><strong>Resultado Bom:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoBoaEmbutidos}</strong></div><br></br>

            <h3><strong>Doces e Sobremesas:</strong></h3>

            <div><strong>Frequencia: {props.recomendacao.frequenciaDocesSobremesas}</strong></div><br></br>
            <div><strong>Classificação: {props.recomendacao.classificacaoDocesSobremesas}</strong></div><br></br>

            <h3><strong>Resultado Ótimo:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoOtimaDocesSobremesas}</strong></div><br></br>

            <h3><strong>Resultado Bom:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoBoaDocesSobremesas}</strong></div><br></br>

            <h3><strong>Bebidas Alcoólicas:</strong></h3>

            <div><strong>Frequencia: {props.recomendacao.frequenciaBebidasAlcoolicas}</strong></div><br></br>
            <div><strong>Classificação: {props.recomendacao.classificacaoBebidasAlcoolicas}</strong></div><br></br>

            <h3><strong>Resultado Ótimo:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoOtimaBebidasAlcoolicas}</strong></div><br></br>

            <h3><strong>Resultado Bom:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoBoaBebidasAlcoolicas}</strong></div><br></br>

            <h3><strong>Oleaginosas e Sementes:</strong></h3>

            <div><strong>Frequencia: {props.recomendacao.frequenciaOleaginosasSementes}</strong></div><br></br>
            <div><strong>Classificação: {props.recomendacao.classificacaoOleaginosasSementes}</strong></div><br></br>

            <h3><strong>Resultado Ótimo:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoOtimaOleaginosasSementes}</strong></div><br></br>

            <h3><strong>Resultado Bom:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoBoaOleaginosasSementes}</strong></div><br></br>

            <h3><strong>Alimentos Integrais:</strong></h3>

            <div><strong>Frequencia: {props.recomendacao.frequenciaAlimentosIntegrais}</strong></div><br></br>
            <div><strong>Classificação: {props.recomendacao.classificacaoAlimentosIntegrais}</strong></div><br></br>

            <h3><strong>Resultado Ótimo:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoOtimaAlimentosIntegrais}</strong></div><br></br>

            <h3><strong>Resultado Bom:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoBoaAlimentosIntegrais}</strong></div><br></br>

            <h3><strong>Óleos e Gorduras:</strong></h3>

            <div><strong>Frequencia: {props.recomendacao.frequenciaOleosGorduras}</strong></div><br></br>
            <div><strong>Classificação: {props.recomendacao.classificacaoOleosGorduras}</strong></div><br></br>

            <h3><strong>Resultado Ótimo:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoOtimaOleosGorduras}</strong></div><br></br>

            <h3><strong>Resultado Bom:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoBoaOleosGorduras}</strong></div><br></br>

            <h3><strong>Gorduras Saudáveis:</strong></h3>

            <div><strong>Frequencia: {props.recomendacao.frequenciaGordurasSaudaveis}</strong></div><br></br>
            <div><strong>Classificação: {props.recomendacao.classificacaoGordurasSaudaveis}</strong></div><br></br>

            <h3><strong>Resultado Ótimo:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoOtimaGordurasSaudaveis}</strong></div><br></br>

            <h3><strong>Resultado Bom:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoBoaGordurasSaudaveis}</strong></div><br></br>

            <h3><strong>Bebe 2 Litros de Água por Dia:</strong></h3>

            <div><strong>Frequencia: {props.recomendacao.frequenciaBebe2LitrosDia}</strong></div><br></br>
            <div><strong>Classificação: {props.recomendacao.classificacaoBebe2LitrosDia}</strong></div><br></br>

            <h3><strong>Resultado Ótimo:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoOtimaBebe2LitrosDia}</strong></div><br></br>

            <h3><strong>Resultado Bom:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoBoaBebe2LitrosDia}</strong></div><br></br>

            <h3><strong>Come Devagar:</strong></h3>

            <div><strong>Frequencia: {props.recomendacao.frequenciaComeDevagar}</strong></div><br></br>
            <div><strong>Classificação: {props.recomendacao.classificacaoComeDevagar}</strong></div><br></br>

            <h3><strong>Resultado Ótimo:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoOtimaComeDevagar}</strong></div><br></br>

            <h3><strong>Resultado Bom:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoBoaComeDevagar}</strong></div><br></br>

            <h3><strong>Come Rápido:</strong></h3>

            <div><strong>Frequencia: {props.recomendacao.frequenciaComeRapido}</strong></div><br></br>
            <div><strong>Classificação: {props.recomendacao.classificacaoComeRapido}</strong></div><br></br>

            <h3><strong>Resultado Ótimo:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoOtimaComeRapido}</strong></div><br></br>

            <h3><strong>Resultado Bom:</strong></h3>
            <div><strong>Frequencia: {props.recomendacao.recomendacaoBoaComeRapido}</strong></div><br></br>

        </div>
    );
}

function Form(props)
{

    return (
        <form onSubmit={props.recoverFrequency}>
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

    );
}

export default Home