import styled from "styled-components";
import {Col, Container, Form, Row} from "react-bootstrap";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Link} from 'next/link';
import {hover} from "../../styles/globalStyleVars";
import title from "../Title";
import Button from "../ButtonLoadMore";
import ButtonSubmit from "../Button";
import React, {useEffect, useState } from "react";
import {gsap} from "gsap";
import reactHtmlParser from "react-html-parser";
import loadable from '@loadable/component'



const LockPopup = loadable(() => import('../LockPopup'))


const RandomSliderV1 = ({offset, title, data}) => {


    // gsap.registerPlugin(drawSVG);


    useEffect(() => {
        var shapes = ".rotate_svg line , .rotate_svg react, .rotate_svg path",
            tl = gsap.timeline({repeat: -1, yoyo: true});
        tl.fromTo(shapes, {drawSVG: "0"}, {duration: 0.5, drawSVG: "100%", stagger: 0.1}, "-=0.5")
        // .to(shapes, {duration: 0.5, drawSVG: "100%"})

    }, [])

    const [popupId, setPopupId] = useState()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true)
        setPopupId(e)
    }


    // search
    const [searchInput, setSearchInput] = useState('')
    const handleInput = (e) => {
        setSearchInput(e.target.value);
    }


    const searchSubmit = (e) => {
        e.preventDefault()
        if (searchInput === '') {
            return;
        } else {
            window.location.href = `/search?keyword=${searchInput}`;

        }
        // setSearchInput('')


    }



    return (
        <StyledBlog offset={offset} className='blog-slider  pb-160'>

            <LockPopup popupdata={popupId} show={show} handleClose={handleClose}/>
            <Container>
                <Row>
                    <Col md={12} className={''}>
                        <div className="form-course">
                            <img src="images/static/search-bg.svg" alt="Shanta Securities Limited"/>
                            <Col md={7} className={'p-0'}>
                                {
                                    title ?
                                        <h2 className={''}>{ title ? title : 'Fundamental Courses'}</h2>

                                        : ''
                                }

                                {/*<Form className={``}*/}
                                {/*      onSubmit={searchSubmit}>*/}
                                {/*    <Form.Group className="form-group" controlId="formBasicEmail">*/}
                                {/*        <Form.Control type="text" value={searchInput} onChange={e => handleInput(e)}*/}
                                {/*                      placeholder={'Search for Courses'}/>*/}

                                {/*        <div className="dc-btn-submit">*/}
                                {/*            <ButtonSubmit width={'100'} text={'Search'} color={'#3C3C3B'}*/}
                                {/*                          hoverBackground={hover}*/}
                                {/*                          background={'#ED1B34'}/>*/}
                                {/*        </div>*/}
                                {/*    </Form.Group>*/}

                                {/*</Form>*/}
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>

                <div className={` fade-up blog-slider__slider-wrap`}>
                    <div className="blog-slider__slider-wrap__inner row">

                        {
                            data && data?.length > 0 &&
                            data?.map((e, index) => {
                                return (

                                    e?.data?.sendmail == 1 ?

                                        <Col md={4} className={'blog-single-single-wrp'}>
                                            <div className='blog-single' onClick={() => handleShow(e)}>

                                                <div className="blog-single__inner"  >
                                                    <a href={`javascript:void(0)`}></a>
                                                    <div className="rotate_svg draw">

                                                        <svg class={'rotate_svg'} xmlns="http://www.w3.org/2000/svg" width="380.894" height="760.724"
                                                             viewBox="0 0 380.894 760.724">
                                                            <g id="Group_20849" data-name="Group 20849"
                                                               transform="translate(-124.553 18.224)">
                                                                <g id="Custom_vector_4" transform="translate(13116 2801)"
                                                                   opacity="0.05">
                                                                    <line id="Line_3985" data-name="Line 3985" x1="190"
                                                                          transform="translate(-12991 -2818.604)" stroke="#3c3c3b"
                                                                          stroke-width="1"/>
                                                                    <line id="Line_3986" data-name="Line 3986" x2="190" y2="380"
                                                                          transform="translate(-12801 -2819)" stroke="#3c3c3b"
                                                                          stroke-width="1"/>
                                                                    <line id="Line_3987" data-name="Line 3987" x2="190" y2="380"
                                                                          transform="translate(-12991 -2819)" stroke="#3c3c3b"
                                                                          stroke-width="1"/>
                                                                    <line id="Line_3988" data-name="Line 3988" x1="190"
                                                                          transform="translate(-12801 -2438.604)" stroke="#3c3c3b"
                                                                          stroke-width="1"/>
                                                                    <line id="Line_4011" data-name="Line 4011" x1="190"
                                                                          transform="translate(-12991 -2059)" stroke="#3c3c3b"
                                                                          stroke-width="1"/>
                                                                    <line id="Line_3989" data-name="Line 3989" x1="190" y2="380"
                                                                          transform="translate(-12801 -2439)" stroke="#3c3c3b"
                                                                          stroke-width="1"/>
                                                                    <line id="Line_3990" data-name="Line 3990" x1="190" y2="380"
                                                                          transform="translate(-12991 -2439)" stroke="#3c3c3b"
                                                                          stroke-width="1"/>
                                                                </g>
                                                            </g>
                                                        </svg>

                                                    </div>

                                                    <div className="blog-single__inner__content">
                                                        <div className="blog-single__inner__content__top">
                                                            <div className="hover-content">

                                                                {
                                                                    e?.data?.short_desc &&
                                                                    <p>{reactHtmlParser(e?.data?.short_desc)}</p>
                                                                }

                                                            </div>
                                                            {
                                                                e?.data?.title &&
                                                                <h2>{e?.data?.title}</h2>

                                                            }

                                                        </div>
                                                        <div className="blog-single__inner__content__bottom">
                                                            {
                                                                e?.data?.chapter &&
                                                                <h4>{e?.data?.chapter} <span>Chapters</span></h4>
                                                            }

                                                            {
                                                                e?.data?.sendmail == 1 ?
                                                                    <p>
                                                <span>

   <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">

  <g id="Group_20850" data-name="Group 20850" transform="translate(-284 -360)">
         <rect id="Rectangle_5769" data-name="Rectangle 5769" width="44" height="44" rx="22"
               transform="translate(284 360)" fill="#3C3C3B"/>
         <rect id="Rectangle_5770" data-name="Rectangle 5769" width="44" height="44" rx="22"
               transform="translate(284 560)" fill="#978c21"/>

      <g id="lock" transform="translate(298.173 371.564)">
        <path id="Path_9657" data-name="Path 9657"
              d="M13.7,205.045H1.957A1.959,1.959,0,0,1,0,203.088v-9.131A1.959,1.959,0,0,1,1.957,192H13.7a1.959,1.959,0,0,1,1.957,1.957v9.131A1.959,1.959,0,0,1,13.7,205.045ZM1.957,193.3a.653.653,0,0,0-.652.652v9.131a.653.653,0,0,0,.652.652H13.7a.653.653,0,0,0,.652-.652v-9.131a.653.653,0,0,0-.652-.652Zm0,0"
              transform="translate(0 -184.173)" fill="#fff"/>
        <path id="Path_9658" data-name="Path 9658"
              d="M73.784,9.131a.652.652,0,0,1-.652-.652V5.218a3.913,3.913,0,0,0-7.827,0V8.479a.652.652,0,0,1-1.3,0V5.218a5.218,5.218,0,0,1,10.436,0V8.479A.652.652,0,0,1,73.784,9.131Zm0,0"
              transform="translate(-61.391)" fill="#fff"/>
      </g>
  </g>
</svg>

                                                </span>
                                                                    </p>

                                                                    :
                                                                    <p>
                                                <span>

   <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">

  <g id="Group_20849" data-name="Group 20849" transform="translate(-339 -505)">
       <rect id="Rectangle_5687" data-name="Rectangle 5687" width="44" height="44" rx="22"
             transform="translate(339 505)" fill="#978c21"/>
       <rect id="Rectangle_5688" data-name="Rectangle 5688" width="44" height="44" rx="22"
             transform="translate(339 550)" fill="#3C3C3B"/>

      <g id="Group_4824" data-name="Group 4824" transform="translate(-297.5 -1074.5)">
        <g id="Group_4823" data-name="Group 4823" transform="translate(11 4)">
          <line id="Line_9" data-name="Line 9" x2="5" y2="5" transform="translate(647.5 1592.5)" fill="none"
                stroke="#fff" strokeLinecap="round" stroke-width="1"/>
          <line id="Line_10" data-name="Line 10" x1="5" y2="5" transform="translate(647.5 1597.5)" fill="none"
                stroke="#fff" strokeLinecap="round" stroke-width="1"/>
        </g>
        <line id="Line_11" data-name="Line 11" x2="10" transform="translate(653.5 1601.5)" fill="none" stroke="#fff"
              strokeLinecap="round" stroke-width="1"/>
      </g>
  </g>
</svg>


                                                </span>
                                                                    </p>

                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        :

                                        <Col md={4} className={'blog-single-single-wrp'}>
                                            <div className='blog-single'>

                                                <div className="blog-single__inner"  >
                                                    <Link href={`course/${e?.data?.slug}`}></Link>
                                                    <div className="rotate_svg">

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="380.894" height="760.724"
                                                             viewBox="0 0 380.894 760.724">
                                                            <g id="Group_20849" data-name="Group 20849"
                                                               transform="translate(-124.553 18.224)">
                                                                <g id="Custom_vector_4" transform="translate(13116 2801)"
                                                                   opacity="0.05">
                                                                    <line id="Line_3985" data-name="Line 3985" x1="190"
                                                                          transform="translate(-12991 -2818.604)" stroke="#3c3c3b"
                                                                          stroke-width="1"/>
                                                                    <line id="Line_3986" data-name="Line 3986" x2="190" y2="380"
                                                                          transform="translate(-12801 -2819)" stroke="#3c3c3b"
                                                                          stroke-width="1"/>
                                                                    <line id="Line_3987" data-name="Line 3987" x2="190" y2="380"
                                                                          transform="translate(-12991 -2819)" stroke="#3c3c3b"
                                                                          stroke-width="1"/>
                                                                    <line id="Line_3988" data-name="Line 3988" x1="190"
                                                                          transform="translate(-12801 -2438.604)" stroke="#3c3c3b"
                                                                          stroke-width="1"/>
                                                                    <line id="Line_4011" data-name="Line 4011" x1="190"
                                                                          transform="translate(-12991 -2059)" stroke="#3c3c3b"
                                                                          stroke-width="1"/>
                                                                    <line id="Line_3989" data-name="Line 3989" x1="190" y2="380"
                                                                          transform="translate(-12801 -2439)" stroke="#3c3c3b"
                                                                          stroke-width="1"/>
                                                                    <line id="Line_3990" data-name="Line 3990" x1="190" y2="380"
                                                                          transform="translate(-12991 -2439)" stroke="#3c3c3b"
                                                                          stroke-width="1"/>
                                                                </g>
                                                            </g>
                                                        </svg>

                                                    </div>

                                                    <div className="blog-single__inner__content">
                                                        <div className="blog-single__inner__content__top">
                                                            <div className="hover-content">

                                                                {
                                                                    e?.data?.short_desc &&
                                                                    <p>{reactHtmlParser(e?.data?.short_desc)}</p>
                                                                }

                                                            </div>
                                                            {
                                                                e?.data?.title &&
                                                                <h2>{e?.data?.title}</h2>

                                                            }

                                                        </div>
                                                        <div className="blog-single__inner__content__bottom">
                                                            {
                                                                e?.data?.chapter &&
                                                                <h4>{e?.data?.chapter} <span>Chapters</span></h4>
                                                            }

                                                            {
                                                                e?.data?.sendmail == 1 ?
                                                                    <p>
                                                <span>

   <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">

  <g id="Group_20850" data-name="Group 20850" transform="translate(-284 -360)">
         <rect id="Rectangle_5769" data-name="Rectangle 5769" width="44" height="44" rx="22"
               transform="translate(284 360)" fill="#3C3C3B"/>
         <rect id="Rectangle_5770" data-name="Rectangle 5769" width="44" height="44" rx="22"
               transform="translate(284 560)" fill="#978c21"/>

      <g id="lock" transform="translate(298.173 371.564)">
        <path id="Path_9657" data-name="Path 9657"
              d="M13.7,205.045H1.957A1.959,1.959,0,0,1,0,203.088v-9.131A1.959,1.959,0,0,1,1.957,192H13.7a1.959,1.959,0,0,1,1.957,1.957v9.131A1.959,1.959,0,0,1,13.7,205.045ZM1.957,193.3a.653.653,0,0,0-.652.652v9.131a.653.653,0,0,0,.652.652H13.7a.653.653,0,0,0,.652-.652v-9.131a.653.653,0,0,0-.652-.652Zm0,0"
              transform="translate(0 -184.173)" fill="#fff"/>
        <path id="Path_9658" data-name="Path 9658"
              d="M73.784,9.131a.652.652,0,0,1-.652-.652V5.218a3.913,3.913,0,0,0-7.827,0V8.479a.652.652,0,0,1-1.3,0V5.218a5.218,5.218,0,0,1,10.436,0V8.479A.652.652,0,0,1,73.784,9.131Zm0,0"
              transform="translate(-61.391)" fill="#fff"/>
      </g>
  </g>
</svg>

                                                </span>
                                                                    </p>

                                                                    :
                                                                    <p>
                                                <span>

   <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">

  <g id="Group_20849" data-name="Group 20849" transform="translate(-339 -505)">
       <rect id="Rectangle_5687" data-name="Rectangle 5687" width="44" height="44" rx="22"
             transform="translate(339 505)" fill="#978c21"/>
       <rect id="Rectangle_5688" data-name="Rectangle 5688" width="44" height="44" rx="22"
             transform="translate(339 550)" fill="#3C3C3B"/>

      <g id="Group_4824" data-name="Group 4824" transform="translate(-297.5 -1074.5)">
        <g id="Group_4823" data-name="Group 4823" transform="translate(11 4)">
          <line id="Line_9" data-name="Line 9" x2="5" y2="5" transform="translate(647.5 1592.5)" fill="none"
                stroke="#fff" strokeLinecap="round" stroke-width="1"/>
          <line id="Line_10" data-name="Line 10" x1="5" y2="5" transform="translate(647.5 1597.5)" fill="none"
                stroke="#fff" strokeLinecap="round" stroke-width="1"/>
        </g>
        <line id="Line_11" data-name="Line 11" x2="10" transform="translate(653.5 1601.5)" fill="none" stroke="#fff"
              strokeLinecap="round" stroke-width="1"/>
      </g>
  </g>
</svg>


                                                </span>
                                                                    </p>

                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                )
                            })
                        }

                    </div>
                </div>

                {/*{*/}
                {/*    data && data?.length > 10 &&*/}
                {/*    <Row>*/}
                {/*        <Col className={'text-center load'} md={12}>*/}
                {/*            <Button icon src={'/'} color={'#3C3C3B'} hoverColor={'#3C3C3B'} text={'Learn More'}/>*/}

                {/*        </Col>*/}
                {/*    </Row>*/}
                {/*}*/}

            </Container>

        </StyledBlog>
    );
};

const StyledBlog = styled.section`

  .form-course {
    background: #3c3c3b;
    padding: 80px;
    position: relative;
    margin-bottom: 80px;

    .rotate_svg {
      svg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        object-fit: cover;
        
      }
    }

    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      object-fit: cover;
    }

    h2 {
      font-family: ${title};
      color: #ffffff;
      font-size: 44px;
      font-weight: 500;
      line-height: 56px;
      margin: 0 0 0px 0;
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
        color: #FFFFFF;
        autocomplete: off;

        ::placeholder {
          color: rgba(255, 255, 255, 0.5);
          font-size: 16px;
          font-weight: 500;
          outline: none;
          border: none;

        }

        :focus {
          outline: none;
          outline-color: transparent;
          border-color: white;
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
          background-color: #FFFFFF;
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


  .blog-title {
    position: relative;

    p {
      position: absolute;
      top: 0;
      right: 0;

    }

  }

  .blog-single-single-wrp {
    margin-bottom: 30px;
    @media (max-width: 992px) and (min-width: 768px) {
      max-width: 50%;
      flex: 0 0 50%;
    }
  }

  .load {
    .dc-btn {
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

  .blog-single__inner {
    padding-top: calc(460 / 370 * 100%);
    position: relative;
    overflow: hidden;

    .search-bg {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      object-fit: cover;
      z-index: 2;

      svg {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        object-fit: cover;
        z-index: 2;

      }
    }

    img {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      object-fit: cover;
      z-index: 2;

    }

    .rotate_svg {
      svg {
        //position: absolute;
        //top: 0;
        //right: 0;
        //bottom: 0;
        //height: calc(100% + 200px);
        //width: calc(100% + 200px);
        //z-index: 2;
        //object-fit: cover;
        position: absolute;
        left: 0px;
        bottom: -22%;
        height: calc(100% + 200px);
        z-index: 2;
        width: calc(100% + 130px);
        object-fit: cover;
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
      background: #F8F8F8;
      height: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

      &:after {
        //content: '';
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

        .hover-content {
          position: absolute;
          left: 40px;
          top: 90px;
          right: 40px;
          transition: all 1s cubic-bezier(.25, .74, .22, .99);

          .link-dc {
            font-size: 16px;
            line-height: 24px;
            color: #FFFFFF;
            font-family: 'Avenir Heavy';
            width: auto !important;
            height: auto !important;
            position: relative !important;
            margin-top: 5px;
            opacity: 1;
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

            &:hover {
              &:before {
                height: 4px;
              }
            }
          }

          p {
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            color: #3C3C3B;
            z-index: 2;
            margin: 0;
            opacity: 1;
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
          color: #978C21;
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
          font-size: 50px;
          color: #978C21;
          font-family: 'Avenir Book';
          line-height: 60px;
          transition: color 1s cubic-bezier(.25, .74, .22, .99);

          span {
            color: #3C3C3B;
            font-weight: 500;
            line-height: 24px;
            font-size: 16px;
            margin: 0;


          }
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
            border-radius: 50%;
            height: 44px;
            width: 44px;
            overflow: hidden;

            svg {
              #Rectangle_5688, #Rectangle_5770 {
                transition: all 1s cubic-bezier(.25, .74, .22, .99);
              }
            }
          }
        }
      }
    }

    .rotate_svg {
      svg {
        #Custom_vector_4 {
          transition: 1s all ease;
        }
      }
    }

    &:hover {

      .rotate_svg {
        svg {
          #Custom_vector_4 {
            opacity: 0.2;
          }
        }
      }

      .blog-single__inner__content:after {
        height: 0;
      }

      .blog-single__inner__content__top {


      }

      .blog-single__inner__content__bottom {
        border-color: #FFF;

        p {
          span {
            svg {
              #Rectangle_5688 {
                transform: translate(339px, 505px);
              }

              #Rectangle_5770 {
                transform: translate(284px, 360px);
              }
            }
          }
        }

      }
    }

  }


  @media (max-width: 767px) {


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
      margin-left: 0;
      padding-right: 0;
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

      .slider-nav {
        display: none;
      }
    }

    .slider-nav-mobile {
      display: block;
    }

  }

  .blog-single__inner__content__bottom svg{
    transform: unset !important;
  }
  
  @media(max-width: 767px){
    .form-course{
      padding: 30px;
    }
  }
  @media(max-width: 375px){
    .form-course .form-group .form-control{
      font-size: 13px;
      padding-left: 15px;
      &::placeholder{
        font-size: 13px;
      }
    }
  }
`;
export default React.memo(RandomSliderV1);