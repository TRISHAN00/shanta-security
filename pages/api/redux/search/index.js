import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/AxiosService";

const initialState = {
    loading: false,
    data: [],
    campaign: [],
    error: "",
};

export const fetchData = createAsyncThunk("search", (params) => {
    return get(params);
});
export const fetchDataCampaign = createAsyncThunk("searchCampaign", (params) => {
    return get(params);
});

const dataSlice = createSlice({
    name: "search",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
            state.data = [];
            state.error = "";
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error;
        });



        builder.addCase(fetchDataCampaign.pending, (state) => {
            state.loading = true;
            state.campaign = [];
            state.error = "";
        });
        builder.addCase(fetchDataCampaign.fulfilled, (state, action) => {
            state.loading = false;
            state.campaign = action.payload;
            state.error = "";
        });
        builder.addCase(fetchDataCampaign.rejected, (state, action) => {
            state.loading = false;
            state.campaign = [];
            state.error = action.error;
        });

    }
});

export default dataSlice.reducer;

