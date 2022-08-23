import { configureStore } from "@reduxjs/toolkit";
import { IuserInfo } from "../models/userInfo.model";
import usersSlice  from "./states/users";

export interface AppStore{
    users: IuserInfo[]
}

export const store = configureStore<AppStore>({
    reducer: {
        users: usersSlice
    }
})


export default store