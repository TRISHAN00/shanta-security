import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {Img} from "./ImgP";
import reactHtmlParser from "react-html-parser";
import {hover} from './../styles/globalStyleVars'

const SecuritySeal = ({reverse,data}) => {
    return (
        <StyledSecurity id={data?.data?.slug} className='security-seal'>
            <Container fluid className={` ${reverse ? 'reverse pr-0' : 'pl-0'}`}>
                {
                    reverse ?
                        <Row className={'reverse-row'}>
                            <Col sm={{span: 7}} className='security-seal__text'>

                                <div className="heading">
                                    {
                                        data?.images && data?.images?.length > 0 &&
                                        data?.images?.map((e,index) => {
                                            if(e?.thumb === 'on'){
                                                return(
                                                    <div  className="icon">
                                                        <img src={e?.full_path} alt={'Shanta Securities Limited'}/>
                                                    </div>
                                                )
                                            }
                                        })
                                    }

                                    {
                                        data?.data?.title &&
                                        <h4>{data?.data?.title}</h4>

                                    }
                                </div>

                                <div >
                                    {
                                        data?.data?.description &&
                                        reactHtmlParser(data?.data?.description)

                                    }
                                </div>



                            </Col>
                            <Col sm={5} className='security-seal__img'>
                                <div className="security-seal__img__inner">
                                    {
                                        data?.images && data?.images?.length > 0 &&
                                        data?.images?.map((e,index) => {
                                            if(e?.banner === 'on'){
                                                return(
                                                    <Img layout={'responsive'} src={e?.full_path} alt={'Shanta Securities Limited'}/>


                                                )
                                            }
                                        })
                                    }
                                </div>
                            </Col>


                        </Row>


                        :

                        <Row>

                            <Col sm={5} className='security-seal__img'>
                                <div className="security-seal__img__inner">
                                    {
                                        data?.images && data?.images?.length > 0 &&
                                        data?.images?.map((e,index) => {
                                            if(e?.banner === 'on'){
                                                return(
                                                    <Img layout={'responsive'} src={e?.full_path} alt={'Shanta Securities Limited'}/>


                                                )
                                            }
                                        })
                                    }
                                </div>
                            </Col>

                            <Col sm={{span: 7}} className='security-seal__text'>

                                <div className="heading">
                                    {
                                        data?.images && data?.images?.length > 0 &&
                                        data?.images?.map((e,index) => {
                                            if(e?.thumb === 'on'){
                                                return(
                                                    <div className="icon">
                                                        <img alt={'Shanta Securities Limited'} src={e?.full_path} alt=""/>
                                                    </div>
                                                )
                                            }
                                        })
                                    }

                                    {
                                        data?.data?.title &&
                                        <h4>{data?.data?.title}</h4>

                                    }
                                </div>

                                {
                                    data?.data?.description &&
                                    reactHtmlParser(data?.data?.description)

                                }

                            </Col>
                        </Row>
                }

            </Container>
        </StyledSecurity>
    );
};

const StyledSecurity = styled.section`
  background-color: #FFFFFF;
  padding: 200px 0 0;
  &:last-child{
    padding-bottom: 0;
  }
  .container-fluid{
    padding-right: ${props => props.offset ? props.offset : '90'}px;
    &.reverse{
      padding-left: ${props => props.offset ? props.offset : '90'}px;

      .security-seal__text{
        padding-left: 0;
        padding-right: 70px;
      }
      
      @media(max-width: 992px){
        .reverse-row{
          flex-direction: column-reverse;
        }
      }
    }
  }
  .heading{
    display: flex;
    text-align: left;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 40px;
    .icon{
      img{
        width: 40px;
        height: 40px;
        margin-right: 20px;
        display: inline-block;
      }
    }
    h4{
      font-size: 32px;
      line-height: 44px;
      margin-bottom: 0;
    }
  }
  .security-seal__img {
    &__inner {
      padding-top: calc(600 / 530 * 100%);
      position: relative;
    }
  }

  .security-seal__text {
    padding-left: 55px;

    h3{
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
      color: #3C3C3B;
      margin-bottom: 40px;
    }
    p {
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
      color: #3C3C3B;
    }
    ul,ol{
      li{
        padding-left: 20px;
        position: relative;
        &:after{
          height: 10px;
          width: 10px;
          background:${hover};
          content: '';
          position: absolute;
          left: 0;
          top: 5px;
          border-radius: 50%;
        }
      }
    }
  }

  @media(min-width: 768px){
    .security-seal__text{
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
    }
  }
  @media (max-width: 991px) {
    .container-fluid{
      padding-right: 15px !important;
      padding-left: 15px !important;
    }
    .security-seal__img {
      min-width: 100%;
      padding: 0;
    }

   
    .security-seal__text {
      min-width: 100%;
      margin-top: 60px;
      margin-left: 0;
      padding-left: 15px !important;
      padding-right: 15px !important;
    }
  }

  @media (max-width: 767px) {
    padding: 0px 0 120px !important;

    .dc-btn {
      margin-top: 30px;
    }
  }


`;
export default React.memo(SecuritySeal);
