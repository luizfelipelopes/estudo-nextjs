import { FormsAlarme } from "./styles";

function FormAlarme(props)
{
    return (
        <FormsAlarme>

            <form onSubmit={props.recoverIMC}>

                <div class="form-group">
                    <label htmlFor="peso">Peso: </label>
                    <input id="peso" type="text" name="peso" />
                </div>

                <div class="form-group">
                    <label htmlFor="altura">Altura: </label>
                    <input id="altura" type="text" name="altura" />
                </div>

                <div class="form-group">
                    <label htmlFor="idade">Idade: </label>
                    <input id="idade" type="text" name="idade" />
                </div>

                <div class="form-group">
                    <label htmlFor="massa">Você possui mais massa magra ou gordurosa no seu corpo ? </label>
                    <div class="group-radio">
                        <div><input id="massa" type="radio" name="massa" value="magra" /> Mais Massa Magra </div>
                        <div><input id="massa" type="radio" name="massa" value="gordurosa" /> Mais Massa Gordurosa</div>
                    </div>
                </div>

                <button type="submit">Gerar Alarme</button>
            </form>

        </FormsAlarme>
    );

}

export default FormAlarme;