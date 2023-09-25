import { useEffect, useState } from "react";
import { BoxProcess, ItemTag } from "./styles";
import axios from "axios";
import { URL_API } from "../../constants/url_api";

export default function Item() {
    const [boxesList, setboxesList] = useState([]);
    

    useEffect(() => {
        const token = localStorage.getItem("token");

        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

        const promise = axios.get(`${URL_API}/logs`, config);

        promise.then(res => {
            setboxesList(res.data);
        });
        
        promise.catch(err => console.log(err.response.data));

    }, []);

    return(
        <ItemTag>
            {boxesList.map( b => (
                <BoxProcess key={b._id} cor={"grey"}>
                    Teste
                </BoxProcess>
            ))}
            

        </ItemTag>
    )

}