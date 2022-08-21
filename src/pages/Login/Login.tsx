import React, { useState } from "react"
import { Button } from "../../components/Button/Buton";
import { Container } from "../../components/Container/Container";
import { Form } from "../../components/FormElements/Form/Form";
import Input from "../../components/FormElements/Input/Input"
import OverlayLogin from "../../components/OverlayLogin/OverlayLogin";
import { IloginData } from "../../models/loginData";

function Login() {

  const [loginData, setLoginData]=useState<IloginData | {}>({
    user: '',
    password: ''
  });

  const handleChange=({target:{name, value}}:React.ChangeEvent<HTMLInputElement>)=>{
    setLoginData({...setLoginData, [name]:value});
  }


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