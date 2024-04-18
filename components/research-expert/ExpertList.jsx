import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Img} from "../Img";
import {hover} from "../../styles/globalStyleVars";
import title from "../Title";
import ButtonSubmit from "../Button";
import React, {useState,memo} from "react";
import Select from "react-select";
import PopupV1 from "../PopupV1";
import reactHtmlParser from "react-html-parser";

const RandomSliderV1 = ({offset, data}) => {



    const DropdownOption = [
        {value: 'Economy', label: 'Economy'},
        {value: 'Blog', label: 'Blog'},
        {value: 'Market Review', label: 'Market Review'},
        {value: 'Strategy Report', label: 'Strategy Report'},
        {value: 'Company Review', label: 'Company Review'},
        {value: 'Research Experts', label: 'Research Experts'},
        {value: 'Economic Dashboard', label: 'Economic Dashboard'},
        {value: 'Company Dashboard', label: 'Company Dashboard'}
    ];


    const handleResearch = (e) => {
        // setReg({...reg, department: e})
    }
    const [show, setShow] = useState(false);
    const [popupId, setPopupId] = useState()

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true)
        setPopupId(e)
    }



    return (
        <StyledBlog offset={offset} className=''>
            <PopupV1 show={show} data={popupId} handleClose={handleClose}/>

            <div className="blog-slider__slider-wrap__inner row">
                {
                    data && data?.length > 0 &&
                    data?.map((e,index) => {
                        return(
                            <Col md={4} className={'single-expert'}>
                                <div onClick={() => handleShow(e)}  className="single-expert-item">
                                    <div className="img-wrp">
                                        {
                                            e?.images?.list?.[0]?.full_path &&
                                            <Img alt={'Shanta Securities Limited'} src={e?.images?.list?.[0]?.full_path}/>

                                        }
                                    </div>
                                    <div className="content">
                                        {
                                            e?.data?.title &&
                                            <h5>{e?.data?.title}</h5>


                                        }
                                        {
                                            e?.data?.link &&
                                            <p>{reactHtmlParser(e?.data?.link)}</p>

                                        }
                                    </div>
                                </div>
                            </Col>

                        )
                    })
                }

            </div>
        </StyledBlog>
    );
};

const StyledBlog = styled.section`

  .mobile{
    display: none;
  }
  

.single-expert{
  margin-bottom: 80px;

  .single-expert-item {
    cursor: pointer;
    .img-wrp {
      padding-top: calc(370 / 370 * 100%);
      position: relative;
      overflow: hidden;
      .global-image{
        transition: 1s all cubic-bezier(.25, .74, .22, .99);
        overflow: hidden;
        transform: scale(1.01);

      }
    }

    .content {
      margin-top: 20px;

      h5 {
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        color: #3C3C3B;
        margin-bottom: 0;
      }

      p {
        font-size: 16px;
        font-weight: 500;
        line-height: 28px;
        color: rgba(60, 60, 59, 0.5);
      }
    }

    &:hover{
      .global-images{
        transform: scale(1.06);
      }
    }
  }
  @media(max-width: 767px){
    margin-bottom: 30px;
    &:last-child{
      margin-bottom: 0;
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

        .hover-content {
          position: absolute;
          left: 40px;
          top: 40px;
          right: 40px;
          transition: all 1s cubic-bezier(.25, .74, .22, .99);
          transform: translateY(-30px);
          opacity: 0;

          .link-dc {
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

        .link-dc {
          transform: none;
          opacity: 1;

          &:before {
            //height: 4px;
          }
        }

        .hover-content {
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

  .css-lkh0o5-menu{
    z-index: 9;
    margin: 0 ;

  }
  @media (max-width: 767px) {
    .mobile{
      display: block;
    }
    .desktop{
      display: none !important;
    }
    padding-top: 0;
    .filter{
      padding: 0;
      .react-select__control{
        border: none !important;
        height: 60px;
        background: #978c21;
        box-shadow: none !important;

        .react-select__control--menu-is-open{
          box-shadow: none !important;
          .react-select__indicator{
            padding-right: 15px;

          }
        }
        .react-select__value-container{
          padding: 0px 15px;
        }
        .react-select__indicator{
          padding: 15px;
          svg{
            path{
              fill: white;
              stroke-width: 0;
            }
          }
        }
        .react-select__indicator-separator{
          display: none;
        }
        .react-select__single-value{
          font-family: 'Avenir' !important;
          font-size: 16px !important;
          font-weight: 500 !important;
          line-height: 24px !important;
          color: #FFFFFF !important;
        }
        .select__single-value, .react-select__placeholder{
          font-family: 'Avenir' !important;
          font-size: 16px !important;
          font-weight: 500 !important;
          line-height: 24px !important;
          color: #FFFFFF !important;
        }
        .react-select__input-container{
          .react-select__input{
            font-family: 'Avenir' !important;
            font-size: 16px !important;
            font-weight: 500 !important;
            line-height: 24px !important;
            color: #FFFFFF !important;
          }
        }
      }
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

`;
export default React.memo(RandomSliderV1);