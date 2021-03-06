
import FormBootstrap from '../components/FormBootstrap';
import { Button, Form } from "react-bootstrap";

function TesteForm ()
{

    return (
        <div>
            <header>
                <h2>Teste Form</h2>
            </header>
            <FormBootstrap>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Exemplo Select</Form.Label>
                    <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="success" type="submit">
                Submit
                </Button>
            </FormBootstrap>
        </div>
    )

}


export default TesteForm;