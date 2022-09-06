import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../models";
import { AppStore } from "../../redux/store";
import { Nav } from "./styled-components/Nav"

function Navbar() {

  const navigate = useNavigate();
  const currentUser = useSelector((store: AppStore)=>store.user.currentUser);
  return (
    <Nav>
      <h3>{currentUser.name}</h3>
      <ul>
          <li><button onClick={()=>navigate(`/${PublicRoutes.LOGIN}`)} >Logout</button></li>
      </ul>
    </Nav>
  )
}
export default Navbar