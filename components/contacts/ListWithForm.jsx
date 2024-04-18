import React, {useState, useEffect,useRef, memo} from 'react';
import styled from 'styled-components';
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "../Button";
import {toast} from "react-toastify";
import {Img} from "../Img";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {ApiServices} from "../../pages/api/network/ApiServices";
import {postForm} from "../../pages/api/redux/contact";

const ListWithForm = ({padding,data,id}) => {
    const dispatch = useDispatch();
    const responseData = useSelector(state => state.home);

    const {register, handleSubmit ,formState,reset} = useForm({mode: 'all'});

    //--- form submit
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

    const handleBlur = () => {
        // Perform onBlur logic here
    };

    const handleChange = () => {
        // Perform onChange logic here
    };



    const onSubmit = (e) => {

        let api_services = ApiServices.SUBMITFORM;

        var formData = new FormData();
        formData.append('name', e?.name);
        formData.append('email', e?.email);
        formData.append('phone', e?.phone);
        formData.append('message', e?.message);
        formData.append('form_id', 'contact-form');

        if (e.email !== '' && e.name !== '' && e.phone !== '') {
            dispatch(postForm([api_services, formData]));
            // success('Successfully Submitted')
            // reset();
        }
    };
    let count=0;
    const onError = (errors) => {
        Object.values(errors).forEach((error) => {
            count++;
        });
        if(count>0){
            toast.error('please fill out the correct inputs');
        }
        count=0;
    };
    useEffect(() => {
        if (responseData && responseData?.error !== '') {
            error(responseData?.error?.message)
        }
        if (responseData && responseData?.success !== '') {
            success(responseData?.success)

        }
        reset();

    }, [responseData])

    return (
        <StyledListWithForm id={`${id ? id : 'ListWithForm'}`} className={`list_with_form ${padding ? padding : 'pt-200 '} `}>
            <Container>
                <Row>
                  <Col md={6} className={'left-col'}>
                      {
                          data?.images?.list && data?.images?.list?.length > 0 &&
                          data?.images?.list?.map((e,index) => {
                              if(e?.thumb === 'on') {
                                  return (
                                      <div className="image-wrapper">
                                          <Img alt={'Shanta Securities Limited'} src={e?.full_path}/>
                                      </div>
                                  )
                              }
                          })
                      }

                  </Col>
                    <Col md={{span:6}}>
                        <div className="form_wrapper">

                            <Form className={'form'}  onSubmit={handleSubmit(onSubmit,onError)}>

                                <input name={'spam_protector'} type='hidden'/>
                                <input name={'form_id'}  value={'contact-form'} type='hidden'/>
                                <div className="form-group">
                                    <Form.Group controlId="formBasicEmail">

                                        <Form.Control className={formState?.errors?.name?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                      {...register("name",{
                                                          required: 'Name is required',

                                                      })}
                                                      type="text"
                                                      placeholder="Name*"
                                        />
                                    </Form.Group>
                                </div>
                                <div className="form-group">
                                    <Form.Group controlId="formBasicEmail">

                                        <Form.Control  className={formState?.errors?.email?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                       {...register("email",{
                                                           required:{
                                                               value:true,
                                                               message:'please enter your email'
                                                           },
                                                           pattern:{
                                                               value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                               message:'please enter a valid email address'
                                                           }
                                                       })}
                                                       type="email"
                                                       placeholder="Email*"/>
                                    </Form.Group>
                                </div>
                                <div className="form-group">
                                    <Form.Group controlId="formBasicPhone">

                                        <Form.Control className={formState?.errors?.phone?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                      {...register("phone",{
                                                          required:{
                                                              value:true,
                                                              message:'please enter your phone first'
                                                          },
                                                          pattern:{
                                                              value:/^01[0-9]{9}$/,
                                                              message:'please enter a valid 11 digit phone number'
                                                          }
                                                      })}
                                                      type="number"
                                                      placeholder="Phone Number*"/>
                                    </Form.Group>
                                </div>
                                <div className="form-group">
                                    <Form.Group controlId="formBasicPhone">

                                        <Form.Control className={formState?.errors?.email?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                      {...register("message",{
                                                          required:{
                                                              // value:true,
                                                              message:'please enter your Message'
                                                          },

                                                      })}
                                                      type="text"
                                                      placeholder="Message (Optional)"/>
                                    </Form.Group>
                                </div>

                                <div className={`'form-group width-fit'}`} >
                                    <div onClick={handleSubmit(onSubmit,onError)}>

                                        <Button hoverColor={'#3C3C3B'} hoverBackground={'#978C21'} color={'#fff'}  text={'Send Message'} />
                                    </div>

                                </div>

                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledListWithForm>
    )
};

const StyledListWithForm = styled.div`
  background: #FFFFFF;

  .left-col {
    padding-right: 55px;
  }

  .image-wrapper {
    position: relative;
    padding-top: calc(469 / 530 * 100%);
    height: 100%;
  }

  .form_wrapper {
    background: #3C3C3B;
    padding: 60px;
    height: 100%;
    @media(min-width: 1550px){
      
    }
    @media (max-width: 992px) and (min-width: 768px) {
      padding: 30px;
    }
 
    form{
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
    }

    .title {
      font-size: 24px;
      font-weight: 4000;
      line-height: 28px;
      color: #F9F9F9;
      margin: 0 0 40px;
    }

    .form-group {
      margin-bottom: 25px;

      &:last-child {
        margin-bottom: 0;
      }

      .form-control {
        box-shadow: none;
        outline: 0;
        border-radius: 0;
        background: transparent;
        height: auto;
        border-left: none;
        border-right: none;
        border-top: none;
        border-color: rgba(255, 255, 255, 0.5);
        padding: 0 0 8px;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;

        &::placeholder {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
      }
    }

    .dc-btn {
  
 

      a {
    
        &:before{
          background: #fff;
        }
        span {
          color: #FFFFFF;
        }
        &:hover{
          span{
            color: #3C3C3B;
          }
        }
      }
    }

    .filter__placeholder {
      color: #C4C4C4;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }

    .filter__control {
      height: 30px !important;
      padding: 0 !important;
      background: transparent !important;
      border-left: none !important;
      border-right: none !important;
      border-top: none !important;
      border-color: rgba(246, 246, 247, 0.2) !important;

      .filter__single-value {
        color: #C4C4C4 !important;
        font-size: 14px !important;
        font-weight: 400 !important;
        line-height: 20px !important;
      }

      .filter__indicator-separator {
        display: none;
      }

      .filter__value-container {
        padding: 0;
      }

      .filter__dropdown-indicator, .filter__input-container, .filter__placeholder {
        margin: 0;
      }
    }
  }
  
  
  @media(max-width: 767px){
    padding-top: 0;
    padding-bottom: 0;
    .form_wrapper{
      padding: 60px 15px;
      margin-top: 0px;
    }
    .left-col {
      padding-right: 0px;
    }
    .container{
      padding: 0;
    }
  }
`;

export default React.memo(ListWithForm);
