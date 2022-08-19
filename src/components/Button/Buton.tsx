import { button } from "../../models/button.model"
import { ButtonStyled } from "./style"

export const Button = ({onClick, children}: button) =>{
    return(
        <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    )
}