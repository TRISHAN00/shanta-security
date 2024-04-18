import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {hover} from '../styles/globalStyleVars';
import reactHtmlParser from "react-html-parser";
import React from "react";
import {Img} from "./ImgP";
import Button from "./ButtonNormal";

const SpecialtyLube = ({offset, img, data,no, winWidth}) => {
    const section_data = data?.section_data
    const section_image = data?.images
    return (
        <>
            <StyledLube offset={offset}  className='specialty-lube '>
                {
                    section_image?.list?.[0]?.full_path &&
                    <Img src={section_image?.list?.[0]?.full_path} alt={'Shanta Securities Limited'} objectFit={'cover'} layout={'fill'}/>

                }

                <Container>
                    <Row>
                        <Col sm={10}>
                            {
                                section_data?.subtitle && no==false ?
                                    <h2  className={'split-up'}>{reactHtmlParser(section_data?.subtitle)}</h2>
                                    :                                 <h2  className={''}>{reactHtmlParser(section_data?.subtitle)}</h2>

                            }
                        </Col>
                        {
                            winWidth && <div className='bottom-text-wrap '>
                                <Col sm={9} className={'cta'}>
                                    <div className="bottom-text-wrap__box">
                                        {
                                            section_data?.short_desc && no == false ?
                                                <h4 className={'split-up'}>{section_data?.short_desc}</h4>
                                                : <h4 className={''}>{section_data?.short_desc}</h4>
                                        }
                                        <Button icon src={'contact'} width={'200'} hoverBackground={'#221F1F'}
                                                background={'transparent'}
                                                color={'#fff'}
                                                text={'Contact Us'}/>

                                    </div>
                                </Col>

                            </div>
                        }

                    </Row>


                </Container>
            </StyledLube>
            <StyleMobile>
                {
                    winWidth < 767 ?

                        <div className='bottom-text-wrap '>
                            <Col sm={9}>
                                <div className="bottom-text-wrap__box">
                                    {
                                        section_data?.short_desc && no == false ?
                                            <h4 className={'split-up'}>{section_data?.short_desc}</h4>
                                            : <h4 className={''}>{section_data?.short_desc}</h4>
                                    }
                                    <Button icon src={'contact'} width={'200'} hoverBackground={'#221F1F'}
                                            background={'transparent'}
                                            color={'#fff'}
                                            text={'Contact Us'}/>
                                </div>
                            </Col>

                        </div>

                        : ''
                }
            </StyleMobile>

        </>
    );
};
const StyledLube = styled.section`
  position: relative;
  padding-top: 100px;
  padding-bottom: 120px;

  .hide {
    display: none;
  }

  h2 {
    color: #ffffff;
    margin: 0 0 90px 0;

  }

  @media (min-width: 1550px) {
    padding-top: 250px;
    padding-bottom: 250px;
    .bottom-text-wrap__box {
      padding-top: calc(76.5714%) !important;
      min-height: 300px !important;
      max-width: 30%;
      min-width: 400px !important;

      h4 {
        top: 50px !important;
        left: 50px !important;
        right: 50px !important;
      }

      .dc-btn {
        left: 50px !important;
        bottom: 50px !important;

      }
    }

    .bottom-text-wrap {
      bottom: -140px !important;
    }
  }

  p {
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
    margin: 0;
    color: #ffffff;
  }

  .bottom-text-wrap {
    position: absolute;
    left: ${props => props.offset ? props.offset - 15 : '0'}px;
    bottom: -110px;
    z-index: 9;


    &__box {
      background-color: ${hover};
      padding-top: calc(268 / 270 * 100%);
      max-width: 25%;
      min-height: 220px;
      bottom: 0px;
      position: absolute;
      min-width: 320px;

      h4 {
        font-family: ${hover};
        color: #ffffff;
        margin: 0;
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        position: absolute;
        top: 40px;
        left: 40px;
        right: 40px;
      }

      .dc-btn {
        position: absolute;
        left: 40px;
        bottom: 40px;
      }

    }


  }

  @media (max-width: 1150px) {
    .bottom-text-wrap__box {
      h4 {
        font-size: 25px;
        line-height: 28px;
      }
    }
  }

  @media (max-width: 1020px) {


    .bottom-text-wrap {
      .col-sm-6 {
        min-width: 100% !important;
        margin: 0;

        p {
          margin-bottom: 40px;
        }
      }


    }
  }

  @media (max-width: 767px) {
    padding: 125px 0 !important;
    .bottom-text-wrap {
      position: relative;
      left: unset;
      right: unset;
      bottom: unset;
      width: 100%;

      .col-sm-9 {
        padding-right: 0;
        padding-left: 0;
      }
    }

    .bottom-text-wrap__box {
      position: relative;
      left: unset;
      right: unset;
      bottom: unset;
      width: 100%;
      max-width: 100%;
      min-height: unset;
      height: auto !important;
      min-width: 100%;
      padding-top: 60%;

    }

    h2 {
      margin: 0;
    }
  }
  @media (max-width: 600px) {
    padding-top: 60px;
    h1 {
      margin-bottom: 38px;
      font-size: 32px;
      line-height: 36px;
      font-weight: 600;
    }

    .bottom-text-wrap .col-sm-3 {
      max-width: calc(100% - 50px);
      min-width: calc(100% - 50px);

      .bottom-text-wrap__box {
        //padding-top: calc(150 / 270 * 100%);
        height: 270px;
        padding-top: 0;
        h4 {
          font-size: 32px;
          line-height: 36px;
        }
      }

    }
  }

  @media (max-width: 350px) {
    .bottom-text-wrap .col-sm-3{
      min-width: 100%;
    }
  }


  @media (min-width: 1500px) {
    .bottom-text-wrap__box {
      padding-top: calc(268 / 350 * 100%);
    }
  }


`;

const StyleMobile = styled.section`

  display: none;

  .bottom-text-wrap {
  

    &__box {
      background-color: ${hover};
    

      h4 {
        font-family: ${hover};
        color: #ffffff;
        margin: 0;
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        position: absolute;
        top: 40px;
        left: 40px;
        right: 40px;
      }

      .dc-btn {
        position: absolute;
        left: 40px;
        bottom: 40px;
      }

    }


  }
  @media (max-width: 767px) {
    display: block;

    .bottom-text-wrap {
      position: relative;
      left: unset;
      right: unset;
      bottom: unset;
      width: 100%;

      .col-sm-9 {
        padding-right: 0;
        padding-left: 0;
      }
    }

    .bottom-text-wrap__box {
      position: relative;
      left: unset;
      right: unset;
      bottom: unset;
      width: 100%;
      max-width: 100%;
      min-height: unset;
      height: auto !important;
      min-width: 100%;
      //padding-top: 60%;
      min-height: 200px;
    }
  }
`;
export default React.memo(SpecialtyLube);
