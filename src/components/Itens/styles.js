import styled from "styled-components";

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ItemTag = styled.div`
    width: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #000000;
    margin: 15px;
    padding: 10px 0;
    border-radius: 10px;
`

export const BoxProcess = styled.div`
    height: 3rem;
    width: 5rem;
    background-color: ${props => props.cor};
    display: flex;
    justify-content: center;
    align-items: center;
    margin:10px;
    border-radius: 0.5rem;
`