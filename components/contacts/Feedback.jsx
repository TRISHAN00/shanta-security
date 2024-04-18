import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import React, {useState,memo} from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Title from "../Title";
import Button from "../Button";
import {hover} from "../../styles/globalStyleVars";
import reactHtmlParser from "react-html-parser";
import FeedbackForm from "./FeedbackForm";

const Feedback = ({offset,data}) => {

    let section_data = data?.section_data

    const [popupId, setPopupId] = useState()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true)
        setPopupId(e)
    }


    return (
        <StyledBlog id={'feedback'} offset={offset} className='blog-slider pt-200 pb-200 box-slider '>
            <FeedbackForm show={show} handleClose={handleClose}/>
           <div className="box box_wrapper">
               <Container fluid>
                   <Row>
                       <Col md={4}>
                           <div className="title-wrp">
                               {
                                   section_data?.title &&
                                   <Title color={'white'} margin={'0 0 40px 0'}
                                          text={section_data?.title}/>


                               }

                           </div>
                       </Col>
                       <Col md={{span: 6, offset: 1}}>
                           {
                               section_data?.description &&
                               reactHtmlParser(section_data?.description)
                           }


                           <div onClick={() => handleShow()}>

                               <Button border={'1px solid'} borderColor={'#FFFFFF'} margin={'40px 0 0'} background={'#978C21'}
                                       color={'#FFFFFF'} hoverBackground={'#3C3C3B'} text={'Feedback Form'}/>
                           </div>




                       </Col>
                   </Row>
               </Container>
           </div>
        </StyledBlog>
    );
};

const StyledBlog = styled.section`
  position: relative;
  &:after{
    content: '';
    background: #F2F2F2;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50%;
    z-index: -1;
    //width: calc(100% + ${props => props.offset}px);
  }
  .box_wrapper{
    background: #978C21;

    padding-top: 120px;
    padding-bottom: 120px;
    margin-right: ${props => props.offset}px;
    @media(max-width: 767px){
      margin-right: 0 !important;
    }
  }
  
  .container-fluid{
    padding-left: ${props => props.offset}px;
  }
  p{
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    color: #FFFFFF;
  }
  
  .dc-btn{
    a{
      &:hover{
        border-color: rgb(60, 60, 59);
      }
    }
  }
  
  
  @media(max-width: 767px){
    margin-right: 0  !important;

    .container-fluid{
      padding-left: 15px !important;
    }
  }

`;
export default React.memo(Feedback);