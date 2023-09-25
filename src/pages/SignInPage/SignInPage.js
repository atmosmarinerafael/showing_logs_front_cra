import { useState } from "react"
import { URL_API } from "../../constants/url_api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, FormContainer, SignInPageStyles, Container, Input } from "./styles";
import logo from "../../assets/images/logo_atm.png"

export default function SignInPage() {
    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const navigate = useNavigate();


    function sendData(e) {
        e.preventDefault();

        const body = {
            username, 
            password: password.toString()
        }

        const promise = axios.post(`${URL_API}/sign-in`, body);

        promise.then(() => {
            alert("Login realizado com sucesso!");
            navigate("/logs");
        });

        promise.catch(err => console.log(err.response.data));
    }


    return(
        <SignInPageStyles>
            <Container>
                <img src={logo} alt="logo da atmosmarine"/>
                <FormContainer>
                    <Input
                        placeholder="Usuário"
                        type="text"
                        onChange={e => setUsername(e.target.value)}
                    ></Input>
                    <Input
                        placeholder="Senha"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    ></Input>
                    <Button>
                        Entrar
                    </Button>
                </FormContainer>
                
                
            </Container>
        </SignInPageStyles>
    )
}