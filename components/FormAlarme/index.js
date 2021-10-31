// import { FormsAlarme } from "./styles";
import FormBootstrap from '../FormBootstrap';
import { Button, Form } from "react-bootstrap";
import GlobalStyle  from "../../styles/globals";
import React from 'react';


class FormAlarme extends React.Component{

    constructor(props) {
        super(props);
        console.log(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      }


      handleSubmit(event){
        event.preventDefault();
      //   console.log(event.target.elements);
        const total = event.target.elements.length;

      //   console.log(total);

        for(let i = 0; i < total; i++){

          let target = event.target.elements[i];

          if(target.type !== 'submit'){
            let value = target.type === 'checkbox' ? target.checked : target.value;
            let name = target.name;

            this.setState({
              [name]: value
            });

          }

        }
      }

    render() {

    return (

        <div>
            <FormBootstrap recoverIMC={this.props.recoverIMC}>

                <Form.Group className="mb-3 form-group" controlId="peso">
                    <Form.Label>Peso:</Form.Label>
                    <Form.Control type="text" name="peso" placeholder="Peso" />
                </Form.Group>

                <Form.Group className="mb-3 form-group" controlId="altura">
                    <Form.Label>Altura:</Form.Label>
                    <Form.Control type="text" name="altura" placeholder="Altura" />
                </Form.Group>

                <Form.Group className="mb-3 form-group" controlId="idade">
                    <Form.Label>Idade:</Form.Label>
                    <Form.Control type="text" name="idade" placeholder="Idade" />
                </Form.Group>

                <Form.Group className="mb-3 form-group" controlId="massa">
                    <Form.Label>Você possui mais massa magra ou gordurosa no seu corpo ?</Form.Label>
                    <div className="group-radio">
                        <Form.Check onChange={this.handleInputChange} name="massa" type="radio" value="magra" label="Mais Massa Magra" />
                        <Form.Check onChange={this.handleInputChange} name="massa" type="radio" value="gordurosa" label="Mais Massa Gordurosa" />
                    </div>
                </Form.Group>

                <Button onClick={this.props.toggleModal} variant="success" type="submit">Gerar Alarme</Button>

            </FormBootstrap>


            <GlobalStyle />
        </div>
    );
}

}

export default FormAlarme;