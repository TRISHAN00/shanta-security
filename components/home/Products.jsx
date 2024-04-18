import React, {useEffect, memo} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {hover} from "../../styles/globalStyleVars";
import Title from "../Title";
import reactHtmlParser from "react-html-parser";
import gsap from 'gsap';
const   MyComponent = ({data, id, offset}) => {

    let products = data?.posts?.list;
    useEffect(() => {
        var shapes = ".rotate_svg line , .rotate_svg react, .rotate_svg path",
            tl = gsap.timeline({repeat: -1, yoyo: true});
        tl.fromTo(shapes, {drawSVG: "0"}, {duration: 0.5, drawSVG: "100%", stagger: 0.1}, "-=0.5")
            .to(shapes, {duration: 0.5, drawSVG: "100%"})
    })




    return (
        <StyledComponent id={id} offset={offset} className={'products pb-200'}>
            <Container>
                <Row>
                    <Col md={4} >
                        {
                            data?.section_data?.subtitle

                                ?
                                <Title margin={''} text={data?.section_data?.subtitle}
                                       fontSize={'44'} fontWeight={'400'} lineHeight={'56'}/>
                                : ''
                        }

                    </Col>
                    <Col  md={{span: 7, offset: 1}}>
                        {
                            data?.section_data?.short_desc ?

                                <p className={'split-up short'}>{data?.section_data?.short_desc} </p>
                                : ''
                        }

                    </Col>
                </Row>
            </Container>
            <div className="content-wrp">
                <Container>
                    <Row>
                        {
                            products && products?.length > 0 &&
                            products?.map((e,index)=> {
                                return(
                                    <Col data-lag={`${index == 0 ? '0.05' : index == 1 ? '0.1' : index == 2 ? '0.13' : ''}`} className={'custom-loop'} md={4}>
                                        <div className="single-item">
                                            <div className="content">
                                                <div className="rotate rotate_svg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="422.894" height="563.04" viewBox="0 0 422.894 563.04">
                                                        <g id="Group_20853" data-name="Group 20853" transform="translate(-19.553 129.54)">
                                                            <g id="Group_20852" data-name="Group 20852">
                                                                <g id="Custom_vector_2" transform="translate(15099 2689.667)" opacity="0.2">
                                                                    <line id="Line_3969" data-name="Line 3969" y1="281" x2="141" transform="translate(-14798 -2537.667)" stroke="#fff" stroke-width="1"/>
                                                                    <line id="Line_3970" data-name="Line 3970" x1="281.333" transform="translate(-14938.333 -2537.374)" stroke="#fff" stroke-width="1"/>
                                                                    <line id="Line_3971" data-name="Line 3971" y1="562" x2="281" transform="translate(-14938 -2818.667)" stroke="#fff" stroke-width="1"/>
                                                                    <line id="Line_3972" data-name="Line 3972" x1="140" y1="281" transform="translate(-14938 -2818.667)" stroke="#fff" stroke-width="1"/>
                                                                    <line id="Line_3973" data-name="Line 3973" x1="141" y1="281" transform="translate(-15079 -2818.667)" stroke="#fff" stroke-width="1"/>
                                                                    <line id="Line_3974" data-name="Line 3974" y1="281" x2="141" transform="translate(-14938 -2818.667)" stroke="#fff" stroke-width="1"/>
                                                                    <line id="Line_3975" data-name="Line 3975" x1="140.667" transform="translate(-14797.667 -2818.707)" stroke="#fff" stroke-width="1"/>
                                                                    <line id="Line_3976" data-name="Line 3976" x1="140.667" transform="translate(-15079 -2818.707)" stroke="#fff" stroke-width="1"/>
                                                                    <line id="Line_4007" data-name="Line 4007" x1="140" transform="translate(-14938 -2256.667)" fill="none" stroke="#fff" stroke-width="1"/>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>

                                                </div>

                                                <span>{index+1}</span>
                                                {
                                                    e?.data?.description &&

                                                    reactHtmlParser(e?.data?.description)
                                                }

                                                <div className="flex">
                                                    {
                                                        e?.data?.title &&
                                                        <h3>{e?.data?.title}</h3>
                                                    }


                                                    <svg id={''} xmlns="http://www.w3.org/2000/svg" width="44" height="44"
                                                         viewBox="0 0 44 44">
                                                        <g id="Circle" transform="translate(16429 -2014)">
                                                            <g id="Rectangle_492" data-name="Rectangle 492"
                                                               transform="translate(-16429 2014)" fill="none" stroke="#c6c6c6"
                                                               stroke-width="1" opacity="0.5">
                                                                <rect width="44" height="44" rx="22" stroke="none"/>
                                                                <rect x="0.5" y="0.5" width="43" height="43" rx="21.5"
                                                                      fill="none"/>
                                                            </g>
                                                            <g id="Group_4824" data-name="Group 4824"
                                                               transform="translate(-17065.5 434.5)">
                                                                <g id="Group_4823" data-name="Group 4823"
                                                                   transform="translate(11 4)">
                                                                    <line id="Line_9" data-name="Line 9" x2="5" y2="5"
                                                                          transform="translate(647.5 1592.5)" fill="none"
                                                                          stroke="#fff" strokeLinecap="round"
                                                                          stroke-width="1"/>
                                                                    <line id="Line_10" data-name="Line 10" x1="5" y2="5"
                                                                          transform="translate(647.5 1597.5)" fill="none"
                                                                          stroke="#fff" strokeLinecap="round"
                                                                          stroke-width="1"/>
                                                                </g>
                                                                <line id="Line_11" data-name="Line 11" x2="10"
                                                                      transform="translate(653.5 1601.5)" fill="none"
                                                                      stroke="#fff" strokeLinecap="round" stroke-width="1"/>
                                                            </g>
                                                            <g id="Rectangle_5661" data-name="Rectangle 5661"
                                                               transform="translate(-16429 2058) rotate(-90)" fill="none"
                                                               stroke="#fff" stroke-width="1" opacity="0"
                                                               strokeDasharray="0 140">
                                                                <rect width="44" height="44" rx="22" stroke="none"/>
                                                                <rect x="0.5" y="0.5" width="43" height="43" rx="21.5"
                                                                      fill="none"/>
                                                            </g>
                                                        </g>
                                                    </svg>


                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }


                    </Row>
                </Container>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: relative;
  background: #f2f2f2;
  padding-top: 305px;

  .short{
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
  }
  .content-wrp {
    margin-top: 40px;

    .single-item {
      background: #3c3c3b;
      position: relative;
      padding-top: 100%;
      overflow: hidden;
      margin-bottom: 40px;

      .content {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 1;
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span {
          font-size: 136px;
          line-height: 136px;
          color: #C6C6C6;
          display: block;
          margin-bottom: 80px;
          font-family: 'Avenir Book';
          transition: 1s all cubic-bezier(.25, .74, .22, .99);
          position: relative;
          z-index: 2;

        }

        p {
          font-size: 20px;
          font-weight: 300;
          line-height: 28px;
          color: #FFFFFF;
          z-index: 2;
          position: absolute;
          top: 40px;
          margin: auto;
          width: calc(100% - 80px);
          transition: 1s all cubic-bezier(.25, .74, .22, .99);
          transform: translateY(-200%);
        }

        .flex {
          position: relative;
          z-index: 2;
          bottom: 35px;
          align-items: flex-end;
          display: flex;
          justify-content: space-between;
          min-height: 105px;

          h3 {
            font-size: 40px;
            line-height: 52px;
            color: #FFFFFF;
            letter-spacing: -1px;
            display: block;
            font-family: 'Avenir Heavy';
          }

          svg {
            position: absolute;
            bottom: 15px;
            right: 0;
            display: none;
            #Rectangle_5661 {
              transition: 1s all cubic-bezier(.25, .74, .22, .99);
            }
          }
        }

        .rotate_svg{
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          object-fit: cover;
          z-index: 2;
          svg{
            height: calc(100% + 100px);
            width: calc(100% + 100px);
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

        &:before {
          content: '';
          transition: 1s all cubic-bezier(.25, .74, .22, .99);
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          width: 100%;
          height: 0;
          background: ${hover};
        }

        &:hover {
          span {
            transform: translateY(-50px);
            opacity: 0;
          }

          p {
            transform: unset;
          }

          .flex {
            svg {
              #Rectangle_5661 {
                stroke-dasharray: 140px;
                opacity: 1;
              }
            }
          }

          &:before {
            height: 100%;
          }
        }

      }
      
    }

    



  }


  
  
  
  @media (max-width: 992px) and (min-width: 768px) {
    .col-md-4 , .col-md-7{
      flex: 0 0 100%;
      max-width: 100%;
      margin: 0;
      h2{
        margin-bottom: 40px;
      }
    }

    .content-wrp .single-item .content span {
      font-size: 100px;
      line-height: 100px;
    }

    .content-wrp .single-item .content .flex svg {
      bottom: 13px;
    }
  }


  @media (max-width: 767px) {
    padding-top: 120px !important;
    padding-bottom: 90px !important;
  }
  @media(min-width: 1024px) and (max-width: 1440px){
    .content-wrp .single-item .content .flex h3{
      margin-right: 30px;
    }
  }
`;

export default React.memo(MyComponent);