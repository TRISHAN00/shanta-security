import React, {useState} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import Title from "./Title";
import 'swiper/css';
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectCreative, Navigation, Pagination} from "swiper";
import {Img} from "./Img";
import {title} from "../styles/globalStyleVars";
import ReactHtmlParser from "react-html-parser";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import 'react-modal-video/css/modal-video.min.css'
import PopupV1 from "./home/PopupV1";

const MyComponent = ({background, data}) => {

    const section_data = data?.section_data
    const section_list = data?.posts?.list



    const [current, setCurrent] = useState('')

    const handleSliderCurrent = () => {
        setTimeout(() => {
            if (document.querySelector('.amenities__big .swiper-pagination-current')) {
                setCurrent(document.querySelector('.amenities__big .swiper-pagination-current').innerHTML)
            }

        }, 200)
    }

    const [show, setShow] = useState(false);
    const [popupId, setPopupId] = useState()

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true)
        setPopupId(e)
    }


    return (
        <StyledComponent background={background} className={'amenities pb-200 pt-200 as-image-text-slider'}>
            <PopupV1 show={show}  video={true} data={popupId} handleClose={handleClose}/>

            <Container>
                <Row>
                    <Col sm={{span: 3}}>
                        <Title noanim  margin={'0 0 40px 0'} text={section_data?.subtitle}/>

                        {
                            section_list && section_list?.length > 1 &&
                            <div data-lag={'0.2'} className="slider-nav">
                                <ul>
                                    <li className='hover testimonial-prev' id={'testimonial-prev'}><BsChevronLeft/></li>

                                    <li>
                                        <p>{current < 9 && 0}{current + 1}<span>/{section_list?.length < 9 && 0}{section_list?.length}

                    </span>
                                        </p>
                                    </li>
                                    <li className='hover testimonial-next' id={'testimonial-next'}><BsChevronRight/></li>

                                </ul>


                            </div>

                        }
                    </Col>
                    <Col className={'amenities__big'} sm={{span: 4}}>
                        <div className="amenities__big__slider">


                            {
                                section_list && section_list?.length &&
                                <Swiper
                                    Swiper
                                    modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                                    pagination={{
                                        // el: '.swiper-pagination',
                                        type: "fraction",
                                    }}
                                    navigation={{
                                        prevEl: '.testimonial-next',
                                        nextEl: '.testimonial-next',
                                    }}
                                    onBeforeInit={(swiper) => {
                                        swiper.params.navigation.prevEl = '.testimonial-prev';
                                        swiper.params.navigation.nextEl = '.testimonial-next';
                                    }}
                                    speed={900}
                                    onSlideChange={(s) => handleSliderCurrent()}
                                >

                                    {
                                        section_list?.map((e,index) => {
                                            return(
                                                <SwiperSlide key={index}>
                                                    {
                                                        e?.data?.youtube_link ?
                                                            <div className="single"  onClick={() => handleShow(e?.data?.youtube_link)}  >
                                                                <div className="icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">

                                                                        <g id="Mask_Group_392" transform="translate(-793 -3533)" >
                                                                            <circle id="Ellipse_604" cx="40" cy="40" r="40" transform="translate(793 3533)" fill="#fff"/>
                                                                            <circle id="Ellipse_606" cx="40" cy="180" r="40" transform="translate(793 3533)" fill="#3c3c3b"/>
                                                                            <path id="Polygon_1" d="M9.168,1.248a1,1,0,0,1,1.664,0l8.131,12.2A1,1,0,0,1,18.131,15H1.869a1,1,0,0,1-.832-1.555Z" transform="translate(841 3563) rotate(90)" fill="#978C21"/>
                                                                        </g>
                                                                    </svg>


                                                                </div>

                                                                <div  className="single__img testimonial-image">
                                                                    {
                                                                        e?.images &&
                                                                        <Img alt={'Shanta Securities Limited'} src={e?.images?.[0]?.full_path}/>
                                                                    }
                                                                </div>
                                                            </div>
                                                            :
                                                            <div className="single"    >
                                                                <div className="icon">



                                                                </div>

                                                                <div  className="single__img testimonial-image hoverNO">
                                                                    {
                                                                        e?.images &&
                                                                        <Img alt={'Shanta Securities Limited'} src={e?.images?.[0]?.full_path}/>
                                                                    }
                                                                </div>
                                                            </div>


                                                    }
                                                </SwiperSlide>

                                            )
                                        })
                                    }




                                </Swiper>
                            }

                        </div>


                    </Col>

                    <Col className={'amenities__right'} sm={5}>


                        {
                            section_list && section_list?.length &&
                            <Swiper
                                Swiper
                                modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                                initialSlide={2}
                                pagination={{
                                    el: '.swiper-pagination',
                                    type: "fraction",
                                }}

                                navigation={{
                                    prevEl: '.testimonial-prev',
                                    nextEl: '.testimonial-next',
                                }}
                                onBeforeInit={(swiper) => {
                                    swiper.params.navigation.prevEl = '.testimonial-prev';
                                    swiper.params.navigation.nextEl = '.testimonial-next';
                                }}

                                speed={900}
                                onSlideChange={(s) => handleSliderCurrent()}

                            >

                                {
                                    section_list?.map((e,index) => {

                                        return(
                                            <SwiperSlide key={index}>
                                                <div className="flex">
                                                    {ReactHtmlParser(e?.data?.description)}
                                                    <div className="foot">
                                                        <h4>{e?.data?.title}</h4>
                                                        <p>{e?.data?.subtitle}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }


                            </Swiper>


                        }

                    </Col>
                </Row>

            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
    overflow: hidden;
    background-color: ${p => p.background ? p.background : '#FFF'};


    .container {
        position: relative;

        .slider-nav {
            position: absolute;
            width: 100%;
            z-index: 3;
            padding-left: 20px;
            bottom: 0;
            left: 0;

            ul {
                display: flex;

                li {
                    height: 40px;
                    width: 40px;
                    background-color: black;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    cursor: pointer;

                    &:nth-of-type(2) {
                        padding: 0 20px;
                        height: auto;
                        width: auto;
                        background-color: transparent;

                    }

                    svg {
                        color: #ffffff;
                        z-index: 2;
                    }

                    &:not(:nth-of-type(2)) {
                        cursor: pointer;
                    }
                }

            }

            p {
                font-family: ${title};
                font-size: 24px;
                line-height: 32px;
                color: #3C3C3B !important;

                span {
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                    color: rgba(60, 60, 59, 0.5);
                }
            }
        }

        .amenities__big {
            padding-right: 40px;
            position: relative;


            &__slider {
                position: relative;
                background-color: #DDD;

                .shadow {
                    position: absolute;
                    bottom: -50px;
                    right: calc(100% - 43px);
                    z-index: 2;
                    width: 120px;

                    img {
                        width: 100%;
                        object-fit: cover;
                    }
                }

                .shadow-right {
                    position: absolute;
                    bottom: -52px;
                    right: -49px;
                }

                .single {
                    padding-top: calc(370 / 370 * 100%);
                    position: relative;
                    cursor: pointer;

                    .icon {
                        position: absolute;
                        z-index: 99;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        overflow: hidden;
                        border-radius: 50%;

                        svg {
                            #Ellipse_606, path {
                                transition: 1s all cubic-bezier(.25, .74, .22, .99);
                            }
                        }
                    }

                    .single__img {
                        overflow: hidden;

                        .global-image {
                            transition: 1s all cubic-bezier(.25, .74, .22, .99);
                            transform: scale(1);
                        }
                    }

                    &:hover {
                        .single__img {
                            .global-image {
                                transform: scale(1.05);
                            }
                        }

                        .icon {
                            svg {
                                #Ellipse_606 {
                                    cy: 40px;
                                }

                                path {
                                    fill: #fff;
                                }
                            }
                        }
                    }

                }
            }
        }

        &__thumb {
            width: 30%;
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            left: 15px;
            height: fit-content;
            z-index: 3;

            &__inner {
                .single {
                    padding-top: 100%;
                    background-color: #EEE;
                }
            }
        }
    }

    .amenities__right {
        //padding-top: 50px;
        position: relative;

        .swiper-slide, .swiper-wrapper, .swiper {
            height: 100%;
        }

        .flex {
            display: flex;
            height: 100%;
            justify-content: space-between;
            flex-direction: column;
        }

        p {
            font-size: 16px;
            line-height: 24px;
            font-weight: 500;
            color: rgba(60, 60, 59, 0.5);
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            white-space: normal;
            @media (max-width: 1024px) {
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                white-space: normal;
            }
        }

        h4 {
            font-family: 'Avenir';
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            margin-top: 0px;
            margin-bottom: 0px;
            color: #3C3C3B;
        }

    }

    @media (max-width: 950px) {
        .swiper-slide, .swiper-wrapper, .swiper {
            height: 100%;
        }

        .amenities__big__slider {
            height: 100%;

            .single {
                height: 100%;

            }

            .icon {
                svg {
                    height: 50px;
                    width: 50px;
                }
            }
        }

        .slider-nav {

            li {
                &:not(:nth-of-type(2)) {
                    max-width: 30%;
                }

                svg {

                    max-width: 100%;
                }
            }
        }

        .amenities__big {
            padding-right: 15px !important;
        }

        .foot {
            margin-top: 40px;
        }
    }

    @media (max-width: 767px) {
        .title {
            margin-bottom: 0;
        }
        
        .amenities__big {
            &__thumb {
                height: 150px;
                width: 55%;
                bottom: -75px;

                div {
                    height: 100%;
                    width: 100%;
                }

                .single {
                    padding: 0 !important;
                }
            }
        }


        .amenities__right {
            margin-top: 40px;
            padding-top: 0;

        }

        .amenities__big__slider .icon svg {
            height: 80px;
            width: 80px;
        }

        .slider-nav {
            padding: 0 !important;
            position: relative !important;
            margin: 40px 0 !important;
        }

    }


    .swiper-pagination {
        opacity: 0;
        visibility: hidden;
    }

    .shadow-left {
        position: absolute;
        left: 0;
        top: 10%;
    }

    .swiper-button-disabled {
        opacity: 0.5 !important;
    }

    @media (max-width: 767px) {
        .title h2 {
            margin-bottom: 40px;
        }
    }
`;

export default React.memo(MyComponent);