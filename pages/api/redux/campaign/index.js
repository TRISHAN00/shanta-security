import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/AxiosService";


const initialState = {
    loading: false,
    posts: [],
    error: '',
    detail: [],
    child: [],
    childError: '',
    detailLoading: false,
    detailError: ''
}

export const fetchPosts = createAsyncThunk("fetchCampaign", (params) => {
    return get(params);
});

export const fetchPostCampaignChild = createAsyncThunk("fetchCampaignChild", (params) => {
    return get(params);
});



export const fetchPostDetail = createAsyncThunk("fetchCampaignDetail", (params) => {
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

        builder.addCase(fetchPostCampaignChild.pending, (state, action) => {
            state.loading = true
            state.child = []
            state.childError = ''
        })
        builder.addCase(fetchPostCampaignChild.fulfilled, (state, action) => {
            state.loading = false
            state.child = action.payload
            state.childError = ''
        })
        builder.addCase(fetchPostCampaignChild.rejected, (state, action) => {
            state.loading = false
            state.child = []
            state.childError = action.error
        })

    }
})


export default postSlice.reducer
