import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Itens from "../../components/Itens/Itens";
import { useNavigate } from "react-router-dom";
import ServerTaskComponent from "../../components/ServerComponent/ServerComponent";

export default function HomePage() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(!token) {
            navigate("/sign-in");
        }
    }, [])

    return (
        <>
            <Header />
            {/* <Itens /> */}
            <ServerTaskComponent />            
        </>
    )
}