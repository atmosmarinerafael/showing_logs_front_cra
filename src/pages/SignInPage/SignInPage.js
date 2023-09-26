import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, FormContainer, SignInPageStyles, Container, Input } from "./styles";
import logo from "../../assets/images/logo_atm.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignInPage() {
    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(token) {
            navigate("/");
        }
    }, [])

    

    function sendData(e) {
        e.preventDefault();
        setIsDisabled(true);

        const body = {
            username, 
            password
        }

        const promise = axios.post(`${process.env.REACT_APP_BACK_END_URL}/sign-in`, body);

        promise.then((res) => {
            setIsDisabled(false);
            localStorage.setItem("token", res.data.token);
            toast("Login realizado com sucesso!");
            navigate("/");
        });

        promise.catch((err) => {
            console.log(err.response.data)
            toast("deu ruim")
            setIsDisabled(false);
        });
    }


    return(
        <SignInPageStyles>
            <Container>
                <img src={logo} alt="logo da atmosmarine"/>
                <FormContainer onSubmit={sendData}>
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
                    <Button type="submit" disabled={isDisabled}>
                        Entrar
                    </Button>
                </FormContainer>
                
                
            </Container>
            
        </SignInPageStyles>
    )
}