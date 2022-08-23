import { Link } from "react-router-dom"
import { Button } from "../../components/Button/Buton"
import { Container } from "../../components/Container/Container"
import { Form } from "../../components/FormElements/Form/Form"
import Input from "../../components/FormElements/Input/Input"
import OverlayLogin from "../../components/OverlayLogin/OverlayLogin"

function CreateUser() {
  return (
    <Container width="50%" className="login">
      <h2>Sign up here!</h2>
      <Form>
        <Input label="Matricula" type="text" name="matricula" value="itir022809" onChange={()=>{}}/>
        <Input label="E-mail" type="text" name="email" value="victortamayo509@gmail.com" onChange={()=>{}}/>
        <Input label="Password" type="password" name="password" value="RubikTamayo123" onChange={()=>{}}/>
        <Button type="submit" >Create User</Button>
        <Link to="/login" >I have an Account</Link>
      </Form>
      <OverlayLogin/>
    </Container>
  )
}
export default CreateUser