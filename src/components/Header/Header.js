import { useNavigate } from "react-router-dom"
import logo from "../../assets/images/logo_atm.png"
import { HeaderTag, LogoutButton } from "./styles"
import { useEffect } from "react";

export default function Header() {
    const navigate = useNavigate();

    
    function handleLogout() {
        localStorage.clear();
        navigate("/sign-in");
    }

    return(
        <HeaderTag>
            <img src={logo} alt="logo da atmosmarine"/>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </HeaderTag>
    )
}