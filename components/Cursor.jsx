import styled from "styled-components";
import {forwardRef, useEffect, useImperativeHandle, useRef} from "react";
import {gsap} from "gsap";
import {hover, text} from "../styles/globalStyleVars"


const Circle = forwardRef(({size, delay}, ref) => {
    const el = useRef();

    useImperativeHandle(ref, () => {

        // return our API
        return {
            moveTo(x, y) {
                gsap.to(el.current, {x, y, delay});
            }
        };
    }, [delay]);

    return <div className={`circle ${size}`} ref={el}></div>;
});
const StyleCircle = styled.div`{

  .circle {
    position: fixed;
    background-color: ${text};
    width: 8px;
    height: 8px;
    left: -10px;
    top: -10px;
    border-radius: 100%;
    z-index: 9999999999999;
    transform: scale(0);
    // &.active {
    //     opacity: 1;
    //     transform: scale(0);
    // }
  }


}`;

const Follow = forwardRef(({size, delay}, ref) => {
    const el = useRef();

    useImperativeHandle(ref, () => {

        // return our API
        return {
            moveTo(x, y) {
                gsap.to(el.current, {x, y, delay});
            }
        };
    }, [delay]);

    return <div className={`circle-follow ${size}`} ref={el}></div>;
});
const StyleFollow = styled.div`{
  .circle-follow {
    position: fixed;
    background: ${hover};
    //border:1px solid #05070D;
    width: 20px;
    height: 20px;
    left: -21px;
    top: -21px;
    border-radius: 100%;
    user-select: none;
    pointer-events: none;
    z-index: 999999999;
    mix-blend-mode: multiply;
    //overflow: hidden;
    transform: scale(0);
    // &.active {
    //     transform: scale(3);
    // }  
  }

}`;


export const Cursor = () => {
    const circleRef = useRef(null);
    const followRef = useRef(null);


    const circleRefs = useRef([]);

    // reset on re-renders
    circleRefs.current = [];

    useEffect(() => {
        const {innerWidth, innerHeight} = window;
        circleRefs.current.forEach(ref => ref.moveTo(innerWidth / 2, innerHeight / 2));

        const onMove = ({clientX, clientY}) => {
            circleRefs.current.forEach(ref => ref.moveTo(clientX, clientY));
        };

        window.addEventListener("pointermove", onMove);

        return () => window.removeEventListener("pointermove", onMove);
    }, []);

    const addCircleRef = ref => {
        if (ref) {
            circleRefs.current.push(ref);
        }
    };

    // useEffect(() => {
    //     const moveCircle = (e) => {
    //         const rect = smoother.getBoundingClientRect();
    //         const scrollX = window.scrollX || window.pageXOffset;
    //         const scrollY = window.scrollY || window.pageYOffset;
    //
    //         gsap.to(circleRef.current, {
    //             duration: 0,
    //             x: e.clientX - rect.left + scrollX,
    //             y: e.clientY - rect.top + scrollY,
    //         });
    //
    //         gsap.to(followRef.current, {
    //             duration: 0.7,
    //             x: e.clientX - rect.left + scrollX,
    //             y: e.clientY - rect.top + scrollY,
    //         });
    //     };
    //
    //     const hoverFunc = () => {
    //         gsap.to(circleRef.current, {
    //             opacity: 1,
    //             scale: 0,
    //             ease: 'expo.inOut',
    //             duration: 0,
    //         });
    //         gsap.to(followRef.current, {
    //             scale: 2,
    //             ease: 'expo.inOut',
    //             duration: 0.3,
    //         });
    //     };
    //
    //     const unhoverFunc = () => {
    //         gsap.to(circleRef.current, {
    //             opacity: 1,
    //             scale: 1,
    //             duration: 0,
    //         });
    //         gsap.to(followRef.current, {
    //             scale: 1,
    //             duration: 0.3,
    //         });
    //     };
    //
    //     window.addEventListener("DOMContentLoaded", () => {
    //         moveCircle()
    //     });
    //
    //
    //
    //
    //
    //
    //
    //         const links = document.querySelectorAll('a, .custom-hover');
    //     links.forEach((link) => {
    //         link.addEventListener('mouseenter', hoverFunc);
    //         link.addEventListener('mouseleave', unhoverFunc);
    //     });
    //
    //     // Clean up event listeners on component unmount
    //     return () => {
    //         window.removeEventListener('mousemove', moveCircle);
    //         links.forEach((link) => {
    //             link.removeEventListener('mouseenter', hoverFunc);
    //             link.removeEventListener('mouseleave', unhoverFunc);
    //         });
    //     };
    // }, [smoother]);


    return (
        <StyleCursor>
            {/* Add your JSX code here */}
            <Circle size="sm" ref={addCircleRef} delay={0}/>
            <Follow size="md" ref={addCircleRef} delay={0.1}/>
        </StyleCursor>

    );
};

const StyleCursor = styled.div`


  .circle {
    position: fixed;
    background-color: ${text};
    width: 8px;
    height: 8px;
    left: -10px;
    top: -10px;
    border-radius: 100%;
    z-index: 9999999999999;
    transform: scale(0);
    // &.active {
    //     opacity: 1;
    //     transform: scale(0);
    // }
  }

  
  .circle-follow {
    position: fixed;
    background: ${hover};
    //border:1px solid #05070D;
    width: 20px;
    height: 20px;
    left: -21px;
    top: -21px;
    border-radius: 100%;
    user-select: none;
    pointer-events: none;
    z-index: 999999999;
    mix-blend-mode: multiply;
    //overflow: hidden;
    transform: scale(0);
    // &.active {
    //     transform: scale(3);
    // }  
  }
`;


export default Cursor;