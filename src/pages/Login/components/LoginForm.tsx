import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button/Buton";
import { Form } from "../../../components/FormElements/Form/Form";
import Input from "../../../components/FormElements/Input/Input";
import { LoginContext } from "../context/LoginContext";

function LoginForm() {
    const { loginData, handleSubmit, handleChange }=useContext(LoginContext);

    return (
        <Form onSubmit={handleSubmit} >
            <Input label="User" type="text" name="matricula" value={loginData.matricula} onChange={handleChange} />
            <Input label="Password" type="password" name="password" value={loginData.password} onChange={handleChange} />
            <Button type="submit" >Login</Button>
            <Link to="/create-user" >Not have an account? Click here!</Link>
        </Form>
    )
}
export default LoginForm