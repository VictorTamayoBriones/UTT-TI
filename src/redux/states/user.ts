import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    matricula: '',
    userIsActive: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers:{}
})

export default userSlice.reducer