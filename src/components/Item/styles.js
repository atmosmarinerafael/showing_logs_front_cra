import styled from "styled-components";

export const ItemTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #000000;
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