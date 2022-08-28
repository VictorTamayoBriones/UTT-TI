import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import OverlayLogin from "../../components/OverlayLogin/OverlayLogin";
import LoginForm from "./components/LoginForm";
import { LoginProvider } from "./context/LoginProvider";

function Login() {

  return (
    <Container width="50%" className="login">
      <h1>UTT - TI</h1>
      <LoginProvider>
        <LoginForm/>
      </LoginProvider>
      <OverlayLogin/>
    </Container>
  )

}
export default Login