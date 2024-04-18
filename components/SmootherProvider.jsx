import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import SmootherContext from './SmootherContext';
import gsap, {CSSPlugin, TimelineLite} from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import {useLocation} from 'next/link';
import {SplitText} from "gsap/SplitText";
import PageTransition from "./animations/PageTransition";
import drawSVG from 'gsap/dist/DrawSVGPlugin'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import {useDispatch, useSelector} from "react-redux";


const SmootherProvider =({children}) => {

    const location = useLocation();
    const [state, setState] = useState('');
    let MainStore = useSelector(state => state)
    const dispatch = useDispatch();


    const useIsomorphicLayoutEffect = typeof window !== "undefined"
        ? useLayoutEffect
        : useEffect;




    useIsomorphicLayoutEffect(() => {
        return () => {
            gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, CSSPlugin, drawSVG, ScrollToPlugin);

            let triggers = ScrollTrigger.getAll();
            triggers.forEach( trigger => {
                trigger.kill();
            });
            const box = document.querySelectorAll('.box');
            const boxplus = document.querySelectorAll('.boxr');
            const cta = document.querySelectorAll('.cta');
            let reveal = gsap.utils.toArray(".reveal");

            let smoother =null;
            if(window?.innerWidth > 767){
                 smoother = gsap.context(() => {
                    ScrollSmoother.create({
                        smooth: window?.innerWidth < 767 ? false : 3, // how long (in seconds) it takes to "catch up" to the native scroll position
                        effects: window?.innerWidth < 767 ? false : true, // looks for data-speed and data-lag attributes on elements


                        // speed: 3,
                        // normalizeScroll: true,
                        preventDefault: true,

                    });
                });

            }
            // setState(smoother)

            reveal.forEach((cont) => {
                let img = cont.querySelector("img");
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: cont,
                        toggleActions: "restart none none reset",
                    },
                });
                // parallax
                // if () {
                gsap.to(img, {
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: cont,
                        // markers: true,
                        scrub: true
                    }
                });
                // }

                // image reveal
                tl.fromTo(
                    cont,
                    1.5,
                    {
                        xPercent: -100,
                        ease: "Expo.easeInOut",
                    },
                    {
                        xPercent: 0,
                        ease: "Expo.easeInOut",
                    }
                );

                tl.fromTo(
                    img,
                    1.5,
                    {
                        xPercent: 100,
                        ease: "Expo.easeInOut",
                        scale: 1.1,
                    },
                    {
                        delay: -1.5,
                        xPercent: 0,
                        scale: 1,
                        ease: "Expo.easeInOut",
                    }
                );
            });




            if (window.innerWidth > 767) {


                box.forEach((el, index) => {
                    gsap.fromTo(el, {
                        y: -150,
                        ease: "none",
                    }, {
                        y: 0,
                        autoAlpha: 1,
                        ease: "power2",
                        duration: 1,
                        scrollTrigger: {
                            id: `${index + 1}`,
                            trigger: el,
                            scrub: true
                        }
                    });
                });

                boxplus.forEach((el, index) => {
                    gsap.fromTo(el, {
                        y: 150,
                        ease: "none",
                    }, {
                        y: 0,
                        autoAlpha: 1,
                        ease: "power2",
                        duration: 1,
                        scrollTrigger: {
                            id: `${index + 1}`,
                            trigger: el,
                            scrub: true
                        }
                    });
                });
                cta.forEach((el, index) => {
                    gsap.fromTo(el, {
                        y: -50,
                        ease: "none",
                    }, {
                        y: 0,
                        autoAlpha: 1,
                        ease: "power2",
                        duration: 1,
                        scrollTrigger: {
                            id: `${index + 1}`,
                            trigger: el,
                            scrub: true
                        }
                    });
                });


            }



            return () => {
                smoother.revert();
            };
        }
    });

    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new MutationObserver(handleMutation);
        const containerNode = containerRef.current;

        if (containerNode) {
            observer.observe(containerNode, { childList: true, subtree: true });
        }

        return () => {
            observer.disconnect();
        };
    }, []);


    const handleMutation = (mutationsList, observer) => {
        // Handle DOM changes here
    };

    PageTransition()

    const enablePopup = 'Y'


    return (
        <SmootherContext.Provider  ref={containerRef} value={state}>
            {/*{enablePopup === 'Y' && location?.pathname === '/' ? <OpeningModal /> : ''}*/}


            <div className="page-transition">
                <div className="logo">
                    <img loading={'lazy'} alt={'Shanta Securities Limited'} src={'/images/static/logo.svg'}/>
                </div>
            </div>

            {children}
        </SmootherContext.Provider>
    );
};

export default SmootherProvider;