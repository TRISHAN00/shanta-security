import {wrapper} from './api/store'
import GlobalStyle from "../styles/globalStyle";
import {DefaultSeo} from "next-seo";
import SEO from '../next-seo.config';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {AnimatePresence} from "framer-motion";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import '/styles/fonts.css';
import "lightgallery.js/dist/css/lightgallery.css";
import 'swiper/css';
import {gsap, CSSPlugin, TimelineLite} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {ScrollSmoother} from 'gsap/dist/ScrollSmoother';
import Router, {useRouter} from 'next/router'
import styled from "styled-components";
import AnimatedIconMoon from "../components/AnimatedIconMoon"
import Footer from "../components/Footer";
import MainMenuMobile from "../components/MainMenuMobile";
import PageTransition from "../components/PageTransition";
import {SplitUp} from "../components/animations/TextAnimation";
import dynamic from "next/dynamic";
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

const MainMenu = dynamic(() => import("../components/MainMenu"));

function MyApp({Component, pageProps}) {
    // const router = useRouter()
    const main = useRef();
    const router = useRouter();
    let tl = new TimelineLite();
    const [offset, setOffset] = useState('90');
    const [winWidth, setWinWidth] = useState(0)
    const location = useRouter();
    const el = useRef();
    const [hoveredAttr, setHoveredAttr] = useState('all');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHandleClickShanta, setIsHandleClickShanta] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    const remove_all_mobile = () => {
        var menuOpen = document.querySelectorAll(".Mobile-menu-wrap");
        var hamburger = document.querySelectorAll(".hamburger");
        var menu = document.querySelectorAll(".main_child");
        var menuSub = document.querySelectorAll(".main-child-sub ")
        var menuSubSub = document.querySelectorAll(".main-child-sub-sub");

        if (document.querySelector('mobile-menu__items')) {
            hamburger.forEach((i) => {
                i.classList.remove("menu-open");
                gsap.to(document.querySelector('mobile-menu__items'), {
                    opacity: 0,
                    duration: ".2",
                });
                gsap.to(document.querySelector('mobile-menu__items'), {
                    display: "none",
                });
            });

        }

        menuOpen.forEach((i) => {
            i.classList.remove("menu-open");

        });

        menu.forEach((i) => {
            i.classList.remove("submenu-open-mb");

        });
        menuSub.forEach((i) => {
            i.classList.remove("submenu-open-next");

        });
        menuSubSub.forEach((i) => {
            i.classList.remove("submenu-open-next-next");
            i.classList.remove("submenu-open-next");
            i.classList.remove("submenu-open-mb");

        });
        setHoveredAttr('all');

        const mobile = document.querySelector("#mobile-subscribe");
        mobile.classList.remove('visible')

        // disableBodyScroll(e);
        // clearAllBodyScrollLocks(e)
    }


    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Place your hook-based code here
            let smoother = ScrollSmoother.create({
                smooth: window?.innerWidth < 767 ? false : 3, // how long (in seconds) it takes to "catch up" to the native scroll position
                effects: window?.innerWidth < 767 ? false : true, // looks for data-speed and data-lag attributes on elements


                // speed: 3,
                // normalizeScroll: true,
                preventDefault: true,


            });



            ScrollTrigger.refresh();

            if (location.hash) {
                setTimeout(() => {
                    smoother.scrollTo(location.hash, 3)
                }, 500)
            }


            // Scroll to top on route change
            const handleRouteChange = (url) => {

            };

            Router.events.on('routeChangeComplete', handleRouteChange);

            return () => {
                Router.events.off('routeChangeComplete', handleRouteChange);
            };
        }
    }, [Router, router.pathname]);



    useEffect(() => {
        if (window.innerWidth > 767) {
            setWinWidth(true)
        } else {
            setWinWidth(false)
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth > 767) {
                setWinWidth(true)
            } else {
                setWinWidth(false)
            }
        });

    }, [Router, router.pathname])

    useEffect(() => {
        const updateOffset = () => {
            if (window.innerWidth > 767) {
                const container = document.querySelector('.container');
                if (container) {
                    setOffset(container.offsetLeft + 15);
                }
            }
        };
        updateOffset()
        // Add an event listener for the DOMContentLoaded event
        document.addEventListener('DOMContentLoaded', updateOffset);

        // Add event listener to update offset on window resize
        window.addEventListener('resize', updateOffset);
        window.addEventListener('load', updateOffset);

        return () => {
            document.removeEventListener('DOMContentLoaded', updateOffset);
            window.removeEventListener('resize', updateOffset);
            window.removeEventListener('load', updateOffset);
        };
    }, [Router, router.pathname]);

    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Initial window width
        setWindowWidth(window.innerWidth);

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [Router, router.pathname]);


    // floating button
    const FloatingButton = styled.div`
      position: fixed;
      top: 50%;
      right: 0;
      z-index: 999;
      transform: translateY(-50%);
      @media (max-width: 767px) {
        top: 20vh;
      }
    `;


    SplitUp()








    wrapper.getInitialAppProps(
        (store) =>
            async ({Component, ctx}) => {
                // Wait for all page actions to dispatch
                const pageProps = {
                    ...(Component.getInitialProps
                        ? await Component.getInitialProps({...ctx, store})
                        : {}),
                };

                // 2.1 Stop if on server
                if ((ctx.req) && Component.getInitialProps) {
                    // store.dispatch(END)
                    // used in hydration reducer
                    store.dispatch({type: SET_IS_SERVER})
                }

                // getServerSideProps is used
                const isServer = !ctx.req?.url?.startsWith("/_next");
                if (isServer && !Component.getInitialProps) {
                    // used in hydration reducer
                    store.dispatch({type: SET_IS_SERVER});
                }

                // 3. Return props
                return {
                    pageProps,
                };
            }
    );







    return (
        // <Provider store={store}>
        <>
            <ToastContainer position="top-right" autoClose={4000} closeOnClick hideProgressBar={true}/>
            <DefaultSeo {...SEO}/>
            <GlobalStyle/>

            {
                windowWidth > 767 ?
                    <MainMenu offset={offset}/>
                    :
                    <MainMenuMobile/>
            }

            <PageTransition/>
            <div className="dark dark_button">
                <FloatingButton>
                    <AnimatedIconMoon/>
                </FloatingButton>
            </div>
            <div id="smooth-wrapper" ref={main} ref={el}>
                <div id="smooth-content">
                    <AnimatePresence exitBeforeEnter>
                        <Component offset={offset} winWidth={winWidth} key={router?.pathname} {...pageProps} />
                    </AnimatePresence>
                    <Footer/>
                </div>
            </div>

        </>

        // </Provider>
    )
}

export default wrapper.withRedux(MyApp)
