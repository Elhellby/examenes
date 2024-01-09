import { createSlice } from "@reduxjs/toolkit";

const initialState={
    blogs:[]
}

export const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers:{
        getAll:(state)=>{
            state.blogs=[]
        }
    }
})

export const {
    getAll
} = blogSlice.actions


export default blogSlice.reducer