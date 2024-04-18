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


const MainMenu = ({offset, hovered, MenuOpen, ClickShanta}) => {
    // variable
    const location = useRouter();
    const {pathname} = location;
    let tl = new TimelineLite();
    const mobileMenuRaf = useRef()
    const menuRef = useRef()
    // const hamburgerRef = useRef();
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

    // get offset for container

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


    // remov all menu and search function menu
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
        // var menuOpen = document.querySelectorAll(".Mobile-menu-wrap");
        // var hamburger = document.querySelectorAll(".hamburger");
        // var menu = document.querySelectorAll(".main_child");
        // var menuSub = document.querySelectorAll(".main-child-sub ")
        // var menuSubSub = document.querySelectorAll(".main-child-sub-sub");
        // hamburger.forEach((i) => {
        //     i.classList.remove("menu-open");
        //     gsap.to(menuRef.current, {
        //         opacity: 0, duration: ".2",
        //     });
        //     gsap.to(menuRef.current, {
        //         display: "none",
        //     });
        // });
        // menuOpen.forEach((i) => {
        //     i.classList.remove("menu-open");
        //
        // });
        //
        // menu.forEach((i) => {
        //     i.classList.remove("submenu-open-mb");
        //
        // });
        // menuSub.forEach((i) => {
        //     i.classList.remove("submenu-open-next");
        //
        // });
        // menuSubSub.forEach((i) => {
        //     i.classList.remove("submenu-open-next-next");
        //     i.classList.remove("submenu-open-next");
        //     i.classList.remove("submenu-open-mb");
        //
        // });
        // setHoveredAttr('all');
        //
        // const mobile = document.querySelector("#mobile-subscribe");
        // mobile.classList.remove('visible')

        // disableBodyScroll(e);
        // clearAllBodyScrollLocks(e)
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
        // hamburgerRef.current.addEventListener("click", (e) => {
        //     document.querySelector(".hamburger").classList.add("menu-open");
        //     document.querySelector(".Mobile-menu-wrap").classList.add("menu-open");
        //     gsap.to(menuRef.current, {
        //         display: "block",
        //     });
        //     gsap.to(menuRef.current, {
        //         opacity: 1, duration: ".3",
        //     });
        //     // disableBodyScroll(e);
        //     // clearAllBodyScrollLocks(e)
        // });
        // hamburgerCloseRef.current.addEventListener("click", (e) => {
        //     document.querySelector(".hamburger").classList.remove("menu-open");
        //     document.querySelector(".Mobile-menu-wrap").classList.remove("menu-open");
        //     gsap.to(menuRef.current, {
        //         opacity: 0, duration: ".2",
        //     });
        //     gsap.to(menuRef.current, {
        //         display: "none",
        //     });
        //     // enableBodyScroll(e);
        //     // clearAllBodyScrollLocks(e);
        //     remove_all_mobile(e);
        //
        // });

        // Mobile menu end


        // search desktop
        searchClickRef.current.addEventListener("click", () => {

            if (!searchItemRef.current.classList.contains("search-open")) {
                searchItemRef.current.classList.add("search-open");
                gsap.to(searchItemRef.current, {
                    display: "flex",
                });
                gsap.to(searchItemRef.current, {
                    duration: 0.5, height: 195, opacity: 1, overflow: "visible",
                });
                gsap.to(searchItemRef.current.querySelector(".container"), {
                    opacity: 1, delay: 0.2,
                });
                document.querySelector('body').classList.add('open_menu')

            } else {
                document.querySelector('body').classList.remove('open_menu')
                document.body.classList.remove('menu-open');

                searchItemRef.current.classList.remove("search-open");
                gsap.to(searchItemRef.current, {
                    duration: 0.4, height: 0, opacity: 0, overflow: "hidden",
                });
                gsap.to(searchItemRef.current.querySelector(".container"), {
                    opacity: 0,
                }, "-=.4");
                gsap.to(searchItemRef.current, {
                    display: "none",
                });
            }

            setIsMenuOpen(false);
            const height = "0";
            const opacity = "0";
            setIsHandleClickShanta(false);

            tl.to(".desktop-menu__bottom .mega_menu .fixed_menu .content", {
                duration: 0.5, opacity, ease: "power2.out",
            })
                .to(".desktop-menu__bottom .mega_menu .fixed_menu  .social li", {
                    duration: 0.3, opacity, ease: "power2.out",
                }, "-=0.2")
                .to(".desktop-menu__bottom .mega_menu .content_wrap .dc-btn", {
                    duration: 0.2, opacity, stagger: 0.09, ease: "power2.out",
                }, "-=0.1")
                .to(".desktop-menu__bottom .mega_menu .content_wrap li", {
                    duration: 0.3, opacity, stagger: 0.01, ease: "power2.out",
                }, "-=0.3")
                .to(document.querySelector(".mega_menu"), {
                    height, duration: 0.3, ease: "power2.out",
                }, "-=0.3")
                .to(document.querySelector(".desktop-menu__bottom"), {
                    height, duration: 0.3, ease: "power2.out",
                }, "-=0.3");


            tl.to(document.querySelector(".desktop-menu__bottom .mega_menu .middle-menu"), {
                width: '0',
                paddingLeft: '0',
                paddingRight: '0',
                opacity: '1',
                duration: 0.3,
                ease: 'power2.out',
                xPercent: '0'
            }, '-=0.5')
                .to('.desktop-menu__bottom .mega_menu .middle-menu li', {
                    duration: 0.2, opacity: '0', x: 0, stagger: 0.1, ease: 'power2.out'
                }, "-=0.4")
                .to(document.querySelector(".desktop-menu__bottom .fixed_menu"), {
                    width: '65.5%', duration: 0.5, ease: 'power2.out'
                }, "-=0.3");

        });
        const searchLine = document.querySelector('svg  #Ellipse_19');

        searchClickRef.current.addEventListener("mouseover", () => {
            searchLine.style.strokeDasharray = '142px';
            searchLine.style.opacity = '1';
            searchLine.style.transition = 'all 0.8s ease 0s';
            searchLine.setAttribute('stroke-dasharray', '142 142');
        })
        searchClickRef.current.addEventListener("mouseout", () => {
            searchLine.style.strokeDasharray = '0 142';
            searchLine.style.opacity = '0';

            searchLine.setAttribute('stroke-dasharray', '0');


        })

        // on click hide search . should be reduce code later
        document.querySelector('.search-desktop svg').addEventListener('click', () => {
            searchItemRef.current.classList.remove('search-open')
            gsap.to(searchItemRef.current, {
                duration: .4, height: 0, opacity: 0, overflow: 'hidden'
            })
            gsap.to(searchItemRef.current.querySelector('.container'), {
                opacity: 0,
            }, '-=.4')
            gsap.to(searchItemRef.current, {
                display: 'none'
            })
            setSearchInput('')
            document.querySelector('body').classList.remove('open_menu')

        })


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

    const handleMouseLeave = () => {
        setHoveredAttr('all');
    };
    const headerRef = useRef(null);
    const headerRefMobile = useRef(null);


    useEffect(() => {
        const body = document.body;
        const scrollUp = "scroll-up";
        const scrollDown = "scroll-down";
        let lastScroll = 0;
        let howMuchScroll = 50;
        let windowWidth;

        const handleScroll = () => {
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
        };

        // Initial call
        handleScroll();

        // Event listener
        window.addEventListener("scroll", handleScroll);

        return () => {
            // Clean up
            window.removeEventListener("scroll", handleScroll);
        };
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
            dispatch(postForm([api_services, formData]));
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
    // const history = useHistory();
    //
    const handleClick = () => {
        router.push('/'); // Navigate to the root route ('/')
    };



    useEffect(() => {


        if (pathname == '/') {
            document.body.classList.remove('sticky')

            document.body.classList.add('on-home')
            document.querySelector('.desktop-menu__top__logo a').addEventListener('click', (e) => {
                if (document.body.classList.contains('on-home')) {
                    e.preventDefault()
                }
            })
            document.querySelectorAll('.desktop-menu__bottom ul li a')[0]?.addEventListener('click', (e) => {
                if (document.body.classList.contains('on-home')) {
                    e.preventDefault()
                }

            })
            remove_all();
            remove_all_mobile();

            setIsMenuOpen(false);
            const height = "0";
            const opacity = "0";
            setIsHandleClickShanta(false);

            tl.to(".desktop-menu__bottom .mega_menu .fixed_menu .content", {
                duration: 0.5, opacity, ease: "power2.out",
            }, "-=0.5")
                .to(".desktop-menu__bottom .mega_menu .fixed_menu  .social li", {
                    duration: 0.5, opacity, ease: "power2.out",
                }, "-=0.5")
                .to(".desktop-menu__bottom .mega_menu .content_wrap .dc-btn", {
                    duration: 0.2, opacity, stagger: 0.09, ease: "power2.out",
                }, "-=0.3")
                .to(".desktop-menu__bottom .mega_menu .content_wrap li", {
                    duration: 0.3, opacity, stagger: 0.01, ease: "power2.out",
                }, "-=0.3")
                .to(document.querySelector(".mega_menu"), {
                    height, duration: 0.6, ease: "power2.out",
                }, "-=0.3")
                .to(document.querySelector(".desktop-menu__bottom"), {
                    height, duration: 0.3, ease: "power2.out",
                }, "-=0.3");


            tl.to(document.querySelector(".desktop-menu__bottom .mega_menu .middle-menu"), {
                width: '0',
                paddingLeft: '0',
                paddingRight: '0',
                opacity: '1',
                duration: 0.3,
                ease: 'power2.out',
                xPercent: '0'
            }, '-=0.5')
                .to('.desktop-menu__bottom .mega_menu .middle-menu li', {
                    duration: 0.2, opacity: '0', x: 0, stagger: 0.1, ease: 'power2.out'
                }, "-=0.4")
                .to(document.querySelector(".desktop-menu__bottom .fixed_menu"), {
                    width: '65.5%', duration: 0.5, ease: 'power2.out'
                }, "-=0.3");
            //
            // disableBodyScroll();
            // clearAllBodyScrollLocks()
            document.querySelector('body').classList.remove('open_menu')
            // Revert body overflow to its original value on blur
            document.body.style.overflow = 'auto';
            const html = document.querySelector('html')
            html.style.overflow = 'auto';
        } else if (pathname == '/shanta-financial-literacy-program') {
            document.body.classList.add('sticky')
            document.querySelector('body').classList.remove('open_menu')

            remove_all();
            remove_all_mobile();

            setIsMenuOpen(false);
            const height = "0";
            const opacity = "0";
            setIsHandleClickShanta(false);
            document.querySelector('body').classList.remove('open_menu')

            tl.to(".desktop-menu__bottom .mega_menu .fixed_menu .content", {
                duration: 0.5, opacity, ease: "power2.out",
            }, "-=0.5")
                .to(".desktop-menu__bottom .mega_menu .fixed_menu  .social li", {
                    duration: 0.5, opacity, ease: "power2.out",
                }, "-=0.5")
                .to(".desktop-menu__bottom .mega_menu .content_wrap .dc-btn", {
                    duration: 0.2, opacity, stagger: 0.09, ease: "power2.out",
                }, "-=0.3")
                .to(".desktop-menu__bottom .mega_menu .content_wrap li", {
                    duration: 0.3, opacity, stagger: 0.01, ease: "power2.out",
                }, "-=0.3")
                .to(document.querySelector(".mega_menu"), {
                    height, duration: 0.6, ease: "power2.out",
                }, "-=0.3")
                .to(document.querySelector(".desktop-menu__bottom"), {
                    height, duration: 0.3, ease: "power2.out",
                }, "-=0.3");


            tl.to(document.querySelector(".desktop-menu__bottom .mega_menu .middle-menu"), {
                width: '0',
                paddingLeft: '0',
                paddingRight: '0',
                opacity: '1',
                duration: 0.3,
                ease: 'power2.out',
                xPercent: '0'
            }, '-=0.5')
                .to('.desktop-menu__bottom .mega_menu .middle-menu li', {
                    duration: 0.2, opacity: '0', x: 0, stagger: 0.1, ease: 'power2.out'
                }, "-=0.4")
                .to(document.querySelector(".desktop-menu__bottom .fixed_menu"), {
                    width: '65.5%', duration: 0.5, ease: 'power2.out'
                }, "-=0.3");
            // disableBodyScroll();
            // clearAllBodyScrollLocks()
            // Revert body overflow to its original value on blur
            document.body.style.overflow = 'auto';
            const html = document.querySelector('html')
            html.style.overflow = 'auto';
        } else if (pathname == '/easytrade') {
            document.body.classList.add('sticky')
            remove_all();
            remove_all_mobile();
            document.body.classList.remove('sticky')
            document.querySelector('body').classList.remove('open_menu')

            setIsMenuOpen(false);
            const height = "0";
            const opacity = "0";
            setIsHandleClickShanta(false);

            tl.to(".desktop-menu__bottom .mega_menu .fixed_menu .content", {
                duration: 0.5, opacity, ease: "power2.out",
            }, "-=0.5")
                .to(".desktop-menu__bottom .mega_menu .fixed_menu  .social li", {
                    duration: 0.5, opacity, ease: "power2.out",
                }, "-=0.5")
                .to(".desktop-menu__bottom .mega_menu .content_wrap .dc-btn", {
                    duration: 0.2, opacity, stagger: 0.09, ease: "power2.out",
                }, "-=0.3")
                .to(".desktop-menu__bottom .mega_menu .content_wrap li", {
                    duration: 0.3, opacity, stagger: 0.01, ease: "power2.out",
                }, "-=0.3")
                .to(document.querySelector(".mega_menu"), {
                    height, duration: 0.6, ease: "power2.out",
                }, "-=0.3")
                .to(document.querySelector(".desktop-menu__bottom"), {
                    height, duration: 0.3, ease: "power2.out",
                }, "-=0.3");


            tl.to(document.querySelector(".desktop-menu__bottom .mega_menu .middle-menu"), {
                width: '0',
                paddingLeft: '0',
                paddingRight: '0',
                opacity: '1',
                duration: 0.3,
                ease: 'power2.out',
                xPercent: '0'
            }, '-=0.5')
                .to('.desktop-menu__bottom .mega_menu .middle-menu li', {
                    duration: 0.2, opacity: '0', x: 0, stagger: 0.1, ease: 'power2.out'
                }, "-=0.4")
                .to(document.querySelector(".desktop-menu__bottom .fixed_menu"), {
                    width: '65.5%', duration: 0.5, ease: 'power2.out'
                }, "-=0.3");

            // disableBodyScroll();
            // clearAllBodyScrollLocks()
            // Revert body overflow to its original value on blur
            document.body.style.overflow = 'auto';
            const html = document.querySelector('html')
            html.style.overflow = 'auto';
        } else if (pathname === '/our-services') {

            document.body.classList.add('services')
            document.body.classList.remove('sticky')
            document.querySelector('body').classList.remove('open_menu')

            remove_all();
            remove_all_mobile();

            setIsMenuOpen(false);
            const height = "0";
            const opacity = "0";
            setIsHandleClickShanta(false);

            tl.to(".desktop-menu__bottom .mega_menu .fixed_menu .content", {
                duration: 0.5, opacity, ease: "power2.out",
            }, "-=0.5")
                .to(".desktop-menu__bottom .mega_menu .fixed_menu  .social li", {
                    duration: 0.5, opacity, ease: "power2.out",
                }, "-=0.5")
                .to(".desktop-menu__bottom .mega_menu .content_wrap .dc-btn", {
                    duration: 0.2, opacity, stagger: 0.09, ease: "power2.out",
                }, "-=0.3")
                .to(".desktop-menu__bottom .mega_menu .content_wrap li", {
                    duration: 0.3, opacity, stagger: 0.01, ease: "power2.out",
                }, "-=0.3")
                .to(document.querySelector(".mega_menu"), {
                    height, duration: 0.6, ease: "power2.out",
                }, "-=0.3")
                .to(document.querySelector(".desktop-menu__bottom"), {
                    height, duration: 0.3, ease: "power2.out",
                }, "-=0.3");


            tl.to(document.querySelector(".desktop-menu__bottom .mega_menu .middle-menu"), {
                width: '0',
                paddingLeft: '0',
                paddingRight: '0',
                opacity: '1',
                duration: 0.3,
                ease: 'power2.out',
                xPercent: '0'
            }, '-=0.5')
                .to('.desktop-menu__bottom .mega_menu .middle-menu li', {
                    duration: 0.2, opacity: '0', x: 0, stagger: 0.1, ease: 'power2.out'
                }, "-=0.4")
                .to(document.querySelector(".desktop-menu__bottom .fixed_menu"), {
                    width: '65.5%', duration: 0.5, ease: 'power2.out'
                }, "-=0.3");

            // disableBodyScroll();
            // clearAllBodyScrollLocks()
            // Revert body overflow to its original value on blur
            document.body.style.overflow = 'auto';
            const html = document.querySelector('html')
            html.style.overflow = 'auto';
        } else {
            // Add click event to all links
            const allLinks = document.querySelectorAll('a[href*="#"]');
            if (!allLinks.length) {
                return;
            }

            allLinks.forEach(link => {
                link.addEventListener('click', function (event) {
                    // event.preventDefault(); // Prevent the default link behavior (navigating to the href)

                    const href = link.getAttribute('href');
                    if (!href || !href.includes('#')) {
                        return;
                    }

                    const targetSelector = href.slice(href.indexOf('#')); // Extract the # value from the href
                    const targetElement = document.querySelector(targetSelector);

                    if (targetElement) {
                        setTimeout(() => {
                            remove_all();
                            remove_all_mobile();
                            document.body.classList.remove('sticky')
                            document.querySelector('body').classList.remove('open_menu')

                            setIsMenuOpen(false);
                            const height = "0";
                            const opacity = "0";
                            setIsHandleClickShanta(false);

                            tl.to(".desktop-menu__bottom .mega_menu .fixed_menu .content", {
                                duration: 0.5, opacity, ease: "power2.out",
                            }, "-=0.5")
                                .to(".desktop-menu__bottom .mega_menu .fixed_menu  .social li", {
                                    duration: 0.5, opacity, ease: "power2.out",
                                }, "-=0.5")
                                .to(".desktop-menu__bottom .mega_menu .content_wrap .dc-btn", {
                                    duration: 0.2, opacity, stagger: 0.09, ease: "power2.out",
                                }, "-=0.3")
                                .to(".desktop-menu__bottom .mega_menu .content_wrap li", {
                                    duration: 0.3, opacity, stagger: 0.01, ease: "power2.out",
                                }, "-=0.3")
                                .to(document.querySelector(".mega_menu"), {
                                    height, duration: 0.6, ease: "power2.out",
                                }, "-=0.3")
                                .to(document.querySelector(".desktop-menu__bottom"), {
                                    height, duration: 0.3, ease: "power2.out",
                                }, "-=0.3");


                            tl.to(document.querySelector(".desktop-menu__bottom .mega_menu .middle-menu"), {
                                width: '0',
                                paddingLeft: '0',
                                paddingRight: '0',
                                opacity: '1',
                                duration: 0.3,
                                ease: 'power2.out',
                                xPercent: '0'
                            }, '-=0.5')
                                .to('.desktop-menu__bottom .mega_menu .middle-menu li', {
                                    duration: 0.2, opacity: '0', x: 0, stagger: 0.1, ease: 'power2.out'
                                }, "-=0.4")
                                .to(document.querySelector(".desktop-menu__bottom .fixed_menu"), {
                                    width: '65.5%', duration: 0.5, ease: 'power2.out'
                                }, "-=0.3");


                            // Revert body overflow to its original value on blur
                            document.body.style.overflow = 'auto';
                            const html = document.querySelector('html');
                            html.style.overflow = 'auto';

                            // Use GSAP ScrollTo plugin to smoothly scroll to the target section
                            gsap.to(window, {
                                duration: 1, autoKill: true, scrollTo: {y: targetElement.offsetTop - 100} // Adjust the offset as needed
                            });
                        }, 600)
                    }

                    // if (!targetElement) {
                    //     console.error(`Target element with selector '${targetSelector}' not found.`);
                    //     // return;
                    // }


                });
            });
            remove_all();
            remove_all_mobile();
            document.body.classList.remove('sticky')
            document.querySelector('body').classList.remove('open_menu')

            setIsMenuOpen(false);
            const height = "0";
            const opacity = "0";
            setIsHandleClickShanta(false);

            tl.to(".desktop-menu__bottom .mega_menu .fixed_menu .content", {
                duration: 0.5, opacity, ease: "power2.out",
            }, "-=0.5")
                .to(".desktop-menu__bottom .mega_menu .fixed_menu  .social li", {
                    duration: 0.5, opacity, ease: "power2.out",
                }, "-=0.5")
                .to(".desktop-menu__bottom .mega_menu .content_wrap .dc-btn", {
                    duration: 0.2, opacity, stagger: 0.09, ease: "power2.out",
                }, "-=0.3")
                .to(".desktop-menu__bottom .mega_menu .content_wrap li", {
                    duration: 0.3, opacity, stagger: 0.01, ease: "power2.out",
                }, "-=0.3")
                .to(document.querySelector(".mega_menu"), {
                    height, duration: 0.6, ease: "power2.out",
                }, "-=0.3")
                .to(document.querySelector(".desktop-menu__bottom"), {
                    height, duration: 0.3, ease: "power2.out",
                }, "-=0.3");


            tl.to(document.querySelector(".desktop-menu__bottom .mega_menu .middle-menu"), {
                width: '0',
                paddingLeft: '0',
                paddingRight: '0',
                opacity: '1',
                duration: 0.3,
                ease: 'power2.out',
                xPercent: '0'
            }, '-=0.5')
                .to('.desktop-menu__bottom .mega_menu .middle-menu li', {
                    duration: 0.2, opacity: '0', x: 0, stagger: 0.1, ease: 'power2.out'
                }, "-=0.4")
                .to(document.querySelector(".desktop-menu__bottom .fixed_menu"), {
                    width: '65.5%', duration: 0.5, ease: 'power2.out'
                }, "-=0.3");


            // Revert body overflow to its original value on blur
            document.body.style.overflow = 'auto';
            const html = document.querySelector('html')
            html.style.overflow = 'auto';
        }


    }, [location])


    const HamburgerSVG = ` <svg xmlns="http://www.w3.org/2000/svg" width="32" height="18" viewBox="0 0 32 18">
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
`;


    const MainLog = `<svg id="Group_20851" data-name="Group 20851" xmlns="http://www.w3.org/2000/svg"
                                                 width="201.928" height="48" viewBox="0 0 201.928 48">
                                                <defs>
                                                    <clipPath id="clipPath">
                                                        <rect id="Rectangle_5879" data-name="Rectangle 5879" width="201.928"
                                                              height="48" fill="none"/>
                                                    </clipPath>
                                                </defs>
                                                <g id="Group_20833" data-name="Group 20833" clipPath="url(#clipPath)">
                                                    <path id="Path_9363" data-name="Path 9363"
                                                          d="M83.69,119.17c-.792-10.062,10.861-10.629,13.222-3.438,3.931,31.029-32.159,38.5-42.1,24.323,5.968,7.276,37,2.819,28.881-20.886"
                                                          transform="translate(-48.907 -98.953)" fill="#827623"
                                                          fillRule="evenodd"/>
                                                    <path id="Path_9364" data-name="Path 9364"
                                                          d="M28.633,13.64C38.611,15.091,39.941,3.49,32.922.667,2.24-5.29-7.571,30.259,5.917,41.116-.95,34.677,5.522,3.987,28.633,13.64"
                                                          transform="translate(0 0.001)" fill="#827623" fillRule="evenodd"/>
                                                    <path id="Path_9365" data-name="Path 9365"
                                                          d="M571.687,157.529a5.779,5.779,0,0,1-2.045,4.624,7.362,7.362,0,0,1-4.885,1.632H549.32v-3.53h15.437a4.688,4.688,0,0,0,2.516-.652,2.469,2.469,0,0,0,1.215-2.163,2.318,2.318,0,0,0-1.241-2.1,4.785,4.785,0,0,0-2.491-.623h-9.542a6.728,6.728,0,0,1-4.414-1.455,5.458,5.458,0,0,1,0-8.268,6.749,6.749,0,0,1,4.414-1.455h15.256v3.526H555.215a2.694,2.694,0,0,0-1.721.567,1.827,1.827,0,0,0-.707,1.507,1.785,1.785,0,0,0,.707,1.514,2.8,2.8,0,0,0,1.721.53h9.542a7.213,7.213,0,0,1,4.885,1.691,5.867,5.867,0,0,1,2.045,4.657m23.671,6.256h-3.522v-8.422H579.951V151.84h11.885v-8.3h3.522Zm-17,0h-3.529V143.536h3.529Zm46.539,0-4.532-.033-3.4-5.659h-9.6l2.133-3.5h5.361l-3.526-5.843-9.123,15h-4.535l10.994-18.289a4.743,4.743,0,0,1,1.153-1.3,2.757,2.757,0,0,1,1.6-.682,2.608,2.608,0,0,1,1.6.652,4.756,4.756,0,0,1,1.157,1.334Zm21.895-1.75c0,1.3-.446,1.96-1.333,1.96a3.346,3.346,0,0,1-2.192-1.219l-12.976-13.042v14.052h-3.5v-18.5a2.024,2.024,0,0,1,.383-1.231,1.292,1.292,0,0,1,1.1-.519,2.951,2.951,0,0,1,2.015,1.039l12.976,13.009V143.536h3.526Zm23.016-14.972H661.84v16.723h-3.5V147.062h-8v-3.526h19.461Zm21.924,16.723-10.725-18.322a4.535,4.535,0,0,0-1.157-1.334,2.576,2.576,0,0,0-1.6-.652,2.736,2.736,0,0,0-1.6.682,4.766,4.766,0,0,0-1.157,1.3L664.5,163.751h4.535l9.123-15,3.529,5.843h-5.364l-2.133,3.5h9.6l3.4,5.659Z"
                                                          transform="translate(-489.802 -128.028)" fill="#fff"/>
                                                    <path id="Path_9366" data-name="Path 9366"
                                                          d="M557.664,368.175l-.74.458a1.6,1.6,0,0,0-1.437-.873,1.443,1.443,0,0,0-.973.351,1.127,1.127,0,0,0-.409.894.922.922,0,0,0,.11.447,1.029,1.029,0,0,0,.343.356c.155.1.286.183.393.24s.259.128.459.213l.552.235a7.691,7.691,0,0,1,.785.378,3.928,3.928,0,0,1,.613.437,1.639,1.639,0,0,1,.453.622,2.15,2.15,0,0,1,.149.82,2.327,2.327,0,0,1-.763,1.762,2.782,2.782,0,0,1-3.553.149,2.554,2.554,0,0,1-.9-1.506l.906-.245a1.734,1.734,0,0,0,.552,1.06,1.582,1.582,0,0,0,1.117.431,1.757,1.757,0,0,0,1.2-.453,1.425,1.425,0,0,0,.514-1.113,1.3,1.3,0,0,0-.093-.495,1.388,1.388,0,0,0-.211-.367,1.562,1.562,0,0,0-.37-.3c-.169-.107-.3-.183-.4-.229s-.251-.115-.464-.207l-.508-.213a4.556,4.556,0,0,1-1.348-.83,1.621,1.621,0,0,1-.464-1.225,1.826,1.826,0,0,1,.685-1.474,2.641,2.641,0,0,1,2.908-.245,2.369,2.369,0,0,1,.895.921"
                                                          transform="translate(-493.227 -327.419)" fill="#fff"/>
                                                    <path id="Path_9367" data-name="Path 9367"
                                                          d="M703.839,375.232v-8.3h4.322v.859h-3.393v2.467h3.293v.859h-3.293v3.26h3.393v.859Z"
                                                          transform="translate(-628.051 -327.418)" fill="#fff"/>
                                                    <path id="Path_9368" data-name="Path 9368"
                                                          d="M851.087,367.717v1.107a3.487,3.487,0,0,0-2.542-1.064,3.23,3.23,0,0,0-2.371.99,3.235,3.235,0,0,0,.005,4.663,3.263,3.263,0,0,0,2.387.99,3.534,3.534,0,0,0,2.52-1.065v1.107a4.249,4.249,0,0,1-2.487.788,4.315,4.315,0,0,1-3.056-1.209,3.849,3.849,0,0,1-1.288-2.911,3.956,3.956,0,0,1,1.277-2.954,4.264,4.264,0,0,1,3.067-1.23,4.151,4.151,0,0,1,2.487.788"
                                                          transform="translate(-753.348 -327.419)" fill="#fff"/>
                                                    <path id="Path_9369" data-name="Path 9369"
                                                          d="M1013.01,366.929v4.861q0,.466.005.66a2.924,2.924,0,0,0,.094.557,1.645,1.645,0,0,0,.266.6,1.814,1.814,0,0,0,.735.568,2.287,2.287,0,0,0,.945.212,2.253,2.253,0,0,0,.9-.195,2,2,0,0,0,.735-.531,1.567,1.567,0,0,0,.288-.557,2.416,2.416,0,0,0,.111-.552c.007-.148.011-.36.011-.633v-4.991h.928v5.11a5.048,5.048,0,0,1-.137,1.288,2.262,2.262,0,0,1-.592.974,2.961,2.961,0,0,1-2.243.931,3,3,0,0,1-2.155-.834,2.267,2.267,0,0,1-.658-1.007,4.836,4.836,0,0,1-.16-1.354v-5.11Z"
                                                          transform="translate(-903.103 -327.419)" fill="#fff"/>
                                                    <path id="Path_9370" data-name="Path 9370"
                                                          d="M1173.548,371.587v3.645h-.929v-8.3h1.2a5.989,5.989,0,0,1,1.15.1,3.4,3.4,0,0,1,.962.341,1.643,1.643,0,0,1,.7.71,2.448,2.448,0,0,1,.243,1.14,2.282,2.282,0,0,1-.563,1.585,2.194,2.194,0,0,1-1.525.706l2.653,3.722H1176.3l-2.52-3.645Zm0-3.8v2.984h.287a4.917,4.917,0,0,0,.779-.055,2.618,2.618,0,0,0,.663-.2,1.06,1.06,0,0,0,.5-.457,1.581,1.581,0,0,0,.171-.771,1.7,1.7,0,0,0-.122-.677,1.24,1.24,0,0,0-.3-.44,1.207,1.207,0,0,0-.475-.248,2.859,2.859,0,0,0-.57-.109c-.181-.015-.4-.023-.658-.023Z"
                                                          transform="translate(-1046.354 -327.419)" fill="#fff"/>
                                                    <rect id="Rectangle_5877" data-name="Rectangle 5877" width="0.929"
                                                          height="8.304" transform="translate(141.97 39.51)" fill="#fff"/>
                                                    <path id="Path_9371" data-name="Path 9371"
                                                          d="M1428.991,367.788v7.445h-.928v-7.445h-2.011v-.859h4.973v.859Z"
                                                          transform="translate(-1272.498 -327.419)" fill="#fff"/>
                                                    <rect id="Rectangle_5878" data-name="Rectangle 5878" width="0.929"
                                                          height="8.304" transform="translate(169.193 39.51)" fill="#fff"/>
                                                    <path id="Path_9372" data-name="Path 9372"
                                                          d="M1685.635,375.232v-8.3h4.322v.859h-3.393v2.467h3.293v.859h-3.293v3.26h3.393v.859Z"
                                                          transform="translate(-1504.13 -327.418)" fill="#fff"/>
                                                    <path id="Path_9373" data-name="Path 9373"
                                                          d="M1831.694,368.175l-.74.458a1.6,1.6,0,0,0-1.437-.873,1.443,1.443,0,0,0-.973.351,1.127,1.127,0,0,0-.408.894.922.922,0,0,0,.11.447,1.031,1.031,0,0,0,.343.356c.155.1.286.183.393.24s.259.128.459.213l.552.235a7.683,7.683,0,0,1,.785.378,3.925,3.925,0,0,1,.613.437,1.639,1.639,0,0,1,.453.622,2.152,2.152,0,0,1,.149.82,2.327,2.327,0,0,1-.763,1.762,2.782,2.782,0,0,1-3.553.149,2.555,2.555,0,0,1-.9-1.506l.906-.245a1.734,1.734,0,0,0,.552,1.06,1.582,1.582,0,0,0,1.117.431,1.758,1.758,0,0,0,1.2-.453,1.425,1.425,0,0,0,.514-1.113,1.3,1.3,0,0,0-.094-.495,1.383,1.383,0,0,0-.211-.367,1.561,1.561,0,0,0-.37-.3c-.169-.107-.3-.183-.4-.229s-.251-.115-.464-.207l-.508-.213a4.556,4.556,0,0,1-1.349-.83,1.621,1.621,0,0,1-.464-1.225,1.826,1.826,0,0,1,.685-1.474,2.641,2.641,0,0,1,2.908-.245,2.369,2.369,0,0,1,.895.921"
                                                          transform="translate(-1630.073 -327.419)" fill="#fff"/>
                                                </g>
                                            </svg>
                                      `;


    const StickyLogo = `   <svg id="Group_20832" data-name="Group 20832" xmlns="http://www.w3.org/2000/svg"
                                                 width="201.928" height="48" viewBox="0 0 201.928 48">
                                                <defs>
                                                    <clipPath id="clipPath">
                                                        <rect id="Rectangle_5876" data-name="Rectangle 5876" width="201.928"
                                                              height="48" fill="none"/>
                                                    </clipPath>
                                                </defs>
                                                <g id="Group_20831" data-name="Group 20831" clipPath="url(#clipPath)">
                                                    <path id="Path_9352" data-name="Path 9352"
                                                          d="M83.69,119.17c-.792-10.062,10.861-10.629,13.222-3.438,3.931,31.029-32.159,38.5-42.1,24.323,5.968,7.276,37,2.819,28.881-20.886"
                                                          transform="translate(-48.907 -98.953)" fill="#827623"
                                                          fillRule="evenodd"/>
                                                    <path id="Path_9353" data-name="Path 9353"
                                                          d="M28.633,13.64C38.611,15.091,39.941,3.49,32.922.667,2.24-5.29-7.571,30.259,5.917,41.116-.95,34.677,5.522,3.987,28.633,13.64"
                                                          transform="translate(0 0.001)" fill="#827623" fillRule="evenodd"/>
                                                    <path id="Path_9354" data-name="Path 9354"
                                                          d="M571.687,157.529a5.779,5.779,0,0,1-2.045,4.624,7.362,7.362,0,0,1-4.885,1.632H549.32v-3.53h15.437a4.688,4.688,0,0,0,2.516-.652,2.469,2.469,0,0,0,1.215-2.163,2.318,2.318,0,0,0-1.241-2.1,4.785,4.785,0,0,0-2.491-.623h-9.542a6.728,6.728,0,0,1-4.414-1.455,5.458,5.458,0,0,1,0-8.268,6.749,6.749,0,0,1,4.414-1.455h15.256v3.526H555.215a2.694,2.694,0,0,0-1.721.567,1.827,1.827,0,0,0-.707,1.507,1.785,1.785,0,0,0,.707,1.514,2.8,2.8,0,0,0,1.721.53h9.542a7.213,7.213,0,0,1,4.885,1.691,5.867,5.867,0,0,1,2.045,4.657m23.671,6.256h-3.522v-8.422H579.951V151.84h11.885v-8.3h3.522Zm-17,0h-3.529V143.536h3.529Zm46.539,0-4.532-.033-3.4-5.659h-9.6l2.133-3.5h5.361l-3.526-5.843-9.123,15h-4.535l10.994-18.289a4.743,4.743,0,0,1,1.153-1.3,2.757,2.757,0,0,1,1.6-.682,2.608,2.608,0,0,1,1.6.652,4.756,4.756,0,0,1,1.157,1.334Zm21.895-1.75c0,1.3-.446,1.96-1.333,1.96a3.346,3.346,0,0,1-2.192-1.219l-12.976-13.042v14.052h-3.5v-18.5a2.024,2.024,0,0,1,.383-1.231,1.292,1.292,0,0,1,1.1-.519,2.951,2.951,0,0,1,2.015,1.039l12.976,13.009V143.536h3.526Zm23.016-14.972H661.84v16.723h-3.5V147.062h-8v-3.526h19.461Zm21.924,16.723-10.725-18.322a4.535,4.535,0,0,0-1.157-1.334,2.576,2.576,0,0,0-1.6-.652,2.736,2.736,0,0,0-1.6.682,4.766,4.766,0,0,0-1.157,1.3L664.5,163.751h4.535l9.123-15,3.529,5.843h-5.364l-2.133,3.5h9.6l3.4,5.659Z"
                                                          transform="translate(-489.802 -128.028)" fill="#313133"/>
                                                    <path id="Path_9355" data-name="Path 9355"
                                                          d="M557.664,368.175l-.74.458a1.6,1.6,0,0,0-1.437-.873,1.443,1.443,0,0,0-.973.351,1.127,1.127,0,0,0-.409.894.922.922,0,0,0,.11.447,1.029,1.029,0,0,0,.343.356c.155.1.286.183.393.24s.259.128.459.213l.552.235a7.691,7.691,0,0,1,.785.378,3.928,3.928,0,0,1,.613.437,1.639,1.639,0,0,1,.453.622,2.15,2.15,0,0,1,.149.82,2.327,2.327,0,0,1-.763,1.762,2.782,2.782,0,0,1-3.553.149,2.554,2.554,0,0,1-.9-1.506l.906-.245a1.734,1.734,0,0,0,.552,1.06,1.582,1.582,0,0,0,1.117.431,1.757,1.757,0,0,0,1.2-.453,1.425,1.425,0,0,0,.514-1.113,1.3,1.3,0,0,0-.093-.495,1.388,1.388,0,0,0-.211-.367,1.562,1.562,0,0,0-.37-.3c-.169-.107-.3-.183-.4-.229s-.251-.115-.464-.207l-.508-.213a4.556,4.556,0,0,1-1.348-.83,1.621,1.621,0,0,1-.464-1.225,1.826,1.826,0,0,1,.685-1.474,2.641,2.641,0,0,1,2.908-.245,2.369,2.369,0,0,1,.895.921"
                                                          transform="translate(-493.227 -327.419)" fill="#313133"/>
                                                    <path id="Path_9356" data-name="Path 9356"
                                                          d="M703.839,375.232v-8.3h4.322v.859h-3.393v2.467h3.293v.859h-3.293v3.26h3.393v.859Z"
                                                          transform="translate(-628.051 -327.418)" fill="#313133"/>
                                                    <path id="Path_9357" data-name="Path 9357"
                                                          d="M851.087,367.717v1.107a3.487,3.487,0,0,0-2.542-1.064,3.23,3.23,0,0,0-2.371.99,3.235,3.235,0,0,0,.005,4.663,3.263,3.263,0,0,0,2.387.99,3.534,3.534,0,0,0,2.52-1.065v1.107a4.249,4.249,0,0,1-2.487.788,4.315,4.315,0,0,1-3.056-1.209,3.849,3.849,0,0,1-1.288-2.911,3.956,3.956,0,0,1,1.277-2.954,4.264,4.264,0,0,1,3.067-1.23,4.151,4.151,0,0,1,2.487.788"
                                                          transform="translate(-753.348 -327.419)" fill="#313133"/>
                                                    <path id="Path_9358" data-name="Path 9358"
                                                          d="M1013.01,366.929v4.861q0,.466.005.66a2.924,2.924,0,0,0,.094.557,1.645,1.645,0,0,0,.266.6,1.814,1.814,0,0,0,.735.568,2.287,2.287,0,0,0,.945.212,2.253,2.253,0,0,0,.9-.195,2,2,0,0,0,.735-.531,1.567,1.567,0,0,0,.288-.557,2.416,2.416,0,0,0,.111-.552c.007-.148.011-.36.011-.633v-4.991h.928v5.11a5.048,5.048,0,0,1-.137,1.288,2.262,2.262,0,0,1-.592.974,2.961,2.961,0,0,1-2.243.931,3,3,0,0,1-2.155-.834,2.267,2.267,0,0,1-.658-1.007,4.836,4.836,0,0,1-.16-1.354v-5.11Z"
                                                          transform="translate(-903.103 -327.419)" fill="#313133"/>
                                                    <path id="Path_9359" data-name="Path 9359"
                                                          d="M1173.548,371.587v3.645h-.929v-8.3h1.2a5.989,5.989,0,0,1,1.15.1,3.4,3.4,0,0,1,.962.341,1.643,1.643,0,0,1,.7.71,2.448,2.448,0,0,1,.243,1.14,2.282,2.282,0,0,1-.563,1.585,2.194,2.194,0,0,1-1.525.706l2.653,3.722H1176.3l-2.52-3.645Zm0-3.8v2.984h.287a4.917,4.917,0,0,0,.779-.055,2.618,2.618,0,0,0,.663-.2,1.06,1.06,0,0,0,.5-.457,1.581,1.581,0,0,0,.171-.771,1.7,1.7,0,0,0-.122-.677,1.24,1.24,0,0,0-.3-.44,1.207,1.207,0,0,0-.475-.248,2.859,2.859,0,0,0-.57-.109c-.181-.015-.4-.023-.658-.023Z"
                                                          transform="translate(-1046.354 -327.419)" fill="#313133"/>
                                                    <rect id="Rectangle_5874" data-name="Rectangle 5874" width="0.929"
                                                          height="8.304" transform="translate(141.97 39.51)" fill="#313133"/>
                                                    <path id="Path_9360" data-name="Path 9360"
                                                          d="M1428.991,367.788v7.445h-.928v-7.445h-2.011v-.859h4.973v.859Z"
                                                          transform="translate(-1272.498 -327.419)" fill="#313133"/>
                                                    <rect id="Rectangle_5875" data-name="Rectangle 5875" width="0.929"
                                                          height="8.304" transform="translate(169.193 39.51)" fill="#313133"/>
                                                    <path id="Path_9361" data-name="Path 9361"
                                                          d="M1685.635,375.232v-8.3h4.322v.859h-3.393v2.467h3.293v.859h-3.293v3.26h3.393v.859Z"
                                                          transform="translate(-1504.13 -327.418)" fill="#313133"/>
                                                    <path id="Path_9362" data-name="Path 9362"
                                                          d="M1831.694,368.175l-.74.458a1.6,1.6,0,0,0-1.437-.873,1.443,1.443,0,0,0-.973.351,1.127,1.127,0,0,0-.408.894.922.922,0,0,0,.11.447,1.031,1.031,0,0,0,.343.356c.155.1.286.183.393.24s.259.128.459.213l.552.235a7.683,7.683,0,0,1,.785.378,3.925,3.925,0,0,1,.613.437,1.639,1.639,0,0,1,.453.622,2.152,2.152,0,0,1,.149.82,2.327,2.327,0,0,1-.763,1.762,2.782,2.782,0,0,1-3.553.149,2.555,2.555,0,0,1-.9-1.506l.906-.245a1.734,1.734,0,0,0,.552,1.06,1.582,1.582,0,0,0,1.117.431,1.758,1.758,0,0,0,1.2-.453,1.425,1.425,0,0,0,.514-1.113,1.3,1.3,0,0,0-.094-.495,1.383,1.383,0,0,0-.211-.367,1.561,1.561,0,0,0-.37-.3c-.169-.107-.3-.183-.4-.229s-.251-.115-.464-.207l-.508-.213a4.556,4.556,0,0,1-1.349-.83,1.621,1.621,0,0,1-.464-1.225,1.826,1.826,0,0,1,.685-1.474,2.641,2.641,0,0,1,2.908-.245,2.369,2.369,0,0,1,.895.921"
                                                          transform="translate(-1630.073 -327.419)" fill="#313133"/>
                                                </g>
                                            </svg>
`;


    useEffect(() => {
        const desktopHamburgerHover = document.querySelector('.burger-click');
        const svgLine4 = document.querySelector('svg #Line_4');
        const svgLine5 = document.querySelector('svg #Line_5');

        const handleMouseOver = () => {
            if (desktopHamburgerHover.classList.contains('close')) {
                svgLine4.style.strokeDasharray = '30px';
                svgLine5.style.strokeDasharray = '30px';

            } else {
                svgLine4.style.strokeDasharray = '20px';
                svgLine5.style.strokeDasharray = '15px';
            }
        };

        const handleMouseOut = () => {
            svgLine4.style.strokeDasharray = '30px';
            svgLine5.style.strokeDasharray = '30px';
        };


        desktopHamburgerHover.addEventListener('mouseover', handleMouseOver);
        desktopHamburgerHover.addEventListener('mouseout', handleMouseOut);


    }, []);


    const router = useRouter();

    const handleLogoClick = () => {
        router.push('/'); // Change the route to '/'
    };
    return (

        <StyledDesktopMenu className='desktop-menu' offset={offset} >
            <div className={`overlay ${showSubmenu ? 'sub-menu-open ' : null}`}></div>
            <div ref={headerRef} offset={offset} id={'menu'} className='desktop-menu'>
                <OutsideClickHandler
                    onOutsideClick={() => {
                        remove_all()
                        remove_search()

                        document.body.classList.remove('menu-open');

                    }}
                >
                    <Container>
                        <Row className='desktop-menu__top'>
                            <Col className='desktop-menu__top__logo main_logo'>
                                <div className="desktop-hamburger">
                                    <div ref={hamburgerDesktopRef} onClick={handleHamburgerClick}
                                         id={'hamburger-desktop'}
                                         className={`${isMenuOpen ? "close" : ""} burger-click`}>
                                        {/*<svg xmlns="http://www.w3.org/2000/svg" width="32" height="18" viewBox="0 0 32 18">*/}
                                        {/*    <g id="Hamburger_-_Light" data-name="Hamburger - Light"*/}
                                        {/*       transform="translate(1 1)">*/}
                                        {/*        <line id="Line_3" data-name="Line 3" x2="30" fill="none" stroke="#fff"*/}
                                        {/*              strokeLinecap="round" stroke-width="2"/>*/}
                                        {/*        <line id="Line_4" data-name="Line 4" x2="30" transform="translate(0 8)"*/}
                                        {/*              fill="none" stroke="#fff" strokeLinecap="round" stroke-width="2"/>*/}
                                        {/*        <line id="Line_5" data-name="Line 5" x2="30" transform="translate(0 16)"*/}
                                        {/*              fill="none" stroke="#fff" strokeLinecap="round" stroke-width="2"/>*/}
                                        {/*    </g>*/}
                                        {/*</svg>*/}
                                        <div dangerouslySetInnerHTML={{__html: HamburgerSVG}}/>

                                    </div>


                                </div>
                                <div className="normal_logo" style={{cursor: 'pointer'}}>

                                    <a  onClick={handleLogoClick }><img src="/images/static/logo.svg" alt={'Shanta Securities Limited'}/></a>
                                </div>
                                <div className="sticky_logo" style={{cursor: 'pointer'}}>

                                        <a onClick={handleLogoClick }><img src="/images/static/logo_dark.svg" alt={'Shanta Securities Limited'}/></a>

                                </div>
                            </Col>
                            <Col>

                                <ul className='d-flex justify-content-end'>
                                    <li className='call hover'><a
                                        href={`tel:+8801313778778`}>
                                        <svg id="Button_-_Hotline_-_Light" data-name="Button - Hotline - Light"
                                             xmlns="http://www.w3.org/2000/svg" width="170" height="44"
                                             viewBox="0 0 170 44">
                                            <g id="Rectangle_492" data-name="Rectangle 492" fill="none" stroke="#fff"
                                               stroke-width="1" opacity="0.3">
                                                <rect width="120" height="44" rx="22" stroke="none"/>
                                                <rect x="0.5" y="0.5" width="169" height="43" rx="21.5" fill="none"/>
                                            </g>
                                            <g id="Rectangle_493" data-name="Rectangle 493" fill="none" stroke="#fff"
                                               stroke-width="2" strokeDasharray="1 520" opacity="0">
                                                <rect width="120" height="44" rx="22" stroke="none"/>
                                                <rect x="0.5" y="0.5" width="169" height="43" rx="21.5" fill="none"/>
                                            </g>
                                            <g id="Group_4811" data-name="Group 4811" transform="translate(-791 -27)">
                                                <text id="_16634" data-name="16634" transform="translate(843 54)"
                                                      fill="#fff" font-size="16" font-family="Avenir-Medium, Avenir"
                                                      font-weight="500">
                                                    <tspan x="0" y="0">01313778778</tspan>
                                                </text>
                                                <path id="Path_8647" data-name="Path 8647"
                                                      d="M4.965,13.295a21.287,21.287,0,0,0,7.084,5.528,11.057,11.057,0,0,0,3.964,1.169c.1,0,.187.008.283.008a3.289,3.289,0,0,0,2.546-1.09.09.09,0,0,0,.017-.021,10.7,10.7,0,0,1,.8-.829c.2-.186.4-.381.587-.58a2,2,0,0,0-.008-2.98l-2.5-2.491a2.027,2.027,0,0,0-1.464-.671,2.1,2.1,0,0,0-1.481.667l-1.489,1.484c-.137-.079-.279-.149-.412-.215a5.15,5.15,0,0,1-.458-.249A15.74,15.74,0,0,1,8.671,9.61,9.037,9.037,0,0,1,7.4,7.588c.391-.352.757-.721,1.111-1.082.125-.128.254-.257.383-.385a2.121,2.121,0,0,0,.691-1.492,2.1,2.1,0,0,0-.691-1.492L7.652,1.9c-.146-.145-.283-.286-.424-.431C6.953,1.189,6.666.9,6.383.638A2.078,2.078,0,0,0,4.919,0,2.139,2.139,0,0,0,3.438.642L1.882,2.192A3.179,3.179,0,0,0,.929,4.231a7.644,7.644,0,0,0,.578,3.315A19.273,19.273,0,0,0,4.965,13.295ZM1.944,4.318a2.189,2.189,0,0,1,.661-1.409L4.153,1.368a1.122,1.122,0,0,1,.765-.352,1.065,1.065,0,0,1,.749.361c.279.257.541.526.824.812.141.145.287.29.433.439l1.24,1.235a1.124,1.124,0,0,1,.391.775,1.124,1.124,0,0,1-.391.775c-.129.128-.258.261-.387.39-.387.39-.749.758-1.148,1.111l-.021.021a.808.808,0,0,0-.208.92c0,.012.008.021.012.033a9.747,9.747,0,0,0,1.46,2.366,16.613,16.613,0,0,0,4.01,3.639,5.961,5.961,0,0,0,.549.3,5.15,5.15,0,0,1,.458.249l.046.025a.872.872,0,0,0,.4.1.884.884,0,0,0,.62-.282l1.556-1.55a1.1,1.1,0,0,1,.761-.369,1.046,1.046,0,0,1,.736.369L19.52,15.23a1,1,0,0,1-.012,1.562c-.175.186-.358.365-.553.551a11.955,11.955,0,0,0-.869.9A2.288,2.288,0,0,1,16.3,19c-.071,0-.146,0-.216-.008A14.208,14.208,0,0,1,12.5,17.92S7.639,14.9,5.755,12.656a18.448,18.448,0,0,1-3.286-5.45A6.662,6.662,0,0,1,1.944,4.318Z"
                                                      transform="translate(814.089 39)" fill="#fff"/>
                                            </g>
                                        </svg>

                                    </a>
                                    </li>
                                    <li className='call dc-btn'><a
                                        href={'https://portal.shantasecurities.com/signup'} target={'_blank'}><span>Open an Account</span></a>
                                    </li>

                                    <li className='hover '>
                                        <div ref={searchClickRef}>
                                            <svg id="Button_-_Search_-_Light" data-name="Button - Search - Light"
                                                 xmlns="http://www.w3.org/2000/svg" width="44" height="44"
                                                 viewBox="0 0 44 44">
                                                <g id="Ellipse_18" data-name="Ellipse 18" fill="none" stroke="#fff"
                                                   stroke-width="1" opacity="0.3">
                                                    <circle cx="22" cy="22" r="22" stroke="none"/>
                                                    <circle cx="22" cy="22" r="21.5" fill="none"/>
                                                </g>
                                                <g id="Ellipse_19" data-name="Ellipse 19" fill="none" stroke="#fff"
                                                   stroke-width="2" strokeDasharray="0 142" opacity="0">
                                                    <circle cx="22" cy="22" r="22" stroke="none"/>
                                                    <circle cx="22" cy="22" r="21.5" fill="none"/>
                                                </g>
                                                <g id="search" transform="translate(12.804 13)">
                                                    <path id="Path_8648" data-name="Path 8648"
                                                          d="M7.614,14.825a7.412,7.412,0,1,1,7.418-7.412,7.424,7.424,0,0,1-7.418,7.412Zm0-13.419a6.007,6.007,0,1,0,6.012,6.007A6.016,6.016,0,0,0,7.614,1.405ZM17.99,17.794a.7.7,0,0,0,0-.994l-3.146-3.144a.7.7,0,0,0-.994.994L17,17.794a.7.7,0,0,0,.994,0Z"
                                                          transform="translate(0 0)" fill="#fff"/>
                                                </g>
                                            </svg>
                                        </div>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <div className='desktop-menu__bottom'>

                            <div className={'mega_menu submenu'}>
                                <div className="content_wrap" style={{paddingLeft: offset - 15 + 'px'}}>
                                    <li onClick={(event) => handleclickshanta(1, event)}
                                        className={`has-child-sub ${activehanta == true ? 'active' : ''}`}>
                                        <a>Shanta Securities Limited<BsChevronRight/></a>

                                    </li>
                                    <li onMouseLeave={handleMouseLeave}
                                        onMouseEnter={() => handleMouseEnter('services')}>
                                        <Link href='/our-services'><a>Our Services<BsChevronRight/></a></Link>

                                    </li>
                                    <li onMouseLeave={handleMouseLeave}
                                        onMouseEnter={() => handleMouseEnter('research')}>
                                        <Link href='/research'><a>Research Center<BsChevronRight/></a></Link>


                                    </li>
                                    <li onMouseLeave={handleMouseLeave}
                                        onMouseEnter={() => handleMouseEnter('invest')}>
                                        <Link href='/investment-calculator'>
                                            <a> Investment Calculator
                                                <BsChevronRight/></a>
                                        </Link>

                                    </li>
                                    <li onMouseLeave={handleMouseLeave} onMouseEnter={() => handleMouseEnter('career')}>
                                        <Link href='/career'><a>Career<BsChevronRight/></a></Link></li>
                                    <li onMouseLeave={handleMouseLeave}
                                        onMouseEnter={() => handleMouseEnter('contact')}><Link
                                        href='/contact'><a>Contact<BsChevronRight/></a></Link></li>
                                    <li className={''} onMouseLeave={handleMouseLeave}
                                        onMouseEnter={() => handleMouseEnter('downloads')}><Link
                                        href='/downloads'><a>Downloads<BsChevronRight/></a></Link></li>
                                    <li className={'last'} onMouseLeave={handleMouseLeave}
                                        onMouseEnter={() => handleMouseEnter('downloads')}><Link
                                        href='/campaign'><a>Campaign<BsChevronRight/></a></Link></li>

                                    <div className="" onClick={() => handleMouseEnter('subscribe')}>
                                        <ButtonSubmit border={'0'} margin={'40px 0 0'} padding={'0'}
                                                      borderColor={'transparent'}
                                                      width={'100%'} text={'Subscribe to Newsletter'}
                                                      color={'#FFFFFF'}
                                                      hoverBackground={hover}
                                                      background={'#C6C6C6'}/>
                                    </div>


                                    <ButtonSubmit src={'easytrade'} margin={'20px 0 0'} padding={'0'}
                                                  width={'100%'}
                                                  text={'Shanta EasyTrade'} color={'#FFFFFF'}
                                                  hoverBackground={'#3C3C3B'}
                                                  background={'#978C21'}/>
                                </div>
                                <div className="middle-menu">
                                    <div className="shanta">
                                        <li onMouseLeave={handleMouseLeave} onMouseEnter={() => handleMouseEnter('who')}
                                            className={``}>
                                            {/*?id=who-we-are*/}
                                            <Link href='/about'><a>Who We Are<BsChevronRight/></a></Link>
                                        </li>
                                        {/*?id=mission-vision*/}
                                        <li onMouseLeave={handleMouseLeave}
                                            onMouseEnter={() => handleMouseEnter('mission')} className={``}>
                                            <Link href='/about#mission-vision'><a>Our Mission and
                                                Vision<BsChevronRight/></a></Link>
                                        </li>
                                        {/*?id=core-values*/}
                                        <li onMouseLeave={handleMouseLeave}
                                            onMouseEnter={() => handleMouseEnter('core')} className={``}>
                                            <Link href='/about#core-values'><a>Our Core Values<BsChevronRight/></a></Link>
                                        </li>
                                        {/*?id=our-board*/}
                                        <li onMouseLeave={handleMouseLeave}
                                            onMouseEnter={() => handleMouseEnter('directors')} className={``}>
                                            <Link href='/about#our-board'><a>Our Board<BsChevronRight/></a></Link>
                                        </li>
                                        {/*?id=expert*/}
                                        <li onMouseLeave={handleMouseLeave}
                                            onMouseEnter={() => handleMouseEnter('experts')} className={``}>
                                            <Link href='/about#our-team'><a>Our Team<BsChevronRight/></a></Link>
                                        </li>
                                    </div>
                                </div>
                                <div className="fixed_menu">
                                    <div className={`menu-tab ${hoveredAttr === 'all' ? 'visible' : 'hidden'} `}
                                         data-tab={'all'}>
                                        <div className="content">
                                            <h3>

                                                <span>Shanta Securities Limited</span> is one of the top<br/> brokerage houses
                                                in Bangladesh with Innovative Financial<br/> Services and Capital Market Solutions.
                                            </h3>
                                            <p>Call</p>
                                            <div className="all">
                                                <a href='tel:+88 02 226601684'>+88 02 226601684</a>,<br/>
                                                <a href='tel:+88 02 226601685'>+88 02 226601685</a>,<br/>
                                                <a href='tel:+88 02 226601688'>+88 02 226601688</a>
                                            </div>
                                            <p>Visit</p>
                                            <a target={'_blank'}
                                               href={'https://www.google.com/maps/search/The+Glass+House++(Level-10,+Eastern+Side),++S.E+(B)-2,+38,+Gulshan+Avenue,++Gulshan-1,+Dhaka-1212/@23.7809179,90.414273,17z/data=!3m1!4b1?entry=ttu'}>The
                                                Glass House <br/>
                                                (Level-10, Eastern Side),<br/>
                                                S.E (B)-2, 38, Gulshan Avenue,<br/>
                                                Gulshan-1, Dhaka-1212</a>
                                        </div>
                                        <ul className="social ">
                                            <li><a href={'https://www.facebook.com/shantasecurities/'}
                                                   target={'_blank'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                     viewBox="0 0 30 30">


                                                    <g id="Group_19435" data-name="Group 19435"
                                                       transform="translate(15536 -9208)">
                                                        <circle id="Ellipse_602" data-name="Ellipse 602" cx="15" cy="15"
                                                                r="14"
                                                                transform="translate(-15536 9208)" fill="none"
                                                                stroke="#978C21"
                                                                stroke-width="1"/>
                                                        <circle id="Ellipse_603" data-name="Ellipse 603" cx="15" cy="50"
                                                                r="15"
                                                                transform="translate(-15536 9208)" fill="#978c21"/>
                                                        <path id="Path_2115" data-name="Path 2115"
                                                              d="M1206.12,104.34l.406-2.652h-2.544v-1.72a1.325,1.325,0,0,1,1.495-1.432h1.157V96.278a14.1,14.1,0,0,0-2.053-.179,3.237,3.237,0,0,0-3.465,3.569v2.021h-2.329v2.652h2.329v6.409h2.866V104.34Z"
                                                              transform="translate(-16723.787 9119.901)"
                                                              fill="#978c21"/>
                                                    </g>
                                                </svg>


                                            </a>
                                            </li>
                                            <li><a href={'https://www.instagram.com/shantasecurities/'}
                                                   target={'_blank'}>


                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                     viewBox="0 0 30 30">


                                                    <g id="Group_19435" data-name="Group 19435"
                                                       transform="translate(15536 -9208)">
                                                        <circle id="Ellipse_602" data-name="Ellipse 602" cx="15" cy="15"
                                                                r="14"
                                                                transform="translate(-15536 9208)" fill="none"
                                                                stroke="#978C21"
                                                                stroke-width="1"/>
                                                        <circle id="Ellipse_603" data-name="Ellipse 603" cx="15" cy="50"
                                                                r="15"
                                                                transform="translate(-15536 9208)" fill="#978c21"/>


                                                    </g>
                                                    <g id="Group_1419" data-name="Group 1419"
                                                       transform="translate(8 8)">

                                                        <path id="Path_2109" data-name="Path 2109"
                                                              d="M1095.77,105.945a.854.854,0,1,0,.853.854A.854.854,0,0,0,1095.77,105.945Z"
                                                              transform="translate(-1084.635 -103.346)" fill="#978C21"/>
                                                        <path id="Path_2110" data-name="Path 2110"
                                                              d="M1082.64,108.605a3.586,3.586,0,1,0,3.586,3.586A3.59,3.59,0,0,0,1082.64,108.605Zm0,5.882a2.3,2.3,0,1,1,2.3-2.3A2.3,2.3,0,0,1,1082.64,114.488Z"
                                                              transform="translate(-1075.301 -104.911)" fill="#978C21"/>
                                                        <path id="Path_2111" data-name="Path 2111"
                                                              d="M1080.119,114.188h-5.813a4.379,4.379,0,0,1-4.374-4.374V104a4.378,4.378,0,0,1,4.374-4.373h5.813a4.378,4.378,0,0,1,4.374,4.373v5.813A4.379,4.379,0,0,1,1080.119,114.188ZM1074.306,101a3.007,3.007,0,0,0-3,3v5.813a3.007,3.007,0,0,0,3,3h5.813a3.007,3.007,0,0,0,3-3V104a3.007,3.007,0,0,0-3-3Z"
                                                              transform="translate(-1069.932 -99.628)" fill="#978c21"/>
                                                    </g>
                                                </svg>


                                            </a>
                                            </li>
                                            <li><a href={'https://www.linkedin.com/company/74940628/admin/feed/posts/'}
                                                   target={'_blank'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                     viewBox="0 0 30 30">
                                                    <g id="Group_19435" data-name="Group 19435"
                                                       transform="translate(15536 -9208)">
                                                        <circle id="Ellipse_602" data-name="Ellipse 602" cx="15" cy="15"
                                                                r="14"
                                                                transform="translate(-15536 9208)" fill="none"
                                                                stroke="#978C21"
                                                                stroke-width="1"/>
                                                        <circle id="Ellipse_603" data-name="Ellipse 603" cx="15" cy="50"
                                                                r="15"
                                                                transform="translate(-15536 9208)" fill="#978c21"/>


                                                    </g>
                                                    <g id="linkedin-logotype" transform="translate(8 8)">
                                                        <path id="Path_8798" data-name="Path 8798"
                                                              d="M1.456,1.211a1.121,1.121,0,0,1,.875.351,1.355,1.355,0,0,1,.34.881,1.2,1.2,0,0,1-.358.881,1.329,1.329,0,0,1-.98.358H1.317a1.3,1.3,0,0,1-.962-.358A1.208,1.208,0,0,1,0,2.442a1.128,1.128,0,0,1,.391-.884A1.552,1.552,0,0,1,1.456,1.211ZM.156,4.659H2.71v7.173H.156ZM11.943,7.72v4.113H9.39V8a2.076,2.076,0,0,0-.3-1.177,1.114,1.114,0,0,0-1-.443,1.279,1.279,0,0,0-.858.273,1.632,1.632,0,0,0-.463.6,1.044,1.044,0,0,0-.06.265,3.071,3.071,0,0,0-.014.31v4.008H4.126q.016-1.821.017-3.337V6.062c0-.353,0-.654-.01-.9s-.007-.415-.007-.5H6.7V5.675L6.681,5.7H6.7V5.675A2.953,2.953,0,0,1,7,5.283a2.346,2.346,0,0,1,.46-.382,2.622,2.622,0,0,1,.656-.291A3.1,3.1,0,0,1,9,4.5a3.494,3.494,0,0,1,1.166.19,2.392,2.392,0,0,1,.935.6,2.848,2.848,0,0,1,.617,1.007A4.105,4.105,0,0,1,11.943,7.72Z"
                                                              transform="translate(0)" fill="#978C21"/>
                                                    </g>
                                                </svg>


                                            </a>
                                            </li>
                                            <li><a href={'https://www.youtube.com/@shantasecurities4260'}
                                                   target={'_blank'}>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                     viewBox="0 0 30 30">

                                                    <g id="Group_19435" data-name="Group 19435"
                                                       transform="translate(15536 -9208)">
                                                        <circle id="Ellipse_602" data-name="Ellipse 602" cx="15" cy="15"
                                                                r="14"
                                                                transform="translate(-15536 9208)" fill="none"
                                                                stroke="#978C21"
                                                                stroke-width="1"/>
                                                        <circle id="Ellipse_603" data-name="Ellipse 603" cx="15" cy="50"
                                                                r="15"
                                                                transform="translate(-15536 9208)" fill="#978c21"/>


                                                    </g>
                                                    <path id="Path_2114" data-name="Path 2114"
                                                          d="M1146.9,113.13a2.813,2.813,0,0,0-2.813-2.813h-7.195a2.813,2.813,0,0,0-2.813,2.813v3.348a2.813,2.813,0,0,0,2.813,2.813h7.195a2.813,2.813,0,0,0,2.813-2.813Zm-4.231,1.925-3.226,1.6c-.126.068-.556-.023-.556-.167v-3.276c0-.146.433-.237.56-.165l3.089,1.68C1142.661,114.8,1142.8,114.985,1142.666,115.056Z"
                                                          transform="translate(-1125.074 -99.317)" fill="#978C21"/>
                                                </svg>

                                            </a></li>
                                        </ul>
                                    </div>
                                    <div className={`menu-tab ${hoveredAttr === 'who' ? 'visible' : 'hidden'} `}
                                         data-tab={'who'}>
                                        <h3>Who We Are</h3>
                                        <p>Shanta Securities Limited is one of the top brokerage houses in Bangladesh with Innovative Financial Services and Capital Market Solutions.</p>
                                    </div>
                                    {/*<div className={`menu-tab ${hoveredAttr === 'mission' ? 'visible' : 'hidden'} `}*/}
                                    {/*     data-tab={'mission'}>*/}
                                    {/*    <h3></h3>*/}
                                    {/*    <p></p>*/}
                                    {/*</div>*/}
                                    <div className={`menu-tab ${hoveredAttr === 'core' ? 'visible' : 'hidden'} `}
                                         data-tab={'core'}>
                                        <h3>Our Core Values</h3>
                                        <p>Shanta Group is also one of the key members of the STS Group - the promoter
                                            of the world class Apollo Hospitals Dhaka, International School Dhaka (ISD),
                                            the only International Baccalaureate (IB) School of the country, and the
                                            Delhi Public School, Dhaka.</p>
                                    </div>
                                    <div className={`menu-tab ${hoveredAttr === 'directors' ? 'visible' : 'hidden'} `}
                                         data-tab={'directors'}>
                                        <h3>Our Board</h3>
                                        <p>Shanta Group is also one of the key members of the STS Group - the promoter
                                            of the world class Apollo Hospitals Dhaka, International School Dhaka (ISD),
                                            the only International Baccalaureate (IB) School of the country, and the
                                            Delhi Public School, Dhaka.</p>
                                    </div>
                                    <div className={`menu-tab ${hoveredAttr === 'experts' ? 'visible' : 'hidden'} `}
                                         data-tab={'experts'}>
                                        <h3>Our Team</h3>
                                        <p>Shanta Group is also one of the key members of the STS Group - the promoter
                                            of the world class Apollo Hospitals Dhaka, International School Dhaka (ISD),
                                            the only International Baccalaureate (IB) School of the country, and the
                                            Delhi Public School, Dhaka.</p>
                                    </div>
                                    <div className={`menu-tab ${hoveredAttr === 'services' ? 'visible' : 'hidden'} `}
                                         data-tab={'services'}>
                                        <h3>Our Services</h3>
                                        <p>
                                            We provide advanced financial services that cater to a wide spectrum <br/>
                                            of brokerage and investment needs.
                                        </p>
                                    </div>
                                    <div className={`menu-tab ${hoveredAttr === 'invest' ? 'visible' : 'hidden'} `}
                                         data-tab={'invest'}>
                                        <h3>Investment Calculator</h3>
                                        <p>Uncover missed opportunities - calculate potential earnings <br/> from earlier capital market investments.</p>
                                    </div>
                                    <div className={`menu-tab ${hoveredAttr === 'research' ? 'visible' : 'hidden'} `}
                                         data-tab={'research'}>
                                        <h3>Research Center</h3>
                                        <p>Stay up-to-date about investment opportunities with our <br/> economic research center.</p>
                                    </div>
                                    <div className={`menu-tab ${hoveredAttr === 'pathshala' ? 'visible' : 'hidden'} `}
                                         data-tab={'pathshala'}>
                                        <h3>
                                            {/*Shanta's Pathshala <sub>TM</sub>*/}
                                            Shanta Financial Literacy Program
                                        </h3>
                                        <p>Learn about personal finance, investment, financial
                                            analytics, <br/> fundamental analytics.</p>
                                    </div>
                                    <div className={`menu-tab ${hoveredAttr === 'career' ? 'visible' : 'hidden'} `}
                                         data-tab={'career'}>
                                        <h3>Career</h3>
                                        <p>Invest your talent and progress your career with stock marketers at Shanta.</p>
                                    </div>

                                    <div
                                        className={`menu-tab newsletter ${hoveredAttr === 'subscribe' ? 'visible' : 'hidden'} `}
                                        data-tab={'subscribe'}>
                                        <Title noanim margin={'0 0 40px 0'}
                                               text={'Stay informed, and beat your busy schedule with Daily Newsflash on the go!'}/>

                                        <Form className={``}
                                              onSubmit={handleSubmit(onSubmit, onError)}>
                                            <Form.Group className="form-group" controlId="formBasicEmail">

                                                <Form.Control
                                                    className={formState?.errors?.email?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                    {...register("email", {
                                                        required: {
                                                            value: true, message: 'please enter your email'
                                                        }, pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                            message: 'please enter a valid email address'
                                                        }
                                                    })}
                                                    type="email"
                                                    placeholder="Your Email Address*"/>
                                                <div className="dc-btn-submit"
                                                     onClick={handleSubmit(onSubmit, onError)}>
                                                    <ButtonSubmit width={'100'} text={'Subscribe'} color={'#FFFFFF'}
                                                                  hoverBackground={'#3C3C3B'}
                                                                  background={'#978C21'}/>
                                                </div>
                                            </Form.Group>

                                        </Form>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </Container>
                    <div className="search-desktop" ref={searchItemRef}>
                        <Container>
                            <div className="clickto clickto_close">

                                <BsX/>
                            </div>
                            <Form onSubmit={searchSubmit}>
                                <Form.Group className="search-input">
                                    <Form.Control value={searchInput} onChange={e => handleInput(e)} type="text"
                                                  placeholder="Search
                                                  "/>
                                    <button type='submit'>Search</button>
                                </Form.Group>
                            </Form>


                        </Container>
                    </div>
                </OutsideClickHandler>
            </div>


{/*            <StyledMobileMenu ref={headerRefMobile} className="Mobile-menu-wrap menu-bar">*/}
{/*                <Container>*/}
{/*                    <Row className="mobile-menu" ref={mobileMenuRaf}>*/}
{/*                        <Col className="logo forNormal">*/}
{/*                            {location?.pathname === "/" ?*/}
{/*                                <a> <img src="/images/static/logo.svg" alt={'Shanta Securities Limited'}/>*/}
{/*                                </a>*/}


{/*                                :*/}

{/*                                <Link onClick={handleClick} href="/">*/}
{/*                                    <a> <img src="/images/static/logo.svg" alt={'Shanta Securities Limited'}/>*/}
{/*                                    </a>*/}
{/*                                </Link>*/}

{/*                            }*/}

{/*                        </Col>*/}
{/*                        <Col className="logo forClose">*/}
{/*                            {location?.pathname === "/" ?*/}
{/*                                <a> <img src="/images/static/logo_dark.svg" alt={'Shanta Securities Limited'}/>*/}
{/*                                </a>*/}
{/*                                :*/}
{/*                                <Link onClick={handleClick} href="/">*/}
{/*                                    <a> <img src="/images/static/logo_dark.svg" alt={'Shanta Securities Limited'}/>*/}
{/*                                    </a>*/}
{/*                                </Link>*/}

{/*                            }*/}

{/*                        </Col>*/}
{/*                        <Col className="hamburger">*/}
{/*                             <span ref={hamburgerRef}>*/}
{/*      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="18" viewBox="0 0 32 18">*/}
{/*                                        <g id="Hamburger_-_Light" data-name="Hamburger - Light"*/}
{/*                                           transform="translate(1 1)">*/}
{/*                                            <line id="Line_3" data-name="Line 3" x2="30" fill="none" stroke="#fff"*/}
{/*                                                  strokeLinecap="round" stroke-width="2"/>*/}
{/*                                            <line id="Line_4" data-name="Line 4" x2="30" transform="translate(0 8)"*/}
{/*                                                  fill="none" stroke="#fff" strokeLinecap="round" stroke-width="2"/>*/}
{/*                                            <line id="Line_5" data-name="Line 5" x2="30" transform="translate(0 16)"*/}
{/*                                                  fill="none" stroke="#fff" strokeLinecap="round" stroke-width="2"/>*/}
{/*                                        </g>*/}
{/*                                    </svg>*/}

{/*              </span>*/}
{/*                             <span ref={hamburgerCloseRef}>*/}
{/*              <svg xmlns="http://www.w3.org/2000/svg" width="24.042" height="24.042" viewBox="0 0 24.042 24.042">*/}
{/*  <g id="Group_19860" data-name="Group 19860" transform="translate(-337.373 -27.979)">*/}
{/*    <line id="Line_4" data-name="Line 4" x2="30" transform="translate(338.787 29.393) rotate(45)" fill="none"*/}
{/*          stroke="#3c3c3b" strokeLinecap="round" stroke-width="2"/>*/}
{/*    <line id="Line_4154" data-name="Line 4154" x2="30" transform="translate(360 29.394) rotate(135)" fill="none"*/}
{/*          stroke="#3c3c3b" strokeLinecap="round" stroke-width="2"/>*/}
{/*  </g>*/}
{/*</svg>*/}


{/*              </span>*/}
{/*                        </Col>*/}
{/*                        <div className="mobile-menu__items" ref={menuRef}>*/}
{/*                            <div className="mobile-menu__items__top">*/}
{/*                                <ul>*/}
{/*                                    <li>*/}
{/*                                        <a className={''} href="tel:+8801313778778">*/}

{/*                                            <svg xmlns="http://www.w3.org/2000/svg" width={`${windowWidth}`}*/}
{/*                                                 height="44"*/}
{/*                                                 viewBox={`0 0 ${windowWidth} 44`}>*/}
{/*                                                <g id="Group_19869" data-name="Group 19869"*/}
{/*                                                   transform="translate(-15 -998)">*/}
{/*                                                    <g id="Rectangle_492" data-name="Rectangle 492"*/}
{/*                                                       transform="translate(15 998)" fill="none" stroke="#c6c6c6"*/}
{/*                                                       stroke-width="1" opacity="0.5">*/}
{/*                                                        <rect width={`${windowWidth}`} height="44" rx="22"*/}
{/*                                                              stroke="none"/>*/}
{/*                                                        <rect x="0.5" y="0.5" width={`${windowWidth}`} height="43"*/}
{/*                                                              rx="21.5" fill="none"/>*/}
{/*                                                    </g>*/}
{/*                                                    <g id="Rectangle_493" data-name="Rectangle 492"*/}
{/*                                                       transform="translate(15 998)" fill="none" stroke="#c6c6c6"*/}
{/*                                                       stroke-width="1" opacity="0" strokeDasharray="1 520">*/}

{/*                                                        <rect width={`${windowWidth}`} height="44" rx="22"*/}
{/*                                                              stroke="none"/>*/}
{/*                                                        <rect x="0.5" y="0.5" width={`${windowWidth}`} height="43"*/}
{/*                                                              rx="21.5" fill="none"/>*/}
{/*                                                    </g>*/}
{/*                                                </g>*/}
{/*                                            </svg>*/}
{/*                                            <span>*/}
{/*                                                <img className={'call_icon'} src="/images/static/call_icon.svg"*/}
{/*                                                     alt={'Shanta Securities Limited'}/>*/}
{/*                                                01313778778</span>*/}

{/*                                        </a>*/}
{/*                                    </li>*/}
{/*                                    <ButtonSubmit margin={'40px 0 40px'} padding={'0'} borderColor={'transparent'}*/}
{/*                                                  width={'100%'} border={'none'}*/}
{/*                                                  newtablink={'https://portal.shantasecurities.com/signup'}*/}
{/*                                                  target={'_blank'} text={'Open an Account'}*/}
{/*                                                  color={'#FFFFFF'}*/}
{/*                                                  hoverBackground={'#3C3C3B'}*/}
{/*                                                  background={'#978C21'}/>*/}

{/*                                    <li>*/}
{/*                                        <Link href="/search">*/}

{/*                                            <a>*/}
{/*                                                <svg xmlns="http://www.w3.org/2000/svg" width={`${windowWidth}`}*/}
{/*                                                     height="44"*/}
{/*                                                     viewBox={`0 0 ${windowWidth} 44`}>*/}
{/*                                                    <g id="Group_19869" data-name="Group 19869"*/}
{/*                                                       transform="translate(-15 -998)">*/}
{/*                                                        <g id="Rectangle_492" data-name="Rectangle 492"*/}
{/*                                                           transform="translate(15 998)" fill="none" stroke="#c6c6c6"*/}
{/*                                                           stroke-width="1" opacity="0.5">*/}
{/*                                                            <rect width={`${windowWidth}`} height="44" rx="22"*/}
{/*                                                                  stroke="none"/>*/}
{/*                                                            <rect x="0.5" y="0.5" width={`${windowWidth}`} height="43"*/}
{/*                                                                  rx="21.5" fill="none"/>*/}
{/*                                                        </g>*/}
{/*                                                        <g id="Rectangle_493" data-name="Rectangle 492"*/}
{/*                                                           transform="translate(15 998)" fill="none" stroke="#c6c6c6"*/}
{/*                                                           stroke-width="1" opacity="0" strokeDasharray="1 520">*/}
{/*                                                            <rect width={`${windowWidth}`} height="44" rx="22"*/}
{/*                                                                  stroke="none"/>*/}
{/*                                                            <rect x="0.5" y="0.5" width={`${windowWidth}`} height="43"*/}
{/*                                                                  rx="21.5" fill="none"/>*/}
{/*                                                        </g>*/}
{/*                                                    </g>*/}
{/*                                                </svg>*/}
{/*                                                <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"*/}
{/*                                                           viewBox="0 0 20 20">*/}
{/*  <g id="search" transform="translate(-0.196)">*/}
{/*    <path id="Path_8648" data-name="Path 8648"*/}
{/*          d="M8.438,16.472A8.236,8.236,0,1,1,16.68,8.236a8.248,8.248,0,0,1-8.242,8.236Zm0-14.91a6.675,6.675,0,1,0,6.68,6.675,6.685,6.685,0,0,0-6.68-6.675Zm11.529,18.21a.78.78,0,0,0,0-1.1l-3.5-3.493a.781.781,0,1,0-1.1,1.1l3.5,3.493a.782.782,0,0,0,1.1,0Z"*/}
{/*          transform="translate(0 0)" fill="#3c3c3b"/>*/}
{/*  </g>*/}
{/*</svg>*/}
{/*Search</span>*/}
{/*                                            </a>*/}

{/*                                        </Link>*/}
{/*                                    </li>*/}

{/*                                </ul>*/}
{/*                            </div>*/}

{/*                            <ul className="mobile-menu__items__ul">*/}

{/*                                <li className={'main_child'}>*/}
{/*                                    <a href="javascript:void(0)">*/}
{/*                                        Shanta Securities Limited*/}
{/*                                        <svg id="Group_19302" data-name="Group 19302" xmlns="http://www.w3.org/2000/svg"*/}
{/*                                             width="24" height="24" viewBox="0 0 24 24">*/}
{/*                                            <g id="Rectangle_492" data-name="Rectangle 492" fill="none" stroke="#3c3c3b"*/}
{/*                                               stroke-width="1" opacity="0.5">*/}
{/*                                                <rect width="24" height="24" rx="12" stroke="none"/>*/}
{/*                                                <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="none"/>*/}
{/*                                            </g>*/}
{/*                                            <g id="Group_4824" data-name="Group 4824" transform="translate(7 7)">*/}
{/*                                                <g id="Group_4823" data-name="Group 4823" transform="translate(5)">*/}
{/*                                                    <line id="Line_9" data-name="Line 9" y1="5" x2="5"*/}
{/*                                                          transform="translate(0 5)" fill="none" stroke="#3c3c3b"*/}
{/*                                                          strokeLinecap="round" stroke-width="1"/>*/}
{/*                                                    <line id="Line_10" data-name="Line 10" x1="5" y1="5" fill="none"*/}
{/*                                                          stroke="#3c3c3b" strokeLinecap="round" stroke-width="1"/>*/}
{/*                                                </g>*/}
{/*                                                <line id="Line_11" data-name="Line 11" x2="10"*/}
{/*                                                      transform="translate(0 5)" fill="none" stroke="#3c3c3b"*/}
{/*                                                      strokeLinecap="round" stroke-width="1"/>*/}
{/*                                            </g>*/}
{/*                                        </svg>*/}

{/*                                    </a>*/}
{/*                                    <ul className={'submenu'}>*/}
{/*                                        <div className="main_title">*/}
{/*                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
{/*                                                 viewBox="0 0 24 24">*/}
{/*                                                <g id="Group_19302" data-name="Group 19302"*/}
{/*                                                   transform="translate(24 24) rotate(180)">*/}
{/*                                                    <g id="Rectangle_492" data-name="Rectangle 492" fill="none"*/}
{/*                                                       stroke="#3c3c3b" stroke-width="1" opacity="0.5">*/}
{/*                                                        <rect width="24" height="24" rx="12" stroke="none"/>*/}
{/*                                                        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5"*/}
{/*                                                              fill="none"/>*/}
{/*                                                    </g>*/}
{/*                                                    <g id="Group_4824" data-name="Group 4824"*/}
{/*                                                       transform="translate(7 7)">*/}
{/*                                                        <g id="Group_4823" data-name="Group 4823"*/}
{/*                                                           transform="translate(5)">*/}
{/*                                                            <line id="Line_9" data-name="Line 9" y1="5" x2="5"*/}
{/*                                                                  transform="translate(0 5)" fill="none"*/}
{/*                                                                  stroke="#3c3c3b" strokeLinecap="round"*/}
{/*                                                                  stroke-width="1"/>*/}
{/*                                                            <line id="Line_10" data-name="Line 10" x1="5" y1="5"*/}
{/*                                                                  fill="none" stroke="#3c3c3b" strokeLinecap="round"*/}
{/*                                                                  stroke-width="1"/>*/}
{/*                                                        </g>*/}
{/*                                                        <line id="Line_11" data-name="Line 11" x2="10"*/}
{/*                                                              transform="translate(0 5)" fill="none" stroke="#3c3c3b"*/}
{/*                                                              strokeLinecap="round" stroke-width="1"/>*/}
{/*                                                    </g>*/}
{/*                                                </g>*/}
{/*                                            </svg>*/}
{/*                                            Shanta Securities Limited*/}
{/*                                        </div>*/}
{/*                                        /!*?id=who-we-are*!/*/}
{/*                                        /!*?id=mission-vision*!/*/}
{/*                                        /!*?id=core-values*!/*/}
{/*                                        /!*?id=our-board*!/*/}
{/*                                        /!*?id=expert*!/*/}
{/*                                        <li><Link href='/about'><a>Who We Are</a></Link></li>*/}
{/*                                        <li><Link href='/about#mission-vision'><a>Our Mission and Vision </a></Link>*/}
{/*                                        </li>*/}
{/*                                        <li><Link href='/about#core-values'><a>Our Core Values </a></Link></li>*/}
{/*                                        <li><Link*/}
{/*                                            href='/about#our-board'><a>Our Board </a></Link>*/}
{/*                                        </li>*/}
{/*                                        <li><Link href='/about#our-team'><a>Our Team</a></Link>*/}
{/*                                        </li>*/}
{/*                                    </ul>*/}
{/*                                </li>*/}


{/*                                <li>*/}
{/*                                    <Link href='/our-services'><a>Our Services</a></Link>*/}
{/*                                </li>*/}

{/*                                <li>*/}
{/*                                    <Link href='/research'><a>Research Center</a></Link>*/}
{/*                                </li>*/}
{/*                                <li>*/}
{/*                                    <Link href='/investment-calculator'>*/}
{/*                                        /!*Shanta's Pathshala<sub>TM</sub>*!/*/}
{/*                                        <a> Investment Calculator </a>*/}
{/*                                    </Link>*/}
{/*                                </li>*/}
{/*                                <li>*/}
{/*                                    <Link href=""><a>Career</a></Link>*/}
{/*                                </li>*/}
{/*                                <li>*/}
{/*                                    <Link href="/contact"><a>Contacts</a></Link>*/}
{/*                                </li>*/}


{/*                                <li>*/}
{/*                                    <Link href="/downloads">*/}
{/*                                        <a> Downloads</a>*/}
{/*                                    </Link>*/}
{/*                                </li>*/}
{/*                                <li>*/}
{/*                                    <Link href="/campaign">*/}
{/*                                        <a>Campaign</a>*/}
{/*                                    </Link>*/}
{/*                                </li>*/}
{/*                            </ul>*/}

{/*                            <div className="mobile-menu__items__bottom">*/}
{/*                                <div className="" onClick={() => handleMouseEnter('mobile-news')}>*/}
{/*                                    <ButtonSubmit border={'0'} margin={'40px 0 0'} padding={'0'}*/}
{/*                                                  borderColor={'transparent'}*/}
{/*                                                  width={'100%'} text={'Subscribe to Newsletter'}*/}
{/*                                                  color={'#FFFFFF'}*/}
{/*                                                  hoverBackground={hover}*/}
{/*                                                  background={'#C6C6C6'}/>*/}


{/*                                </div>*/}
{/*                                <ul data-tab={'mobile-news'} id={'mobile-subscribe'}*/}
{/*                                    className={`submenu ${hoveredAttr === 'mobile-news' ? 'visible' : 'hidden'}`}>*/}
{/*                                    <div onClick={() => removehidden()} className="main_title">*/}
{/*                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
{/*                                             viewBox="0 0 24 24">*/}
{/*                                            <g id="Group_19302" data-name="Group 19302"*/}
{/*                                               transform="translate(24 24) rotate(180)">*/}
{/*                                                <g id="Rectangle_492" data-name="Rectangle 492" fill="none"*/}
{/*                                                   stroke="#3c3c3b" stroke-width="1" opacity="0.5">*/}
{/*                                                    <rect width="24" height="24" rx="12" stroke="none"/>*/}
{/*                                                    <rect x="0.5" y="0.5" width="23" height="23" rx="11.5"*/}
{/*                                                          fill="none"/>*/}
{/*                                                </g>*/}
{/*                                                <g id="Group_4824" data-name="Group 4824"*/}
{/*                                                   transform="translate(7 7)">*/}
{/*                                                    <g id="Group_4823" data-name="Group 4823"*/}
{/*                                                       transform="translate(5)">*/}
{/*                                                        <line id="Line_9" data-name="Line 9" y1="5" x2="5"*/}
{/*                                                              transform="translate(0 5)" fill="none"*/}
{/*                                                              stroke="#3c3c3b" strokeLinecap="round"*/}
{/*                                                              stroke-width="1"/>*/}
{/*                                                        <line id="Line_10" data-name="Line 10" x1="5" y1="5"*/}
{/*                                                              fill="none" stroke="#3c3c3b" strokeLinecap="round"*/}
{/*                                                              stroke-width="1"/>*/}
{/*                                                    </g>*/}
{/*                                                    <line id="Line_11" data-name="Line 11" x2="10"*/}
{/*                                                          transform="translate(0 5)" fill="none" stroke="#3c3c3b"*/}
{/*                                                          strokeLinecap="round" stroke-width="1"/>*/}
{/*                                                </g>*/}
{/*                                            </g>*/}
{/*                                        </svg>*/}
{/*                                        Subscribe to Newsletter*/}
{/*                                    </div>*/}

{/*                                    <div className="form-content">*/}
{/*                                        <Title margin={'0 0 40px 0'}*/}
{/*                                               text={'Want updates on the go? </br> Sign up for Daily Newsflash</br> and never miss a thing!'}/>*/}

{/*                                        <Form className={``}*/}
{/*                                              onSubmit={''}>*/}
{/*                                            <Form.Group className="form-group" controlId="formBasicEmail">*/}

{/*                                                <Form.Control autocomplete="off"*/}

{/*                                                              name='email' type="email"*/}
{/*                                                              placeholder="Your Email Address"/>*/}
{/*                                                <div className="dc-btn-submit">*/}
{/*                                                    <ButtonSubmit width={'100'} text={'Subscribe'} color={'#FFFFFF'}*/}
{/*                                                                  hoverBackground={'#3C3C3B'}*/}
{/*                                                                  background={'#978C21'}/>*/}
{/*                                                </div>*/}
{/*                                            </Form.Group>*/}

{/*                                        </Form>*/}
{/*                                    </div>*/}
{/*                                </ul>*/}

{/*                                <ButtonSubmit border={'none'} src={'easytrade'} margin={'20px 0 0'} padding={'0'} icon*/}
{/*                                              width={'100%'}*/}
{/*                                              text={'Shanta EasyTrade'} color={'#FFFFFF'}*/}
{/*                                              hoverBackground={'#3C3C3B'}*/}
{/*                                              background={'#978C21'}/>*/}
{/*                            </div>*/}
{/*                        </div>*/}
{/*                    </Row>*/}
{/*                </Container>*/}
{/*            </StyledMobileMenu>*/}

        </StyledDesktopMenu>


    );
};

const StyledDesktopMenu = styled.section`

    height: 95px;
    position: fixed;
    z-index: 99999;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.20);
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);

    sub, sup {
        vertical-align: top;
    }

    .all {
        margin-bottom: 40px;

        a {
            margin-bottom: 5px !important;

            &:last-child {
                margin-bottom: 0 !important;
            }
        }
    }

    .overlay {
        height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        position: fixed;
        touch-action: none;
        background-color: rgba(0, 0, 0, 0.5);
        -webkit-tap-highlight-color: transparent;
        //display: none;

    }

    .container {
        position: relative;
        z-index: 3;
    }

    .sticky_logo {
        display: none;
        transition-delay: 0.8s;

        .global-image {
            img {
                height: auto !important;
            }
        }

    }


    .search-desktop {
        //height: 195px;
        background-color: #F9F9F9;
        //display: flex;
        align-content: center;
        flex-wrap: wrap;
        position: fixed;
        width: 100%;
        left: 0;
        right: 0;
        top: 95px;
        height: 0;
        display: none;
        opacity: 0;
        overflow: hidden;
        z-index: 9;
        box-shadow: 0 1px 6px rgb(0 0 0 / 10%);


        .clickto_close {
            cursor: pointer;
        }

        .container {
            position: relative;
            opacity: 0;
        }

        position: absolute;

        svg {
            position: absolute;
            right: 15px;
            top: -50px;
            z-index: 3;

        }


        form {
            min-width: 100%;

            .search-input {
                button, p, a {
                    box-shadow: none;
                    border: none;
                    background-color: transparent;
                    position: absolute;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                    height: fit-content;
                    font-size: 12px;
                    line-height: 18px;
                    color: #221f1f;
                    transition: color .3s cubic-bezier(0.4, 0, 0, 1);
                    cursor: pointer;

                    &:hover {
                        color: #D0CA10;
                    }
                }

                span {
                    position: absolute !important;
                    bottom: 18px;
                }

                .form-control {
                    border: none;
                    border-radius: 0;
                    border-bottom: 1px solid #221F1F;
                    padding-left: 0px;
                    padding-bottom: 9px;
                    padding-top: 0;
                    height: 50px;
                    font-size: 32px;
                    line-height: 36px;
                    font-weight: 600;
                    color: black;
                    background-color: #F9F9F9;

                    ::placeholder {
                        font-size: 32px;
                        line-height: 36px;
                        font-weight: 600;
                        color: rgba(60, 60, 59, 0.5);
                    }
                }

            }
        }

        &__menu {
            margin-top: 23px;
            min-width: 100%;

            p {
                font-size: 12px;
                color: #ed1b34;
                font-weight: 600;
                line-height: 18px;
                margin-bottom: 13px;

            }

            ul {
                display: inline-flex;

                li {
                    a {
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 22px;
                        color: #221f1f;
                        display: flex;
                        margin-right: 30px;
                    }

                    &:nth-last-child(1) {
                        a {
                            margin-right: 0;
                        }
                    }
                }
            }

        }

    }

    .desktop-menu__top {
        height: auto;
        display: flex;
        align-items: center;
        padding: 25px 0;

        .desktop-hamburger {
            cursor: pointer;
            margin-right: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;

            .close {

                svg {
                    width: 25px;
                    height: 25px;

                    g {
                        transform: translate(-96.586px, -36.086px)
                    }
                }

                #Line_3,
                #Line_4,
                #Line_5 {
                    fill: none;
                    stroke: #fff;
                    strokeLinecap: round;
                    stroke-width: 2;
                }

                #Line_3 {
                    transform: translate(98px, 58.713px) rotate(-45deg);
                }

                #Line_4 {
                    transform: translate(98px, 37.5px) rotate(45deg);
                }

                #Line_5 {
                    transform: translate(98px, 58.713px) rotate(-45deg);
                }

                &:hover {

                }
            }

            svg {
                transition: 1s all ease;

                g {

                }

                line {
                    //stroke-dasharray: 30px;

                    transition: 1s all ease;
                }
            }

            &:hover {
                //svg {
                //  #Line_4 {
                //    stroke-dasharray: 20px;
                //  }
                //
                //  #Line_5 {
                //    stroke-dasharray: 15px;
                //  }
                //}

                //.close {
                //  svg {
                //    #Line_4 {
                //      stroke-dasharray: 30px;
                //    }
                //
                //    #Line_5 {
                //      stroke-dasharray: 30px;
                //    }
                //  }
                //}
            }
        }

        &__logo {
            display: flex;

            a {
                display: flex;
                position: relative;
                z-index: 33;

                img {
                    height: 48px;
                    width: 200px;
                }

            }
        }

        ul {
            li {
                overflow: hidden;
                color: #ffffff;
                margin-right: 30px;
                display: flex;
                font-size: 16px;
                font-weight: 500;
                align-items: center;
                cursor: pointer;
                position: relative;
                background: #978C21;
                border-radius: 25px;
                overflow: hidden;

                &.dc-btn {
                    a {
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 24px;
                        overflow: hidden;
                        min-width: 160px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        &:after {
                            background: #3C3C3B;
                            content: "";
                            position: absolute;
                            left: 0;
                            right: 0;
                            top: 0;
                            bottom: 0;
                            height: 100%;
                            display: block !important;
                            border-radius: 25px;
                            transition: 0.6s all cubic-bezier(0.4, 0, 0, 1);
                            transform: translateY(100%);
                        }

                        &:hover {
                            color: white !important;

                            &:after {
                                transform: translateY(0);
                            }
                        }

                        span {
                            top: 1px;
                        }
                    }
                }

                &:nth-last-child(1) {
                    margin-right: 0;


                    a {
                        background: transparent !important;

                    }
                }

                &:first-child {
                    background: transparent !important;
                    padding: 0;

                    &:after {
                        display: none !important;
                    }

                    a {
                        background: transparent !important;
                        padding: 0;
                        font-size: 16px;

                        span {
                            display: flex;
                            align-items: center;
                        }

                        svg {

                            path, #Rectangle_493 {
                                transition: 0.8s all ease;

                            }
                        }

                        &:after {
                            display: none !important;
                        }

                        &:hover {
                            //color: #4F616B !important;

                            svg {
                                #Rectangle_493 {
                                    opacity: 1;
                                    stroke-dasharray: 520px;
                                }

                                path {
                                    //fill: #D0CA10;
                                }
                            }
                        }
                    }
                }

                &:last-child {
                    padding: 0;
                    background: transparent;

                    &:after {
                        display: none;
                    }

                    svg {
                        #Ellipse_19 {
                            transition: 0.8s all ease;

                        }
                    }

                    &:hover {
                        &:after {
                            height: 32px !important;
                            width: 32px !important;
                        }

                        //#Ellipse_19 {
                        //  opacity: 1;
                        //  stroke-dasharray: 142px;
                        //}

                        //svg {
                        //  #Rectangle_4970 {
                        //    opacity: 1;
                        //    width: 32px;
                        //    height: 32px;
                        //    stroke: #d0ca10;
                        //  }
                        //
                        //  #Group_15927 {
                        //    #Ellipse_95, line {
                        //    }
                        //  }
                        ////}
                    }

                }

                a {
                    display: flex;
                    align-items: center;
                    //text-transform: capitalize;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 18px;
                    color: #FFFFFF;
                    padding: 10px 15px;

                    span {
                        position: relative;
                        z-index: 1;

                        &.image-circle {
                            height: 32px;
                            width: 32px;
                            border-radius: 50%;
                            background-color: #221F1F;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-left: 10px;
                        }
                    }

                    //.hover{
                    //  &:after{
                    //    width: 32px;
                    //    height: 32px;
                    //  }
                    //}

                    &:hover {

                    }
                }


                ul {
                    position: absolute;
                    flex-wrap: wrap;
                    background-color: #F9F9F9;
                    width: 170px;
                    z-index: 99;
                    padding: 20px 0 20px 0;
                    opacity: 0;
                    height: 0;
                    display: none;
                    overflow: hidden;
                    right: 0;
                    top: 70px;

                    li {
                        display: block;
                        min-width: 100%;
                        border: none;
                        padding: 0 20px 0 20px;
                        opacity: 0;

                        a {
                            display: flex;
                            padding: 0 0 20px 0;
                            border-bottom: 1px solid rgba(34, 31, 31, 0.10);
                            color: #221f1f;
                            width: 100%;
                            margin-bottom: 13px;
                            position: relative;
                            text-transform: none;

                            svg {
                                position: absolute;
                                right: 30px;
                                color: #D0CA10;
                                opacity: 0;
                                transition: all .3s cubic-bezier(0.4, 0, 0, 1);
                                top: 3px;
                            }

                            &:hover {
                                //color: #D0CA10 !important;
                            }

                        }


                        a {
                            font-size: 12px;
                            font-weight: 600;
                        }

                        &:nth-last-child(1) {
                            a {
                                margin-bottom: 0;
                                border: none;
                                padding-bottom: 0;
                            }
                        }

                        &:hover {
                            svg {
                                right: 0;
                                opacity: 1;

                                path {
                                    fill: #D80028;
                                }
                            }
                        }

                        ul {
                            display: block !important;
                            height: auto !important;
                            position: absolute;
                            width: 270px;
                            z-index: 2;
                            left: calc(100% + 0px);
                            top: -20px;
                            opacity: 0;
                            transition: opacity .3s cubic-bezier(0.4, 0, 0, 1);


                            li {
                                opacity: 1 !important;
                            }
                        }

                        &:hover {
                            ul {
                                opacity: 1 !important;
                            }

                        }
                    }
                }


            }

        }
    }


    //bottom menu 

    .desktop-menu__bottom {
        position: fixed;
        left: 0;
        right: 0;
        top: 95px;
        height: 0;
        overflow: hidden;

        &:after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            height: 100%;
            width: 100%;
            background: white;
        }


        .mega_menu {
            overflow: hidden;
            position: relative;
            z-index: 1;
        }

        background: transparent;


        .mega_menu {
            width: 100%;
            //visibility: hidden;
            overflow: hidden;
            background: transparent;
            display: flex;
            padding: 0;
            height: 0;

            .content_wrap {
                width: 34.5%;
                min-width: 34.5%;
                position: relative;
                background: #f2f2f2;
                padding-left: ${props => props.offset}px!important;
                padding-top: 40px;
                padding-right: 70px;
                padding-bottom: 40px;
                
                height: 100%;
                border-right: 1px solid rgba(198, 198, 198, 0.5);

                li {
                    padding-bottom: 10px;
                    border-bottom: 1px solid rgba(60, 60, 59, 0.1);
                    margin-bottom: 10px;
                    opacity: 0;

                    &.last {
                        margin-bottom: 0;
                        border-bottom: none;
                    }

                    &.active {
                        a {
                            color: ${hover};

                        }

                        svg {
                            opacity: 1 !important;
                        }
                    }

                    a {
                        font-size: 16px;
                        font-weight: 500;
                        color: #3C3C3B;

                        svg {
                            margin-left: 12px;
                            opacity: 0;
                            transition: 1s all ease;

                            @media (min-width: 1600px) {
                                bottom: 2px;
                                position: relative;
                            }

                            path {
                                fill: #978C21;
                            }
                        }

                        &:hover {
                            color: ${hover};

                            svg {
                                opacity: 1 !important;
                            }

                        }
                    }

                }

                .dc-btn {
                    opacity: 0;
                }

                &:after {
                    //content: "";
                    position: absolute;
                    right: 20px;
                    z-index: 2;
                    height: calc(100% + 150px);
                    width: 1px;
                    top: -60px;
                    bottom: 0;
                    background: rgba(79, 97, 107, 0.2);
                    min-height: 360px;
                }


            }

            .middle-menu {
                //width: 32.5%;
                width: 0;
                position: relative;
                background: #F8F8F8;
                padding-left: 0;
                padding-top: 40px;
                padding-bottom: 40px;
                padding-right: 0px;
                height: auto;
                opacity: 0;

                border-right: 1px solid rgba(198, 198, 198, 0.5);
                transform: translateX(-100%);
                z-index: -1;

                li {
                    padding-bottom: 15px;
                    border-bottom: 1px solid rgba(60, 60, 59, 0.1);
                    margin-bottom: 15px;
                    opacity: 0;
                    transform: translateX(-100%);
                    min-width: 300px;

                    @media (min-width: 160px) {
                        min-width: 560px;
                    }
                    @media (min-width: 1536px) {
                        min-width: 360px;
                    }

                    &.last {
                        margin-bottom: 0;
                        border-bottom: none;
                    }

                    a {
                        font-size: 16px;
                        font-weight: 500;
                        color: #3C3C3B;

                        svg {
                            margin-left: 12px;
                            opacity: 0;
                            transition: 1s all ease;

                            path {
                                fill: #978C21;
                            }
                        }

                        &:hover {
                            color: ${hover};

                            svg {
                                opacity: 1 !important;
                            }

                        }
                    }

                }

                .dc-btn {
                    opacity: 0;
                }

                &:after {
                    //content: "";
                    position: absolute;
                    right: 20px;
                    z-index: 2;
                    height: calc(100% + 150px);
                    width: 1px;
                    top: -60px;
                    bottom: 0;
                    background: rgba(79, 97, 107, 0.2);
                    min-height: 360px;
                }


            }

            .fixed_menu {
                width: 65.5%;
                //width: 35%;
                padding-right: ${props => props.offset}px;
                padding-left: 70px;
                padding-top: 40px;
                padding-bottom: 40px;
                //height: 0;
                height: auto;
                position: relative;
                background: #fff;

                .content {
                    opacity: 0;

                    h3 {
                        color: #3C3C3B;
                        font-size: 32px;
                        line-height: 44px;
                        font-weight: 500;
                        margin-bottom: 40px;

                        span {
                            color: ${hover};
                        }
                    }

                    p {
                        font-size: 16px;
                        font-weight: 400;
                        color: rgba(60, 60, 59, 0.5);

                        line-height: 24px;
                        margin-bottom: 10px;
                    }

                    a {
                        font-size: 16px;
                        font-weight: 400;
                        color: #3C3C3B;
                        display: inline-block;
                        line-height: 24px;
                        margin-bottom: 40px;
                    }
                }

                .social {
                    display: flex;
                    flex-direction: row;

                    svg {
                        overflow: hidden;
                        border-radius: 50%;

                        #Ellipse_603, path {
                            transition: 1s all cubic-bezier(.25, .74, .22, .99);
                        }
                    }

                    li {
                        margin-right: 20px;
                        opacity: 0;

                        &:first-child {
                            margin-left: 0;
                        }

                        a {
                            &:hover {
                                svg {
                                    #Ellipse_603 {
                                        cy: 15px;
                                    }

                                    path {
                                        fill: white;
                                    }


                                }
                            }
                        }
                    }
                }


                .menu-tab {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    top: 0;
                    height: 100%;
                    width: 100%;
                    padding: 40px 79px 40px 70px;
                    opacity: 0;
                    transition: 0.5s all ease;
                    visibility: hidden;

                    &.visible {
                        transition: 0.5s all ease;
                        opacity: 1 !important;
                        visibility: visible !important;

                    }

                    &.hidden {
                        transition: 0.5s all ease;
                        visibility: hidden;

                        opacity: 0;

                    }

                    h3 {

                        font-size: 24px;
                        font-weight: 500;
                        line-height: 32px;
                        color: #3C3C3B;
                        margin-bottom: 20px;
                    }

                    p {
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 24px;
                        color: #3C3C3B;
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

                }

            }
        }

        &__parent-ul {
            display: flex;
            width: 100%;
            height: 100%;
            position: relative;
            justify-content: flex-end;

            > li {
                display: flex;
                margin-right: 30px;
                position: relative;
                align-items: center;

                &:last-child {
                    margin-right: 0;
                }


                //&.has-child-all:hover{
                //  .submenu{
                //    height: auto !important;
                //    opacity: 1 !important;
                //    visibility: visible !important;
                //    
                //  }
                //}

                &:hover {
                    &:after {
                        width: 100%;
                    }

                    a {
                    }


                    //  ul {
                    //    opacity: 1;
                    //    visibility: visible;
                    //    transition: all .6s cubic-bezier(0.4, 0, 0, 1) !important;
                    //
                    //    .fixed_menu {
                    //      opacity: 1;
                    //    }
                    //  }
                    //}

                }

            }


            &:after {
                //content: '';
                position: absolute;
                height: 2px;
                width: 0;
                left: 0;
                top: -1.5px;
                background-color: #D0CA10;
                transition: width .6s cubic-bezier(0.87, 0, 0.13, 1);
            }

        }


        @media (max-width: 1199px) {

            .desktop-menu__top ul li {
                margin-right: 20px;

                &.search {
                    margin-right: 25px;
                    width: 115px;
                }
            }

            .desktop-menu__bottom ul li {
                margin-right: 15px;

                a {
                    font-size: 10px;
                }
            }
        }


        @media (max-width: 992px) {
            display: none;
        }


    }


    @media (max-width: 992px) {
        display: none;
    }
`;

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

const StyledMobileBottomBar = styled.section`
  position: fixed;
  bottom: 0;
  height: 55px;
  background-color: #FFF;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.20);
  width: 100%;
  z-index: 9;


  .mobile-bottom-bar__buttons {
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .mobile-bottom-bar__account {
    position: fixed;
    width: 100%;
    padding: 110px 20px 60px 20px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.20);
    visibility: hidden;
    transform: translateY(100%);
    transition: all .6s cubic-bezier(0.87, 0, 0.13, 1);

    svg {
      position: absolute;
      right: 13px;
      top: 50px;
      font-size: 40px;
      color: black;
    }

    p {
      font-size: 16px;
      color: #D0CA10;
      line-height: 22px;
      margin-bottom: 40px;
      font-weight: 600;
    }

    ul {
      width: 100%;

      li {
        a {
          display: flex;
          font-size: 12px;
          line-height: 18px;
          font-weight: 600;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(34, 31, 31, 0.1);
          margin-bottom: 20px;
        }

        &:nth-last-of-type(1) {
          a {
            margin-bottom: 0;
            border-bottom: 0;
          }
        }
      }
    }

    &.open {
      transform: none;
      visibility: visible;
    }
  }

  .mobile-bottom-bar__search {
    position: fixed;
    width: 100%;
    padding: 110px 20px 60px 20px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.20);
    visibility: hidden;
    transform: translateY(100%);
    transition: all .6s cubic-bezier(0.87, 0, 0.13, 1);

    svg {
      position: absolute;
      right: 13px;
      top: 50px;
      font-size: 40px;
      color: black;
    }

    p {
      font-size: 16px;
      color: #D0CA10;
      line-height: 22px;
      margin-bottom: 20px;
      margin-top: 45px;
      font-weight: 600;
    }

    .search-input {
      position: relative;

      button, p, a {
        box-shadow: none;
        border: none;
        background-color: transparent;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        height: fit-content;
        font-size: 12px;
        line-height: 18px;
        color: #221f1f;
        transition: color .3s cubic-bezier(0.4, 0, 0, 1);
        cursor: pointer;

        &:hover {
          //color: #D0CA10;
        }
      }

      span {
        position: absolute !important;
        bottom: 18px;
      }

      .form-control {
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #221F1F;
        padding-left: 30px;
        padding-right: 60px;
        padding-bottom: 9px;
        padding-top: 0;
        height: 50px;
        font-size: 16px;
        line-height: 22px;
        font-weight: 600;
        color: rgba(34, 31, 31, 0.20);

        ::placeholder {
          font-size: 16px;
          line-height: 22px;
          font-weight: 600;
          color: rgba(34, 31, 31, 0.20);
        }
      }
    }

    ul {
      li {

        a {
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
          display: flex;
          margin-bottom: 10px;
        }

        &:nth-last-of-type(1) {
          a {
            margin-bottom: 0;
          }
        }
      }
    }

    &.open {
      transform: none;
      visibility: visible;
    }
  }

  @media (min-width: 993px) {
    display: none;
  }


  .has-child-sub.open_submenu > a svg {
    opacity: 1;
    right: 0;
  }

  // 
  //.mega_sub .has-child-sub-sub.open_submenu_sub>a {
  //  svg{
  //    opacity: 1 !important;
  //    right: 0 !important;
  //  }
  //}
  // 


  .has-child-sub-sub a:hover {
    svg {
      opacity: 1 !important;
    }
  }


  @media (min-width: 1024px) and (max-width: 1440px ) {
    .desktop-menu__bottom .mega_menu .fixed_menu .menu-tab h3 {
      font-size: 22px;
      font-weight: 500;
      line-height: 25px;
    }
  }


`;


export default React.memo(MainMenu);


