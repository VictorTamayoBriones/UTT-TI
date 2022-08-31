import { createSlice } from "@reduxjs/toolkit";
import { IAlert } from "../../../components/Alert/model/alert.model";

const INITIAL_STATE:IAlert = {
    status: 'hidden',
    type: 'error',
    message:''
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState: INITIAL_STATE,
    reducers:{
        showAlert:(state, action)=>{
            state.status = action.payload.status;
            state.type = action.payload.type;
            state.message = action.payload.message;
        },
        clearAlert: (state, action)=>{
            state.status = INITIAL_STATE.status
            state.type = INITIAL_STATE.type
            state.message = INITIAL_STATE.message
        }
    }
})

export const { showAlert, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;