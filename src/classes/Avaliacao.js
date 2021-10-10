class Avaliacao{

    constructor(selectFrutas, selectMassas, selectFolhas, selectLegumes,
        selectLaticinios, selectComidasProntas, selectUltraprocessados,
        selectEmbutidos, selectDocesSobremesas, selectBebidasAlcoolicas,
        selectOleaginosasSementes, selectAlimentosIntegrais, selectOleosGorduras,
        selectGordurasSaudaveis, selectBebe2LitrosDia, selectComeDevagar, selectComeRapido){

            this.varfrutas = {
                'nuncaRaramente' : 0,
                '1A2VezesMes'    : 2,
                '1A2VezesSemana' : 5,
                '3A5VezesSemana' : 8,
                'todosOsDias'    : 10
            };

            this.varmassas = {
                'nuncaRaramente' : 10,
                '1A2VezesMes'    : 8,
                '1A2VezesSemana' : 5,
                '3A5VezesSemana' : 2,
                'todosOsDias'    : 1
            };

            this.varfolhas = {
                'nuncaRaramente' : 0,
                '1A2VezesMes'    : 2,
                '1A2VezesSemana' : 5,
                '3A5VezesSemana' : 8,
                'todosOsDias'    : 10
            };

            this.varlegumes = {
                'nuncaRaramente' : 0,
                '1A2VezesMes'    : 2,
                '1A2VezesSemana' : 5,
                '3A5VezesSemana' : 8,
                'todosOsDias'    : 10
            };

            this.varlaticinios = {
                'nuncaRaramente' : 0,
                '1A2VezesMes'    : 2,
                '1A2VezesSemana' : 5,
                '3A5VezesSemana' : 8,
                'todosOsDias'    : 10
            };

            this.varcomidasProntas = {
                'nuncaRaramente' : 10,
                '1A2VezesMes'    : 8,
                '1A2VezesSemana' : 5,
                '3A5VezesSemana' : 2,
                'todosOsDias'    : 0
            };

            this.varultraprocessados = {
                'nuncaRaramente' : 10,
                '1A2VezesMes'    : 8,
                '1A2VezesSemana' : 5,
                '3A5VezesSemana' : 2,
                'todosOsDias'    : 0
            };

            this.varembutidos = {
                'nuncaRaramente' : 10,
                '1A2VezesMes'    : 8,
                '1A2VezesSemana' : 5,
                '3A5VezesSemana' : 2,
                'todosOsDias'    : 0
            };

            this.vardocesSobremesas = {
                'nuncaRaramente' : 10,
                '1A2VezesMes'    : 8,
                '1A2VezesSemana' : 5,
                '3A5VezesSemana' : 2,
                'todosOsDias'    : 0
            };

            this.varbebidasAlcoolicas = {
                'nuncaRaramente' : 10,
                '1A2VezesMes'    : 8,
                '1A2VezesSemana' : 5,
                '3A5VezesSemana' : 2,
                'todosOsDias'    : 0
            };

            this.varoleaginosasSementes = {
                'nuncaRaramente' : 0,
                '1A2VezesMes'    : 2,
                '1A2VezesSemana' : 5,
                '3A5VezesSemana' : 8,
                'todosOsDias'    : 10
            };

            this.varalimentosIntegrais = {
                'nuncaRaramente' : 0,
                '1A2VezesMes'    : 2,
                '1A2VezesSemana' : 5,
                '3A5VezesSemana' : 8,
                'todosOsDias'    : 10
            };

            this.varoleosGorduras = {
                'nuncaRaramente' : 10,
                '1A2VezesMes'    : 8,
                '1A2VezesSemana' : 5,
                '3A5VezesSemana' : 2,
                'todosOsDias'    : 0
            };

            this.vargordurasSaudaveis = {
                'nuncaRaramente' : 0,
                '1A2VezesMes'    : 2,
                '1A2VezesSemana' : 5,
                '3A5VezesSemana' : 8,
                'todosOsDias'    : 10
            };

            this.varbebe2LitrosDia = {
                'nuncaRaramente' : 0,
                '1A2VezesMes'    : 2,
                '1A2VezesSemana' : 5,
                '3A5VezesSemana' : 8,
                'todosOsDias'    : 10
            };

            this.varcomeDevagar = {
                'nuncaRaramente' : 0,
                '1A2VezesMes'    : 2,
                '1A2VezesSemana' : 5,
                '3A5VezesSemana' : 8,
                'todosOsDias'    : 10
            };

            this.varcomeRapido = {
                'nuncaRaramente' : 10,
                '1A2VezesMes'    : 8,
                '1A2VezesSemana' : 5,
                '3A5VezesSemana' : 2,
                'todosOsDias'    : 0
            };

            this.frutas = selectFrutas;
            this.massas = selectMassas;
            this.folhas = selectFolhas;
            this.legumes = selectLegumes;
            this.laticinios = selectLaticinios;
            this.comidasProntas = selectComidasProntas;
            this.ultraprocessados = selectUltraprocessados;
            this.embutidos = selectEmbutidos;
            this.docesSobremesas = selectDocesSobremesas;
            this.bebidasAlcoolicas = selectBebidasAlcoolicas;
            this.oleaginosasSementes = selectOleaginosasSementes;
            this.alimentosIntegrais = selectAlimentosIntegrais;
            this.oleosGorduras = selectOleosGorduras;
            this.gordurasSaudaveis = selectGordurasSaudaveis;
            this.bebe2LitrosDia = selectBebe2LitrosDia;
            this.comeDevagar = selectComeDevagar;
            this.comeRapido = selectComeRapido;

            this.recuperarPontos();
            this.calcularAvaliacao();
        }

    recuperarPontos()
    {

        this.pontoFrutas = this.varfrutas[this.frutas];

        this.pontoMassas = this.varmassas[this.massas];

        this.pontoFolhas = this.varfolhas[this.folhas];

        this.pontoLegumes = this.varlegumes[this.legumes];

        this.pontoLaticinios = this.varlaticinios[this.laticinios];

        this.pontoComidasProntas = this.varcomidasProntas[this.comidasProntas];

        this.pontoUltraprocessados = this.varultraprocessados[this.ultraprocessados];

        this.pontoEmbutidos = this.varembutidos[this.embutidos];

        this.pontoDocesSobremesas = this.vardocesSobremesas[this.docesSobremesas];

        this.pontoBebidasAlcoolicas = this.varbebidasAlcoolicas[this.bebidasAlcoolicas];

        this.pontoOleaginosasSementes = this.varoleaginosasSementes[this.oleaginosasSementes];

        this.pontoAlimentosIntegrais = this.varalimentosIntegrais[this.alimentosIntegrais];

        this.pontoOleosGorduras = this.varoleosGorduras[this.oleosGorduras];

        this.pontoGordurasSaudaveis = this.vargordurasSaudaveis[this.gordurasSaudaveis];

        this.pontoBebe2LitrosDia = this.varbebe2LitrosDia[this.bebe2LitrosDia];

        this.pontoComeDevagar = this.varcomeDevagar[this.comeDevagar];

        this.pontoComeRapido = this.varcomeRapido[this.comeRapido];


    }


    calcularAvaliacao()
    {
        this.pontos = this.pontoFrutas
        + this.pontoMassas
        + this.pontoFolhas
        + this.pontoLegumes
        + this.pontoLaticinios
        + this.pontoComidasProntas
        + this.pontoUltraprocessados
        + this.pontoEmbutidos
        + this.pontoDocesSobremesas
        + this.pontoBebidasAlcoolicas
        + this.pontoOleaginosasSementes
        + this.pontoAlimentosIntegrais
        + this.pontoOleosGorduras
        + this.pontoGordurasSaudaveis
        + this.pontoBebe2LitrosDia
        + this.pontoComeDevagar
        + this.pontoComeRapido;


        this.total = 170;
        this.porcentagem = this.calcularPorcentagem();
        this.resultado = 'Não Identificada';

        if(this.porcentagem >= 0 && this.porcentagem <= 39){
            this.resultado = 'Ruim';
        }

        if(this.porcentagem >= 40 && this.porcentagem <= 59){
            this.resultado = 'Desequilibrada';
        }

        if(this.porcentagem >= 60 && this.porcentagem <= 69){
            this.resultado = 'Regular';
        }

        if(this.porcentagem >= 70 && this.porcentagem <= 89){
            this.resultado = 'Boa';
        }

        if(this.porcentagem >= 90 && this.porcentagem <= 100){
            this.resultado = 'Ótima';
        }

    }


    calcularPorcentagem()
    {
        let porcentagem = ((this.pontos * 100)/this.total).toFixed(2);
        return porcentagem;
    }

    getPontos(){
        return this.pontos;
    }
    getPorcentagem(){
        return this.porcentagem;
    }

    getResultado(){
        return this.resultado;
    }

    recuperarFrequencia(selecao)
    {
        let frequencia;

        switch(selecao){
            case 'nuncaRaramente':
                frequencia = 'Nunca / Raramente';
            break;
            case '1A2VezesMes':
                frequencia = '1 a 2 Vezes por Mês';
            break;
            case '1A2VezesSemana':
                frequencia = '1 a 2 Vezes por Semeana';
            break;
            case '3A5VezesSemana':
                frequencia = '3 a 5 Vezes por Semeana';
            break;
            case 'todosOsDias':
                frequencia = 'Todos os Dias';
            break;
            default:
                frequencia = 'Não identificado';
                break;

        }

        return frequencia;

    }

    recuperarClassificacao(pontuacao)
    {
        let classificacao;

        switch(pontuacao){
            case 10:
                classificacao = 'Ingestão Ótima';
                break;
            case 8:
                classificacao = 'Ingestão Boa';
                break;
            default:
                classificacao = 'Melhorar';
                break;
        }

        return classificacao;

    }

    gerarRecomendacao(tipo, nivel)
    {
        let recomendacao = '';

        switch(tipo){
            case 'frutas':
               recomendacao = this.recuperarFrequencia(this.getKeyRecomendacao(this.varfrutas, nivel));
                break;
            case 'massas':
               recomendacao = this.recuperarFrequencia(this.getKeyRecomendacao(this.varmassas, nivel));
                break;
            case 'folhas':
               recomendacao = this.recuperarFrequencia(this.getKeyRecomendacao(this.varfolhas, nivel));
                break;
            case 'legumes':
               recomendacao = this.recuperarFrequencia(this.getKeyRecomendacao(this.varlegumes, nivel));
                break;
            case 'laticinios':
               recomendacao = this.recuperarFrequencia(this.getKeyRecomendacao(this.varlaticinios, nivel));
                break;
            case 'comidasProntas':
               recomendacao = this.recuperarFrequencia(this.getKeyRecomendacao(this.varcomidasProntas, nivel));
                break;
            case 'ultraProcessados':
               recomendacao = this.recuperarFrequencia(this.getKeyRecomendacao(this.varultraprocessados, nivel));
                break;
            case 'embutidos':
               recomendacao = this.recuperarFrequencia(this.getKeyRecomendacao(this.varembutidos, nivel));
                break;
            case 'docesSobremesas':
               recomendacao = this.recuperarFrequencia(this.getKeyRecomendacao(this.vardocesSobremesas, nivel));
                break;
            case 'bebidasAlcoolicas':
               recomendacao = this.recuperarFrequencia(this.getKeyRecomendacao(this.varbebidasAlcoolicas, nivel));
                break;
            case 'oleaginosasSementes':
               recomendacao = this.recuperarFrequencia(this.getKeyRecomendacao(this.varoleaginosasSementes, nivel));
                break;
            case 'alimentosIntegrais':
               recomendacao = this.recuperarFrequencia(this.getKeyRecomendacao(this.varalimentosIntegrais, nivel));
                break;
            case 'oleosGorduras':
               recomendacao = this.recuperarFrequencia(this.getKeyRecomendacao(this.varoleosGorduras, nivel));
                break;
            case 'gordurasSaudaveis':
               recomendacao = this.recuperarFrequencia(this.getKeyRecomendacao(this.vargordurasSaudaveis, nivel));
                break;
            case 'bebe2LitrosDia':
               recomendacao = this.recuperarFrequencia(this.getKeyRecomendacao(this.varbebe2LitrosDia, nivel));
                break;
            case 'comeDevagar':
               recomendacao = this.recuperarFrequencia(this.getKeyRecomendacao(this.varcomeDevagar, nivel));
                break;
            case 'comeRapido':
               recomendacao = this.recuperarFrequencia(this.getKeyRecomendacao(this.varcomeRapido, nivel));
                break;
            default:
                break;
        }

        return recomendacao;

    }

    getKeyRecomendacao(categoria, pontuacao)
    {
        let recomendacao = '';
        for (const property in categoria){
            if (categoria[property] === pontuacao){
                recomendacao = property;
            }
        }

        return recomendacao;
    }

}


module.exports = Avaliacao;