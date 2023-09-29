import axios from "axios";
import { useEffect, useState } from "react"
import { BoxProcess, ContainerTasks, ServerComponentStyles, TaskTag } from "./styles";
import { ContainerItens } from "../Itens/styles";

export default function ServerTaskComponent() {
    const [taskList, setTaskList] = useState(undefined);


    useEffect(() => {
        const token = localStorage.getItem("token");

        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

        const promise = axios.get(`${process.env.REACT_APP_BACK_END_URL}/logs/LEME/GFS`, config);

        promise.then(res => {
            setTaskList(res.data);
        });
        
        promise.catch(err => console.log(err.response.data));

    }, [])

    return(<ServerComponentStyles>
        <h1>LEME</h1>
        <ContainerTasks>
            {taskList?.map( task => 
            <TaskTag key={task._id}>
                <BoxProcess >
                    <p>{task.process}</p>
                    <p>{task.status}</p>
                </BoxProcess>
            </TaskTag>)}
        </ContainerTasks>
        
    </ServerComponentStyles>)
}