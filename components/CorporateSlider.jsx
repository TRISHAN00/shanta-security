import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import Title from "./Title";
import {Img} from "./Img";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react"
import {LightgalleryItem, LightgalleryProvider} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import {HiArrowSmallLeft, HiArrowSmallRight} from 'react-icons/hi2';

SwiperCore.use([Autoplay, Pagination, Navigation]);
const SliderShowRoom = ({padding, background, data}) => {

    const getData = data;


    let containerRef = useRef();
    const ref = useRef(null);

    useEffect(() => {
        if (window.innerWidth > 768) {
            setTimeout(() => {
                let el = document.querySelector('.showroom .swiper-slide-active .testimonial__single__image')
                let elHeight = el?.clientHeight;
                document.querySelector('.showroom .swiper-initialized').style.height =  elHeight + 50 + 'px';
            }, 1200)


        }
    }, [null])



    const [offset, setOffset] = useState(100)


    useEffect(() => {
        setOffset(document.querySelector('.container').offsetLeft)

        window.addEventListener('load', function () {
            setOffset(document.querySelector('.container').offsetLeft)

        })
        window.addEventListener('resize', function () {
            setOffset(document.querySelector('.container').offsetLeft)

        })
    }, [])


    return (

        <StyledBox data-scroll-container offset={offset} background={background}
                   className={`showroom slider_component ${padding ? padding : 'pt-160 pb-160'}`}>
            <LightgalleryProvider>
                <Container ref={containerRef} className={'version_one'}>
                    <Row>

                        <Col md={12}>

                            <div className="testimonial__head">

                                <div className="testimonial__head__text">

                                    {
                                        getData?.section_data?.title &&
                                        <Title margin={'0 0 40px 0'} text={getData?.section_data?.title}/>

                                    }

                                </div>
                                <div className="testimonial__head__navigation">
                                    {
                                        getData?.images?.list && getData?.images?.list?.length > 0 &&
                                        <ul>

                                            <li className='hover' id={'gallery-prev'} ><HiArrowSmallLeft/></li>
                                            <li className='hover' id={'gallery-next'}><HiArrowSmallRight/></li>
                                        </ul>
                                    }

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid ref={containerRef} className={'p-0'} md={12}>

                    {
                        getData?.images?.list && getData?.images?.list?.length > 0 &&
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            speed='1000'
                            navigation={{
                                prevEl: '#gallery-prev',
                                nextEl: '#gallery-next',
                            }}
                            initialSlide={2}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            loop
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
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[Autoplay, Pagination, Navigation]}

                            className="mySwiper"

                        >

                            {
                                getData?.images?.list && getData?.images?.list?.length > 0 &&
                                getData?.images?.list?.map((e,index) => {
                                    return(
                                        <SwiperSlide key={index}>
                                            <div className="testimonial__single">
                                                <Row>
                                                    <Col sm={5}>
                                                        <div className="testimonial__single__image video">
                                                            <Img alt={'Shanta Securities Limited'} radius={'21px'} src={e?.full_path}/>
                                                            <LightgalleryItem src={e?.full_path}>
                                                            </LightgalleryItem>
                                                        </div>
                                                    </Col>


                                                </Row>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }


                        </Swiper>

                    }


                </Container>

            </LightgalleryProvider>

        </StyledBox>

    )

};


const StyledBox = styled.section`
  background-color: ${props => props.background ? props.background : '#FFFFFF'};
  position: relative;
  min-height: 120vh;

  .swiper-button-prev, .swiper-button-next {
    display: none;
  }

  .swiper-slide {
    transition: 0.7s all ease;
  }

  .swiper-initialized {
    //padding-left: 100px;
    padding-left: ${props => props.offset ? props.offset + 15 + 'px' : '100px'};
  }

  .testimonial__single {
    height: 100%;

    .row {
      height: 100%;
    }
  }

  .swiper-slide-active {
    height: auto;
    width: 50% !important;

    .testimonial__single__image {
      //padding-top: calc(480 / 570 * 100%);
      width: 100%;
      height: 100%;

    }
  }

  .testimonial__head {
    display: flex;
    justify-content: space-between;

    &__text {

    }

    &__navigation {
      ul {
        display: inline-flex;

        li {
          cursor: pointer;
          height: 45px;
          width: 45px;
          border-radius: 25%;
          overflow: hidden;
          height: 40px;
          width: 40px;
          background-color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          svg {
            color: #ffffff;
            z-index: 2;
          }
          svg {
            //height: 45px;
            //width: 45px;
            //border-radius: 25%;
            //overflow: hidden;
            #Ellipse_605 {
              //transition: 0.7s all ease;
            }

            #Ellipse_607 {
              //transition: 0.7s all ease;
            }
          }

          &:first-child {
            margin-right: 20px;
          }

          &:hover {
            svg {
              #Ellipse_605, #Ellipse_607 {
                //cy: 25px;
              }
            }
          }


        }
      }
    }
  }

  .testimonial__single {
    //padding-top: 20px;
    padding: 20px 0 0 0;

    &__image {
      position: relative;
      padding-top: calc(312 / 370 * 100%) !important;

      .react_lightgallery_item {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 9;
      }

      &__icon {
        position: absolute;
        top: -20px;
        right: -25px;
      }

      &__play {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        svg {
          #Ellipse_396, path {
            transition: 0.7s all ease;
          }
        }
      }

      &.video {
        cursor: pointer;

        &:hover {
          .testimonial__single__image__play {
            svg {
              path {
                fill: white;
              }

              #Ellipse_396 {
                rx: 31px;
                ry: 31.5px;
              }
            }
          }
        }
      }

      img {

      }
    }

    &__content {
      .text {
        color: #32355D;
        line-height: 36px;
        font-weight: 700;
      }

      .description {
        margin: 40px 0 40px 0;
        color: #32355D;
      }

      .name {
        color: #18AEAE;
        line-height: 24px;
        font-weight: 500;

      }

      .designation {
        font-size: 12px;
        line-height: 20px;
        font-weight: 500;
      }
    }
  }

  .col-sm-5, .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 768px) {
    //min-height: unset;
  }
  @media (max-width: 992px) and (min-width: 768px) {
    .swiper-slide-active {
      height: auto !important;
      width: inherit !important;


      .testimonial__single__image {
        //padding-top: calc(480 / 570 * 100%);
        width: 100% !important;
        height: 100% !important;

      }
    }

  }
  @media (max-width: 768px) {
    .testimonial__head {
      flex-direction: column;
    }

    .testimonial__single__image__icon {
      position: absolute;
      top: -20px;
      left: 0;
    }

    .testimonial__single {
      padding: 40px 0 0;

      &__content {
        margin-top: 20px;

        .description {
          margin: 20px 0 20px 0;
        }
      }
    }

    .swiper-initialized {
      padding-left: 60px;
      padding-right: 60px;
      height: auto !important;
    }


    .swiper-slide-active {
      height: auto;
      width: inherit !important;

      .testimonial__single__image {
        //padding-top: calc(480 / 570 * 100%);
        width: 100%;
        height: 100%;

      }
    }

    min-height: auto;
  }



`;


export default React.memo(SliderShowRoom);