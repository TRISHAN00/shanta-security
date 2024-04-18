import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "./ButtonNormal";
import {Img} from "./Img";
import {heavy} from "../styles/globalStyleVars";

const OpeningModal = (data) => {


    const [show, setShow] = useState(false);
    const link = data?.data?.section_data?.subtitle
    const label = data?.data?.section_data?.short_desc
    const image = data?.data?.images?.list?.[0]?.full_path


    useEffect(() => {
        const isModalAccepted = sessionStorage.getItem('modalAccepted');

        if (isModalAccepted === 'true') {
            setShow(false);
        } else {
            setTimeout(() => {
                handleShow();
            }, 7000);
        }
    }, []);

    const handleClose = () => {
        setShow(false);
        sessionStorage.setItem('modalAccepted', 'true');
    };

    const handleShow = () => {
        setShow(true);
    };

    if (!show) {
        return null; // If the cookie has been accepted or modal is hidden, return null to hide the modal
    }


    return (
        <Modal
            show={show}
            // item={item}
            onHide={handleClose}
            backdrop="static"
            id={'opening-modal'}
            keyboard={false}
            className="gph_modal modal_opening_popup modal_video_popup popup-version-one"
        >
            <Container>
                <Row>
                    <Col className={'custom-width'} md={{offset: 2, span: 8}}>
                        <div className="opening-modal">
                            <div className="opening-modal-content">
                                <div className="text-right">
                                    <div id={''} onClick={handleClose} className="close-modal">
                                        <svg id="Button_-_Close" data-name="Button - Close"
                                             xmlns="http://www.w3.org/2000/svg" width="44" height="44"
                                             viewBox="0 0 44 44">
                                            <g id="Ellipse_18" data-name="Ellipse 18" fill="none" stroke="#3c3c3b"
                                               strokeWidth="1" opacity="0.7">
                                                <circle cx="22" cy="22" r="22" stroke="none"/>
                                                <circle cx="22" cy="22" r="21.5" fill="none"/>
                                            </g>
                                            <g id="Ellipse_19" data-name="Ellipse 19" fill="none" stroke="#3c3c3b"
                                               strokeWidth="1" opacity={'0'} strokeDasharray="0 142">
                                                <circle cx="22" cy="22" r="22" stroke="none"/>
                                                <circle cx="22" cy="22" r="21.5" fill="none"/>
                                            </g>
                                            <g id="Group_18979" data-name="Group 18979"
                                               transform="translate(-3149 -104.5)">
                                                <line id="Line_4" data-name="Line 4" x2="8" y2="8"
                                                      transform="translate(3167 122.5)" fill="none" stroke="#3c3c3b"
                                                      strokeLinecap="round" strokeWidth="1"/>
                                                <line id="Line_3877" data-name="Line 3877" x1="8" y2="8"
                                                      transform="translate(3167 122.5)" fill="none" stroke="#3c3c3b"
                                                      strokeLinecap="round" strokeWidth="1"/>
                                            </g>
                                        </svg>


                                    </div>
                                </div>
                                {/*<h3>An organization dedicated to securing your future</h3>*/}
                                <div className="image-wrapper">
                                    <Img alt={'Shanta Securities Limited'} nolazy src={image ? image : 'images/static/rsz_1popup_image.jpg'}/>
                                    {/*<div className="stripe">*/}
                                    {/*    <Row>*/}
                                    {/*        <Col sm={{span:6, offset: 6}}>*/}
                                    {/*            <h6>*/}
                                    {/*                WATCH YOUR INVESTMENT <br/> GROW LIKE YOUR ANGEL*/}
                                    {/*            </h6>*/}
                                    {/*        </Col>*/}
                                    {/*    </Row>*/}
                                    {/*</div>*/}
                                </div>
                                {
                                    link ?
                                        <Button popup newtablink={link ? link : 'https://awchbd.org/'} target={'_blank'} icon  color={'#3C3C3B'} hoverColor={'#3C3C3B'}
                                                svgwidth={200} text={label ? label : 'AWCH'}/>

                                        :
                                        ""

                                }





                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </Modal>
    );
};

const StyleCookie = styled.div`

  .container {
    height: 100%;

    .row {
      height: 100%;

      .custom-width {
        margin: auto;
        overflow: hidden;
      }
    }
  }

  .opening-modal {
    background-color: #fff;
    padding: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 0;
    transition: 1.5s all cubic-bezier(.25, .74, .22, .99);
    margin: auto;
    overflow: hidden;
    //transform: translateY(100%);
    .text-right {
      display: block;
    }

    .close-modal {
      right: 0;
      position: relative !important;
      text-align: right;
      margin-bottom: 30px;
      cursor: pointer;

      svg {
        #Ellipse_19 {
          transition: 1s all cubic-bezier(.25, .74, .22, .99);
        }
      }

      &:hover {
        svg {
          #Ellipse_19 {
            opacity: 1;
            stroke-dasharray: 0 142px;
          }
        }
      }
    }

    h3 {
      line-height: 36px;
      font-size: 28px;
      font-weight: 300;
      color: #3C3C3B;
      margin-bottom: 15px;
    }

    .image-wrapper {
      position: relative;
      overflow: hidden;
      padding-top: calc(380 / 640  * 100%)  ;
      margin-bottom: 20px;

      .stripe {
        transform: translateX(100%);
        transition: all 1s cubic-bezier(.25, .74, .22, .99);
        position: absolute;
        left: 0;
        right: 0;
        bottom: 30px;
        background: rgba(151, 140, 33, 0.7);
        padding: 20px;
        @media (max-width: 767px) {
          position: relative;
          bottom: 0;
        }

        h6 {
          font-size: 16px;
          line-height: 24px;
          color: #FFFFFF;
          transform: translateX(100%);
          transition: all 1s cubic-bezier(.25, .74, .22, .99);
          font-family: ${heavy};
        }
      }
    }


    &.hide {
      transform: translateY(-150%) !important;
    }
  }

  .dc-btn a {
    width: auto;
    text-align: left;
    display: inline-flex;
  }


`;


export default React.memo(OpeningModal);
