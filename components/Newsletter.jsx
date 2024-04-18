import React from 'react';
import styled from "styled-components";
import {Col, Container, Form, Row} from "react-bootstrap";
import {Img} from "./ImgP";
import ButtonSubmit from "./Button";
import reactHtmlParser from "react-html-parser";
import {hover, title} from "../styles/globalStyleVars";



const Subscribe =({img,text,data}) => {
    const section_data = data?.section_data
    const section_image = data?.images
    return (
        <StyledSubscribe className='subscribe pt-160 pb-160  ' >
            {
                section_image?.list?.[0]?.full_path &&
                <Img alt={'Shanta Securities Limited'} src={section_image?.list?.[0]?.full_path} speed={'0.2'} layout={'fill'} objectFit={'cover'}/>

            }

            <Container>
                <Row>
                    <Col sm={6} className={'box'}>
                        <h2 className={'split-up'}>
                            {
                                section_data?.short_desc &&
                                reactHtmlParser(section_data?.short_desc)
                            }

                        </h2>

                        <Form className={``}
                              onSubmit={''}>
                            <Form.Group className="form-group" controlId="formBasicEmail">

                                <Form.Control autocomplete="off"

                                              name='email' type="email" placeholder="Your Email Address"/>
                                <div className="dc-btn-submit">
                                    <ButtonSubmit width={'100'} text={'Subscribe'} color={'#3C3C3B'}
                                                  hoverBackground={hover}
                                                  background={'#ED1B34'}/>
                                </div>
                            </Form.Group>

                        </Form>


                    </Col>
                </Row>
            </Container>
        </StyledSubscribe>
    );
};

const StyledSubscribe = styled.section`
  position: relative;
  .parent-div{
    padding-top: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
  h2 {
    font-family: ${title};
    color: #ffffff;
    font-size: 44px;
    font-weight: 500;
    line-height: 56px;
    margin: 0 0 54px 0;
  }

  .form-group {
    position: relative;

    .form-control {
      height: 45px;
      //padding-left: 40px;
      background-color: transparent;
      border-radius: 40px;
      font-size: 16px;
      font-weight: 500;
      padding-left: 30px;
      color: #FFFFFF;
      autocomplete: off;
      ::placeholder {
        color: rgba(255, 255, 255, 0.5);
        font-size: 16px;
        font-weight: 500;
        outline: none;
        border: none;

      }
      
      :focus{
        outline: none;
        outline-color: transparent;
        border-color: white;
      }
    }

    .dc-btn-submit {
      position: absolute;
      top: 0;
      right: 0;

      .dc-btn {
        height: 45px;
      }

      a {
        display: flex;
        height: 100%;
        width: 100%;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 500;
        margin: 0px;
        line-height: 18px;
        color: #3C3C3B;
        text-transform: capitalize;
        border: none;
        background-color: #FFFFFF;
        letter-spacing: 0px;
        position: relative;
        border-radius: 30px;
        overflow: hidden;
        span{
          //color: #3C3C3B;
        }
      }
    }
  }


`;


export default React.memo(Subscribe);
