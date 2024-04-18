import {gsap, TimelineLite} from "gsap";
import {useLocation} from 'next/link';
import React, {useEffect, useLayoutEffect, useRef, useState, memo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loading, loaded, setError, clearError } from "../../pages/api/redux/global";
// import {clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

const PageTransition = () => {
    let MainStore = useSelector(state => state)
    const location = useLocation();
    const dispatch = useDispatch();
    const globalLoader = useSelector(state => state.globalReducer.globalLoader);
    const globalError = useSelector(state => state.globalReducer.globalError);

    // preloader start on page/router change
    useEffect(() => {
        const tl = new TimelineLite()
        dispatch(loading())
        tl.to('.page-transition', {
            opacity: 1,
            duration: 1,
            // ease: 'Cubic.easeOut',
            display: 'flex'
        }).to('.page-transition .logo', {
            duration: .3,
            opacity: 1
        }, '-=.7')
    }, [location.pathname])


    // preloader end after page load
    useEffect(() => {
        const tl = new TimelineLite()

        if (!MainStore.globalReducer.globalLoader) {
            tl.to('.page-transition', {
                delay: 1,
                opacity: 0,
                duration: 1,
                display: 'none'
            }).to('.page-transition .logo', {
                duration: .6,
                opacity: 0
            }, '-=.6').fromTo('.home-banner,.InnerBanner', {
                opacity: 1,
                duration: 0.1
            }, {
                delay: 0.2,
                opacity: 1,
                duration: 0.3,
            })

        }
    }, [MainStore])



    useEffect(() => {
        document.querySelector('body').classList.remove('open_menu')
        document.querySelector('body').classList.remove('scroll-down')
        // Revert body overflow to its original value on blur
        document.body.style.overflow = 'auto';
        const html = document.querySelector('html')
        html.style.overflow = 'auto';
    }, []);

};

export default PageTransition;
