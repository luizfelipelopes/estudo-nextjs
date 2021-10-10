import { useState } from 'react';
import Recomendacao from '../Recomendacao';
import Form from '../Form';

var Avaliacao = require ('../../pages/FrequenciaAlimentar/classes/Avaliacao.js');

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

            <Form recoverFrequency={recoverFoodFrequency}/>
            <br />
            <div><strong>Minha Pontuacao é:</strong> {avaliacao} pontos</div><br />
            <div><strong>Meu Percentual é:</strong> {percentual} %</div><br />
            <div><strong>Sua vida saudável está:</strong> {classificacao} </div><br />

            <Recomendacao recomendacao={recomendacoes} />

        </div>
    );

}

export default TesteFrequenciaAlimentar;