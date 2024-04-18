import {gsap} from "gsap";
import {useEffect} from "react";
import {useLocation} from 'next/link';

export const ImageReveal = () => {
    const location = useLocation();

    useEffect(() => {
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

    }, [location.pathname])


}