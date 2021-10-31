import React from "react";
import { Button, Form } from "react-bootstrap";
import Helmet from "react-helmet";
import { createGlobalStyle, styled } from "styled-components";

const GlobalStyles = createGlobalStyle`

body{
    font-family: 'Open Sans', sans-serif !important;
}

form{
        padding:30px;
    }


`;

class FormBootstrap extends React.Component {
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
      console.log(this.props);
    //   console.log(event.target.elements);
      const total = event.target.elements.length;

      console.log(total);

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
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                />
            </Helmet>

            <GlobalStyles />

            <Form onSubmit={this.props.recoverIMC}>
                {this.props.children}
            </Form>
          </div>
        );
      }

}

export default FormBootstrap;