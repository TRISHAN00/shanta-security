import {Img} from "./ImgP";
import React,{memo} from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

const InnerbannerV9 = ({full, title, text, project, id, src, vh,data}) => {

    return (
        <StyledInnerBanner id={`${id ? id : 'InnerBanner'}`} full={full} vh={vh}
                           className={`InnerBanner ${project ? 'project_banner' : ''}`}>
            <div className="InnerBanner__parallax">
                <div className="blur_image parallax">
                    {
                        src &&
                            <Img  src={src ? src : '/images/dynamic/omer-innerbanner.jpg'} alt={title}/>

                    }
                    <Container>
                        <Row>
                            <div className="flex_box ">
                                <Col md={7}>
                                    < div className="title">
                                        {
                                            title &&
                                            <h1 data-lag={'0.4'}>{ReactHtmlParser(title)}</h1>

                                        }

                                    </div>
                                </Col>
                                <Col md={5}>
                                    <div className="text">
                                        {
                                            text &&
                                            <p data-lag={'0.4'}>{ReactHtmlParser(text)}</p>

                                        }
                                    </div>
                                </Col>

                            </div>
                        </Row>
                    </Container>

                </div>
            </div>

        </StyledInnerBanner>
    );
};

const StyledInnerBanner = styled.section`
  position: relative;

  .InnerBanner__parallax {
    padding-top: ${props => props.full ? '100vh' : 'calc(560 / 1366 * 100%)'};
    position: relative;
    @media (min-width: 1550px) {
      padding-top: ${props => props.full ? '100vh' : 'calc(560 / 1366 * 100%)'};
    }
    @media (max-width: 767px) {
      padding-top: ${props => props.full ? '100vh' : 'calc(560 / 375 * 100%)'} ;
    }

    .flex_box {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;

      @media (max-width: 767px) {
        flex-direction: column;
        text-align: left;
        align-items: flex-start;
       
      }

      .text {
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: flex-end;
        @media (max-width: 767px) {
          display: block;
          justify-content: unset;
        }

        p {
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          color: #FFFFFF;
          @media (max-width: 767px) {

            text-align: left;
            br {
              //display: none;
            }
          }
        }
      }
    }

    .blur_image {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .container {
      position: absolute;
      margin: 0 auto;
      z-index: 2;
      bottom: 100px;
      left: 0;
      right: 0;

      @media (max-width: 767px) {
        bottom: 40px;
      }

      h1 {
        z-index: 2;
        font-size: 44px;
        line-height: 56px;
        letter-spacing: -1px;
        margin: 30px 0 0;
        font-weight: 500;
        color: #FFFFFF;
        font-family: 'Avenir';
        @media (max-width: 767px) {
          font-size: 36px;
          line-height: 42px;
          margin-bottom: 15px;
        }
      }

    }
  }


  @media (min-width: 1550px) {
  

  }
  @media (max-width: 767px) {
    .InnerBanner__parallax {
      padding-top: ${props => props.full ? '100vh' : '70vh'};

      .container {
        bottom: 40px;

        h1 {
          font-size: 40px;
          line-height: 40px;
          margin: 0px 0 20px;

        }

      }

      .flex_box {

        flex-direction: column;
        text-align: left;
        align-items: flex-start;

        .title {
          width: 100%;
        }

        .text {

          display: block;
          justify-content: unset;

          p {

            width: 100%;

            text-align: left;

            br {
              //display: none;
            }
          }
        }
      }

    }
  }
`;

export default React.memo(InnerbannerV9);
