import React, { useState } from "react"
import { Button } from "../../components/Button/Buton";
import { Container } from "../../components/Container/Container";
import { Form } from "../../components/FormElements/Form/Form";
import Input from "../../components/FormElements/Input/Input"
import OverlayLogin from "../../components/OverlayLogin/OverlayLogin";

function Login() {

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e);
  }

  const [loginData, setLoginData]=useState({
    user: '',
    password: ''
  })

  return (
    <Container width="50%" className="login">
      <h1>UTT - TI</h1>
      <Form>
        <Input label="User" type="text" name="user" value={loginData.user} onChange={(e)=>handleChange(e)} />
        <Input label="Password" type="password" name="password" value={loginData.password} onChange={(e)=>handleChange(e)} />
        <Button>Login</Button>
      </Form>
      <OverlayLogin/>
    </Container>
  )
}
export default Login