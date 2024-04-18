import React, {useEffect, useRef, useState, useMemo} from "react";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import {hover, title} from '../../styles/globalStyleVars';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import {Autoplay, Navigation, Pagination} from "swiper";
import {Img} from "../home/ImgP";
import {Col, Container, Row} from "react-bootstrap";
import Button from "../ButtonNormal";
import ButtonNoLink from "../ButtonOpenNow";
import Title from "../Title";
import Link from "next/link";


const Banner = ({data, offset, feature_data, windowWidth}) => {
    const banner_data = useMemo(() => {
        return data?.posts?.list || []; // Ensure banner_data is an empty array by default
    }, [data]);
    const feature_box = feature_data?.posts?.list;
    // const slider_data = data?.posts?.list?.[0]?.find(f => f?.images?.banner === 'on') ;

    const swiperRef = useRef(null);
    const swiperRefTwo = useRef(null);


    // handle slider progress
    const handleProgress = (swiper) => {
        let interleaveOffset = 0.5;
        for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress;
            let innerOffset = swiper.width * interleaveOffset;
            let innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(".global-image").style.transform =
                "translate3d(" + innerTranslate + "px, 0, 0)";
        }

    };

    // hand touch move not required this slider
    const handleTouchStart = (swiper) => {
        for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
        }
    };


    // handle image transition on change
    const handleSetTransition = (swiper, speed) => {
        for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = `${speed}ms`;
            swiper.slides[i]
                .querySelector(".global-image")
                .style.transition = `${speed}ms`;
        }
    };


    // handle pagination
    let pagination_title = ['Financial freedom at the palm of your hands', 'Investing in growth to open new big opportunities', 'Financial freedom at the palm of your hands', 'Investing in growth to open new big opportunities']
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '"><span>' + pagination_title[index] + "</span></div>";
        },
    };
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);


    const handleSlideChange = (event) => {

        const newActiveSlideIndex = event.realIndex;
        setActiveSlideIndex(newActiveSlideIndex);
        if (swiperRefTwo.current) {
            swiperRefTwo.current.swiper.slideTo(newActiveSlideIndex);
        }


    };

    const handleButtonClickPagination = (index) => {
        if (swiperRef.current) {
            setActiveSlideIndex(index);
            swiperRef.current.swiper.slideToLoop(index);
        }
    };


    useEffect(() => {
        const swiper = swiperRef.current;

        const autoplayDelay = 5000; // Delay in milliseconds before autoplaying

        const autoplayTimeout = setTimeout(() => {
            if (swiper && swiper.autoplay) {
                swiper.autoplay.start();
            }
        }, autoplayDelay);

        return () => {
            clearTimeout(autoplayTimeout);
        };
    }, []);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true)
    }


    const [isModalVisible, setIsModalVisible] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setIsModalVisible(true);
        }, 1500);
    }, [isModalVisible]);


    return (
        <>
            <StyledBanner offset={offset} className={'home-banner'}>
                {/*<PopupV1 show={show} handleClose={handleClose}/>*/}

                {
                    banner_data && banner_data?.length > 0 ?

                        <Swiper
                            ref={swiperRef}
                            spaceBetween={0}
                            loop={true}
                            // autoplay
                            speed='2500'
                            onSlideChange={handleSlideChange}
                            onProgress={handleProgress}
                            touchStart={handleTouchStart}
                            onSetTransition={handleSetTransition}
                            grabCursor={false}
                            lazy={true}
                            watchSlidesProgress={true}
                            mousewheelControl={true}
                            keyboardControl={true}
                            navigation={{
                                prevEl: '#banner-prev',
                                nextEl: '#banner-next',
                            }}
                            pagination={pagination}
                            modules={[Autoplay, Pagination, Navigation]}
                            sName="mySwiper main-swiper"
                        >

                            {
                                banner_data && banner_data?.length > 0 &&
                                banner_data?.map((e, index) => {


                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="slide-inner">
                                                {
                                                    windowWidth > 767 ?

                                                        <div className="desktop">
                                                            <Img alt={'Shanta Securities Limited'}
                                                                src={e?.images?.[0]?.full_path ? e?.images[0]?.full_path : '/images/static/blur.jpg'}/>
                                                        </div>

                                                        :

                                                        <div className="mobile">
                                                            <Img alt={'Shanta Securities Limited'}
                                                                src={e?.images[1]?.full_path ? e?.images[1]?.full_path : e?.images[0]?.full_path ? e?.images[0]?.full_path : '/images/static/blur.jpg'}/>
                                                        </div>

                                                }


                                                <Container>
                                                    <Row>
                                                        <Col>
                                                            <div className="slide-inner__info">
                                                                {

                                                                    isModalVisible && (
                                                                        e?.data?.short_desc &&

                                                                        <Title h1={index == 0 ? true : false} noanim
                                                                               fontWeight={'500'} color={'white'}
                                                                               fontSize={'60'} margin={'0 0 30px 0'}
                                                                               text={e?.data?.short_desc}/>

                                                                    )
                                                                }

                                                                {
                                                                    e?.data?.button_url !== 'investor_calculator' ?

                                                                        e?.data?.button_new_tab === 'Y' ?
                                                                            <Button newtablink={e?.data?.button_url}
                                                                                    target={'_blank'} data-lag={'0.2'}
                                                                                    margin={'40px 0 0'}
                                                                                    text={e?.data?.subtitle ? e?.data?.subtitle : 'Open an Account Now'}
                                                                                    hoverBackground={'#004195'}
                                                                                    borderColor={'#004195'}
                                                                                    color={'#FFFFFF'} fontSize={'16px'}
                                                                                    lineHeight={'20px'}
                                                                                    fontWeight={'400'}
                                                                                    letterSpacing={'0'}/>

                                                                            : <Button src={e?.data?.button_url}
                                                                                      target={'_blank'} data-lag={'0.2'}
                                                                                      margin={'40px 0 0'}
                                                                                      text={e?.data?.subtitle ? e?.data?.subtitle : 'Open an Account Now'}
                                                                                      hoverBackground={'#004195'}
                                                                                      borderColor={'#004195'}
                                                                                      color={'#FFFFFF'}
                                                                                      fontSize={'16px'}
                                                                                      lineHeight={'20px'}
                                                                                      fontWeight={'400'}
                                                                                      letterSpacing={'0'}/>

                                                                        : e?.data?.button_url === 'investor_calculator' ?
                                                                            <div onClick={() => handleShow()}>

                                                                                <ButtonNoLink nolink data-lag={'0.2'}
                                                                                              margin={'40px 0 0'}
                                                                                              text={e?.data?.subtitle ? e?.data?.subtitle : 'Open an Account Now'}
                                                                                              hoverBackground={'#004195'}
                                                                                              borderColor={'#004195'}
                                                                                              color={'#FFFFFF'}
                                                                                              fontSize={'16px'}
                                                                                              lineHeight={'20px'}
                                                                                              fontWeight={'400'}
                                                                                              letterSpacing={'0'}/>
                                                                            </div>
                                                                            : ''
                                                                }

                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }


                        </Swiper>
                        : ''

                }


                <div className="swipper-navigation-slider-custom">
                    {
                        banner_data && banner_data?.length > 0 ?
                            <Swiper
                                ref={swiperRefTwo}
                                speed='1000'
                                slidesPerView={4}
                                spaceBetween={30}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,

                                    },
                                    768: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,

                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    },
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiperNext"
                            >

                                {
                                    banner_data && banner_data?.length > 0 &&
                                    banner_data?.map((e, index) => {


                                        return (
                                            <SwiperSlide key={index}>
                                                <div
                                                    className={`slide-inner-item ${activeSlideIndex === index ? 'active' : ''}`}
                                                    onClick={() => handleButtonClickPagination(index)}>
                                                    <span>{e?.data?.title}</span>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }


                            </Swiper>
                            : ''
                    }
                </div>


                {/*next prev navigation*/}
                {
                    banner_data && banner_data?.length > 0 ?
                        <div className="navigation">
                            <Container>
                                <Row>
                                    <Col>
                                        <ul>
                                            <li id={'banner-next'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44"
                                                     viewBox="0 0 44 44">
                                                    <g id="Next" transform="translate(16429 -2014)">
                                                        <g id="Rectangle_492" data-name="Rectangle 492"
                                                           transform="translate(-16429 2014)" fill="none" stroke="#fff"
                                                           stroke-width="1" opacity="0.5">
                                                            <rect width="44" height="44" rx="22" stroke="none"/>
                                                            <rect x="0.5" y="0.5" width="43" height="43" rx="21.5"
                                                                  fill="none"/>
                                                        </g>
                                                        <g id="Group_4824" data-name="Group 4824"
                                                           transform="translate(-17065.5 434.5)">
                                                            <g id="Group_4823" data-name="Group 4823"
                                                               transform="translate(11 4)">
                                                                <line id="Line_9" data-name="Line 9" x2="5" y2="5"
                                                                      transform="translate(647.5 1592.5)" fill="none"
                                                                      stroke="#fff"
                                                                      strokeLinecap="round" stroke-width="1"/>
                                                                <line id="Line_10" data-name="Line 10" x1="5" y2="5"
                                                                      transform="translate(647.5 1597.5)" fill="none"
                                                                      stroke="#fff"
                                                                      strokeLinecap="round" stroke-width="1"/>
                                                            </g>
                                                            <line id="Line_11" data-name="Line 11" x2="10"
                                                                  transform="translate(653.5 1601.5)" fill="none"
                                                                  stroke="#fff"
                                                                  strokeLinecap="round" stroke-width="1"/>
                                                        </g>
                                                        <g id="Rectangle_5661" data-name="Rectangle 5661"
                                                           transform="translate(-16429 2058) rotate(-90)" fill="none"
                                                           stroke="#fff"
                                                           stroke-width="1" strokeDasharray="0" opacity="0">
                                                            <rect width="44" height="44" rx="22" stroke="none"/>
                                                            <rect x="0.5" y="0.5" width="43" height="43" rx="21.5"
                                                                  fill="none"/>
                                                        </g>
                                                    </g>
                                                </svg>

                                            </li>
                                            <li id={'banner-prev'}>
                                                <svg id="Prev" xmlns="http://www.w3.org/2000/svg" width="44" height="44"
                                                     viewBox="0 0 44 44">
                                                    <g id="Rectangle_492" data-name="Rectangle 492" fill="none"
                                                       stroke="#fff"
                                                       stroke-width="1" opacity="0.5">
                                                        <rect width="44" height="44" rx="22" stroke="none"/>
                                                        <rect x="0.5" y="0.5" width="43" height="43" rx="21.5"
                                                              fill="none"/>
                                                    </g>
                                                    <g id="Group_4824" data-name="Group 4824"
                                                       transform="translate(17 17)">
                                                        <g id="Group_4823" data-name="Group 4823">
                                                            <line id="Line_9" data-name="Line 9" x1="5" y2="5"
                                                                  fill="none"
                                                                  stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                                            <line id="Line_10" data-name="Line 10" x2="5" y2="5"
                                                                  transform="translate(0 5)" fill="none" stroke="#fff"
                                                                  strokeLinecap="round" stroke-width="1"/>
                                                        </g>
                                                        <line id="Line_11" data-name="Line 11" x1="10"
                                                              transform="translate(0 5)"
                                                              fill="none" stroke="#fff" strokeLinecap="round"
                                                              stroke-width="1"/>
                                                    </g>
                                                    <g id="Rectangle_5661" data-name="Rectangle 5661"
                                                       transform="translate(0 44) rotate(-90)" fill="none" stroke="#fff"
                                                       stroke-width="1" strokeDasharray="1 140" opacity="0">
                                                        <rect width="44" height="44" rx="22" stroke="none"/>
                                                        <rect x="0.5" y="0.5" width="43" height="43" rx="21.5"
                                                              fill="none"/>
                                                    </g>
                                                </svg>


                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        : ''
                }


                {/*feature box*/}

                <div className="  feature-box-container">
                    <Container>
                        <Row className={'boxr'}>


                            {
                                feature_box && feature_box.length > 0 &&
                                feature_box?.map((e) => {
                                    return (
                                        <Col className={'feature-box-container_item'} md={3}>
                                            <div className="single-item-wrapper">
                                                <Link href={e?.data?.subtitle}>
                                                    <a>
                                                        <div className="content">
                                                            {
                                                                e?.data?.short_desc &&
                                                                <p className={'split-up'}>{e?.data?.short_desc}</p>

                                                            }
                                                            {
                                                                e?.data?.title &&
                                                                <h3><span
                                                                    className={'split-up'}>{e?.data?.title}</span>


                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="44"
                                                                         height="44"
                                                                         viewBox="0 0 44 44">
                                                                        <g id="Circle"
                                                                           transform="translate(16429 -2014)">
                                                                            <g id="Rectangle_492"
                                                                               data-name="Rectangle 492"
                                                                               transform="translate(-16429 2014)"
                                                                               fill="none"
                                                                               stroke="#c6c6c6"
                                                                               stroke-width="1" opacity="0.5">
                                                                                <rect width="44" height="44" rx="22"
                                                                                      stroke="none"/>
                                                                                <rect x="0.5" y="0.5" width="43"
                                                                                      height="43"
                                                                                      rx="21.5"
                                                                                      fill="none"/>
                                                                            </g>
                                                                            <g id="Group_4824" data-name="Group 4824"
                                                                               transform="translate(-17065.5 434.5)">
                                                                                <g id="Group_4823"
                                                                                   data-name="Group 4823"
                                                                                   transform="translate(11 4)">
                                                                                    <line id="Line_9" data-name="Line 9"
                                                                                          x2="5"
                                                                                          y2="5"
                                                                                          transform="translate(647.5 1592.5)"
                                                                                          fill="none"
                                                                                          stroke="#3c3c3b"
                                                                                          strokeLinecap="round"
                                                                                          stroke-width="1"/>
                                                                                    <line id="Line_10"
                                                                                          data-name="Line 10"
                                                                                          x1="5"
                                                                                          y2="5"
                                                                                          transform="translate(647.5 1597.5)"
                                                                                          fill="none"
                                                                                          stroke="#3c3c3b"
                                                                                          strokeLinecap="round"
                                                                                          stroke-width="1"/>
                                                                                </g>
                                                                                <line id="Line_11" data-name="Line 11"
                                                                                      x2="10"
                                                                                      transform="translate(653.5 1601.5)"
                                                                                      fill="none"
                                                                                      stroke="#3c3c3b"
                                                                                      strokeLinecap="round"
                                                                                      stroke-width="1"/>
                                                                            </g>
                                                                            <g id="Rectangle_5661"
                                                                               data-name="Rectangle 5661"
                                                                               transform="translate(-16429 2058) rotate(-90)"
                                                                               fill="none"
                                                                               stroke="#3c3c3b" stroke-width="1"
                                                                               strokeDasharray="1 140"
                                                                               opacity="0">
                                                                                <rect width="44" height="44" rx="22"
                                                                                      stroke="none"/>
                                                                                <rect x="0.5" y="0.5" width="43"
                                                                                      height="43"
                                                                                      rx="21.5"
                                                                                      fill="none"/>
                                                                            </g>
                                                                        </g>
                                                                    </svg>

                                                                </h3>
                                                            }

                                                        </div>
                                                    </a>
                                                </Link>
                                            </div>
                                        </Col>
                                    )
                                })
                            }

                            <Col className={'feature-box-container_item'} md={3}>
                                <div className="single-item-wrapper last">
                                    <Link href={'/search'}>
                                        <a>
                                            <div className="content">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"
                                                     viewBox="0 0 60 60">
                                                    <g id="Group_15329" data-name="Group 15329"
                                                       transform="translate(6 6.002)">
                                                        <g id="Ellipse_448" data-name="Ellipse 448"
                                                           transform="translate(-6 -6.002)" fill="none" stroke="#fff"
                                                           stroke-width="1" opacity="0.5">
                                                            <circle cx="30" cy="30" r="30" stroke="none"/>
                                                            <circle cx="30" cy="30" r="29.5" fill="none"/>
                                                        </g>
                                                        <g id="Group_14964" data-name="Group 14964"
                                                           transform="translate(12.561 12.557)">
                                                            <path id="Path_5781" data-name="Path 5781"
                                                                  d="M18.84,10.42A8.42,8.42,0,1,1,10.42,2,8.421,8.421,0,0,1,18.84,10.42Z"
                                                                  transform="translate(-2 -2)" fill="none" stroke="#fff"
                                                                  stroke-linecap="round" stroke-linejoin="round"
                                                                  stroke-width="2"/>
                                                            <line id="Line_3560" data-name="Line 3560" x1="5.267"
                                                                  y1="5.288"
                                                                  transform="translate(16.939 16.941)" fill="none"
                                                                  stroke="#fff"
                                                                  stroke-linecap="round" stroke-linejoin="round"
                                                                  stroke-width="2"/>
                                                        </g>
                                                        <g id="Ellipse_601" data-name="Ellipse 601"
                                                           transform="translate(-6 -6.002)" fill="none" stroke="#fff"
                                                           stroke-width="1" strokeDasharray="0 520" opacity="0">
                                                            <circle cx="30" cy="30" r="30" stroke="none"/>
                                                            <circle cx="30" cy="30" r="29.5" fill="none"/>
                                                        </g>
                                                    </g>
                                                </svg>


                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </StyledBanner>
        </>
    );
};

const StyledBanner = styled.section`
    height: 120vh;
    position: relative;
    opacity: 1 !important;

    .swiper-button-prev, .swiper-button-next, .swiper-pagination, .mobile {
        display: none;
    }

    .swiper-slide {
        overflow: hidden;
    }

    .swiper-pagination {
        display: none;
    }

    .swiper-button-disabled {
        opacity: 0.5 !important;
    }

    .global-image {
        transition: clipPath .8s cubic-bezier(.29, .73, .45, 1), border-color 3.6s linear, -webkit-clipPath .8s cubic-bezier(.29, .73, .45, 1);
        will-change: clipPath;
        overflow: hidden;
        -webkit-clipPath: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        clipPath: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    .swiper-slide-active, .swiper-slide-visible {
        .global-image {
            clipPath: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        .slide-inner {
            img {
                height: 120vh !important;
            }

           

        }
    }

    //custom navigation

    .swipper-navigation-slider-custom {
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 200px;
        min-height: 75px;
        text-align: left;
        margin: 0 auto;
        padding-left: ${props => props.offset ? props.offset : '90'}px;
        padding-right: ${props => props.offset ? props.offset : '90'}px;
        justify-content: space-between;
        gap: 15px;
        flex-direction: row;

        .slide-inner-item {
            width: 100%;
            position: relative;
            background: transparent !important;
            padding: 20px 0px 0;
            cursor: pointer;

            @media (min-width: 1536px) {
                padding-right: 15px;
            }

            span {
                font-size: 20px;
                font-weight: 500;
                color: #FFFFFF;
                line-height: 28px;
            }

            &:after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                height: 4px;
                background: #978c21;
                width: 0;
                transition: 1s all cubic-bezier(.25, .74, .22, .99);
                opacity: 0;
            }

            &:hover {
                // span {
                    //   color: ${hover}
                // }

                &:after {
                    width: 100%;
                    opacity: 1;
                }

            }

            &:before {
                content: '';
                background: transparent !important;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                z-index: 99;
            }

            &.active {


                &:after {
                    width: 100%;
                    opacity: 1;
                }

            }

        }
    }

    //feature box 

    .feature-box-container {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -110px;
        z-index: 999;
        width: calc(100% - 30px);
        margin: 0 auto;

        .col-md-3 {
            padding: 0;
        }

        .single-item-wrapper {
            background: white;
            border-right: 1px solid rgba(198, 198, 198, 0.5);
            height: 100%;

            &.last {
                background: #978c21;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                border-right: none !important;

                a {
                    width: 100%;
                    text-align: left;

                    .content {
                        align-items: center;
                        justify-content: center;
                    }

                    svg {
                        #Ellipse_601 {
                            transition: 1s all cubic-bezier(.25, .74, .22, .99);

                        }
                    }

                    @keyframes dash {
                        from {
                            stroke-dashoffset: 0;
                        }
                        to {
                            stroke-dashoffset: 550px;
                        }
                    }

                    &:hover {
                        //svg {
                        //  #Ellipse_601 {
                        //    opacity: 1;
                        //    stroke-dasharray: 520px;
                        //
                        //  }
                        //}
                    }


                }
            }

            a {
                padding: 40px 40px 45px;
                display: block;
                height: 100%;

                .content {
                    z-index: 4;
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    flex-direction: column;
                    width: 100%;
                    height: 100%;

                    p {
                        color: #C6C6C6;
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 24px;
                        margin-bottom: 40px;
                    }

                    h3 {
                        margin: 0 0 0px;
                        color: #3C3C3B;
                        font-family: "Avenir Heavy";
                        font-size: 28px;
                        letter-spacing: -1px;
                        line-height: 36px;
                        transition: 1s all cubic-bezier(.25, .74, .22, .99);
                        position: relative;
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                    }
                }

                svg {
                    #Rectangle_5661 {
                        transition: 1s all cubic-bezier(.25, .74, .22, .99);
                    }
                }

                &:hover {
                    h3 {
                        color: ${hover};
                    }

                    svg {
                        #Rectangle_5661 {
                            opacity: 1;
                            stroke-dasharray: 140px;
                        }
                    }
                }
            }
        }
    }


    .slide-inner {
        position: relative;
        height: 120vh;

        .container {
            position: absolute;
            left: 0;
            right: 0;
            top: calc(50% - 10vh);
            transform: translateY(-50%);
            z-index: 2;
        }

        .global-image {
            &:after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                z-index: 1;
                background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
            }
        }

        &__info {
            position: relative;
            overflow: hidden;
            //transform: translateX(50%);
            //transition: all 2s cubic-bezier(.25, .74, .22, .99);
            //transition-delay: 1.2s;
            //opacity: 1;
            @media (min-width: 1024px) {
                width: 70%;
            }

            h2 {
                font-size: 60px;
                font-weight: 500;
                line-height: 70px;
                color: #FFFFFF;
                font-family: ${title};
                position: relative;


                margin: 0;

            }

            .dc-btn {
                position: relative;
                //transform: translateY(400px);
                //transition-delay: 1.2s;
                //transform: translateX(50%);

                //transition: 2.4s all cubic-bezier(.25, .74, .22, .99);
                //opacity: 0;

            }
        }
    }


    //navigation

    .navigation {
        position: absolute;
        right: ${props => props.offset ? props.offset : '90'}px;
        top: calc(50% - 10vh);
        transform: translateY(-50%);
        display: inline-block;
        z-index: 1;

        ul {
            display: flex;
            flex-direction: column;

            li {
                cursor: pointer;

                &:first-child {
                    margin-bottom: 20px;
                    margin-right: 0;
                }

                svg {
                    path, #Rectangle_5661 {
                        //transition: strokeDasharray 0.3s ease-in-out;
                        transition: all 1s cubic-bezier(.25, .74, .22, .99);
                    }
                }


                &:hover {
                    svg {
                        #Rectangle_5661 {
                            opacity: 1;

                            stroke-dasharray: 140px;
                        }

                        path {
                            stroke: ${hover};
                        }
                    }
                }
            }
        }
    }


    //responsive
    @media (min-width: 1550px) {
        .slide-inner {
            &__info {
                position: relative;
                overflow: hidden;

                h2 {
                    font-size: 80px;
                    line-height: 100px;
                }

                .dc-btn {
                    a {
                        font-size: 22px;
                        line-height: 33px;
                    }
                }
            }
        }

        .swipper-navigation-slider-custom {
            bottom: 300px;
        }

        .feature-box-container {
            bottom: -150px;
        }

        .feature-box-container {
            .single-item-wrapper {
                min-height: 300px;

                .content {
                    min-height: 250px;
                }
            }
        }
    }
    @media (max-width: 992px) {
        .swipper-navigation-slider-custom {
            bottom: 250px;

        }
    }

    @media (max-width: 992px) and (min-width: 768px) {
        height: 100vh;
        .swipper-navigation-slider-custom {
            bottom: 60px;

            .swiper-initialized {
                padding-right: 30%;
            }
        }

        .slide-inner {
            height: 100vh;

            .container {
                top: 45%;
            }
        }

        .feature-box-container {
            display: none;
            position: relative;
            left: 0;
            right: 0;
            bottom: 200px;
            z-index: 999;
            width: calc(100% - 30px);
            margin: 0 auto;


            .single-item-wrapper a .content {
                align-items: flex-start;
            }

            .feature-box-container_item:last-child {
                order: 1;
                flex: 0 0 100%;
                max-width: 100%;
            }

            .feature-box-container_item:first-child {
                order: 2;
                flex: 0 0 100%;
                max-width: 100%;

                .single-item-wrapper {
                    border-right: none;
                    border-bottom: 1px solid rgba(198, 198, 198, 0.5);
                }

            }

            .feature-box-container_item:nth-of-type(2) {
                order: 3;
                flex: 0 0 50%;
                max-width: 50%;
            }

            .feature-box-container_item:nth-of-type(3) {
                order: 4;
                flex: 0 0 50%;
                max-width: 50%;

                .single-item-wrapper {
                    border-right: none;

                }

            }
        }


    }
    @media (max-width: 767px) {
        height: 100vh;
        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }

        .slide-inner {
            height: 100vh;

            .container {
                top: unset;
                transform: unset;
                bottom: 40%;
            }

            &__info {
                position: relative;
                overflow: hidden;


                h2 {
                    font-size: 40px;
                    line-height: 48px;
                }

                .dc-btn {
                    margin-top: 30px;
                }
            }
        }

        .swipper-navigation-slider-custom {
            padding-left: 15px !important;
            padding-right: 15px !important;
            bottom: 30px;

            .swiper-initialized {
                padding-right: 30%;
            }
        }


        .scrollTo {
            left: 15px;
            right: unset;
            display: inline-block;
            bottom: 20px;
            transform: translateX(0);
        }

        .navigation {
            display: none;
        }


        .feature-box-container {

            display: none;
            position: relative;
            bottom: 150px;

            .feature-box-container_item {
                &:first-child {
                    order: 2;
                }

                &:nth-of-type(2) {
                    order: 3;
                }

                &:nth-of-type(3) {
                    order: 4;
                }

                &:last-child {
                    order: 1;

                    .content {
                    }
                }
            }

            .single-item-wrapper {
                border-right: none;
                border-bottom: 1px solid rgba(198, 198, 198, 0.5);

                .content {
                    align-items: flex-start !important;
                }

                &.last {
                    border: none;

                    .content {
                        align-items: center !important;
                    }
                }


            }

            .container {
                padding: 0;
            }
        }
    }





`;

export default React.memo(Banner);