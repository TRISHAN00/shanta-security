import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { useEffect } from "react";
import {useRouter} from "next/router";

export const SplitUp = () => {
    const location = useRouter();
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);


    useEffect(() => {
        ScrollTrigger.refresh();

        gsap.utils.toArray('.split-up').forEach((item, i) => {
            const parentSplit = new SplitText(item, {
                wordsClass: "split-parent",
                type: "words",
                reduceWhiteSpace: false
            });
            const childSplit = new SplitText(item, {
                type: "words",
                wordsClass: "split-child",
                reduceWhiteSpace: false
            });

            const tl = gsap.timeline();

            childSplit.words.forEach(i => {
                i.parentNode.style.height = i.clientHeight + 'px';
                i.parentNode.style.overflow = 'hidden';
            });

            gsap.from(childSplit.words, {
                duration: 1,
                yPercent: 150,
                alpha: 1,
                scrollTrigger: {
                    trigger: item,
                    toggleActions: "restart none none reset",
                    end: `+ ${item.clientHeight}`
                }
            });
        });


        const box = document.querySelectorAll('.box');
        const boxplus = document.querySelectorAll('.boxr');
        const cta = document.querySelectorAll('.cta');
        let reveal = gsap.utils.toArray(".reveal");
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
    }, [location.pathname]);

    return null; // This component doesn't render anything, so return null
};

export default SplitUp; // Export the component as default
