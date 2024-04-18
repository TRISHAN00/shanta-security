import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Modal from "react-bootstrap/Modal";
import {Col, Container, Form, Row} from "react-bootstrap";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Title from "./../Title";
import Select from "react-select";
import Button from "./../Button";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import {postForm} from "../../api/redux/contact";
import {ApiServices} from "../../pages/api/network/ApiServices";

const PopupFeedback = ({
                     show,
                     handleClose,
                     no_img,
                     item,
                     title,
                     description,
                     data,
                     subtitle,
                     img
                 }) => {

    const popupData = data;
    const [winWidth, setWinWidth] = useState(true)
    useEffect(() => {
        if (window.innerWidth > 767) {
            setWinWidth(true)
        } else {
            setWinWidth(false)
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth > 767) {
                setWinWidth(true)
            } else {
                setWinWidth(false)
            }
        });
    }, [])


    const dispatch = useDispatch();
    const responseData = useSelector(state => state.contact);

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
        formData.append('form_id', 'feedback-form');

        if (e.email !== '' && e.name !== '' && e.phone !== '') {
            dispatch(postForm([api_services, formData]));
            success('Successfully Submitted')
            reset();
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
            error(responseData?.error)
        }
        if (responseData && responseData?.success !== '') {
            // success(responseData?.success)
        }

    }, [responseData])




    return (

        <StyledModal>
            <Modal
                show={show}
                item={item}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="gph_modal feedback-form popup-version-one investor_popup"
            >
                <div className="svg-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="571.129" height="586.531" viewBox="0 0 571.129 586.531">
                        <g id="Group_20019" data-name="Group 20019" transform="translate(-22052.482 -818.356)">
                            <path id="Path_752" data-name="Path 752" d="M507.5,468.211c-5.828-126.016,127.953-132.028,157.024-42C711.054,804.314,286.5,894.324,170.165,720.289c69.809,90.026,436.179,36.022,337.339-252.078Z" transform="translate(21954.959 598.882)" fill="none" stroke="#978c21" stroke-width="1" fillRule="evenodd"/>
                            <path id="Path_753" data-name="Path 753" d="M500.887,511.3C617.214,529.3,634.635,391.27,547.413,355.256,186.84,283.242,70.528,715.354,233.357,847.391,151.963,769.38,227.569,397.276,500.887,511.3Z" transform="translate(21891.775 471.781)" fill="none" stroke="#978c21" stroke-width="1" fillRule="evenodd"/>
                        </g>
                    </svg>

                </div>
                <SimpleBar className="main_scroll" style={{height: '100vh'}}>
                    <Modal.Body>
                        <Container>
                            <Row className={'for-close'}>
                                <div onClick={handleClose} className="modal-close ">

                                    <svg id="Button_-_Close" data-name="Button - Close"
                                         xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
                                        <g id="Ellipse_18" data-name="Ellipse 18" fill="none" stroke="#3c3c3b"
                                           stroke-width="1" opacity="0.3">
                                            <circle cx="22" cy="22" r="22" stroke="none"/>
                                            <circle cx="22" cy="22" r="21.5" fill="none"/>
                                        </g>
                                        <g id="Ellipse_19" data-name="Ellipse 19" fill="none" stroke="#3c3c3b"
                                           stroke-width="1" strokeDasharray="0 142" opacity={'0'}>
                                            <circle cx="22" cy="22" r="22" stroke="none"/>
                                            <circle cx="22" cy="22" r="21.5" fill="none"/>
                                        </g>
                                        <g id="Group_18979" data-name="Group 18979" transform="translate(-3149 -104.5)">
                                            <line id="Line_4" data-name="Line 4" x2="8" y2="8"
                                                  transform="translate(3167 122.5)" fill="none" stroke="#3c3c3b"
                                                  strokeLinecap="round" stroke-width="1"/>
                                            <line id="Line_3877" data-name="Line 3877" x1="8" y2="8"
                                                  transform="translate(3167 122.5)" fill="none" stroke="#3c3c3b"
                                                  strokeLinecap="round" stroke-width="1"/>
                                        </g>
                                    </svg>

                                </div>

                            </Row>
                        </Container>
                        <Container>
                            <Row>


                                <div className="modal-data d-flex">

                                    <Col sm={{span: 12}} className='modal-data__content'>


                                        <div className="scroll-div">
                                            {window.innerWidth > 767 ?
                                                <SimpleBar autoHide={true} style={{maxHeight: 'calc(100vh - 100px)'}}>

                                                    <Row>
                                                        <Col md={5}>

                                                        </Col>
                                                        <Col className={'form'} md={{span:5}}>

                                                            <div className="form-wrapper-all">
                                                                <Form className={'form'}  onSubmit={handleSubmit(onSubmit,onError)}>

                                                                    <input name={'spam_protector'} type='hidden'/>
                                                                    <input name={'form_id'}  value={'feedback-form'} type='hidden'/>
                                                                    <div className="form-group">
                                                                        <Form.Group controlId="formBasicEmail">

                                                                            <Form.Control className={formState?.errors?.name?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                                                          {...register("name",{
                                                                                              required: 'Name is required',
                                                                                              pattern: {
                                                                                                  message: 'Name must contain only letters',
                                                                                              },

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
                                                                                          placeholder="Your Feedback"/>

                                                                        </Form.Group>
                                                                    </div>
                                                                    <div className={`'form-group width-fit'}`} >
                                                                        <div onClick={handleSubmit(onSubmit,onError)}>

                                                                            <Button hoverColor={'#3C3C3B'} hoverBackground={'#978C21'} color={'#fff'}  text={'Submit Application'} />
                                                                        </div>

                                                                    </div>
                                                                </Form>
                                                            </div>
                                                        </Col>


                                                    </Row>
                                                </SimpleBar>
                                                :
                                                <>
                                                    <Row>
                                                        <Col className={'form'} md={{span:5}}>

                                                            <div className="form-wrapper-all">

                                                                <Form className={'form'}  onSubmit={handleSubmit(onSubmit,onError)}>

                                                                    <input name={'spam_protector'} type='hidden'/>
                                                                    <input name={'form_id'}  value={'feedback-form'} type='hidden'/>
                                                                    <div className="form-group">
                                                                        <Form.Group controlId="formBasicEmail">

                                                                            <Form.Control className={formState?.errors?.name?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                                                          {...register("name",{
                                                                                              required: 'Name is required',
                                                                                              pattern: {
                                                                                                  value: /([A-Za-z]w{1,3})/,
                                                                                                  message: 'Name must contain only letters',
                                                                                              },

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
                                                                                          placeholder="Your Feedback"/>
                                                                        </Form.Group>
                                                                    </div>

                                                                    <div className={`'form-group width-fit'}`} >
                                                                        <div onClick={handleSubmit(onSubmit,onError)}>

                                                                            <Button hoverColor={'#3C3C3B'} hoverBackground={'#978C21'} color={'#fff'}  text={'Submit Email'} />
                                                                        </div>

                                                                    </div>

                                                                </Form>
                                                            </div>
                                                        </Col>

                                                    </Row>
                                                </>
                                            }

                                        </div>


                                    </Col>


                                </div>
                            </Row>
                        </Container>
                    </Modal.Body>
                </SimpleBar>
            </Modal>
        </StyledModal>

    )
};


const StyledModal = styled.div`

 
  
  .modal-dialog {
    margin: 0;
  }

  h4 {
    letter-spacing: 1.5px;
  }

`;


export default React.memo(PopupFeedback);
