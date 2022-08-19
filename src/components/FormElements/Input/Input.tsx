import { input } from "../../../models"
import { InputStyled } from "./style"

function Input({label, type, name, value, onChange}:input) {
  return (
    <InputStyled>
        <label>
            {label}
            <input type={type} name={name} value={value} onChange={onChange} />
        </label>
    </InputStyled>
  )
}
export default Input