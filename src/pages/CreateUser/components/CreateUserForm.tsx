import { useContext } from "react"
import { Link } from "react-router-dom"
import { Button } from "../../../components/Button"
import { Form } from "../../../components/FormElements/Form"
import { Input } from "../../../components/FormElements/Input"
import { CreateUserContext } from "../context/createUserContex"

function CreateUserForm() {

  const { createUserFormData, handleChange, handleSubmit } = useContext(CreateUserContext);

  return (
    <Form onSubmit={handleSubmit} >
        <Input label="Matricula" type="text" name="matricula" value={ createUserFormData.matricula } onChange={ handleChange }/>
        <Input label="E-mail" type="text" name="email" value={ createUserFormData.email } onChange={ handleChange }/>
        <Input label="Password" type="password" name="password" value={ createUserFormData.password } onChange={ handleChange }/>
        <Button type="submit" >Create User</Button>
        <Link to="/login" >I have an Account</Link>
    </Form>
  )
}
export default CreateUserForm