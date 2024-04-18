import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    globalLoader: true,
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        loading: (state) => {
            state.globalLoader = true;
        }
    },
    extraReducers: {
        ['fetchDataHome/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['fetchInvestor/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['fetchAbout/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['fetchCareer/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['fetchEasy/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['fetchDownload/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['fetchContact/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['fetchProducts/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['fetchResearch/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['search/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['fetchShantaPathShala/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['fetchService/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['fetchCourse/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['fetchBlog/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['contactForm/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['careerForm/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['HomeForm/fulfilled']: (state, action) => {
            state.globalLoader = true
        },
        ['fetchBlogDetail/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['fetchCourseDetail/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['fetchResearchDataService/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['fetchDataSettings/fulfilled']: (state, action) => {
            state.globalLoader = false
        },
        ['fetchDataDetail/fulfilled']: (state, action) => {
            state.globalLoader = true
        },
        ['fetchDataDetailHome/fulfilled']: (state, action) => {
            state.globalLoader = true
        },
        ['fetchResearchCate/fulfilled']: (state, action) => {
            state.globalLoader = true
        },
        ['fetchTerms/fulfilled']: (state, action) => {
            state.globalLoader = true
        },
        ['fetchRefund/fulfilled']: (state, action) => {
            state.globalLoader = true
        },
        ['fetchCampaign/fulfilled']: (state, action) => {
            state.globalLoader = true
        },
        ['fetchCampaignChild/fulfilled']: (state, action) => {
            state.globalLoader = true
        },
        ['fetchCampaignDetail/fulfilled']: (state, action) => {
            state.globalLoader = true
        },

    }
})


export default globalSlice.reducer
export const {loaded, loading} = globalSlice.actions