import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Buton";
import { Container } from "../../components/Container/Container";
import { Form } from "../../components/FormElements/Form/Form";
import Input from "../../components/FormElements/Input/Input"
import OverlayLogin from "../../components/OverlayLogin/OverlayLogin";
import { PrivateRoutes } from "../../models";
import { IloginData } from "../../models/loginData";
import { updateCurrentUser } from "../../redux/states/user";
import { AppStore } from "../../redux/store";

function Login() {

  const users = useSelector((store:AppStore)=>store.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const INITAIL_STATE={matricula: '',password: ''}

  const [loginData, setLoginData]=useState<IloginData>(INITAIL_STATE);

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    const user = users.filter(user=>user.matricula === loginData.matricula && user.password === loginData.password);
    if( user != [] ){
      dispatch(updateCurrentUser(user[0].matricula));
      navigate(`/${PrivateRoutes.PRIVATE}`);
    }
  }

  return (
    <Container width="50%" className="login">
      <h1>UTT - TI</h1>
      <Form onSubmit={handleSubmit} >
        <Input label="User" type="text" name="matricula" value={loginData.matricula} onChange={handleChange} />
        <Input label="Password" type="password" name="password" value={loginData.password} onChange={handleChange} />
        <Button type="submit" >Login</Button>
        <Link to="/create-user" >Not have an account? Click here!</Link>
      </Form>
      <OverlayLogin/>
    </Container>
  )
}
export default Login