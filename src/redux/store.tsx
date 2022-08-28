import { configureStore } from "@reduxjs/toolkit";
import { IuserInfo } from "../models/userInfo.model";
import  userSlice  from "./states/Users/user";
import  usersSlice  from "./states/Users/users";


export interface AppStore{
    user:{matricula:string, userIsActive: boolean},
    users: IuserInfo[]
}

export const store = configureStore<AppStore>({
    reducer: {
        user: userSlice,
        users: usersSlice
    }
})


export default store