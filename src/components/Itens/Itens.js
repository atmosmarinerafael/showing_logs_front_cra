import { useEffect, useState } from "react";
import { BoxProcess, ContainerItens, ItemTag } from "./styles";
import axios from "axios";


export default function Itens() {
    const [boxesList, setboxesList] = useState([]);

    function handleColor( status ) {
        if(status === "ready") {
            return "green";
        } else if(status === "loading") {
            return "yellow";
        } else {
            return "red";
        }
    }
  

    useEffect(() => {
        const token = localStorage.getItem("token");

        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

        const promise = axios.get(`${process.env.REACT_APP_BACK_END_URL}/logs`, config);

        promise.then(res => {
            setboxesList(res.data);
        });
        
        promise.catch(err => console.log(err.response.data));

    }, []);

    return(
        <ContainerItens>
            {boxesList.map( b => (
                <ItemTag key={b._id}>
                    <BoxProcess  cor={"grey"}>
                        {b.process}
                    </BoxProcess>

                    <BoxProcess cor={() => handleColor(b.status)}>
                        {b.status}
                    </BoxProcess>
                </ItemTag>
            ))}
            

        </ContainerItens>
    )

}