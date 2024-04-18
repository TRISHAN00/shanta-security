import React, {useEffect} from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import Button from "../ButtonOpenNow";
import ButtonB from "../ButtonBrochure";
import reactHtmlParser from "react-html-parser";
import {hover, title} from "../../styles/globalStyleVars";
import {Img} from "../Img";

const LubeSolution = ({padding, data, title, subtitle, text, brochure, bigtitle, image, link, winWidth, offsetContainer, offset}) => {

    text = data?.section_data?.description;
    title = data?.section_data?.subtitle;
    subtitle = data?.section_data?.short_desc;
    image = data?.images?.list?.[0]?.full_path;
    link = data?.section_data?.extra_field ;



    let brochure_link = data?.section_data?.brochure;
    let top_description = data?.section_data?.top_description;
    let banner = null;
    let thumb = null;
    let thumbBottom = null;
    let thumbDark = null;
    let thumbDarkDesktop = null;
    data?.images?.list?.map((e) => {
        if (e?.banner === 'on') {
            banner = e?.full_path
        } else if (e?.background === 'on') {
            thumbBottom = e?.full_path
        } else if (e?.thumb === 'on') {
            thumb = e?.full_path
        } else if (e?.is_dark === 'on') {
            thumbDark = e?.full_path
        } else if (e?.is_dark_desktop === 'on') {
            thumbDarkDesktop = e?.full_path
        }
    })
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
                const containerOffsetLeft = document.querySelector('.container').offsetLeft;
                const lubeTestingImgBox = document.querySelector('.lube-testing__img__box');
                const lubeTestingImgBox2 = document.querySelector('.lube-testing__text');
                const marginLeft = containerOffsetLeft + 15;
                lubeTestingImgBox.style.setProperty('left', `${offsetContainer+15}px`);
                lubeTestingImgBox2.style.setProperty('padding-right', `${marginLeft}px`);
            }
        };

        handleResize(); // Initial positioning

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <StyledLubeSolution offset={offset} className={`lube-testing  ${padding  ? padding : ' pt-200'}`}>
            {
                bigtitle ?

                    <Container>
                        <Row>
                            <Col className={'bigtitle'} md={12}>
                                {
                                    top_description &&
                                    <h3  className={'split-up'}>{reactHtmlParser(top_description)}</h3>

                                }
                            </Col>
                        </Row>
                    </Container>
                    : ''
            }
            <Container fluid className="p-0">
                <Row>
                    <Col sm={5} className="lube-testing__img" >
                        <div className="lube-testing__img__inner " >
                            <div className="">
                                {
                                    banner ?
                                        <Img alt={'Shanta Securities Limited'} src={banner ? banner : 'images/static/blur.jpg'}/>
                                        :
                                        <Img  alt={'Shanta Securities Limited'} src={image ? image : 'images/static/blur.jpg'}/>
                                }


                            </div>
                        </div>

                        <div className="lube-testing__img__box" >
                            <div  className="lube-testing__img__box__inner box">
                                {
                                    title ?
                                        <h5 className={'split-up'}>{title ? reactHtmlParser(title) : 'An organization dedicated to securing your future'}</h5>
                                        : ''
                                }

                                {
                                    brochure ?

                                        <ButtonB
                                            src={brochure_link?brochure_link:'https://portal.shantasecurities.com/signup'}
                                            text={"Open an Account Now"}
                                            margin={"30px 0 0 0"}
                                            background={"transparent"}
                                            color={"#fff"}
                                            icon
                                        />
                                        :

                                        <Button
                                            target={'_blank'}
                                            link={link}
                                            text={"Open an Account Now"}
                                            margin={"30px 0 0 0"}
                                            background={"transparent"}
                                            color={"#fff"}
                                            icon
                                        />
                                }
                            </div>
                        </div>
                    </Col>

                    <Col
                        sm={7} data-lag={'0.1'} className="lube-testing__text">
                        {
                            subtitle ?

                                <h5 className={'split-up'}>
                                    {subtitle ? subtitle : 'Investing in finance allows you to diversify your portfolio. Putting all your money in a single asset or keeping it in cash can be risky. By diversifying your investments, you can reduce the impact of any one investment\'s performance on your overall portfolio.'}
                                </h5>
                                : ''
                        }

                        {
                            text ?
                                <p className={'split-up'}>
                                    {reactHtmlParser(text)}

                                </p>

                                : ''
                        }
                        {
                            winWidth > 767 ?

                                thumbBottom ?
                                    <img alt={'Shanta Securities Limited'} className={'new_img'}
                                         src={thumbBottom ? thumbBottom : 'images/static/blur.jpg'}/>
                                    :
                                    ''
                                :
                                thumb ?
                                    <img alt={'Shanta Securities Limited'} className={'new_img'} src={thumb ? thumb : 'images/static/blur.jpg'}/>
                                    :
                                    ''

                        }

                        {
                            thumbDarkDesktop ?
                                <img alt={'Shanta Securities Limited'} className={'dark_image_deskotp'} src={thumbDarkDesktop ? thumbDarkDesktop : 'images/static/blur.jpg'}/>

                                : ''
                        }


                        {
                            thumbDark ?
                                <img alt={'Shanta Securities Limited'} className={'dark_image'} src={thumbDark ? thumbDark : 'images/static/blur.jpg'}/>

                                : ''
                        }



                    </Col>
                </Row>
            </Container>
        </StyledLubeSolution>
    );
};

const StyledLubeSolution = styled.section`
  background-color: #FFFFFF;
  margin-bottom: -25px;

  .new_img, .dark_image, .dark_image_deskotp {
    margin-top: 40px;
  }
  
  .dark_image, .dark_image_deskotp{
    display: none;
  }
    
    .lube-testing__img__box {
        padding-left: ${props => props.offset ? props.offset + 'px' : ''};
    }
  
  @media(max-width: 767px){
    .dark_image_deskotp{
      display:none;
    }
      .lube-testing__img__box {
          padding-left: unset;
      }
  }
 

  .bigtitle {
    font-size: 32px;
    font-weight: 500;
    line-height: 44px;
    color: #3C3C3B;
    font-family: ${title};
    margin-bottom: 75px;
    span{
      color: ${hover};
    }
  }
  
  .lube-testing__img {
    position: relative;
    top: -25px;
    padding-right: 55px;
    &__inner {
      padding-top: calc(420 / 528 * 100%);
      position: relative;
      min-height: 100%;
    }
    .reveal{
      height: 100%;
    }

    &__box {
      position: absolute;
      bottom: -75px;


      &__inner {
        //padding-top: calc(192 / 400 * 100%);
        height: 216px;
        width: 335px;
        position: relative;
        background-color: #978C21;
        z-index: 222;
        h5 {
          font-size: 20px;
          line-height: 28px;
          color: #FFFFFF;
          font-weight: 500;
          position: absolute;
          top: 30px;
          left: 30px;
          right: 30px;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          white-space: normal;
          overflow: hidden;
        }
      }
      .dc-btn {
        position: absolute;
        bottom: 30px;
        left: 30px;
      }
    }
  }

  .lube-testing__text {
    justify-content: flex-start;
    display: flex;
    flex-direction: column;

    h5 {
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 40px;
      color: #3C3C3B;
      font-family: ${title};
    }

    p {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      margin-bottom: 0;
      color: #3C3C3B;
      span{
        color: ${hover};
        
      }

      &:nth-last-child(1) {
        margin-bottom: 0;
      }
    }
  }


  @media(max-width: 991px){
    .lube-testing__img{
      padding-right: 0;
    }
    .lube-testing__text{
      padding-left: 75px;
    }
    .lube-testing__img__box {
      &__inner {

      }
    }
  }
  
  @media (min-width: 768px) and (max-width: 1150px) {
    .lube-testing__img__box {
      &__inner h2 {
        font-size: 22px;
        line-height: 26px;
      }
    }
  }

  @media (max-width: 767px) {
    padding-bottom: 0;
    margin-bottom: -25px;
    .row{
      flex-direction: column-reverse;
    }
    .col-sm-5,
    .col-sm-6 {
      min-width: 100%;
      margin: 0;
    }
    .lube-testing__img{
      padding-right: 0!important;
      margin-top: 60px;
    }
    .lube-testing__img__box {
      left: 0 !important;
      position: relative;
      right: 0 !important;
      bottom: 0 !important;
      &__inner {
        width: 100% !important;
        h5{
          font-size: 20px;
          line-height: 24px ;
        }
      }
    }

    .lube-testing__text {
      padding: 0 30px !important;
      margin-top: 0;
    }
  }

`;

export default React.memo(LubeSolution);