import { useEffect, useState } from "react";
import { BoxProcess, ItemTag } from "./styles";
import axios from "axios";

export default function Item() {
    const [boxesList, setboxesList] = useState([]);
    

    useEffect(() => {
        const config = {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTBkOGIxMDYyZDdkOTJlOTA5ZjdiODMiLCJpYXQiOjE2OTUzODYzOTN9.7USnSqFX3Y6zJf4eWqTfi2ZWsulWQBlRebU3gTRd-T8`,
            },
          };

        const promise = axios.get("http://164.152.62.95:5000/logs", config);

        promise.then(res => {
            console.log(res.data);
            setboxesList(res.data);
        });
        
        promise.catch(err => console.log(err.response.data));

    }, []);

    return(
        <ItemTag>
            {boxesList.map( b => (
                <BoxProcess cor={"grey"}>
                    Teste
                </BoxProcess>
            ))}
            

        </ItemTag>
    )

}