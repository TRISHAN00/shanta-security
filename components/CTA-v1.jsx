import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {Col, Container, Form, Row} from "react-bootstrap";
import {Img} from "../Img";
import ButtonSubmit from "../Button";
import reactHtmlParser from "react-html-parser";
import {ToastContainer, toast} from 'react-toastify';
import {emailValidation} from "../../api/config/validator";


const Subscribe = ({data, clearForm, callSubscribe, loading, selectFormData, selectFailedFormData}) => {

    const success = (msg) => toast.success(msg, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        progress: undefined,

    });

    const error = (msg) => toast.error(msg, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        progress: undefined,

    });

    const [subsEmail, setSubsEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)

    const handleEmail = (e) => {
        setSubsEmail(e)
        emailValidation(e) ? setValidEmail(true) : setValidEmail(false);
    }

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (subsEmail !== '') {
            let formData = new FormData()
            formData.append('email', subsEmail)
            callSubscribe(formData)
            setTimeout(() => {
                setSubsEmail('')
            }, 300)
        } else {
            error('Please enter a valid email address')
        }
    }

    useEffect(() => {
        if (selectFormData && selectFormData?.message !== '') {
            success(selectFormData?.message)
            setTimeout(() => {
                clearForm()
            }, 400)
        }
    }, [selectFormData])

    useEffect(() => {
        if (selectFailedFormData) {
            error(selectFailedFormData)
            setTimeout(() => {
                clearForm()
            }, 400)
        }
    }, [selectFailedFormData])


    // api data
    const theData = data && data;
    const bannerImg = theData?.images?.list && theData?.images?.list[0];

    return (
        <StyledSubscribe className='subscribe pt-160 pb-160'>
            {/*{loading && <Loading/>}*/}
            <Img src={'images/dynamic/mjlsubscribe.jpg'} alt={'Shanta Securities Limited'} layout={'fill'} objectFit={'cover'}/>
            <Container>
                <Row>
                    <Col sm={6}>
                        <h2 className={`fade-up`}>{reactHtmlParser('Get exciting\n' +
                            'promotions and\n' +
                            'the latest updates')}</h2>

                        <Form className={` fade-up`}
                              onSubmit={handleSubscribe}>
                            <Form.Group className="form-group" controlId="formBasicEmail">
                                <Form.Control value={subsEmail}
                                              onChange={e => handleEmail(e.target.value)}
                                              name='email' type="email" placeholder="Email*"/>
                                <div className="dc-btn-submit">
                                    <ButtonSubmit width={'100'} text={'Subscribe'} color={'#FFF'}
                                                  hoverBg={'#221F1F'}
                                                  background={'#ED1B34'}/>
                                </div>
                            </Form.Group>

                        </Form>
                        {/*    }*/}
                        {/*</VisibilitySensor>*/}
                    </Col>
                </Row>
            </Container>
        </StyledSubscribe>
    );
};

const StyledSubscribe = styled.section`
  position: relative;

  h2 {
    color: #ffffff;
    font-size: 60px;
    font-weight: 400;
    line-height: 60px;
    margin: 0 0 54px 0;
  }

  .form-group {
    position: relative;

    .form-control {
      height: 35px;
      //padding-left: 40px;
      background-color: #E1E4E6;
      border-radius: 40px;
      font-size: 12px;
      padding-left: 30px;

      ::placeholder {
        color: rgba(34, 31, 31, 0.30);
        font-size: 12px;
        line-height: 18px;
      }
    }

    .dc-btn-submit {
      position: absolute;
      top: 0;
      right: 0;
      .dc-btn{
       height: 35px; 
      }
      a{
        display: flex;
        height: 100%;
        width: 100%;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 600;
        margin: 0px;
        line-height: 18px;
        color: rgb(255, 255, 255);
        text-transform: capitalize;
        border: none;
        background-color: rgb(237, 27, 52);
        letter-spacing: 0px;
        position: relative;
        border-radius: 19px;
        overflow: hidden;
      }
    }
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 40px;
      line-height: 40px;
    }
  }


`;


export default React.memo(Subscribe);
