import styled from "styled-components";

export const SignInPageStyles = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #004C93;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 50%;
    height: 50%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50%;
    width: 80%;
`

export const Input = styled.input`
    width: 80%;
    height: 20%;
    border: none;
    border-radius: 5px;
    background-color: #E6E6E6;
    padding: 0 2.5%;

    &::placeholder {

    }

    &:focus {
       
    }

`

export const Button = styled.button`
    height: 20%;
    width: 85%;
    background-color: #E30078;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    
`