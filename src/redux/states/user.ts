import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    matricula: '',
    userIsActive: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers:{
        updateCurrentUser:(state, action)=>{
            state.matricula = action.payload;
            state.userIsActive = true;
        }
    }
})

export const { updateCurrentUser } = userSlice.actions;
export default userSlice.reducer