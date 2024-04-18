import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/AxiosService";


const initialState = {
    loading: false,
    posts: [],
    error: '',
    detail: [],
    detailLoading: false,
    detailError: '',
    researchFilter:[],
    researchFilterError:''
}




export const fetchPosts = createAsyncThunk("fetchResearch", (params) => {
    return get(params);
});

export const fetchResearch = createAsyncThunk("fetchResearchCate", (params) => {
    return get(params);
});


export const fetchPostDetail = createAsyncThunk("fetchDataDetail", (params) => {
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
        builder.addCase(fetchPostDetail.pending, (state, action) => {
            state.detailLoading = true
            state.detail = []
            state.detailError = ''
        })
        builder.addCase(fetchPostDetail.fulfilled, (state, action) => {
            state.detailLoading = false
            state.detail = action.payload
            state.detailError = ''
        })
        builder.addCase(fetchPostDetail.rejected, (state, action) => {
            state.detailLoading = false
            state.detail = []
            state.detailError = action.error
        })
        builder.addCase(fetchResearch.pending, (state, action) => {
            state.researchFilterLoading = true
            state.researchFilter = []
            state.researchFilterError = ''
        })
        builder.addCase(fetchResearch.fulfilled, (state, action) => {
            state.researchFilterLoading = false
            state.researchFilter = action.payload
            state.researchFilterError = ''
        })
        builder.addCase(fetchResearch.rejected, (state, action) => {
            state.researchFilterLoading = false
            state.researchFilter = []
            state.researchFilterError = action.error
        })

    }
})


export default postSlice.reducer
