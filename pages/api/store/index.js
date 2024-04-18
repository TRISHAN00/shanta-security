import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import homeReducer from '../redux/home';
import postReducer from '../redux/post';
import productsReducer from '../redux/products'
import aboutReducer from '../redux/about'
import careerReducer from '../redux/career'
import contactReducer from '../redux/contact'
import easytradeReducer from '../redux/easytrade'
import servicesReducer from '../redux/services'
import downloadsReducer from '../redux/downloads'
import shantapathshalaReducer from '../redux/shanta_pathshala'
import courseReducer from '../redux/course'
import researchReducer from '../redux/research'
import searchReducer from '../redux/search'
import globalReducer from '../redux/global'
import blogReducer from '../redux/blog'
import appReducer from '../redux/app'
import settingReducer from '../redux/settings'
import newsletterReducer from '../redux/newsletter'
import investorReducer from '../redux/investor'
import termsConditonReducer from '../redux/termscondition'
import refundReducer from '../redux/refundpolicy'
import campaignReducer from '../redux/campaign'
import newsReducer from '../redux/news'
// this is to set a flag for initial server renders
export const SET_IS_SERVER = 'SET_IS_SERVER'

function serverCheck(state = {isServer: false}, action) {
    const {type} = action
    switch (type) {
        case SET_IS_SERVER: {
            return {...state, isServer: true}
        }
        default:
            return state
    }
}


// combined all reducers
const combinedReducer = combineReducers({
    serverCheck,
    homeReducer,
    postReducer, productsReducer, aboutReducer, careerReducer, contactReducer, easytradeReducer
    , searchReducer, courseReducer, downloadsReducer, researchReducer, shantapathshalaReducer, globalReducer, settingReducer,
    blogReducer, appReducer, servicesReducer, newsletterReducer, investorReducer, termsConditonReducer, refundReducer, campaignReducer, newsReducer
})

// master reducer
const masterReducer = (state, actions) => {
    if (actions.type === HYDRATE) {
        return {...state, ...actions.payload}
    } else {
        return combinedReducer(state, actions)
    }
}

// main store
export const store = () => configureStore({
    reducer: masterReducer
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export const wrapper = createWrapper(store) //,{debug: true} -- if need debug
