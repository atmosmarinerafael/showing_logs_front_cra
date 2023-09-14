import logo from "../../assets/images/logo_atm.png"
import { HeaderTag } from "./styles"

export default function Header() {
    return(
        <HeaderTag>
            <img src={logo} alt="logo da atmosmarine"/>
        </HeaderTag>
    )
}