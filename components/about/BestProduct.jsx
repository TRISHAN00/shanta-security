import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Title from "../Title";
import reactHtmlParser from "react-html-parser";
import {title} from "../../styles/globalStyleVars";


const MyComponent =({data,id,offset}) => {

    const section_data = data?.section_data

    return (
        <StyledComponent offset={offset} id={`${id ? id : 'BestProduct'}`} className={`counter `}>

            <Container fluid className={'bestproduct'}>
                <Row>
                    <Col md={{span:11 , offset:0}} className={'bestproduct__info'}>
                        <img alt={'Best Product'} src={'images/static/vector.svg'}/>


                        <div className={'bestproduct__info__data'}>
                            <Col md={6} className={'bestproduct__info__data__left'}>
                                {
                                    section_data?.short_desc &&
                                    <Title text={section_data?.short_desc} color={'#f9f9f9'} fontSize={40} lineHeight={48} fontWeight={400} textTransform={'Inherit'}/>

                                }
                            </Col>
                            <Col md={6} className={'bestproduct__info__data__right'}>
                                {
                                    section_data?.description &&
                                    reactHtmlParser(section_data?.description)

                                }
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: relative;
  background: #f2f2f2;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: #3C3C3B;
    height: 50vh;
    z-index: 0;
  }


  .container-fluid{
    position: relative;
    z-index: 2;


  }
  .bestproduct{
    position: relative;
    img{
      position: absolute;
      //height: 535px;
      object-fit: cover;
      height: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      left: -20%;
      @media(min-width: 1550px){
        left: -15%;
      }
      @media(max-width: 992px) and (min-width: 768px){
        height: 150%;
        inset: 0;
      }
      @media(max-width: 767px){
        height: 115%;
        inset: 0;
      }
    }
    &__info{
      background-color: #978C21;
      position: relative;
      padding: 160px 70px 100px;

      &__data{
        display: flex;
        &__left{
          .title{
            max-width: 80%;
          }
        }
        &__right{
          ul{
            li{
              position: relative;
              counter-increment: count;
              padding: 0 0 0 75px;
              border-bottom: 1px solid #C4C4C4;
              margin: 0 0 80px;
              @media(max-width: 767px){
                margin-bottom: 40px;
              }
              flex: 0 0 calc(50% - 15px);
              &:before{
                content: counter(count,Numeric);
                position: absolute;
                padding: 0;
                color: #F9F9F9;
                top: 10px;
                left: 0;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-align-items: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                font-size: 60px;
                font-weight: 500;
                line-height: 60px;
                font-family: ${title};
              }
              &:last-child {
                border-bottom: none;
              }
              p{
                font-size: 24px;
                line-height: 32px;
                font-weight: 500;
                color: #FFFFFF;
                margin-bottom: 80px;
                @media(max-width: 767px){
                  margin-bottom: 40px;
                }
                span{
                  margin-bottom: 20px;
                  display: inline-block;
                  font-size: 20px;
                  line-height: 28px;
                  font-weight: 500;
                  color: #FFFFFF;
                  &:after {
                    content: "\\a";
                    white-space: pre;
                  }
                }
              }
            }
          }
        }
      }
    }
    @media(max-width: 767px){
      overflow: hidden;
      .bestproduct{
        &__info{
          padding: 120px 0;

          &__data{
            display: initial;
            &__left{
              margin-bottom: 40px;
              .title{
                max-width: 100%;
              }
            }
            &__right{
              ul{
                li{
                  padding: 0;
                  &:before{
                    position: unset;
                    display: block;
                    padding-bottom: 20px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default React.memo(MyComponent);
