import styled from "styled-components";

export const ServerComponentStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:1rem;
    border: solid 1px #000000;
    border-radius: 10px;

    h1 {
        font-size: 2rem;
        font-weight: 800;
        margin-top: 1rem;

    }
` 

export const ContainerTasks = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
`

export const TaskTag = styled.div`
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    padding: 10px 0;
    
`

export const BoxProcess = styled.div`
    height: 5rem;
    width: 10rem;
    background-color: ${props => props.color};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0.5rem;
`