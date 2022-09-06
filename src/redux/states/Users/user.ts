import { createSlice } from "@reduxjs/toolkit";
import { IuserInfo } from "../../../models";

const INITIAL_STATE = {
    currentUser: {} as IuserInfo,
    userIsActive: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers:{
        updateCurrentUser:(state, action)=>{
            state.currentUser = action.payload
            state.userIsActive = true;
        }
    }
})

export const { updateCurrentUser } = userSlice.actions;
export default userSlice.reducer