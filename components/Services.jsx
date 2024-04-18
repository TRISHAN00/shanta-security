import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import Title from "./Title";
import reactHtmlParser from "react-html-parser";
import RandomSliderServices from "./RandomSliderServices";


const MyComponent = ({services_data, id, offset, padding}) => {

    const services_list = services_data?.posts?.list;


    return (
        <>
            <StyledComponent id={id} offset={offset}
                             className={`${padding ? padding : 'home-blue-bg-info '}`}>
                <Container>
                    <Row >
                        <Col md={4}>
                            <Title text={services_data?.section_data?.title && services_data?.section_data?.title}
                                   fontSize={'44'} fontWeight={'400'} lineHeight={'56'}/>

                        </Col>
                        <Col md={{span: 7, offset: 1}}>
                            {
                                services_data?.section_data?.description ?

                                    reactHtmlParser(services_data?.section_data?.description) :

                                    ''
                            }
                        </Col>
                    </Row>
                </Container>
            </StyledComponent>

            <RandomSliderServices
                desc={services_data?.section_data?.short_desc}
                Data={services_list}
                offset={offset}
            />
        </>

    );
};

const StyledComponent = styled.section`
  position: relative;
  background: #f2f2f2;

  padding-top: 260px;
  padding-bottom: 470px;
  background-image: url('images/static/servicesbg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  
  @media(max-width: 768px){
    padding-bottom: 250px;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  ol {
    margin: 0 0 70px;
    padding-left: 0;

    @media(max-width: 768px){
      margin-bottom: 40px;
    }
    li {
      font-size: 20px;
      line-height: 24px;
      font-weight: 500;
      color: #3C3C3B;
      p{
        font-size: 20px;
        line-height: 24px;
        font-weight: 500;
        color: #3C3C3B;
        margin: 0 !important;
      }
      padding: 0px 0 25px 50px;
      z-index: 50;
      position: relative;
      counter-increment: count;
      border-bottom: 1px solid rgba(198, 198, 198, 0.5);
      margin-bottom: 25px;
      
      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        padding-bottom: 0;
        border-bottom: 0;
      }

      &:first-child:before {
        margin-top: 0;
      }

      &:last-child:before {
        margin-bottom: 0;
      }

      &:before {
        content: counter(count, upper-alpha);
        position: absolute;
        height: 28px;
        width: 28px;
        margin: 0;
        font-size: 12px;
        line-height: 20px;
        font-weight: 500;
        border: 1px solid #978C21;
        background-color: #978C21;
        border-radius: 50%;
        color: white;
        top: -4px;
        left: 0px;
        display: flex;
        align-items: center;
        justify-content: center;

      }
    }
  }

  p {
    font-size: 28px;
    line-height: 36px;
    font-weight: 300;
    color: #3C3C3B;
    margin-top: 70px;
  }

  @media (max-width: 767px) {
    padding-top: 120px;
    padding-bottom: 540px;

    h2 {
      margin-bottom: 55px;
    }
  }

`;

export default React.memo(MyComponent);