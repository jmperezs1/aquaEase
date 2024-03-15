import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import "./login.css"

function Login(){

    return(
        <div className="centro">
            <h1 className="titulo">Member Login</h1>
            <Form>
            <Form.Group className="mb-6" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Username" className="form"/>
            </Form.Group>

            <Form.Group className="mb-6" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" className="form"/>
            </Form.Group>
            </Form>
            <div className="button-container">
                <Button variant="secondary">LOGIN</Button>
            </div>
        </div>
    )

}

export default Login;