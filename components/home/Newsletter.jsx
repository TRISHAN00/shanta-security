import React, {useState, useEffect, memo} from 'react';
import styled from "styled-components";
import {Col, Container, Form, Row} from "react-bootstrap";
import ButtonSubmit from "./../Button";
import reactHtmlParser from "react-html-parser";
import {hover, title} from "../../styles/globalStyleVars";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
    import {toast} from "react-toastify";
import {TimelineLite,gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {Img} from "./ImgP";
import {ApiServices} from "../../pages/api/network/ApiServices";
const Subscribe = ({img,text,data, no}) => {


    const section_data = data?.section_data
    const section_image = data?.images



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


    const tl = new TimelineLite()

    const onSubmit = (e) => {

        let api_services = ApiServices.ADDSUBSCRIP;

        var formData = new FormData();
        formData.append('email', e?.email);

        if (e.email !== '' ) {
            dispatch(postForm([api_services, formData]));
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
        <StyledSubscribe  className={`subscribe  pt-160  pb-160 `} >
            {
                section_image?.list?.[0]?.full_path &&
                <div className="">
                    <Img src={section_image?.list?.[0]?.full_path}  alt={'Shanta Securities Limited'} layout={'fill'} objectFit={'cover'}/>

                </div>

            }

            <Container>
                <Row>
                    <Col sm={6} className={'box'}>



                        {
                            no ?


                                <h2 className={''}>

                                    {
                                        reactHtmlParser(section_data?.short_desc)

                                    }

                                </h2>
                                :


                                section_data?.short_desc &&
                                <h2 className={''}>

                                    {
                                        reactHtmlParser(section_data?.short_desc)

                                    }

                                </h2>
                        }



                        <Form className={``}>
                            <input name={'spam_protector'} type='hidden'/>
                            <Form.Group className="form-group" controlId="formBasicEmail">


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
                                               placeholder="Your Email Address*"/>
                                <div className="dc-btn-submit" onClick={handleSubmit(onSubmit,onError)}>
                                    <ButtonSubmit  width={'100'}  text={'Subscribe'} color={'#3C3C3B'}
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
  overflow: hidden;
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

  
  @media(max-width: 767px){
    .form-group .form-control{
      padding-left: 18px;
      color: rgb(255, 255, 255);
      padding-top: 10px;
    }
   
  }

`;


export default React.memo(Subscribe);
