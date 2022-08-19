import { Navigate, Route, Routes } from "react-router-dom"
import { CreateUser } from "../pages/CreateUser"
import { Err404 } from "../pages/Err404"
import { Login } from "../pages/Login"

function routes() {
  return (
    <Routes>
        <Route path="/" element={ <Navigate to="/login" /> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/create-user" element={ <CreateUser/> }/>
        <Route path="*" element={ <Err404/> }/>
    </Routes>
  )
}
export default routes