import { input } from "../../../models"
import { InputStyled } from "./style/style"

function Input({label, type, name, value, onChange}:input) {
  return (
    <InputStyled>
      <input type={type} name={name} value={value} onChange={onChange}required />
      <label >{label}</label>
    </InputStyled>
  )
}
export default Input