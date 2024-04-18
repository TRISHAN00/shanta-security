import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get,post} from "../../network/AxiosService";
import {getCSV} from "../../network/AxiosService";


const initialState = {
    loading: false,
    posts: [],
    error: '',
    detail: [],
    detailLoading: false,
    detailError: ''
}

export const fetchPosts = createAsyncThunk("fetchDataAPP", (params) => {
    return get(params);
});




const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })

    }
})


export default postSlice.reducer
