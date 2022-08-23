import { useSelector } from "react-redux"
import { AppStore } from "../redux/store"
import { Navigate, Outlet, OutletProps } from "react-router-dom";
import { PublicRoutes } from "../models";

export const AuthGuard = () =>{
    const userState = useSelector((store:AppStore)=>store.user);
    return userState.userIsActive ? <Outlet/> : <Navigate to={ PublicRoutes.LOGIN } />
}