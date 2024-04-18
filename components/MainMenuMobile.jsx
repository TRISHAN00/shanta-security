import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {Col, Container, Form, Row} from 'react-bootstrap';
import {gsap, TimelineLite} from "gsap"
import {BsChevronRight, BsX} from "react-icons/bs";
import OutsideClickHandler from 'react-outside-click-handler';
import {hover} from "../styles/globalStyleVars";
import ButtonSubmit from "./Button";
import Title from "./Title";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import Link from "next/link";
import {ApiServices} from "../pages/api/network/ApiServices";
import {postForm} from "../pages/api/redux/contact";


const MainMenu = ({data, hovered, MenuOpen, ClickShanta}) => {

    // variable
    const location = useRouter();
    const {pathname} = location;
    let tl = new TimelineLite();
    const mobileMenuRaf = useRef()
    const menuRef = useRef()
    const hamburgerRef = useRef();
    const hamburgerDesktopRef = useRef();
    const hamburgerCloseRef = useRef();
    const searchClickRef = useRef()
    const searchItemRef = useRef()
    const [activehanta, setActivehanta] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(MenuOpen ? MenuOpen : false);
    const [isHandleClickShanta, setIsHandleClickShanta] = useState(ClickShanta ? ClickShanta : false);
    const [hoveredAttr, setHoveredAttr] = useState(hovered ? hovered : 'all');
    const [searchInput, setSearchInput] = useState('')
    const [windowWidth, setWindowWidth] = useState(0);
    const [offset, setOffset] = useState('90');

    // get offset for container
    useEffect(() => {
        if (windowWidth > 767) {
            setOffset(document.querySelector('.container').offsetLeft + 15)
        }
    })

    useEffect(() => {
        const updateOffset = () => {
            if (windowWidth > 767) {
                const container = document.querySelector('.container');
                if (container) {
                    setOffset(container.offsetLeft + 15);
                }
            }
        };

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
    }, []);

    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            setWindowWidth(windowWidth);
        };

        // Initial window width
        setWindowWidth(windowWidth);

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    // search handle
    const handleInput = (e) => {
        setSearchInput(e.target.value);
    }


    const searchSubmit = (e) => {
        e.preventDefault()
        if (searchInput === '') {
            return;
        } else {
            window.location.href = `/search?keyword=${searchInput}`;
            document.querySelector('.search-desktop').classList.remove('search-open')
            gsap.to(searchItemRef.current, {
                duration: .4, height: 0, opacity: 0, overflow: 'hidden'
            })
            gsap.to(searchItemRef.current.querySelector('.container'), {
                opacity: 0,
            }, '-=.4')
            gsap.to(searchItemRef.current, {
                display: 'none'
            })
        }
        // setSearchInput('')


    }


    // remov all menu and search function
    const remove_all = (e) => {
        var search = document.querySelectorAll(".search-desktop");

        search.forEach((i) => {
            i.classList.remove("search-open");
        });
        // disableBodyScroll(e);
        // clearAllBodyScrollLocks(e)
    }


    const remove_search = (e) => {
        setSearchInput('')

        document.querySelector('.search-desktop').classList.remove('search-open')
        gsap.to(searchItemRef.current, {
            duration: .4, height: 0, opacity: 0, overflow: 'hidden'
        })
        gsap.to(searchItemRef.current.querySelector('.container'), {
            opacity: 0,
        }, '-=.4')
        gsap.to(searchItemRef.current, {
            display: 'none'
        })
        document.querySelector('body').classList.remove('open_menu')
        // disableBodyScroll(e);
        // clearAllBodyScrollLocks(e)
        // remove_all();
    }


    const remove_all_mobile = (e) => {
        var menuOpen = document.querySelectorAll(".Mobile-menu-wrap");
        var hamburger = document.querySelectorAll(".hamburger");
        var menu = document.querySelectorAll(".main_child");
        var menuSub = document.querySelectorAll(".main-child-sub ")
        var menuSubSub = document.querySelectorAll(".main-child-sub-sub");
        hamburger.forEach((i) => {
            i.classList.remove("menu-open");
            gsap.to(menuRef.current, {
                opacity: 0, duration: ".2",
            });
            gsap.to(menuRef.current, {
                display: "none",
            });
        });
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


    }


    useEffect(() => {

        const body = document.body;
        const scrollUp = "scroll-up";
        const scrollDown = "scroll-down";


        // Mobile menu start
        // for mobile submenu


        let getDropdownChildMobile = document.querySelectorAll(".main_child");
        getDropdownChildMobile.forEach((i) => {
            i.addEventListener("click", (r) => {

                if (r.target.parentElement.classList.contains('submenu-open-mb')) {
                    r.target.parentElement.classList.remove("submenu-open-mb");

                } else {
                    r.target.parentElement.classList.toggle("submenu-open-mb");
                    document.querySelector('.submenu-open-mb').addEventListener('click', (ne) => {
                        let parent = ne.target.parentElement;
                        parent.parentElement.classList.remove("submenu-open-mb");
                    })

                }
            });
        });


        let nextStepChild = document.querySelectorAll(".main-child-sub");
        nextStepChild.forEach((i) => {
            i.addEventListener("click", (r) => {

                if (r.target.parentElement.classList.contains('submenu-open-next')) {
                    r.target.parentElement.classList.remove("submenu-open-next");

                } else {
                    r.target.parentElement.classList.toggle("submenu-open-next");
                    document.querySelector('.submenu-open-next').addEventListener('click', (ne) => {
                        let parent = ne.target.parentElement;
                        parent.parentElement.classList.remove("submenu-open-next");
                    })

                }
            });
        });


        let nextStepChildChild = document.querySelectorAll(".main-child-sub-sub");
        nextStepChildChild.forEach((i) => {
            i.addEventListener("click", (r) => {
                if (r.target.parentElement.classList.contains('submenu-open-next-next')) {
                    r.target.parentElement.classList.remove("submenu-open-next-next");
                } else {
                    r.target.parentElement.classList.toggle("submenu-open-next-next");
                    document.querySelector('.submenu-open-next-next').addEventListener('click', (ne) => {
                        let parent = ne.target.parentElement;
                        parent.parentElement.classList.remove("submenu-open-next-next");
                    })

                }
            });
        });


        // menu click on mobile
        hamburgerRef.current.addEventListener("click", (e) => {
            document.querySelector(".hamburger").classList.add("menu-open");
            document.querySelector(".Mobile-menu-wrap").classList.add("menu-open");
            gsap.to(menuRef.current, {
                display: "block",
            });
            gsap.to(menuRef.current, {
                opacity: 1, duration: ".3",
            });
            // disableBodyScroll(e);
            // clearAllBodyScrollLocks(e)
        });
        hamburgerCloseRef.current.addEventListener("click", (e) => {
            document.querySelector(".hamburger").classList.remove("menu-open");
            document.querySelector(".Mobile-menu-wrap").classList.remove("menu-open");
            gsap.to(menuRef.current, {
                opacity: 0, duration: ".2",
            });
            gsap.to(menuRef.current, {
                display: "none",
            });
            // enableBodyScroll(e);
            // clearAllBodyScrollLocks(e);
            remove_all_mobile(e);

        });

        // Mobile menu end




        //---- on scroll menu fixed action
        if (document.body.classList.contains("scroll-up")) {
            document.body.classList.remove("scroll-up");
        }
        // Clear any active scroll locks


    }, []);


    // in home page menu & logo click off

    const handleHamburgerClick = (e) => {
        // Add or remove class from the body element
        setIsMenuOpen(prevActiveham => !prevActiveham);
        setIsHandleClickShanta(true); // Set flag to true
        const height = isMenuOpen ? "0" : "auto";
        const opacity = isMenuOpen ? "0" : "1";
        const hidden = isMenuOpen ? "" : "menu-open";


        tl.to(document.querySelector(".desktop-menu__bottom"), {
            height, duration: 0.6, ease: 'Power1.easeOut'
        }, "-=0.3")

            .to(document.querySelector(".mega_menu"), {
                height, duration: 0.3, ease: 'Power1.easeOut'
            })
            .to('.desktop-menu__bottom .mega_menu .content_wrap li', {
                duration: .5, opacity, delay: 0.3, stagger: 0.1, ease: 'Power1.easeOut'

            }, "0")
            .to('.desktop-menu__bottom .mega_menu .content_wrap .dc-btn', {
                duration: .5, opacity, stagger: 0.1, ease: 'Power1.easeOut'

            }, "0")
            .to('.desktop-menu__bottom .mega_menu .fixed_menu .content', {
                duration: .5, opacity, ease: 'Power1.easeOut'

            }, '-=0.5')
            .to('.desktop-menu__bottom .mega_menu .fixed_menu  .social li', {
                duration: .5, opacity, ease: 'Power1.easeOut'

            })
            .to(document.querySelector('body'), {
                overflow: hidden, duration: 0.6, ease: 'Power1.easeOut',
            }, '-=0.3');


        if (activehanta) {
            handleclickshanta();
        }
        if (isMenuOpen) {
            setTimeout(() => {
                document.querySelector('body').classList.remove('open_menu')

                // enableBodyScroll(e)
            }, 500)
        } else {
            setTimeout(() => {
                document.querySelector('body').classList.add('open_menu')
                // disableBodyScroll(e)
                // clearAllBodyScrollLocks(e);
            }, 300)
        }
    };

    const handleclickshanta = (e) => {
        setActivehanta(prevActivehanta => !prevActivehanta);
        setIsHandleClickShanta(true); // Set flag to true
        const height = activehanta ? "0" : "100%";
        const opacity = activehanta ? "0" : "1";
        const width = activehanta ? "65.5%" : "34.5%";
        const widthm = activehanta ? "0" : "34.5%";
        const padding = activehanta ? "0" : "70px";
        const widthlink = activehanta ? "0" : "100%";
        const transform = activehanta ? "-100%" : "0";


        tl.to(document.querySelector(".desktop-menu__bottom .mega_menu .middle-menu"), {
            width: widthm,
            paddingLeft: padding,
            paddingRight: padding,
            opacity: '1',
            duration: 0.3,
            ease: 'power2.out',
            xPercent: transform
        }, '-=0.5')
            .to('.desktop-menu__bottom .mega_menu .middle-menu li', {
                duration: 0.2, opacity, x: 0, stagger: 0.1, ease: 'power2.out'
            }, "-=0.4")
            .to(document.querySelector(".desktop-menu__bottom .fixed_menu"), {
                width, duration: 0.5, ease: 'power2.out'
            }, "-=0.3");

        document.querySelector('body').classList.add('open_menu')

    };


    useEffect(() => {
        const handleClickOutside = (event) => {

        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });




    const removehidden = (e) => {
        setHoveredAttr('all');

        // const mobile = document.querySelector("#mobile-subscribe");
        // mobile.classList.remove('visible')
        e.preventDefault();
    };


    const handleMouseEnter = (attr) => {
        setHoveredAttr(attr);
    };


    const headerRefMobile = useRef(null);


    //---- on scroll menu fixed action
    useEffect(() => {
        const body = document.body;
        const scrollUp = "scroll-up";
        const scrollDown = "scroll-down";
        let lastScroll = 0;
        let howMuchScroll = 50;

        if (windowWidth > 776) {
            window.addEventListener("scroll", () => {
                let currentScroll = window.pageYOffset;

                if (currentScroll <= howMuchScroll) {
                    body.classList.remove(scrollUp);
                    return;
                }
                if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
                    // down
                    body.classList.remove(scrollUp);
                    body.classList.add(scrollDown);
                } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
                    // up
                    body.classList.remove(scrollDown);
                    body.classList.add(scrollUp);
                }
                lastScroll = currentScroll;
            });

        }

        if (document.body.classList.contains("scroll-down")) {
            document.body.classList.remove("scroll-down");
        }

    }, []);


    // news lett
    const dispatch = useDispatch();
    const responseData = useSelector(state => state.home);


    const {register, handleSubmit, formState, reset} = useForm({mode: 'all'});


    //--- form submit
    const success = (msg) => toast.success(msg, {
        position: "top-right", autoClose: 4000, closeOnClick: true, progress: undefined,

    });

    const error = (msg) => toast.error(msg, {
        position: "top-right", autoClose: 4000, closeOnClick: true, progress: undefined,

    });


    const onSubmit = (e) => {

        let api_services = ApiServices.ADDSUBSCRIP;

        var formData = new FormData();
        formData.append('email', e?.email);

        if (e.email !== '') {
            dispatch(postForm([ApiServices, formData]));
            success('Successfully Submitted')
            reset();
        }
    };
    let count = 0;
    const onError = (errors) => {
        Object.values(errors).forEach((error) => {
            count++;
        });
        if (count > 0) {
            toast.error('please fill with  correct inputs');
        }
        count = 0;
    };
    useEffect(() => {
        if (responseData && responseData?.error !== '') {
            error(responseData?.error)
        }
        if (responseData && responseData?.success !== '') {
            // success(responseData?.success)
        }

    }, [responseData])

    //
    const handleClick = () => {
        router.push('/'); // Navigate to the root route ('/')
    };


    return (

        <StyledMobileMenu>
            <div className={`overlay ${showSubmenu ? 'sub-menu-open ' : null}`}></div>


            <div ref={headerRefMobile} className="Mobile-menu-wrap menu-bar">
                <Container>
                    <Row className="mobile-menu" ref={mobileMenuRaf}>
                        <Col className="logo forNormal">
                            {location?.pathname === "/" ?
                                <a> <img src="/images/static/logo.svg" alt={'Shanta Securities Limited'}/>
                                </a>


                                :

                                <Link onClick={handleClick} href="/">
                                    <a> <img src="/images/static/logo.svg" alt={'Shanta Securities Limited'}/>
                                    </a>
                                </Link>

                            }

                        </Col>
                        <Col className="logo forClose">
                            {location?.pathname === "/" ?
                                <a> <img src="/images/static/logo_dark.svg" alt={'Shanta Securities Limited'}/>
                                </a>
                                :
                                <Link onClick={handleClick} href="/">
                                    <a> <img src="/images/static/logo_dark.svg" alt={'Shanta Securities Limited'}/>
                                    </a>
                                </Link>

                            }

                        </Col>
                        <Col className="hamburger">
                             <span ref={hamburgerRef}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="18" viewBox="0 0 32 18">
                                        <g id="Hamburger_-_Light" data-name="Hamburger - Light"
                                           transform="translate(1 1)">
                                            <line id="Line_3" data-name="Line 3" x2="30" fill="none" stroke="#fff"
                                                  strokeLinecap="round" stroke-width="2"/>
                                            <line id="Line_4" data-name="Line 4" x2="30" transform="translate(0 8)"
                                                  fill="none" stroke="#fff" strokeLinecap="round" stroke-width="2"/>
                                            <line id="Line_5" data-name="Line 5" x2="30" transform="translate(0 16)"
                                                  fill="none" stroke="#fff" strokeLinecap="round" stroke-width="2"/>
                                        </g>
                                    </svg>

              </span>
                             <span ref={hamburgerCloseRef}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24.042" height="24.042" viewBox="0 0 24.042 24.042">
  <g id="Group_19860" data-name="Group 19860" transform="translate(-337.373 -27.979)">
    <line id="Line_4" data-name="Line 4" x2="30" transform="translate(338.787 29.393) rotate(45)" fill="none"
          stroke="#3c3c3b" strokeLinecap="round" stroke-width="2"/>
    <line id="Line_4154" data-name="Line 4154" x2="30" transform="translate(360 29.394) rotate(135)" fill="none"
          stroke="#3c3c3b" strokeLinecap="round" stroke-width="2"/>
  </g>
</svg>


              </span>
                        </Col>
                        <div className="mobile-menu__items" ref={menuRef}>
                            <div className="mobile-menu__items__top">
                                <ul>
                                    <li>
                                        <a className={''} href="tel:+8801313778778">

                                            <svg xmlns="http://www.w3.org/2000/svg" width={`${windowWidth}`}
                                                 height="44"
                                                 viewBox={`0 0 ${windowWidth} 44`}>
                                                <g id="Group_19869" data-name="Group 19869"
                                                   transform="translate(-15 -998)">
                                                    <g id="Rectangle_492" data-name="Rectangle 492"
                                                       transform="translate(15 998)" fill="none" stroke="#c6c6c6"
                                                       stroke-width="1" opacity="0.5">
                                                        <rect width={`${windowWidth}`} height="44" rx="22"
                                                              stroke="none"/>
                                                        <rect x="0.5" y="0.5" width={`${windowWidth}`} height="43"
                                                              rx="21.5" fill="none"/>
                                                    </g>
                                                    <g id="Rectangle_493" data-name="Rectangle 492"
                                                       transform="translate(15 998)" fill="none" stroke="#c6c6c6"
                                                       stroke-width="1" opacity="0" strokeDasharray="1 520">

                                                        <rect width={`${windowWidth}`} height="44" rx="22"
                                                              stroke="none"/>
                                                        <rect x="0.5" y="0.5" width={`${windowWidth}`} height="43"
                                                              rx="21.5" fill="none"/>
                                                    </g>
                                                </g>
                                            </svg>
                                            <span>
                                                <img className={'call_icon'} src="/images/static/call_icon.svg"
                                                     alt={'Shanta Securities Limited'}/>
                                                01313778778</span>

                                        </a>
                                    </li>
                                    <ButtonSubmit margin={'40px 0 40px'} padding={'0'} borderColor={'transparent'}
                                                  width={'100%'} border={'none'}
                                                  newtablink={'https://portal.shantasecurities.com/signup'}
                                                  target={'_blank'} text={'Open an Account'}
                                                  color={'#FFFFFF'}
                                                  hoverBackground={'#3C3C3B'}
                                                  background={'#978C21'}/>

                                    <li>
                                        <Link href="/search">

                                            <a>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={`${windowWidth}`}
                                                     height="44"
                                                     viewBox={`0 0 ${windowWidth} 44`}>
                                                    <g id="Group_19869" data-name="Group 19869"
                                                       transform="translate(-15 -998)">
                                                        <g id="Rectangle_492" data-name="Rectangle 492"
                                                           transform="translate(15 998)" fill="none" stroke="#c6c6c6"
                                                           stroke-width="1" opacity="0.5">
                                                            <rect width={`${windowWidth}`} height="44" rx="22"
                                                                  stroke="none"/>
                                                            <rect x="0.5" y="0.5" width={`${windowWidth}`} height="43"
                                                                  rx="21.5" fill="none"/>
                                                        </g>
                                                        <g id="Rectangle_493" data-name="Rectangle 492"
                                                           transform="translate(15 998)" fill="none" stroke="#c6c6c6"
                                                           stroke-width="1" opacity="0" strokeDasharray="1 520">
                                                            <rect width={`${windowWidth}`} height="44" rx="22"
                                                                  stroke="none"/>
                                                            <rect x="0.5" y="0.5" width={`${windowWidth}`} height="43"
                                                                  rx="21.5" fill="none"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                           viewBox="0 0 20 20">
  <g id="search" transform="translate(-0.196)">
    <path id="Path_8648" data-name="Path 8648"
          d="M8.438,16.472A8.236,8.236,0,1,1,16.68,8.236a8.248,8.248,0,0,1-8.242,8.236Zm0-14.91a6.675,6.675,0,1,0,6.68,6.675,6.685,6.685,0,0,0-6.68-6.675Zm11.529,18.21a.78.78,0,0,0,0-1.1l-3.5-3.493a.781.781,0,1,0-1.1,1.1l3.5,3.493a.782.782,0,0,0,1.1,0Z"
          transform="translate(0 0)" fill="#3c3c3b"/>
  </g>
</svg>
Search</span>
                                            </a>

                                        </Link>
                                    </li>

                                </ul>
                            </div>

                            <ul className="mobile-menu__items__ul">

                                <li className={'main_child'}>
                                    <a href="javascript:void(0)">
                                        Shanta Securities Limited
                                        <svg id="Group_19302" data-name="Group 19302" xmlns="http://www.w3.org/2000/svg"
                                             width="24" height="24" viewBox="0 0 24 24">
                                            <g id="Rectangle_492" data-name="Rectangle 492" fill="none" stroke="#3c3c3b"
                                               stroke-width="1" opacity="0.5">
                                                <rect width="24" height="24" rx="12" stroke="none"/>
                                                <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="none"/>
                                            </g>
                                            <g id="Group_4824" data-name="Group 4824" transform="translate(7 7)">
                                                <g id="Group_4823" data-name="Group 4823" transform="translate(5)">
                                                    <line id="Line_9" data-name="Line 9" y1="5" x2="5"
                                                          transform="translate(0 5)" fill="none" stroke="#3c3c3b"
                                                          strokeLinecap="round" stroke-width="1"/>
                                                    <line id="Line_10" data-name="Line 10" x1="5" y1="5" fill="none"
                                                          stroke="#3c3c3b" strokeLinecap="round" stroke-width="1"/>
                                                </g>
                                                <line id="Line_11" data-name="Line 11" x2="10"
                                                      transform="translate(0 5)" fill="none" stroke="#3c3c3b"
                                                      strokeLinecap="round" stroke-width="1"/>
                                            </g>
                                        </svg>

                                    </a>
                                    <ul className={'submenu'}>
                                        <div className="main_title">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24">
                                                <g id="Group_19302" data-name="Group 19302"
                                                   transform="translate(24 24) rotate(180)">
                                                    <g id="Rectangle_492" data-name="Rectangle 492" fill="none"
                                                       stroke="#3c3c3b" stroke-width="1" opacity="0.5">
                                                        <rect width="24" height="24" rx="12" stroke="none"/>
                                                        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5"
                                                              fill="none"/>
                                                    </g>
                                                    <g id="Group_4824" data-name="Group 4824"
                                                       transform="translate(7 7)">
                                                        <g id="Group_4823" data-name="Group 4823"
                                                           transform="translate(5)">
                                                            <line id="Line_9" data-name="Line 9" y1="5" x2="5"
                                                                  transform="translate(0 5)" fill="none"
                                                                  stroke="#3c3c3b" strokeLinecap="round"
                                                                  stroke-width="1"/>
                                                            <line id="Line_10" data-name="Line 10" x1="5" y1="5"
                                                                  fill="none" stroke="#3c3c3b" strokeLinecap="round"
                                                                  stroke-width="1"/>
                                                        </g>
                                                        <line id="Line_11" data-name="Line 11" x2="10"
                                                              transform="translate(0 5)" fill="none" stroke="#3c3c3b"
                                                              strokeLinecap="round" stroke-width="1"/>
                                                    </g>
                                                </g>
                                            </svg>
                                            Shanta Securities Limited
                                        </div>
                                        {/*?id=who-we-are*/}
                                        {/*?id=mission-vision*/}
                                        {/*?id=core-values*/}
                                        {/*?id=our-board*/}
                                        {/*?id=expert*/}
                                        <li><Link href='/about'><a>Who We Are</a></Link></li>
                                        <li><Link href='/about#mission-vision'><a>Our Mission and Vision </a></Link>
                                        </li>
                                        <li><Link href='/about#core-values'><a>Our Core Values </a></Link></li>
                                        <li><Link
                                            href='/about#our-board'><a>Our Board </a></Link>
                                        </li>
                                        <li><Link href='/about#our-team'><a>Our Team</a></Link>
                                        </li>
                                    </ul>
                                </li>


                                <li>
                                    <Link href='/our-services'><a>Our Services</a></Link>
                                </li>

                                <li>
                                    <Link href='/research'><a>Research Center</a></Link>
                                </li>
                                <li>
                                    <Link href='/investment-calculator'>
                                        {/*Shanta's Pathshala<sub>TM</sub>*/}
                                        <a> Investment Calculator </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href=""><a>Career</a></Link>
                                </li>
                                <li>
                                    <Link href="/contact"><a>Contacts</a></Link>
                                </li>


                                <li>
                                    <Link href="/downloads">
                                        <a> Downloads</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/campaign">
                                        <a>Campaign</a>
                                    </Link>
                                </li>
                            </ul>

                            <div className="mobile-menu__items__bottom">
                                <div className="" onClick={() => handleMouseEnter('mobile-news')}>
                                    <ButtonSubmit border={'0'} margin={'40px 0 0'} padding={'0'}
                                                  borderColor={'transparent'}
                                                  width={'100%'} text={'Subscribe to Newsletter'}
                                                  color={'#FFFFFF'}
                                                  hoverBackground={hover}
                                                  background={'#C6C6C6'}/>


                                </div>
                                <ul data-tab={'mobile-news'} id={'mobile-subscribe'}
                                    className={`submenu ${hoveredAttr === 'mobile-news' ? 'visible' : 'hidden'}`}>
                                    <div onClick={() => removehidden()} className="main_title">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24">
                                            <g id="Group_19302" data-name="Group 19302"
                                               transform="translate(24 24) rotate(180)">
                                                <g id="Rectangle_492" data-name="Rectangle 492" fill="none"
                                                   stroke="#3c3c3b" stroke-width="1" opacity="0.5">
                                                    <rect width="24" height="24" rx="12" stroke="none"/>
                                                    <rect x="0.5" y="0.5" width="23" height="23" rx="11.5"
                                                          fill="none"/>
                                                </g>
                                                <g id="Group_4824" data-name="Group 4824"
                                                   transform="translate(7 7)">
                                                    <g id="Group_4823" data-name="Group 4823"
                                                       transform="translate(5)">
                                                        <line id="Line_9" data-name="Line 9" y1="5" x2="5"
                                                              transform="translate(0 5)" fill="none"
                                                              stroke="#3c3c3b" strokeLinecap="round"
                                                              stroke-width="1"/>
                                                        <line id="Line_10" data-name="Line 10" x1="5" y1="5"
                                                              fill="none" stroke="#3c3c3b" strokeLinecap="round"
                                                              stroke-width="1"/>
                                                    </g>
                                                    <line id="Line_11" data-name="Line 11" x2="10"
                                                          transform="translate(0 5)" fill="none" stroke="#3c3c3b"
                                                          strokeLinecap="round" stroke-width="1"/>
                                                </g>
                                            </g>
                                        </svg>
                                        Subscribe to Newsletter
                                    </div>

                                    <div className="form-content">
                                        <Title margin={'0 0 40px 0'}
                                               text={'Want updates on the go? </br> Sign up for Daily Newsflash</br> and never miss a thing!'}/>

                                        <Form className={``}
                                              onSubmit={''}>
                                            <Form.Group className="form-group" controlId="formBasicEmail">

                                                <Form.Control autocomplete="off"

                                                              name='email' type="email"
                                                              placeholder="Your Email Address"/>
                                                <div className="dc-btn-submit">
                                                    <ButtonSubmit width={'100'} text={'Subscribe'} color={'#FFFFFF'}
                                                                  hoverBackground={'#3C3C3B'}
                                                                  background={'#978C21'}/>
                                                </div>
                                            </Form.Group>

                                        </Form>
                                    </div>
                                </ul>

                                <ButtonSubmit border={'none'} src={'easytrade'} margin={'20px 0 0'} padding={'0'} icon
                                              width={'100%'}
                                              text={'Shanta EasyTrade'} color={'#FFFFFF'}
                                              hoverBackground={'#3C3C3B'}
                                              background={'#978C21'}/>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>

        </StyledMobileMenu>


    );
};


const StyledMobileMenu = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    z-index: 99999;
    display: flex;
    align-items: center;
    transition: background .4s cubic-bezier(0.4, 0, 0, 1);
    overflow: visible !important;
    //box-shadow: 0 0 20px rgba(0, 0, 0, 0.20);
    //display: none;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.20);

    .Mobile-menu-wrap {
        width: 100% !important;
    }

    .call_icon {
        height: 20px;
    }

    .forClose {
        display: none !important;

        a {
            img {

                height: 40px !important;
            }
        }
    }

    &.menu-open {
        background: rgba(255, 255, 255, 1) !important;

        .forNormal {
            display: none !important;
        }

        .forClose {
            display: block !important;
        }
    }

    .mobile-menu {

        .logo {
            display: flex;
            align-items: center;
            padding: 0 15px;

            span {
                width: 220px !important;
                //height: 30px !important;
            }

            a {
                display: flex;

                svg, img {
                    height: 40px;
                    width: 200px;
                }
            }

        }

        .hamburger {
            position: relative;
            display: flex;
            align-items: center;
            //justify-content: flex-end;

            span {
                position: absolute !important;
                right: 15px !important;
                //height: 25px !important;
                display: flex;

                p {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 20px;
                    color: #F9F9F9;
                    margin: 0 10px 0 0;
                }

                &:nth-of-type(2) {
                    display: none !important;
                }
            }

            &.menu-open span {
                &:nth-of-type(1) {
                    display: none !important;
                }

                &:nth-of-type(2) {
                    display: flex !important;
                    right: 20px !important;
                }
            }
        }

        &__items {
            display: none;
            position: absolute;
            opacity: 0;
            background-color: #F8F8F8;
            height: calc(100vh - 80px);
            top: 80px;
            left: 0;
            width: 100%;
            z-index: 99;
            padding: 60px 15px 120px 15px;
            overflow: auto;
            transition: opacity .5s cubic-bezier(0.4, 0, 0, 1);
            overflow-y: scroll;

            &:after {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                background: #C4C4C4;
                height: 1px;
                //content: "";
                margin: 0 auto;
                width: calc(100% - 30px);
            }

            &__top {
                ul {
                    li {
                        &:first-child {
                            a {
                                justify-content: center;
                            }

                            svg {
                                width: 100%;

                                #_16634 {
                                    fill: #3C3C3B;
                                }

                                #Rectangle_493 {
                                    transition: 1s all ease
                                }

                                width: 100%;
                                position: absolute;
                                left: 0;
                                right: 0;
                            }

                            &:hover {
                                span {
                                    color: rgb(60, 60, 59);
                                }

                                svg {
                                    #Rectangle_493 {
                                        opacity: 1;
                                        stroke-dasharray: 520px;
                                    }
                                }
                            }

                        }

                        &:last-child {
                            a {
                                justify-content: center;
                            }

                            svg {
                                width: 100%;

                                #_16634 {
                                    fill: #3C3C3B;
                                }

                                #Rectangle_493 {
                                    transition: 1s all ease
                                }

                                width: 100%;
                                position: absolute;
                                left: 0;
                                right: 0;
                            }

                            &:hover {
                                span {
                                    color: rgb(60, 60, 59);
                                }

                                svg {
                                    #Rectangle_493 {
                                        opacity: 1;
                                        stroke-dasharray: 520px;
                                    }
                                }
                            }

                        }

                        a {
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: flex-start;
                            position: relative;
                            margin-bottom: 30px;


                            img {
                                margin-right: 10px;
                            }

                            span {
                                display: flex;
                            }
                        }

                        &:nth-last-child(1) a {
                            a {
                                justify-content: center;
                            }

                            svg {
                                width: 100%;

                                #_16634 {
                                    fill: #3C3C3B;
                                }

                                #Rectangle_493 {
                                    transition: 1s all ease
                                }

                                width: 100%;
                                position: absolute;
                                left: 0;
                                right: 0;
                            }

                            span {
                                svg {
                                    display: flex;
                                    position: unset;
                                    margin-right: 8px;
                                }
                            }

                            &:hover {
                                span {
                                    color: rgb(60, 60, 59);
                                }

                                svg {
                                    #Rectangle_493 {
                                        opacity: 1;
                                        stroke-dasharray: 520px;
                                    }
                                }
                            }

                        }

                    }
                }

                margin-bottom: 80px;
            }

            &__bottom {
                .submenu {
                    padding: 60px 15px 30px;
                    position: fixed;
                    right: 0;
                    top: 80px;
                    left: 0;
                    bottom: 0;
                    background: #F8F8F8;
                    width: 100%;
                    opacity: 0;
                    visibility: hidden;
                    transition: 0.7s all cubic-bezier(0.4, 0, 0, 1);
                    transform: translateX(100%);
                    overflow-x: scroll;
                    z-index: 9;

                    &::-webkit-scrollbar {
                        display: none;
                    }

                    .main_title {
                        text-align: left;
                        display: flex;
                        color: #3C3C3B;
                        margin-bottom: 60px;
                        font-weight: 500;
                        font-size: 20px;
                        line-height: 28px;

                        svg {
                            margin-right: 20px;
                            position: relative;
                            z-index: -1;
                        }
                    }

                    padding-bottom: 18px;
                    border-bottom: 1px solid rgba(225, 228, 230, 0.5) !important;
                    margin-bottom: 18px;

                    &:last-child {
                        margin-bottom: 0;
                        border-bottom: none !important;
                    }

                    .form-group {
                        position: relative;

                        .form-control {
                            height: 45px;
                            //padding-left: 40px;
                            background-color: transparent;
                            border-radius: 40px;
                            font-size: 16px;
                            font-weight: 500;
                            padding-left: 30px;
                            color: #3C3C3B;
                            autocomplete: off;
                            border-color: rgba(60, 60, 59, 0.5);

                            ::placeholder {
                                color: rgba(60, 60, 59, 0.5);
                                font-size: 16px;
                                font-weight: 500;
                                outline: none;
                                border: none;

                            }

                            :focus {
                                outline: none;
                                outline-color: #3C3C3B;
                                border-color: #3C3C3B;
                            }
                        }

                        .dc-btn-submit {
                            position: absolute;
                            top: 0;
                            right: 0;

                            .dc-btn {
                                height: 45px;
                            }

                            a {
                                display: flex;
                                height: 100%;
                                width: 100%;
                                -webkit-box-align: center;
                                align-items: center;
                                -webkit-box-pack: center;
                                justify-content: center;
                                font-size: 16px;
                                font-weight: 500;
                                margin: 0px;
                                line-height: 18px;
                                color: #3C3C3B;
                                text-transform: capitalize;
                                border: none;
                                letter-spacing: 0px;
                                position: relative;
                                border-radius: 30px;
                                overflow: hidden;

                                span {
                                    //color: #3C3C3B;
                                }
                            }
                        }
                    }


                    a {
                        color: #3C3C3B;
                        font-weight: 500;
                        font-size: 20px;
                        line-height: 28px;
                    }

                    &.visible {
                        opacity: 1;
                        visibility: visible;
                        transform: translateX(0);

                    }

                    &.hidden {
                        opacity: 0;
                        visibility: hidden;
                        transform: translateX(100%);
                    }
                }
            }

            &__ul {

                li {
                    padding-bottom: 18px;
                    border-bottom: 1px solid rgba(225, 228, 230, 0.5) !important;
                    margin-bottom: 18px;

                    &:last-child {
                        margin-bottom: 0;
                        border-bottom: none !important;
                    }


                    a {
                        color: #3C3C3B;
                        font-weight: 500;
                        font-size: 20px;
                        line-height: 28px;
                    }
                }

            }


        }

        &.menu-open {

            .mobile-menu__items {
                display: block;
            }

        }


        .main-child-sub {
            a {
                display: flex;
                justify-content: space-between;
            }
        }


        .main_child {

            a {
                width: 100%;
                padding: 0;
                box-shadow: none;
                display: flex;
                justify-content: space-between;
                @media (max-width: 767px) {
                    img {
                        z-index: -1;
                        position: relative;
                    }
                }

                p {
                    margin: 0;
                    font-size: 22px;
                    line-height: 28px;
                    text-transform: capitalize;
                    font-weight: bold;
                    padding-right: 30px;
                    width: 100%;
                }

                span {
                    &:nth-last-child(2) {
                        display: none !important;
                    }

                    &:nth-last-child(1) {
                        display: block !important;
                    }
                }


                &.collapsed {
                    span {
                        &:nth-last-child(2) {
                            display: block !important;
                        }

                        &:nth-last-child(1) {
                            display: none !important;
                        }
                    }


                }


                &.collapsed {
                    border-bottom: 1px solid #E1E4E6;
                }
            }

            &.submenu-open-mb {
                .submenu {
                    opacity: 1;
                    visibility: visible;
                    transform: translateX(0);

                }

                .submenu-open-next {
                    .mega_sub {
                        opacity: 1;
                        visibility: visible;
                        transform: translateX(0);
                    }

                }

                .submenu-open-next-next {
                    .mega_sub_sub {
                        opacity: 1;
                        visibility: visible;
                        transform: translateX(0);
                    }

                }
            }

            .submenu {
                padding: 60px 15px 30px;
                position: fixed;
                right: 0;
                top: 80px;
                left: 0;
                bottom: 0;
                background: #F8F8F8;
                width: 100%;
                opacity: 0;
                visibility: hidden;
                transition: 0.7s all cubic-bezier(0.4, 0, 0, 1);
                transform: translateX(100%);
                overflow-x: scroll;
                z-index: 9;

                &::-webkit-scrollbar {
                    display: none;
                }

                .main_title {
                    text-align: left;
                    display: flex;
                    color: #3C3C3B;
                    margin-bottom: 60px;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 28px;

                    svg {
                        margin-right: 20px;
                        position: relative;
                        z-index: -1;
                    }
                }

                padding-bottom: 18px;
                border-bottom: 1px solid rgba(225, 228, 230, 0.5) !important;
                margin-bottom: 18px;

                &:last-child {
                    margin-bottom: 0;
                    border-bottom: none !important;
                }


                a {
                    color: #3C3C3B;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 28px;
                }


            }

            .fotter_menu {
                margin-top: 150px;

                h3 {
                    font-size: 32px;
                    color: #4F616B;
                    line-height: 32px;
                }

                p {
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                    color: #4F616B;
                }

                .footer {
                    margin-top: 40px;

                    a {
                        font-size: 24px;
                        font-weight: 400;
                        line-height: 28px;
                        color: #4F616B;
                        padding: 0;
                        display: block;
                        margin: 0 0 10px;
                        border: none;

                        &:last-child {
                            margin: 0;
                        }
                    }
                }
            }

            &:nth-last-child(1) {
                .accordion-button {
                    //border: none !important;
                }
            }

        }

    }

    @media (min-width: 993px) {
        display: none;
    }


`;



export default React.memo(MainMenu);


