import { Navigate, Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "../../models"
import { Dashboard } from "./Dashboard"
import Schedule from "./Schedule/Schedule"

function Private() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to={ PrivateRoutes.DASHBOARD } /> } />
      <Route path={ PrivateRoutes.DASHBOARD } element={ <Dashboard/> }/>
      <Route path={ PrivateRoutes.SCHEDULE } element={ <Schedule/> }/>
    </Routes>
  )
}
export default Private