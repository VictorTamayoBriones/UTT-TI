import { useNavigate } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "../../models";
import { Nav } from "./styled-components/Nav"

function Navbar() {

  const navigate = useNavigate();

  return (
    <Nav>
      <h3>User Name</h3>
      <ul>
          <li><button onClick={()=>navigate(`/${PublicRoutes.LOGIN}`)} >Logout</button></li>
      </ul>
    </Nav>
  )
}
export default Navbar