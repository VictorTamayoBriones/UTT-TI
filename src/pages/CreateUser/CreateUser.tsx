import { Button } from "../../components/Button/Buton"
import Input from "../../components/FormElements/Input/Input"

function CreateUser() {
  return (
    <form>
      <Input label="Matricula" type="text" name="matricula" value="itir022809" onChange={()=>{}}/>
      <Input label="E-mail" type="text" name="email" value="victortamayo509@gmail.com" onChange={()=>{}}/>
      <Input label="Password" type="password" name="password" value="RubikTamayo123" onChange={()=>{}}/>
      <Button type="submit" >Create User</Button>
    </form>
  )
}
export default CreateUser