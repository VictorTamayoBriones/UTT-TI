import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "../../models";
import { AppStore } from "../../redux/store";
import { Nav } from "./styled-components/Nav"

function Navbar() {

  const navigate = useNavigate();
  const currentUser = useSelector((store: AppStore)=>store.user.currentUser);

  const { pathname } = useLocation();
  const path = pathname.slice(9);

  return (
    <Nav>
      <h3>{currentUser.name}</h3>
      <ul>
        { path != 'Dashboard' && path != 'login' ? <li><Link to={`/${PrivateRoutes.PRIVATE}`} >Dashboard</Link></li> : ''}
        <li><button onClick={()=>navigate(`/${PublicRoutes.LOGIN}`)} >Logout</button></li>
      </ul>
    </Nav>
  )
}
export default Navbar