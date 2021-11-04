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

            <Form onSubmit={this.props.recoverData}>
                {this.props.children}
            </Form>
          </div>
        );
      }
}

export default FormBootstrap;