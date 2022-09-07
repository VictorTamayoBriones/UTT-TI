import { configureStore } from "@reduxjs/toolkit";
import { IAlert } from "../components/Alert/model/alert.model";
import { IuserInfo } from "../models/userInfo.model";
import  alertSlice from "./states/Alert/alert";
import ModalSlice, { IModal }  from "./states/Modal/modal";
import  userSlice  from "./states/Users/user";
import  usersSlice  from "./states/Users/users";


export interface AppStore{
    user: {currentUser: IuserInfo, userIsActive: boolean},
    users: IuserInfo[],
    alert: IAlert,
    modal: IModal
}

export const store = configureStore<AppStore>({
    reducer: {
        user: userSlice,
        users: usersSlice,
        alert: alertSlice,
        modal: ModalSlice
    }
})


export default store