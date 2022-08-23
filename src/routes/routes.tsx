import { Navigate, Route, Routes } from "react-router-dom"
import { AuthGuard } from "../guard/auth.guard"
import { PrivateRoutes, PublicRoutes } from "../models"
import { CreateUser } from "../pages/CreateUser"
import { Err404 } from "../pages/Err404"
import { Login } from "../pages/Login"
import { Private } from "../pages/private"

function routes() {
  return (
    <Routes>
        <Route path="/" element={ <Navigate to={ PublicRoutes.LOGIN } /> }/>
        <Route path={ PublicRoutes.LOGIN } element={ <Login/> }/>
        <Route path={ PublicRoutes.CREATE_USER } element={ <CreateUser/> }/>
        <Route element={ <AuthGuard/> } >
          <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private/>} />
        </Route>
        <Route path="*" element={ <Err404/> }/>
    </Routes>
  )
}
export default routes