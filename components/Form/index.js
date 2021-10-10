import { Forms } from "./styles";

function Form(props)
{

    return (
        <Forms >
            <form onSubmit={props.recoverFrequency}>

            <label htmlFor="frutas">Frutas: </label>
            <select id="frutas">
                <option value="">Selecione</option>
                <option value="nuncaRaramente">Nunca / Raramente</option>
                <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                <option value="todosOsDias">Todos os Dias</option>
            </select>

            <br></br><br></br>

            <label htmlFor="massas">Massas: </label>
            <select id="massas">
                <option value="">Selecione</option>
                <option value="nuncaRaramente">Nunca / Raramente</option>
                <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                <option value="todosOsDias">Todos os Dias</option>
            </select>

            <br></br><br></br>

            <label htmlFor="folhas">Folhas: </label>
            <select id="folhas">
                <option value="">Selecione</option>
                <option value="nuncaRaramente">Nunca / Raramente</option>
                <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                <option value="todosOsDias">Todos os Dias</option>
            </select>

            <br></br><br></br>

            <label htmlFor="legumes">Legumes: </label>
            <select id="legumes">
                <option value="">Selecione</option>
                <option value="nuncaRaramente">Nunca / Raramente</option>
                <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                <option value="todosOsDias">Todos os Dias</option>
            </select>

            <br></br><br></br>

            <label htmlFor="laticinios">Laticínios: </label>
            <select id="laticinios">
                <option value="">Selecione</option>
                <option value="nuncaRaramente">Nunca / Raramente</option>
                <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                <option value="todosOsDias">Todos os Dias</option>
            </select>

            <br></br><br></br>

            <label htmlFor="comidasProntas">Comidas Prontas: </label>
            <select id="comidasProntas">
                <option value="">Selecione</option>
                <option value="nuncaRaramente">Nunca / Raramente</option>
                <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                <option value="todosOsDias">Todos os Dias</option>
            </select>

            <br></br><br></br>

            <label htmlFor="ultraprocessados">UltraProcessados: </label>
            <select id="ultraprocessados">
                <option value="">Selecione</option>
                <option value="nuncaRaramente">Nunca / Raramente</option>
                <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                <option value="todosOsDias">Todos os Dias</option>
            </select>

            <br></br><br></br>

            <label htmlFor="embutidos">Embutidos: </label>
            <select id="embutidos">
                <option value="">Selecione</option>
                <option value="nuncaRaramente">Nunca / Raramente</option>
                <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                <option value="todosOsDias">Todos os Dias</option>
            </select>

            <br></br><br></br>

            <label htmlFor="docesSobremesas">Doces e Sobremesas: </label>
            <select id="docesSobremesas">
                <option value="">Selecione</option>
                <option value="nuncaRaramente">Nunca / Raramente</option>
                <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                <option value="todosOsDias">Todos os Dias</option>
            </select>

            <br></br><br></br>

            <label htmlFor="bebidasAlcoolicas">Bebidas Alcoólicas: </label>
            <select id="bebidasAlcoolicas">
                <option value="">Selecione</option>
                <option value="nuncaRaramente">Nunca / Raramente</option>
                <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                <option value="todosOsDias">Todos os Dias</option>
            </select>

            <br></br><br></br>

            <label htmlFor="oleaginosasSementes">Oleaginosas e Sementes: </label>
            <select id="oleaginosasSementes">
                <option value="">Selecione</option>
                <option value="nuncaRaramente">Nunca / Raramente</option>
                <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                <option value="todosOsDias">Todos os Dias</option>
            </select>

            <br></br><br></br>

            <label htmlFor="alimentosIntegrais">Alimentos Integrais: </label>
            <select id="alimentosIntegrais">
                <option value="">Selecione</option>
                <option value="nuncaRaramente">Nunca / Raramente</option>
                <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                <option value="todosOsDias">Todos os Dias</option>
            </select>

            <br></br><br></br>

            <label htmlFor="oleosGorduras">Óleos e Gorduras: </label>
            <select id="oleosGorduras">
                <option value="">Selecione</option>
                <option value="nuncaRaramente">Nunca / Raramente</option>
                <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                <option value="todosOsDias">Todos os Dias</option>
            </select>

            <br></br><br></br>

            <label htmlFor="gordurasSaudaveis">Gorduras Saudáveis: </label>
            <select id="gordurasSaudaveis">
                <option value="">Selecione</option>
                <option value="nuncaRaramente">Nunca / Raramente</option>
                <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                <option value="todosOsDias">Todos os Dias</option>
            </select>

            <br></br><br></br>

            <label htmlFor="bebe2LitrosDia">Bebe 2 Litros de Água por Dia: </label>
            <select id="bebe2LitrosDia">
                <option value="">Selecione</option>
                <option value="nuncaRaramente">Nunca / Raramente</option>
                <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                <option value="todosOsDias">Todos os Dias</option>
            </select>

            <br></br><br></br>

            <label htmlFor="comeDevagar">Come Devagar: </label>
            <select id="comeDevagar">
                <option value="">Selecione</option>
                <option value="nuncaRaramente">Nunca / Raramente</option>
                <option value="1A2VezesMes">1 a 2 Vezes por Mês</option>
                <option value="1A2VezesSemana">1 a 2 Vezes por Semana</option>
                <option value="3A5VezesSemana">3 a 5 Vezes por Semana</option>
                <option value="todosOsDias">Todos os Dias</option>
            </select>

            <br></br><br></br>

            <label htmlFor="comeRapido">Come Rápido: </label>
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
    </Forms>
    );
}

export default Form;