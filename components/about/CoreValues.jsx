import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick from "react-slick";
import reactHtmlParser from "react-html-parser";
import {title} from "../../styles/globalStyleVars";
import {Img} from "../Img";


const MyComponent = ({data}) => {

    const section_data = data?.section_data
    const section_list = data?.posts?.list
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, [data]);



    return (
        <StyledComponent className={`SliderCount pt-200 pb-200`}>

            <Container >
                <Row>
                    <Col md={4} >
                        <div className="slider_wrapper_right">
                            <div className="slider_wrapper_right__init" >
                                {
                                    section_data?.title &&
                                    <h3 data-lag={'0.5'} className={'split-up'}>Our Core Values</h3>

                                }

                                {
                                    section_list && section_list?.length > 1 &&
                                    <div data-lag={'0.5'} className="footer">

                                        <ul className="slider-nav">
                                            <li onClick={() => slider2?.current?.slickPrev()} className={'slider-prev'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
                                                    <g id="Group_19811" data-name="Group 19811" transform="translate(-264 -3119)">
                                                        <g id="Arrow" transform="translate(939.5 4742.5) rotate(180)">
                                                            <g id="Group_4823" data-name="Group 4823" transform="translate(653.5 1596.5)">
                                                                <line id="Line_9" data-name="Line 9" x2="5" y2="5" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1"/>
                                                                <line id="Line_10" data-name="Line 10" x1="5" y2="5" transform="translate(0 5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1"/>
                                                            </g>
                                                            <line id="Line_11" data-name="Line 11" x2="10" transform="translate(648.5 1601.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1"/>
                                                        </g>
                                                        <g id="Ellipse_614" data-name="Ellipse 614" transform="translate(308 3163) rotate(180)" fill="none" stroke="#fff" strokeWidth="1" opacity="0.3">
                                                            <circle cx="22" cy="22" r="22" stroke="none"/>
                                                            <circle cx="22" cy="22" r="21.5" fill="none"/>
                                                        </g>
                                                        <g id="Ellipse_615" data-name="Ellipse 615" transform="translate(308 3163) rotate(180)" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="0 142" opacity="0">
                                                            <circle cx="22" cy="22" r="22" stroke="none"/>
                                                            <circle cx="22" cy="22" r="21.5" fill="none"/>
                                                        </g>
                                                    </g>
                                                </svg>



                                            </li>
                                            <li onClick={() => slider2?.current?.slickNext()} className={'slider-next'}>
                                                <svg id="Button_-_Nav_-_Outline" data-name="Button - Nav - Outline" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
                                                    <g id="Arrow" transform="translate(-631.5 -1579.5)">
                                                        <g id="Group_4823" data-name="Group 4823" transform="translate(653.5 1596.5)">
                                                            <line id="Line_9" data-name="Line 9" x2="5" y2="5" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1"/>
                                                            <line id="Line_10" data-name="Line 10" x1="5" y2="5" transform="translate(0 5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1"/>
                                                        </g>
                                                        <line id="Line_11" data-name="Line 11" x2="10" transform="translate(648.5 1601.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1"/>
                                                    </g>
                                                    <g id="Ellipse_614" data-name="Ellipse 614" fill="none" stroke="#fff" strokeWidth="1" opacity="0.3">
                                                        <circle cx="22" cy="22" r="22" stroke="none"/>
                                                        <circle cx="22" cy="22" r="21.5" fill="none"/>
                                                    </g>
                                                    <g id="Ellipse_615" data-name="Ellipse 615" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="0 142" opacity={'0'}>
                                                        <circle cx="22" cy="22" r="22" stroke="none"/>
                                                        <circle cx="22" cy="22" r="21.5" fill="none"/>
                                                    </g>
                                                </svg>



                                            </li>
                                        </ul>
                                    </div>
                                }

                                {
                                    section_list && section_list?.length > 0 &&
                                    <Slick asNavFor={nav1}
                                           ref={slider2}
                                           arrows={false}
                                           dots={false}
                                           speed={2000}
                                           ease={''}
                                           slidesToShow={1}
                                           swipeToSlide={true}
                                           focusOnSelect={true}
                                    >

                                        {
                                            section_list && section_list?.length > 0 &&
                                            section_list?.map((e,index) => {
                                                return(
                                                    <div key={index} data-lag={'0.5'} className="single-item_content">
                                                        {
                                                            e?.data?.title &&
                                                            <h4>{e?.data?.title}</h4>

                                                        }
                                                        {
                                                            e?.data?.description &&
                                                            <p>
                                                                {
                                                                    reactHtmlParser(e?.data?.description)
                                                                }
                                                            </p>
                                                        }

                                                    </div>

                                                )
                                            })
                                        }


                                    </Slick>

                                }



                            </div>
                        </div>
                    </Col>
                    <Col md={{span:7,offset:1}} >
                        <div className="slider-wrapper-left">
                            <div className="slider-wrapper-left__init">


                                {
                                    section_list && section_list?.length > 0 &&
                                    <Slick asNavFor={nav2}  fade={true} speed={2000}
                                           arrows={false} ref={slider1}>


                                        {
                                            section_list && section_list?.length > 0 &&
                                            section_list?.map((e,index) => {
                                                return(
                                                    <div key={index} className="single-item">
                                                        <div className="image-wrapper">
                                                            {
                                                                e?.images &&
                                                                <Img alt={'Shanta Securities Limited'}
                                                                    src={e?.images?.[0]?.full_path}/>

                                                            }


                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }


                                    </Slick>

                                }

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  background: #3C3C3B;
  position: relative;
  overflow: hidden;

  .container, .container-fluid {
    position: relative;
    z-index: 2;
  }


  .slider-wrapper-left {
    &__init {
      @media (max-width: 992px) {
        .slick-list {
          margin-bottom: -8px !important;
        }
      }

      .single-item {
        .image-wrapper {
          padding-top: calc(480 / 670 * 100%);
          position: relative;
        }
      }
    }
  }

  .slider_wrapper_right {
    height: 100%;

    .slider_wrapper_right__init {
      position: relative;
      height: 100%;
      h3 {
        font-size: 44px;
        font-weight: 500;
        line-height: 56px;
        letter-spacing: -1px;
        color: #F9F9F9;
        margin-bottom: 70px;
      }

      .single-item_content {

        h4 {
          font-size: 24px;
          line-height: 32px;
          color: #FFFFFF;
          font-family: ${title};
          margin-bottom: 15px;
        }

        p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 16px;
          font-weight: 500;
          line-height: 28px;

        }
      }
    }
  }

  .top_text {
    p {
      font-family: 'Cammron Demo';
      font-size: 32px;
      line-height: 44px;
      color: #191818;
      margin-bottom: 60px;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;

    .count {
      p {
        color: rgba(247, 244, 244, 0.5);
        font-size: 16px;
        font-weight: 600;
        line-height: 28px;
      }

      .current {
        font-size: 32px;
        font-weight: 600;
        line-height: 44px;
        color: #F7F4F4;
        margin-right: 8px;
      }

      .total {
        color: rgba(247, 244, 244, 0.5);
        font-size: 16px;
        font-weight: 600;
        line-height: 28px;
      }


    }

    .slider-nav {
      display: flex;

      li:first-child {
        margin-right: 30px;
      }

      li {
        svg {
          cursor: pointer;

          #Ellipse_615 {
            transition: 1s all cubic-bezier(.25, .74, .22, .99);
          }

          &:hover {
            #Ellipse_615 {
              opacity: 1;
              stroke-dasharray: 142px;
            }
          }
        }
      }
    }
  }


  //responsive


  @media (max-width: 992px) and (min-width: 768px) {
    .slider-wrapper-left {
      height: 100%;

      .slider-wrapper-left__init {
        height: 100%;

        .slick-slider {
          height: 100%;

          .slick-list {
            height: 100%;

            .slick-track {
              height: 100%;

              .slick-slide {
                height: 100%;

                > div {
                  height: 100%;
                }

                .single-item {
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    &:after {
      height: 100px;
      z-index: 0;
    }

    .slider-wrapper-left {
      &__init {
        .slick-list {
          margin-bottom: -8px !important;
        }

        .single-item {
          .image-wrapper {
            height: 100%;


          }
        }
      }
    }

    h3{
      margin-bottom: 40px !important;
    }




    .footer {
      padding: 0;
      margin-bottom: 40px !important;

      position: relative;

      .slider-nav {
        li:first-child {
          margin-right: 15px;
        }

        li {
          svg {
            height: 50px;
            width: 50px;
          }
        }
      }

      .slick-slider {
        margin: 0 0 -10px;
      }
    }

  }
  @media(max-width: 767px){
    .slider-wrapper-left{
      margin-top: 40px;
    }
  }
`;

export default React.memo(MyComponent);
