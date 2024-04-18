import React, {useEffect, useRef, useState, memo} from 'react';
import styled from "styled-components";
import {Col, Container, Form, Row} from "react-bootstrap";
import Select from "react-select";
import Button from "../Button";
import {Img} from "../Img";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {ToastContainer} from "react-toastify";
import {emailValidation, emptyNumber, emptyValidation} from "../../api/config/validator";
import Title from "../Title";
import {hover} from "../../styles/globalStyleVars";
import {useForm} from "react-hook-form";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import {postForm} from "../../api/redux/career";
import {TimelineLite} from "gsap";
import {ApiServices} from "../../pages/api/network/ApiServices";


const MyComponent = ({data, popup}) => {



    const dispatch = useDispatch()
    const formData = useSelector(state => state.careerReducer)
    const [validPosition, setValidPosition] = useState(false)
    const [uploadText, setUploadText] = useState('Attach CV')

    const DropdownOption = [
        {value: 'Front-end Developer', label: 'Front-end Developer'},
        {value: 'WordPress Developer', label: 'WordPress Developer'},
        {value: 'DevOps Developer', label: 'DevOps Developer'},

    ];


    const responseData = useSelector(state => state.career);

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

        let api_services = ApiServices.SUBMITFORM;

        var formData = new FormData();
        formData.append('full_name', e?.full_name);
        formData.append('email', e?.email);
        formData.append('phone', e?.phone);
        formData.append('message', e?.message);
        formData.append('form_id', 'career-form');
        formData.append('cv', e?.cv?.[0]);
        document.querySelector('.gph_upload').classList.remove('hide')


        setUploadText('Attach CV')


        if (e.email !== '' && e.name !== '' && e.phone !== '') {
            dispatch(postForm([api_services, formData]));

            reset();

            // success('Successfully Submitted')
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
       else if (responseData && responseData?.success !== '') {
            success(responseData?.success?.message)
        }
        reset()

    }, [responseData])



    const handleDropdown = (e) => {
        // e.value;
        setValidPosition(e?.label)
    }


// handleUpload function
    function handleUpload(event) {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const fileName = selectedFile.name;
            setUploadText(fileName)
            document.querySelector('.gph_upload').classList.add('hide')

        }

    }

    return (
        <StyledComponent>
            <ToastContainer position="top-right" autoClose={4000} closeOnClick hideProgressBar={true}/>

                <div className="career_form  pb-200">
                    <Container>
                        <Row>
                            {
                                popup ?

                                    <Col md={{span: 5}} className="popup popup_data">
                                        <h3>Overview</h3>
                                        <p>One of the well established company is looking for a qualified, skilled, and knowledgeable Digital Marketing Executive to join their team. </p>
                                        <h3>Responsibilities</h3>
                                        <ul>
                                            <li>Have a good knowledge Digital Marketing Strategy</li>
                                            <li>Creative planning and execution of all the digital marketing campaigns, including good Graphics.</li>
                                            <li>Designing Knowledge & content writing.</li>
                                        </ul>

                                        <h3>Qualifications:</h3>
                                        <ul>
                                            <li>Proven experience as a Financial Analyst or similar role.</li>
                                            <li>Strong analytical and problem-solving skills, with attention to detail.</li>
                                            <li>Proficient in financial modeling, data analysis, and financial software.</li>
                                            <li>Excellent knowledge of financial and accounting principles.</li>
                                            <li>Ability to work effectively in a team and independently under tight deadlines.</li>
                                        </ul>
                                        <h3>Educational Requirements</h3>
                                        <ul>
                                            <li>Bachelor degree in any discipline.</li>
                                            <li>Training/Trade Course in Digital Marketing.</li>
                                        </ul>
                                    </Col>
                                    :

                                    <Col md={{span: 5}}>
                                        <div className="image_wrapper">
                                            {
                                                data?.images?.list?.[0]?.full_path &&
                                                <Img  alt={'Shanta Securities Limited'} src={data?.images?.list?.[0]?.full_path}/>

                                            }
                                        </div>
                                        {
                                            data?.section_data?.short_desc &&
                                            <Title margin={'40px 0 0 0'} text={data?.section_data?.short_desc}/>

                                        }

                                    </Col>
                            }


                            <Col md={{span:6,offset:1}} className="formContact">
                                <div className="form-wrapper-all">
                                    <Form  onSubmit={handleSubmit(onSubmit,onError)} method="post" enctype="multipart/form-data">
                                        <Row>
                                            <input name={'spam_protector'} type='hidden'/>
                                            <input name={'form_id'}  value={'career-form'} type='hidden'/>

                                            <Form.Group className="col-md-12 pb-30">

                                                <Form.Control className={formState?.errors?.name?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                              {...register("full_name",{
                                                                  required: 'Name is required',
                                                                  pattern: {
                                                                      message: 'Name must contain only letters',
                                                                  },

                                                              })}
                                                              type="text"
                                                              placeholder="First Name*"
                                                />
                                            </Form.Group>
                                            <Form.Group className="col-md-12 pb-30">
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
                                            <Form.Group className="col-md-12 pb-30">
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
                                            <div className="clear"></div>
                                            <Form.Group className="col-md-12 pb-30">
                                                <Select

                                                    placeholder={'Preferred Position *'}

                                                    styles={{
                                                        dropdownIndicator: (provided, state) => ({
                                                            ...provided,
                                                            transform: state.selectProps.menuIsOpen && "rotate(180deg)"
                                                        })
                                                    }}
                                                    onChange={handleDropdown}
                                                    classNamePrefix={'react-select'}
                                                    className={'form-select'}
                                                    options={DropdownOption}
                                                    theme={(theme) => ({
                                                        ...theme,
                                                        borderRadius: 0,
                                                        colors: {
                                                            ...theme.colors,
                                                            primary25: '#e9e9e9',
                                                            primary: 'black',
                                                        },
                                                    })}

                                                />


                                            </Form.Group>

                                            <Form.Group className="col-md-12 pb-30">
                                                <Form.Control className={formState?.errors?.email?.message ? 'has-error form-control-lg' : 'form-control-lg'}
                                                              {...register("message",{
                                                                  required:{
                                                                      // value:true,
                                                                      message:'please enter your Message'
                                                                  },

                                                              })}
                                                              type="text"
                                                              placeholder="Cover Letter"/>

                                            </Form.Group>
                                            <Form.Group className="col-xl-6 pb-30">


                                                <Form.Control
                                                    onInput={handleUpload}
                                                    className={'gph_upload'}
                                                    text={uploadText}
                                                    type="file"
                                                    accept=".pdf"
                                                    {...register('cv')}
                                                />
                                            </Form.Group>

                                            <Form.Group className="col-xl-6 widthHalf" onClick={handleSubmit(onSubmit,onError)}>
                                                <Button padding={'0'} hoverColor={'#3C3C3B'} hoverBackground={'#FFFFFF'} width={'auto'} text={'Submit Application'} classname={'col-md-6'}/>
                                            </Form.Group>

                                        </Row>
                                    </Form>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  background: #f2f2f2;

  .image_wrapper {
    position: relative;
    padding-top: calc(244 / 500 * 100%);
  }

  .form-wrapper-all {
    background: #3c3c3b;
    padding: 60px 70px;
    @media(max-width: 992px){
      padding: 60px 30px;
    }
    @media(max-width: 767px){
      padding: 60px 15px;
    }
  }

  .form-control {
    margin-bottom: 30px;
    background: transparent;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }

  .dc-btn {
    width: 100%;

    a {
      justify-content: center !important;
    }
  }

  .formContact {
    label {
      font-size: 12px;
      line-height: 18px;
      font-weight: 300;
    }

    input {
      &:not(.react-select__input input) {
        line-height: 20px;
        border-radius: 0;
        height: 44px;
        border-color: rgba(255, 255, 255, 0.5);
      }

      padding-left: 0;
      padding-right: 0;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: #FFFFFF;

      &::placeholder {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: rgba(255, 255, 255, 0.5);

      }
    }

    .react-select__menu{
      z-index: 9;
    }
    .react-select__control--menu-is-open{
      
    }

    .react-select__indicators{
      display: block;
      .react-select__indicator{
        padding-right: 0;
        padding-left: 0;
        color: white !important;
      }
    }
    .react-select__value-container{
      padding: 0;
      display: block;
    }
    .react-select__single-value {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: rgba(255, 255, 255, 1);
    }

    textarea {
      border-radius: 0;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: #FFFFFF;
      padding-left: 0;
      padding-right: 0;
      border-color: rgba(255, 255, 255, 0.5);

      &::placeholder {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: rgba(255, 255, 255, 0.5);
      }
    }

    .form-select {
      .react-select__indicator-separator{
        display: none;
      }
      .react-select__control {
        //height: 48px;
        border-color: rgba(255, 255, 255, 0.5);
        box-shadow: none;
        border-left: none;
        border-top: none;
        border-right: none; 
        background: transparent;
        height: 30px;
        margin-bottom: 40px;
      }

      .react-select__placeholder {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: rgba(255, 255, 255, 0.5);
      }
    }

    .dc-btn {
      a {
        justify-content: center;

        span {
          //margin-right: 15px;
        }

        svg {
          //margin-left: 15px;
        }
      }
    }
  }

  .max_size {
    font-size: 10px;
    font-weight: 300;
    line-height: 20px;
    color: rgba(34, 34, 34, 0.8);
    margin: 5px 0 0;
  }

  .gph_upload {
    position: relative;
    cursor: pointer;
    border: none !important;
    border-radius: 25px !important;
    overflow: hidden !important;

    &.hide{
      &:before{
        opacity: 0;
      }
    }
    
    &:after {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      content: attr(text);
      border: 1px #FFFFFF;
      border-radius: 25px;
      border-style: dashed;
      background: #3C3C3B;
      z-index: 1;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.7s all ease;
      padding-left: 20px;
    }
    
    &:before{
      content: '';
      background-image: url('images/static/attach.svg');
      width: 20px ;
      height: 20px;
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      z-index: 11;
      left: 25%;
      top: 10px;
    }
    @media(min-width: 1024px) and (max-width: 1280px) {
      &:after{
        padding-left: 20px;
      }
      &:before{
        left: 23% ;
      }
    }
    @media(min-width: 1536px){
      &:before{
        left: 30%;
      }
    }

    &:hover {
      &:after { 
        border: 1px ${hover};
        border-radius: 25px;
        background: ${hover};
      }
    }
  }

  .has-error {
    border-color: #EE1B24 !important;
  }

  @media (min-width: 1550px) {
    .widthHalf {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
`;

export default React.memo(MyComponent);