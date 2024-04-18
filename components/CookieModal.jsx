import React, {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';
import styled from "styled-components";
import {CSSPlugin, gsap, TimelineLite} from 'gsap';
import ButtonSubmit from "./Button";
import {Col, Container, Row} from "react-bootstrap";
import Button from "./CookieButton";
import reactHtmlParser from "react-html-parser";

const CookieModal = () => {
    const [cookies, setCookie] = useCookies(['cookieModal']);
    const [showModal, setShowModal] = useState(!cookies.cookieModal);
    const [isModalVisible,  setIsModalVisible] = useState(false);

    let tl = new TimelineLite();

    useEffect(() => {
        if (cookies.cookieModal) {
            setShowModal(false)
            // If the user already accepted the cookie, hide the modal
        }



    }, [])

    const handleAccept = () => {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30);
        setCookie('cookieModal', true, {path: '/', expires: expirationDate});
        setShowModal(false);
        const modal = document.querySelector('.cookie-modal');
        const mainDiv = document.querySelector('#cookie-modal');
        const cookiemodalcontent = document.querySelector('.cookie-modal-content');
        if (modal) {
            tl.to(modal, {
                y: '150%',
                height: '0',
                duration: 0.6,
                ease: 'expo.inOut'
            }, "-=1")

                .to(mainDiv, {
                    delay: 2,
                    display: 'none',
                    duration: 0.6,
                    ease: 'expo.inOut'
                })
            setTimeout(() => {
                setShowModal(false)
            }, 1500)

        }


    };


    const handleReject = () => {
        const modal = document.querySelector('.cookie-modal');
        const mainDiv = document.querySelector('#cookie-modal');
        const cookiemodalcontent = document.querySelector('.cookie-modal-content');
        if (modal) {
            tl.to(modal, {
                y: '150%',
                height: '0',
                duration: 0.6,
                ease: 'expo.inOut'
            }, "-=1")

                .to(mainDiv, {
                    delay: 2,
                    display: 'none',
                    duration: 0.6,
                    ease: 'expo.inOut'
                })
            setTimeout(() => {
                setShowModal(false)
            }, 1500)


        }


    };


    useEffect(() => {
        setTimeout(() => {
            setIsModalVisible(true);
        }, 1500);
    }, [isModalVisible]);




    const Icon = `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52"
                                                 viewBox="0 0 52 52">
                                                <g id="Group_19365" data-name="Group 19365"
                                                   transform="translate(18861 213)">
                                                    <circle id="Ellipse_600" data-name="Ellipse 600" cx="26" cy="26"
                                                            r="26" transform="translate(-18861 -213)" fill="#978c21"/>
                                                    <g id="Group_19364" data-name="Group 19364"
                                                       transform="translate(-231.364 125.636)">
                                                        <path id="Path_8764" data-name="Path 8764"
                                                              d="M46.6,17.029c-.092-.283-.171-.573-.25-.863l-2.5-.323-.718-1.679-1.916-.823H39.895L38.249,11.9s-2.3-.533-2.3-1.85A17.121,17.121,0,0,0,35.8,8.284c-.388.02-.784.046-1.172.046a13.347,13.347,0,0,0-4.049.125,12.915,12.915,0,0,0-3.345,2.278,16.711,16.711,0,0,0-2.963,2.2c.323,0,.645-.02.968-.04.428-.026.849-.053,1.264-.053a6.547,6.547,0,0,1,2.048.283,8.829,8.829,0,0,1,2.858,1.784c.283.237.566.467.856.678s.612.415.922.612a8.916,8.916,0,0,1,2.568,2.16,8.932,8.932,0,0,1,1.264,3.108c.092.362.184.724.3,1.073s.244.672.375,1.007a8.84,8.84,0,0,1,.816,3.292,8.84,8.84,0,0,1-.816,3.292c-.132.336-.27.672-.375,1.007s-.2.711-.3,1.073c-.112.441-.237.909-.4,1.376a5.96,5.96,0,0,0,2.061-.211A12.915,12.915,0,0,0,42.022,31.1a13.228,13.228,0,0,0,3.2-2.482A13.319,13.319,0,0,0,46.6,24.811a12.785,12.785,0,0,0,1.126-3.891A12.785,12.785,0,0,0,46.6,17.029Zm-14.6-3.022a1.317,1.317,0,1,1,1.317-1.317A1.321,1.321,0,0,1,31.994,14.006Zm6.584,3.621a.988.988,0,1,1,.988.988A.986.986,0,0,1,38.578,17.628Zm2.3,11.523a.988.988,0,1,1,.988-.988A.986.986,0,0,1,40.883,29.151Zm1.646-5.926a1.317,1.317,0,1,1,1.317-1.317A1.321,1.321,0,0,1,42.529,23.225Z"
                                                              transform="translate(-18632.996 -335.796)" fill="#fff"/>
                                                        <path id="Path_8765" data-name="Path 8765"
                                                              d="M46,6.675l1.975,3.292.658-2.081V6.05S46,6.017,46,6.675Z"
                                                              transform="translate(-18640.418 -335.05)" fill="#fff"/>
                                                        <path id="Path_8766" data-name="Path 8766"
                                                              d="M53.788,10.7l-.408.724c.672.981,1.449,1.337,2.384.658C55.764,12.082,55.105,9.316,53.788,10.7Z"
                                                              transform="translate(-18642.938 -336.505)" fill="#fff"/>
                                                        <path id="Path_8767" data-name="Path 8767"
                                                              d="M29.177,26.032A13.176,13.176,0,0,0,27.8,22.226a13.228,13.228,0,0,0-3.2-2.482,13.142,13.142,0,0,0-3.345-2.278,13.34,13.34,0,0,0-4.049-.125,13.34,13.34,0,0,0-4.049.125,12.915,12.915,0,0,0-3.345,2.278,13.228,13.228,0,0,0-3.2,2.482,13.319,13.319,0,0,0-1.376,3.806A12.785,12.785,0,0,0,4.11,29.923a12.785,12.785,0,0,0,1.126,3.891,13.176,13.176,0,0,0,1.376,3.806,13.228,13.228,0,0,0,3.2,2.482,13.141,13.141,0,0,0,3.345,2.278,13.34,13.34,0,0,0,4.049.125,13.34,13.34,0,0,0,4.049-.125A12.915,12.915,0,0,0,24.6,40.1a13.228,13.228,0,0,0,3.2-2.482,13.319,13.319,0,0,0,1.376-3.806A12.785,12.785,0,0,0,30.3,29.923,12.785,12.785,0,0,0,29.177,26.032Zm-19.543,6.2a.988.988,0,1,1,.988-.988A.986.986,0,0,1,9.634,32.228ZM13.256,37.5a1.317,1.317,0,1,1,1.317-1.317A1.321,1.321,0,0,1,13.256,37.5Zm1.317-13.169A1.317,1.317,0,1,1,15.89,23.01,1.321,1.321,0,0,1,14.573,24.327Zm1.975,7.243a1.317,1.317,0,1,1,1.317-1.317A1.321,1.321,0,0,1,16.548,31.569Zm4.28,5.926a.988.988,0,1,1,.988-.988A.986.986,0,0,1,20.828,37.5Zm2.3-12.181a.988.988,0,1,1,.988.988A.986.986,0,0,1,23.133,25.314Zm1.975,6.914a1.317,1.317,0,1,1,1.317-1.317A1.321,1.321,0,0,1,25.108,32.228Z"
                                                              transform="translate(-18626.109 -338.873)" fill="#fff"/>
                                                    </g>
                                                </g>
                                            </svg>
`;




    return (

        isModalVisible && (
            showModal &&
            <StyleCookie id={'cookie-modal'}>
                <Container>
                    <Row>
                        <Col className={'custom-width'} md={{offset: 2, span: 8}}>
                            <div className="cookie-modal">
                                <div className="cookie-modal-content">
                                    <div className="flex">
                                        <div className="icon">

                                            <div dangerouslySetInnerHTML={{__html: Icon}}/>

                                        </div>
                                        <div className="text-title">
                                            {reactHtmlParser(' <h3>We use third-party <b>cookies</b> in </br> order to personalize your site</br> experience.</h3>')}
                                        </div>
                                    </div>
                                    <div className="flex button">
                                        <div onClick={handleAccept} className={'yes'}>
                                            <ButtonSubmit width={'120'} text={'Yes'} color={'#FFFFFF'}
                                                          hoverBackground={'#3C3C3B'}
                                                          background={'#978C21'}/>
                                        </div>
                                        <div onClick={handleReject} className={'no'}>

                                            <Button icon width={'100'} src={'#'} text={'No'}
                                                    hoverBackground={'#3C3C3B'}
                                                    color={'#3C3C3B'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </StyleCookie>

        )
    );
};

const StyleCookie = styled.div`
  position: fixed;
  bottom: 70px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 99999;
  overflow: hidden;

  .cookie-modal {
    background-color: #fff;
    padding: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    transition: 2s all cubic-bezier(.25, .74, .22, .99);
    //transition-delay: 0.2s;
    &.hide {
      transform: translateY(150%);
    }
  }

  .cookie-modal-content {
    display: flex;
    align-items: center;

    svg {
      height: 52px;
      width: 52px;
    }

    .flex {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      flex: 0 0 60%;
      padding-right: 15px;

      &.button {
        display: inline-flex;

        .yes {
          display: inline-block;
        }

        .no {
          margin-left: 30px;
          display: inline-block;

        }
      }

      .icon {
        flex: 0 0 80px;
        width: 80px;
      }

      .text-title {
        flex: 0 0 calc(100% - 80px);
        width: calc(100% - 80px);

        h3 {
          font-size: 20px;
          font-weight: 300;
          line-height: 28px;
          color: #3C3C3B;

          b {
            font-size: 20px;
            font-weight: 300;
            line-height: 28px;
            color: #3C3C3B;
            text-decoration: underline;
          }
        }
      }


    }

    .yes {
      a {
        width: 120px;
      }
    }
  }


  @media (min-width: 1536px) {
    .custom-width {

      max-width: 56%;
      margin: auto;
    }
  }

  @media (min-width: 1800px) {
    .custom-width {

      max-width: 44%;
      margin: auto;
    }
  }
  @media (min-width: 1680px) {
    .custom-width {

      max-width: 54%;
      margin: auto;
    }
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    .custom-width {

      max-width: 100%;
      flex: 0 0 100%;
      margin: 0;

    }
  }
  @media (max-width: 992px) {
    .custom-width {
      margin: 0;
      max-width: 100%;
      flex: 0 0 100%;
    }
  }
  @media (max-width: 767px) {
    .cookie-modal {
      padding: 30px;

      .cookie-modal-content {
        flex-direction: column;

        .flex.button {
          margin-top: 20px;
        }
      }
    }
  }

  @media (max-width: 360px) {
    .cookie-modal-content .flex {
      padding: 0;
    }

    .cookie-modal-content .flex {
      flex-direction: column;
    }

    .cookie-modal-content .flex.button {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      gap: 10px;
      align-items: center;

      .dc-btn {
        width: 100%;
        display: block;

        a {
          display: block;

          width: 100%;
        }
      }

      .no {
        margin: 0;
        margin-top: 10px;
      }
    }
  }
`;


export default React.memo(CookieModal);
