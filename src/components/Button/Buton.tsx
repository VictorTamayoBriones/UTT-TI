import { button } from "../../models/button.model"
import { ButtonStyled } from "./style/style"

export const Button = ({type, onClick, children}: button) =>{
    return(
        <ButtonStyled type={type} onClick={onClick}>{children}</ButtonStyled>
    )
}