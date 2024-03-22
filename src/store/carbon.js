import { createSlice } from "@reduxjs/toolkit";
export const carbondataSlice = createSlice({
    name: "user",
    initialState: {

        carbon:false,    
        pending: false,
        error: null,
        errorMessage: null,
    },
    reducers: {
        carbonData: (state, action) => {
            state.carbon = action.payload;
            state.pending = false;
            state.error = null;
            state.errorMessage = null;
        },
    },
});

export const {
    carbonData,

} =
    carbondataSlice.actions;
export default carbondataSlice.reducer;
