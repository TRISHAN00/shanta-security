import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import * as Moon from './animations/custom_animated_moon.json'
import * as Sun from './animations/custom_animated_sun.json'
import Lottie from 'react-lottie';
import { useInView } from 'react-intersection-observer';

const AnimatedIconMoon = () => {

    const themedark = {
        loop: true,
        autoplay: true,
        animationData: Moon,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const themenormal = {
        loop: true,
        autoplay: true,
        animationData: Sun,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    // for dark theme start
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [initialLoad, setInitialLoad] = useState(false);
    const [ref, inView] = useInView(); // react-intersection-observer

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('darkTheme');
        if (storedTheme) {
            setIsDarkTheme(JSON.parse(storedTheme));
        } else {
            setIsDarkTheme(false);
        }
        setInitialLoad(false);
    }, []);

    useEffect(() => {
        if (!initialLoad) {
            localStorage.setItem('darkTheme', JSON.stringify(isDarkTheme));
        }

        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [isDarkTheme, initialLoad]);

    // Add a new useEffect to update the body class when the route changes
    useEffect(() => {
        const handleRouteChange = () => {
            if (isDarkTheme) {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
        };

        // Add event listener to listen for route changes
        window.addEventListener('popstate', handleRouteChange);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, [isDarkTheme]);

    // Lottie animation options
    const themeOptions = isDarkTheme ? Moon : Sun;


    return (
        <StyledMessage data-scroll-section className={`title `}
        >
            <div className={`theme-button ${isDarkTheme ? 'white' : ''}`} ref={ref} onClick={toggleTheme}>
                <div className="moon">
                    { inView &&

                        <Lottie  options={themedark}
                                height={50}
                                width={50}/>
                    }

                </div>
                <div className="sun">

                    { inView &&

                        <Lottie options={themenormal}
                                height={50}
                                width={50}/>
                    }

                </div>
            </div>
        </StyledMessage>
    );


};
const StyledMessage = styled.div`
  .theme-button {
    height: 70px;
    width: 70px;
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
    background: #3c3c3b;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s all cubic-bezier(.25, .74, .22, .99);
    position: relative;
    overflow: hidden;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

    .moon {
      transition: 1s all cubic-bezier(.25, .74, .22, .99);
      margin: auto;
      inset: 0px;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: rotate(-90deg);
    }

    .sun {
      opacity: 0;
      transition: 1s all cubic-bezier(.25, .74, .22, .99);
      position: absolute;
      margin: auto;
      inset: 0px;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

    }

    &.white {
      background: #F8F8F8;

      .sun {
        opacity: 1;

      }

      .moon {
        opacity: 0;
      }
    }
  }
`;


export default React.memo(AnimatedIconMoon);
