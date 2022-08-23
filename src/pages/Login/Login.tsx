import React, { useState } from "react"
import { Button } from "../../components/Button/Buton";
import { Container } from "../../components/Container/Container";
import { Form } from "../../components/FormElements/Form/Form";
import Input from "../../components/FormElements/Input/Input"
import OverlayLogin from "../../components/OverlayLogin/OverlayLogin";
import { IloginData } from "../../models/loginData";

function Login() {

  const INITAIL_STATE={
    user: '',
    password: ''
  }

  const [loginData, setLoginData]=useState<IloginData>(INITAIL_STATE);

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <Container width="50%" className="login">
      <h1>UTT - TI</h1>
      <Form>
        <Input label="User" type="text" name="user" value={loginData.user} onChange={handleChange} />
        <Input label="Password" type="password" name="password" value={loginData.password} onChange={handleChange} />
        <Button type="submit" >Login</Button>
      </Form>
      <OverlayLogin/>
    </Container>
  )
}
export default Login