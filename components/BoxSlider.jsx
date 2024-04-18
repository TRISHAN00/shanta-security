import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Mousewheel, Navigation, Pagination} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Img} from "./Img";
import {title} from "../styles/globalStyleVars";
import Title from "./Title";
import Button from "./ButtonNormal";
import {useDispatch} from "react-redux";
import reactHtmlParser from "react-html-parser";

const RandomSliderV1 = ({Data,bg}) => {
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
    const dispath = useDispatch()


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

    }, [])


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
        // document.querySelector('.swiper-container').style.paddingLeft = offset + 'px'
    }, [offset, sliderRef])


    useEffect(() => {
        if (sliderRef.current) {
            const swiperInstance = sliderRef.current.swiper;
            if (swiperInstance) {
                setTotalNumber(swiperInstance.slides.length);
            }
        }
    }, [Data])
    const [swiperIndex, setSwiperIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setSwiperIndex(swiper.realIndex);
    };



    return (
        <StyledBlog bg={bg} offset={offset} className='blog-slider box-slider pt-200 pb-200 '>
            <Container ref={containerRef}>
                <Row>
                    <Col sm={12}>
                        <div className="blog-button">
                            <div className="left">
                                <Title noanim margin={'0 0 0 0'} text={'Research <span>Center</span>'}/>

                            </div>
                            {
                                Data?.length > 4 &&
                                <div className="d-flex">
                                    <div className="slider-nav">
                                        <ul>
                                            <li className='hover' id={'our-services-prev'} ><BsChevronLeft/></li>
                                            <li className='hover' id={'our-services-next'}><BsChevronRight/></li>
                                        </ul>
                                    </div>
                                    <Button margin={'0 0 0 40px'} icon src={'/research'} color={'#3C3C3B'} hoverColor={'#3C3C3B'} text={'View All'}/>

                                </div>


                            }
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className={` fade-up blog-slider__slider-wrap`}>
                <div className="blog-slider__slider-wrap__inner">
                    {
                        Data?.length > 0 &&

                        <Swiper

                            loop={false}
                            slidesPerView={1}
                            spaceBetween={30}
                            speed='1500'
                            keyboardControl={true}
                            modules={[Autoplay, Pagination, Navigation, Mousewheel]}
                            navigation ={{
                                prevEl:'#our-services-prev',
                                nextEl:'#our-services-next'
                            }}
                            onSlideChange={handleSlideChange}
                            pagination={{
                                type: 'fraction',
                            }}
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
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            ref={sliderRef}
                            className="mySwiper"
                        >
                            {
                                Data &&  Data?.length > 0 &&
                                Data?.map((e,index) => {

                                    const dateString = e?.date  ? e?.date : e?.created_at;
                                    const date = new Date(dateString);
                                    const options1 = {day: 'numeric'};
                                    const options2 = {month: 'long', year: 'numeric'};
                                    const formattedDate1 = date.toLocaleDateString('en-US', options1);
                                    const formattedDate2 = date.toLocaleDateString('en-US', options2);
                                    return(
                                        <SwiperSlide key={index}>
                                            <div   className={'blog-single-single-wrp'}>
                                                <div className='blog-single '>
                                                    <div className="blog-single__inner">
                                                        {
                                                            e?.attachment &&
                                                            <a href={e?.attachment} target={'_blank'}></a>

                                                        }
                                                        <Img alt={e?.subtitle} src={e?.thumb ? e?.thumb: 'images/static/report.jpg'}
                                                             objectFit={'cover'} layout={'fill'}/>
                                                        <div className="blog-single__inner__content">
                                                            <div className="blog-single__inner__content__top">
                                                                <div className="hover-content">
                                                                    {
                                                                        e?.subtitle &&
                                                                        <p>{reactHtmlParser(e?.subtitle)}</p>

                                                                    }
                                                                    {
                                                                        e?.attachment &&
                                                                        <a className={'link-dc'}
                                                                           href={e?.file?.list?.[0]?.full_path}
                                                                           target={'_blank'}>Read More</a>

                                                                    }
                                                                </div>
                                                                {
                                                                    e?.title &&
                                                                    <h2>{e?.title}</h2>

                                                                }

                                                            </div>
                                                            <div className="blog-single__inner__content__bottom">
                                                                {
                                                                    formattedDate1 &&
                                                                    <h4>{formattedDate1}</h4>
                                                                }
                                                                <p>
                                                                    {
                                                                        formattedDate2 &&
                                                                        reactHtmlParser(formattedDate2)
                                                                    }

                                                                    <span>

                                                                            {
                                                                                e?.type === '1' ? 'Economy' : ''  ||

                                                                                e?.type === '2' ? 'Market Review' : '' ||
                                                                                e?.type === '3' ? 'Strategy Report' : '' ||
                                                                                e?.type === '4' ? 'Comapny Review' : '' ||
                                                                                e?.type === '5' ? 'Dashboard Review' : '' ||
                                                                                e?.type === '6' ? 'Newsflash' : ''

                                                                            }
                                                                        </span></p>
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
                        <li className='hover'  ref={mRightRef}><BsChevronRight/></li>
                    </ul>
                </div>
            </div>
        </StyledBlog>
    );
};

const StyledBlog = styled.section`

  background: ${props => props.bg ? props.bg : '#F2F2F2'};
  .swiper-button-disabled{
    opacity: 0.5 !important;
  }


  .image-wrapper{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50%;
  }

  .blog-button {
    display: flex;
    justify-content: space-between;
    margin-bottom: 85px;
    align-items: center;

    .left, .d-flex{
      height: 100%;
    }
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
    padding-right: 8%;
  }

  .slider-nav-mobile {
    display: none;
  }

  .blog-slider {
    &__slider-wrap {
      &__inner {
        .blog-single {
          &__inner {
            padding-top: 115%;
          }
        }
      }
    }
  }

  .blog-single-single-wrp{
  }

  .load{
    .dc-btn{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
    }
  }


  .blog-slider {
    &__slider-wrap {
      &__inner {
        .blog-single {
          &__inner {
            padding-top: 115%;
          }
        }
      }
    }
  }
  
  .single-expert-item{
    &:hover{
      .global-image{
        img{
          //transform: scale(1.06);

        }
      }
    }
  }

  .blog-single__inner {
    padding-top: calc(460 / 370 * 100%);
    position: relative;
    .global-image{
      img{
        transform: scale(1.01);
      }
    }

    a {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      z-index: 3;
    }

    &__content {
      &:after {
        content: '';
        height: 100%;
        width: 100%;
        background-color: #3C3C3B;
        top: 0;
        left: 0;
        right: 0;
        position: absolute;
        transition: height 1s cubic-bezier(.25, .74, .22, .99);
      }

      &__top {

        .hover-content{
          position: absolute;
          left: 40px;
          top: 40px;
          right: 40px;
          transition: all 1s cubic-bezier(.25, .74, .22, .99);
          transform: translateY(-30px);
          opacity: 0;

          .link-dc{
            font-size: 16px;
            line-height: 24px;
            color: #FFFFFF;
            font-family: 'Avenir Heavy';
            width: auto !important;
            height: auto !important;
            position: relative !important;
            margin-top: 5px;
            opacity: 0;
            display: inline-block;


            &:before {
              background: #fff;
              transition: all 1s cubic-bezier(.25, .74, .22, .99) 0s;
              content: "";
              position: absolute;
              left: 0px;
              bottom: 0px;
              height: 1px;
              width: 100%;
            }
            &:hover{
              &:before{
                height: 4px;
              }
            }
          }
          p {
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            color: #ffffff;
            z-index: 2;
            margin: 0;
            opacity: 0;
            transition: all 1s cubic-bezier(.25, .74, .22, .99);
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
          }
        }

        h2 {
          position: absolute;
          top: 40px;
          left: 40px;
          right: 40px;
          z-index: 2;
          font-size: 20px;
          font-weight: 500;
          font-family: ${title};
          line-height: 28px;
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
        //border-top: 1px solid #221F1F;
        padding-top: 20px;
        z-index: 2;

        h4 {
          font-size: 60px;
          color: #FFFFFF;
          font-family: 'Avenir Book';
          line-height: 60px;
          transition: color 1s cubic-bezier(.25, .74, .22, .99);
        }

        p {
          font-size: 16px;
          color: #FFFFFF;
          text-align: right;
          font-weight: 500;
          line-height: 24px;
          transition: color 1s cubic-bezier(.25, .74, .22, .99);

          span {
            display: block;
            color: #FFFFFF;

          }
        }
      }
    }

    &:hover {
      .blog-single__inner__content:after {
        height: 0;
      }
      .blog-single__inner__content__top {
        h2 {
          opacity: 0;
          transform: translateY(-20px);
        }

        .link-dc{
          transform: none;
          opacity: 1;
          &:before{
            //height: 4px;
          }
        }

        .hover-content{
          transform: none;
          opacity: 1;
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



  @media (max-width: 767px) {
  padding-bottom: 120px !important;
    .mobile{
      display: block;
    }
    .desktop{
      display: none !important;
    }

    .blog-single__inner__content__top {
      p, h2 {
        left: 30px;
        right: 30px;
        top: 30px;
      }
    }

    .blog-single__inner__content__bottom h4, .blog-single__inner__content__bottom p {
      left: 30px;
      right: 30px;
      top: 30px;
    }

    .swiper-initialized {
      margin-left: 15px;
      padding-right: 15px;
    }

    .blog-slider {
      &__slider-wrap {
        //margin-left: 15px;
        //margin-right: 15px;

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
      flex-direction: column;
      align-items: flex-start;
      .slider-nav {
      }
    }

    .slider-nav-mobile {
      display: none;

    }

  }


`;
export default React.memo(RandomSliderV1);