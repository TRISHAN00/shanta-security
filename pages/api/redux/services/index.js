import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/AxiosService";


const initialState = {
    loading: false,
    posts: [],
    error: '',
    detail: [],
    detailLoading: false,
    detailError: '',
    research: [],
    researchLoading: false,
    researchError: ''
}

export const fetchPosts = createAsyncThunk("fetchService", (params) => {
    return get(params);
});

export const fetchResearchDetails = createAsyncThunk("fetchResearchDetails", (params) => {
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
        builder.addCase(fetchResearchDetails.pending, (state, action) => {
            state.researchLoading = true
            state.research = []
            state.research = ''
        })
        builder.addCase(fetchResearchDetails.fulfilled, (state, action) => {
            state.researchLoading = false
            state.research = action.payload
            state.research = ''
        })
        builder.addCase(fetchResearchDetails.rejected, (state, action) => {
            state.researchLoading = false
            state.research = []
            state.research = action.error
        })

    }
})


export default postSlice.reducer
