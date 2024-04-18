import React, {useContext, useRef, useState} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {Img} from "./Img";
import {hover, title} from "../styles/globalStyleVars"
import Title from "./Title";
import Button from "./ButtonLoadMore";
import reactHtmlParser from "react-html-parser";
import PopupV1 from "./easy/PopupV1";
const FingerTips = ({padding,data}) => {


    let section_data = data?.section_data
    let section_list = data?.posts?.list

    const [show, setShow] = useState(false);
    const [popupId, setPopupId] = useState()

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true)
        setPopupId(e)
        setVideo(true)
    }

    return (
        <StyledFingerTips className={`finger-tips ${padding ? padding : 'pt-200  pb-200'}`}>
            <PopupV1 show={show}  video={true} data={popupId} handleClose={handleClose}/>
            <Container>
                <Row>
                    <Col md={12}>
                        {
                            section_data?.title &&
                            <Title margin={'0 0 70px 0'} text={section_data?.title}/>

                        }

                    </Col>

                    {
                        section_list && section_list?.length > 0 &&
                        section_list?.map((e,index) => {

                            const dateString = e?.data?.created_at;
                            const date = new Date(dateString);
                            const options = { day: 'numeric', month: 'long', year: 'numeric' };
                            const formattedDate = date.toLocaleDateString('en-US', options);
                            return(
                                <Col key={index} md={4}>
                                    <div className="video-item__single" onClick={() => handleShow(e)}  >
                                        <div className="video-item__single__img">
                                            <Img alt={'Shanta Securities Limited'}
                                                src={e?.images?.[0]?.full_path ? e?.images?.[0]?.full_path : 'images/static/blur.jpg'}/>

                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                                    <circle id="Ellipse_604" data-name="Ellipse 604" cx="20" cy="20" r="20"
                                                            fill="#fff"/>

                                                    <g id="Mask_Group_471" data-name="Mask Group 471"
                                                       transform="translate(-165 -98)">
                                                        <circle id="Ellipse_612" data-name="Ellipse 612" cx="20" cy="20" r="20"
                                                                transform="translate(165 98)" fill="#fff"/>
                                                        <circle id="Ellipse_613" data-name="Ellipse 612" cx="20" cy="150" r="20"
                                                                transform="translate(165 98)" fill="#3C3C3B"/>

                                                        <path id="Polygon_1" data-name="Polygon 1"
                                                              d="M5.2,1.067a1,1,0,0,1,1.6,0l4,5.333A1,1,0,0,1,10,8H2a1,1,0,0,1-.8-1.6Z"
                                                              transform="translate(189 112) rotate(90)" fill="#978c21"/>
                                                    </g>
                                                </svg>


                                            </div>

                                        </div>
                                        <div className="video-item__single__content">
                                            {
                                                formattedDate &&
                                                <p>{formattedDate}</p>
                                            }
                                            {
                                                e?.data?.title &&
                                                <h4>{reactHtmlParser(e?.data?.title)}</h4>

                                            }
                                        </div>
                                    </div>
                                </Col>

                            )
                        })
                    }


                    {
                        section_list && section_list?.length > 7 &&
                        <Col className={'text-center load'} md={12}>
                            <Button icon src={'/'} color={'#3C3C3B'} hoverColor={'#3C3C3B'} text={'Learn More'}/>
                        </Col>
                    }

                </Row>

            </Container>
        </StyledFingerTips>
    );
};

const StyledFingerTips = styled.section`

  background: #F2F2F2;

  .video-item__single {
    margin-bottom: 40px;
    cursor: pointer;
    position: relative;

    .video-item__single__img {
      padding-top: calc(235 / 370 * 100%);
      position: relative;
      overflow: hidden;

      .icon {
        position: absolute;
        z-index: 2;
        inset: 0px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;

        svg {
          #Polygon_1, #Ellipse_613 {
            transition: 1s all ease;
          }
        }
      }
    }

    .video-item__single__content {
      padding-top: 20px;

      p {
        color: rgba(60, 60, 59, 0.5);
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        margin-bottom: 5px;
      }

      h4 {
        font-size: 24px;
        line-height: 32px;
        font-weight: 500;
        color: #3C3C3B;
        font-family: ${title};
        transition: 1s all ease;

      }
    }


    &:hover {
      .video-item__single__content {
        h4 {
          color: ${hover};
        }
      }

      .video-item__single__img {
        .icon {
          svg {
            #Ellipse_613 {
              cy: 20px;
            }

            #Polygon_1 {
              fill: white;
            }
          }
        }
      }
    }
  }


  .load{
    .dc-btn{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
    }
  }


`;
export default React.memo(FingerTips);
