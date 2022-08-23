import { Navigate, Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "../../models"
import { Dashboard } from "./Dashboard"

function Private() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to={ PrivateRoutes.DASHBOARD } /> } />
      <Route path={ PrivateRoutes.DASHBOARD } element={ <Dashboard/> }/>
    </Routes>
  )
}
export default Private