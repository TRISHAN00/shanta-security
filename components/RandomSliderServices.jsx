import React, {useEffect, useRef, useState, useLayoutEffect} from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Mousewheel, Navigation, Pagination, Lazy} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Img} from "./Img";
import {hover} from "../styles/globalStyleVars";
import reactHtmlParser from "react-html-parser";
import {useRouter} from "next/router";

const RandomSliderV1 = ({Data, desc}) => {
    // SwiperCore.use([Autoplay]);
    let leftRef = useRef();
    let rightRef = useRef();
    let mLeftRef = useRef();
    let mRightRef = useRef();
    let containerRef = useRef();
    let sliderRef = useRef();

    let [offset, setOffset] = useState(90)
    let [theWidth, SetTheWidth] = useState(0)
    let [activeNumber, setActiveNumber] = useState(1)
    let [totalNumber, setTotalNumber] = useState(1)


    useEffect(() => {

        mLeftRef.current.addEventListener('click', () => {
            if (document.querySelector('.swiper-button-prev')) {
                document.querySelector('.swiper-button-prev').click()
            }
        });
        mRightRef.current.addEventListener('click', () => {
            if (document.querySelector('.swiper-button-next')) {
                document.querySelector('.swiper-button-next').click()
            }

        });
        setOffset(document.querySelector(' .container').offsetLeft)

    }, [Data])


    useEffect(() => {
        setOffset(containerRef.current?.offsetLeft)
        window.addEventListener('resize', () => {
            setOffset(containerRef.current?.offsetLeft)
            SetTheWidth(window.innerWidth)
        })

        // slider number
        const getActiveItem = document.querySelector('.swiper-pagination-current')?.innerHTML
        const getTotalItem = document.querySelector('.swiper-pagination-total')?.innerHTML
        setActiveNumber(getActiveItem)
        setTotalNumber(getTotalItem)
    }, [Data])


    useEffect(() => {
        if (sliderRef.current) {
            const swiperInstance = sliderRef.current.swiper;
            if (swiperInstance) {
                setTotalNumber(swiperInstance.slides.length);
            }
        }
    }, [Data])
    const [swiperIndex, setSwiperIndex] = useState(0);

    // const handleSlideChange = (swiper) => {
    //     setSwiperIndex(swiper.realIndex);
    // };


    const location = useRouter();
    useLayoutEffect(() => {
        const adjustBlogSlider = () => {
            const blogSlider = document.querySelector('.blog-slider');
            const blogSingleInner = document.querySelector('.blog-single__inner');

            if (blogSlider && blogSingleInner) {
                const heightBlog = blogSlider.clientHeight;
                const heightBlogSingle = blogSingleInner.clientHeight;
                const total = heightBlog - heightBlogSingle;
                let totalHeight = heightBlog + total;
                totalHeight = totalHeight ? totalHeight : 760
                blogSlider.style.transform = 'translateY(' + (-totalHeight) / 2 + 'px)';
                blogSlider.style.marginBottom = -(totalHeight) / 2 + 'px';
            }
        };

        // Call the function on component mount
        adjustBlogSlider();
    }, [location?.pathname, Data]); // Empty dependency array ensures the effect runs only once
    return (
        <StyledBlog offset={offset} className='blog-slider '>

            {
                Data && Data?.length > 0 ?
                    <Container className={''} ref={containerRef}>
                        <Row>
                            <Col md={5}>
                                <div className="blog-button">
                                    <div className="slider-nav">
                                        <ul>
                                            <li className='hover' id={'service-prev'}><BsChevronLeft/></li>
                                            <li className='hover' id={'service-next'}><BsChevronRight/></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            {
                                desc &&
                                <Col md={{span: 7}}>
                                    <div className={'short-desc'}>
                                        <p className="split-up">{desc}</p>
                                    </div>
                                </Col>
                            }
                        </Row>
                    </Container>

                    : ''
            }


            <div className={` fade-up blog-slider__slider-wrap`}>
                <div className="blog-slider__slider-wrap__inner">


                    {
                        Data && Data?.length > 0 &&
                        <Swiper
                            loop={true}
                            slidesPerView={1}
                            //     autoplay= {{
                            //     delay: 1500, // specify the autoplay delay here if you want to use it separately from the 'speed' prop
                            //     disableOnInteraction: true, // Autoplay will not be stopped when the user interacts with the Swiper
                            //
                            // }}
                            autoplay={false}
                            lazy={true}
                            spaceBetween={30}
                            speed='1500'
                            modules={[Autoplay, Pagination, Navigation, Mousewheel]}
                            navigation={{
                                prevEl: '#service-prev',
                                nextEl: '#service-next'
                            }}
                            // onSlideChange={handleSlideChange}

                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,

                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,

                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                            }}
                            ref={sliderRef}
                            className="mySwiper"
                        >

                            {
                                Data?.map((e, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div key={index} className='blog-single '>
                                                <div className="blog-single__inner">
                                                    {/*<Link href={'/blog-details'}></Link>*/}
                                                    <div className="image-wrapper">
                                                        <Img alt={'Shanta Securities Limited'}
                                                            src={e?.images?.[0]?.full_path ? e?.images?.[0]?.full_path : 'images/static/blur.jpg'}
                                                            objectFit={'cover'}
                                                            layout={'fill'}/>
                                                    </div>
                                                    <div className="blog-single__inner__content" data-index={index + 1}>
                                                        <div className="blog-single__inner__content__top">
                                                            <h2 className={''}>{e?.data?.title}</h2>

                                                            <div>
                                                                {reactHtmlParser(e?.data?.description)}
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }


                        </Swiper>


                    }


                </div>

                <div className="slider-nav-mobile">
                    <ul>
                        <li className='hover' ref={mLeftRef}><BsChevronLeft/></li>
                        <li className='hover' ref={mRightRef}><BsChevronRight/></li>
                    </ul>
                </div>
            </div>

        </StyledBlog>
    );
};

const StyledBlog = styled.section`

  .swiper-button-disabled {
    opacity: 0.5 !important;
  }

  .short-desc {
    font-size: 28px;
    font-weight: 300;
    line-height: 36px;
    color: #3C3C3B;
    margin-bottom: 75px;

    p {
      font-size: 28px;
      font-weight: 300;
      line-height: 36px;
      color: #3C3C3B;
    }
  }


  .image-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50%;
  }

  .blog-button {
    display: flex;
    justify-content: space-between;
    //margin-bottom: 85px;
    align-items: center;
    //position: absolute;
    //top: -160px;
    //left: 15px;

    .slider-nav {
      ul {
        display: flex;
      }

      li {
        height: 40px;
        width: 40px;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;

        &:nth-of-type(1) {
          margin-right: 20px;
        }

        svg {
          color: #ffffff;
          z-index: 2;
        }
      }
    }
  }

  .swiper-button-next, .swiper-button-prev {
    position: absolute;
    height: 40px;
    width: 40px;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 99;
    background-color: red;
  }

  .swiper-button-next, .swiper-button-prev, .swiper-pagination {
    opacity: 0;
    visibility: hidden;
  }

  .swiper-initialized {
    margin-left: ${props => props.offset + 15}px;
    padding-right: 25%;
  }

  .slider-nav-mobile {
    display: none;
  }

  .blog-slider {
    &__slider-wrap {
      &__inner {
        .blog-single {
          &__inner {
            //padding-top: 115%;
          }
        }
      }
    }
  }

  .blog-single__inner {
    padding-top: calc(470 / 470 * 100%);
    position: relative;

    a {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      z-index: 3;
    }

    &__content {

      //counter-reset: counter 0;
      position: absolute;
      top: 0;
      height: 50%;
      right: 0;
      left: 0;
      transition: 1s all cubic-bezier(.25, .74, .22, .99);

      &:after {
        content: '';
        height: 100%;
        width: 100%;
        background-color: #3C3C3B;
        top: 0;
        left: 0;
        right: 0;
        position: absolute;
        transition: 1s all cubic-bezier(.25, .74, .22, .99);

      }

      &:before {
        content: attr(data-index);
        position: absolute;
        z-index: 99;
        left: 35px;
        color: #C6C6C6;
        font-size: 136px;
        line-height: 136px;
        bottom: -75px;
        font-family: 'Avenir Book';
        //top: 50%;
        //transform: translateY(25%);
        transition: 1s all cubic-bezier(.25, .74, .22, .99);

      }

      &__top {
        p {
          font-size: 20px;
          font-weight: 300;
          color: #FFFFFF;
          line-height: 28px;
          top: 120px;
          position: absolute;
          left: 40px;
          z-index: 2;
          right: 40px;
          margin: 0;
          transform: translateY(100%);
          opacity: 0;
          transition: all 1s cubic-bezier(.25, .74, .22, .99);
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }

        h2 {
          position: absolute;
          top: 40px;
          left: 40px;
          right: 40px;
          z-index: 2;
          font-size: 40px;
          font-weight: bold;
          line-height: 52px;
          font-family: 'Avenir Heavy';
          letter-spacing: -1px;
          color: #FFFFFF;
          margin: 0;
          transition: all 1s cubic-bezier(.25, .74, .22, .99);
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }
      }

      &__bottom {
        position: absolute;
        margin: 0;
        left: 40px;
        right: 40px;
        bottom: 24px;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #221F1F;
        padding-top: 20px;
        z-index: 2;

        h4 {
          font-size: 60px;
          font-weight: 600;
          color: ${hover};
          line-height: 60px;
          transition: color 1s cubic-bezier(.25, .74, .22, .99);
        }

        p {
          font-size: 12px;
          color: ${hover};
          text-align: right;
          font-weight: 600;
          line-height: 18px;
          transition: color 1s cubic-bezier(.25, .74, .22, .99);

          span {
            display: block;
            color: ${hover};
          }
        }
      }
    }

    &:hover {
      .blog-single__inner__content:after {
        height: 100%;
      }

      .blog-single__inner__content:before {
        transform: translateY(80%);
        opacity: 0;
      }

      .blog-single__inner__content {
        height: 100%;
      }

      .blog-single__inner__content__top {
        h2 {
          //opacity: 0;
          //transform: translateY(-20px);
        }

        p {
          transform: none;
          opacity: 1;
        }
      }

      .blog-single__inner__content__bottom {
        border-color: #FFF;

        h4 {
          color: #ffffff;
        }

        p {
          color: #ffffff;

          span {
            color: #ffffff;
          }
        }
      }
    }

  }

  @media (max-width: 992px) and (min-width: 768px) {
    .blog-single__inner__content::before {
      font-size: 100px;
      line-height: 122px;

      bottom: -66px;

    }
  }

  @media (max-width: 767px) {

    .swiper-initialized {
      margin-left: 0;
      padding-right: 0;
    }

    .blog-slider {
      &__slider-wrap {
        margin-left: 15px;
        margin-right: 15px;

        .slider-nav-mobile {
          margin-top: 40px;

          ul {
            display: flex;
          }

          li {
            height: 50px;
            width: 50px;
            background-color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;

            &:nth-of-type(1) {
              margin-right: 20px;
            }

            svg {
              color: #ffffff;
              z-index: 2;
            }
          }
        }
      }
    }

    .blog-button {
      margin-bottom: 40px;

      .slider-nav {
        //display: none;
      }
    }

    .slider-nav-mobile {
      //display: block;
    }

  }

`;
export default React.memo(RandomSliderV1);