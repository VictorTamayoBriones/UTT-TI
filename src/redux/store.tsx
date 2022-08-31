import { configureStore } from "@reduxjs/toolkit";
import { IAlert } from "../components/Alert/model/alert.model";
import { IuserInfo } from "../models/userInfo.model";
import  alertSlice from "./states/Alert/alert";
import  userSlice  from "./states/Users/user";
import  usersSlice  from "./states/Users/users";


export interface AppStore{
    user:{matricula:string, userIsActive: boolean},
    users: IuserInfo[],
    alert: IAlert
}

export const store = configureStore<AppStore>({
    reducer: {
        user: userSlice,
        users: usersSlice,
        alert: alertSlice
    }
})


export default store