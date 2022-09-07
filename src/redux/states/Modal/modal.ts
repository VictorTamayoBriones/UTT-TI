import { createSlice } from "@reduxjs/toolkit";

export interface IModal{
    statusOfModal: 'hidden' | 'visible'
}

const INITIAL_STATE:IModal = {
    statusOfModal: 'hidden'
}

export const ModalSlice = createSlice({
    name: 'modal',
    initialState: INITIAL_STATE,
    reducers:{
        changeModalState: (state, action)=>{
            state.statusOfModal = action.payload
        }
    }
})

export const { changeModalState } = ModalSlice.actions;
export default ModalSlice.reducer;