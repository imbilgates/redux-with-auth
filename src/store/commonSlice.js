import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
    name: 'common',
    initialState: {
        showInput: false,
    },
    reducers: {
        toggleEdit: (state) => {
            state.showInput = !state.showInput;
        },
    }
})


export const { toggleEdit } = commonSlice.actions;
export default commonSlice.reducer;