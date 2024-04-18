import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {Img} from "./Img";
import Button from "./ButtonNormal";
import reactHtmlParser from "react-html-parser";
import ButtonUserManual from "./ButtonUserManual";
import {hover, title} from "../styles/globalStyleVars";


const FingerTips = ({data, video}) => {
    let section_data = data?.section_data
    let images = data?.images?.list
    const videoRef = useRef(null);

    useEffect(() => {
        // When the component mounts, play the video and mute it
        if(video){
            videoRef.current.play();
            videoRef.current.muted = true;
        }

    }, [videoRef]);

    return (
        <StyledFingerTips className='finger-tips pt-100  pb-100'>
            <Container>
                <Row>
                    <Col sm={7} className='finger-tips__text'>

                        {
                            images && images?.length > 0 &&
                            images?.map((e,index) => {
                                if(e?.thumb === 'on'){
                                    return(
                                        <div key={index} className="icon white">
                                            <img src={e?.full_path} alt="Shanta Securities Limited"/>
                                        </div>
                                    )
                                }
                                if(e?.is_dark === 'on'){
                                    return(
                                        <div className="icon dark">
                                            <img src={e?.full_path} alt="Shanta Securities Limited"/>
                                        </div>
                                    )
                                }
                            })
                        }



                        {
                            section_data?.subtitle &&
                            <h2 className={'split-up'}>

                                {
                                    reactHtmlParser(section_data?.subtitle)
                                }
                            </h2>
                        }

                        {
                            section_data?.short_desc &&
                            <p className={'split-up'}>

                                {
                                    reactHtmlParser(section_data?.short_desc)
                                }
                            </p>
                        }


                        <div className="finger-tips__text__bottom">
                            {
                                section_data?.extra_field &&
                                <Button icon src={section_data?.extra_field} color={'#3C3C3B'} hoverColor={'#3C3C3B'} text={'Learn More'}/>

                            }
                            <ul>
                                {
                                    section_data?.google_url &&
                                    <li><a target={'_blank'} href={section_data?.google_url}>

                                        <img src="images/static/google.svg" alt="Shanta Securities Limited"/>
                                    </a></li>
                                }
                                {
                                    section_data?.app_store &&
                                    <li><a target={'_blank'} href={section_data?.app_store}>
                                        <img src="images/static/app.svg" alt="Shanta Securities Limited"/>
                                    </a></li>
                                }


                            </ul>


                        </div>
                        {
                            data?.files?.list?.[0]?.full_path &&
                            <div className="user_manual">
                                <ButtonUserManual target={'_blank'}
                                    src={data?.files?.list?.[0]?.full_path?data?.files?.list?.[0]?.full_path:''}
                                    text={"Download User Manual"}
                                    background={"transparent"}
                                    color={"#000"}
                                    icon
                                />
                            </div>
                        }


                    </Col>
                    {
                        video ?

                            <Col sm={5} className={'video'}>
                                <div className="video video_masking">
                                    <div className="mobile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="244.308" height="497.671" viewBox="0 0 244.308 497.671">
                                            <g id="Group_20850" data-name="Group 20850" transform="translate(-941.445 -216)">
                                                <g id="Group_20849" data-name="Group 20849">
                                                    <g id="custom_phone_mockup" transform="translate(864.801 177.801)">
                                                        <g id="Group_20816" data-name="Group 20816" transform="translate(76.644 38.2)">
                                                            <path id="Path_9334" data-name="Path 9334" d="M118.879,535.87l163.094-.35c22.22-.058,40.19-19,40.135-42.353L321.33,80.378c-.056-23.351-18.081-42.236-40.3-42.178l-163.094.35c-22.22.058-40.19,19-40.135,42.353l.778,412.789C78.605,517.043,96.659,535.929,118.879,535.87Z" transform="translate(-77.8 -38.2)" fill="transparent" stroke="#978c21"/>
                                                            <path id="Path_9335" data-name="Path 9335" d="M123.212,538.3c-21.276.058-38.607-18.1-38.635-40.456L83.8,85.052c-.056-22.359,17.22-40.573,38.5-40.6L285.39,44.1c21.276-.058,38.607,18.1,38.635,40.456l.778,412.789c.056,22.359-17.22,40.573-38.5,40.6Z" transform="translate(-82.133 -42.377)" strokeWidth={'6'} fill="transparent" stroke="#978c21"/>
                                                            <path id="Path_9336" data-name="Path 9336" d="M128.674,541.489c-20.109.029-36.5-17.1-36.524-38.237L91.4,90.434C91.372,69.3,107.676,52.079,127.785,52.05l39.621-.085L290.879,51.7c20.109-.029,36.5,17.1,36.524,38.237l.778,412.789c.028,21.133-16.276,38.354-36.385,38.383Z" transform="translate(-87.622 -47.759)" strokeWidth={'6'} fill="transparent" stroke="#3c3c3b"/>
                                                            <path id="Path_9337" data-name="Path 9337" d="M148.969,553.227c-15.776.029-28.664-13.427-28.691-30.035L119.5,110.4c-.028-16.579,12.776-30.123,28.58-30.152l163.094-.35c15.776-.029,28.664,13.427,28.691,30.035l.778,412.789c.028,16.579-12.776,30.123-28.58,30.152Z" transform="translate(-107.918 -67.728)" strokeWidth={'8'} fill="transparent" stroke="#fff"/>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>

                                    </div>
                                    <video ref={videoRef} autoPlay muted>
                                        <source src="images/video/research.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </Col>
                            : ''
                    }


                    {
                        images && images?.length > 0 &&
                        images?.map((e) => {
                            if(e?.banner === 'on'){
                                return(
                                    <Col sm={{span: 4, offset: 1}} className='finger-tips__img '>
                                        <div data-lag="0.3" className="img-wrapper ">
                                            <Img objectFit={'cover'} alt={'Shanta Securities Limited'} layout={'responsive'} src={e?.full_path}/>
                                        </div>

                                    </Col>

                                )
                            }
                        })
                    }


                </Row>
            </Container>
        </StyledFingerTips>
    );
};

const StyledFingerTips = styled.section`
  background-color: #FFFFFF;
    
  .user_manual{
      margin-top: 40px;
      @media(max-width: 767px){
          margin-bottom: 40px;
          margin-top: 0;
      }
      a{
          text-decoration: underline;
      }
  }  
  .icon{
    img{
      height: 100px;
      margin-bottom: 30px;
      width: 170px;

    }
  }

  .video_masking {
    position: relative;
    height: 500px;
    width: 300px;
    overflow: hidden;

    margin-right: auto;
    margin-left: auto;
    @media (max-width: 767px) {
      margin: auto;
    }

    video {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      height: calc(100% - 20px);
      width: 100%;
      margin: auto 0;

    }
    .mobile{
      position: absolute;
      height: 100%;
      width: 100%;
      img,svg{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        height: 500px;
        width: 300px;
        z-index: 1;
        //object-fit: cover;
      }
    
    }
  }
  .img-wrapper{
    padding-top: 100%;
    position: relative;
  }
  .finger-tips__img{
    z-index: 2;
    img{
      height: auto;
    }
  }
  .finger-tips__text {
    h2 {
      font-size: 44px;
      line-height: 56px;
      font-weight: 500;
      margin-bottom: 54px;
      font-family: ${title};

      span {
        color: ${hover};
      }
    }

    p {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      margin: 0;
      color: #221F1F;
    }

    &__bottom {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      ul {
        display: flex;

        li {
          &:nth-of-type(1) {
            margin-right: 30px;
          }

          a {
            display: flex;
            position: relative;

            img {
              height: 100px;
              width: 170px;
            }
          }
        }
      }
    }
  }

  .finger-tips__img {
    position: relative;
  }

  .global-image{
    overflow: visible;
  }

  @media(min-width: 1024px){
    .finger-tips__img{
      display: flex;
      align-items: flex-end;
      .img-wrapper{
        width: 100%;
        .global-image{
          top: 70px;
        }
      }
    }
  }
  @media (max-width: 991px) {
    .img-wrapper{
      margin-top: 40px;
    }

    .finger-tips__text {
      min-width: 100%;
      margin-top: 40px;
    }

    .finger-tips__img {
      min-width: 100%;
      margin: 0;
      min-width: 100%;
      margin: 0px;
      transform: unset;
      position: relative;
      height: 100%;
      clear: both;
    }
  }

  @media (max-width: 767px) {
    .img-wrapper{
      margin-top: 40px;
    }
    .finger-tips__text h2 {
      font-size: 32px;
      line-height: 36px;
      margin-bottom: 40px;
    }
    .finger-tips__text__bottom ul{
      flex-direction: row;
      justify-content: space-between;

      li{
        flex: 0 0 calc(50% - 15px);
        max-width: calc(50% - 15px);
        min-width: calc(50% - 15px);
        a{
          width: 100%;
          svg{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    .finger-tips__text__bottom {
      margin-top: 20px;
      flex-wrap: wrap;
      flex-direction: column-reverse;
      align-items: flex-start;

      ul {
        min-width: 100%;
        margin-bottom: 40px;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          //min-width: 100%;
          &:nth-of-type(1) {
            margin-bottom: 20px;
            margin-right: 0;
          }

        }
      }
    }
  }
  
  
  .icon.dark{
    display: none;
  }

`;
export  default React.memo(FingerTips);