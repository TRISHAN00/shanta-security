import {useEffect, useLayoutEffect, useRef} from "react";
import {gsap} from "gsap";
import {useLocation} from 'next/link';

export const Parallax = () => {
    const location = useLocation();
    // gsap.registerPlugin(ScrollTrigger, CSSPlugin);

    useEffect(() => {
        let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

        gsap.utils.toArray(".parallax").forEach((section, i) => {
            section.bg = section.querySelector(".parallax-bg");
            let parallaxSpeed = section.getAttribute('data-speed');

            gsap.fromTo(section.bg, {
                backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
            }, {
                backgroundPosition: () => `50% ${parallaxSpeed ? parallaxSpeed + 'px' : '150px'}`,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    // start: () => i ? "top bottom" : "top top",
                    // end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true // to make it responsive
                }
            });

        });
        const box = document.querySelectorAll('.box');
        const boxplus = document.querySelectorAll('.boxr');


        box.forEach((el, index) => {
            gsap.fromTo(el, {
                y: -80,
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
                y: 50,
                ease: "none",
            }, {
                y: 0,
                autoAlpha: 1,
                ease: "ease",
                duration: 0.5,
                scrollTrigger: {
                    id: `${index + 1}`,
                    trigger: el,
                    scrub: true
                }
            });
        });

    }, [location.pathname])
}


// how to use
// 1. Add 'parallax' class on the section. Add 'data-speed={speed string/number}' for parallax speed (if needed)
// 2. Add 'parallax' props on Img component.


export const ParallaxImg = () => {
    const location = useLocation();

    useEffect(() => {
        gsap.utils.toArray(".parallax-img").forEach((item, i) => {
            let getImg = item.querySelector('img')
            let parallaxSpeed = item.getAttribute('data-speed');
            gsap.to(getImg, {
                yPercent: parallaxSpeed ? parallaxSpeed : 15,
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    // markers: true,
                    scrub: true
                }
            });
        });
    }, [location.pathname])

}


// how to use (it will use for parallax image tag)
// 1. Add 'parallax-img' class on the section. Add 'data-speed={speed string/number}' for parallax speed (if needed)


