import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {Img} from "../Img";
import Title from "../Title";
import reactHtmlParser from "react-html-parser";
import Button from "../ButtonOpenNow";


const Investors = ({offset, data,id}) => {
    const section_data = data?.section_data
    const section_image = data?.images



    return (
        <StyledSecurity offset={offset} id={id ? id : ''} className='security-seal pt-100 pb-100'>
            <Container fluid className={'pl-0'}>
                <Row>
                    <Col sm={5} className='security-seal__img '>
                        {
                            section_image?.list?.[0]?.full_path &&
                            <div className="security-seal__img__inner reveal">

                                <Img layout={'responsive'} src={section_image?.list?.[0]?.full_path} alt={'Shanta Securities Limited'}/>

                            </div>
                        }

                    </Col>

                    <Col sm={{span: 7}} className='security-seal__text'>


                        {
                            section_data?.subtitle &&
                            <Title margin={'0 0 40px'} text={section_data?.subtitle}
                                   fontSize={'44'} fontWeight={'400'} lineHeight={'56'}/>
                        }


                        {
                            section_data?.description &&
                            reactHtmlParser(section_data?.description)
                        }

                        <Button
                            src={'/investment-calculator'}
                            text={"Investment Calculator"}
                            margin={"30px 0 0 0"}
                            background={"transparent"}
                            color={'#3C3C3B'}
                            hoverColor={'#3C3C3B'}
                            icon
                        />
                        {/*<Button text={'Investment Calculator'} color={'#3C3C3B'} borderColor={'#3C3C3B'} hoverColor={'#3C3C3B'} src={'/investment-calculator'} />*/}
                    </Col>
                </Row>
            </Container>
            {/*<PopupV1 show={show} handleClose={handleClose}/>*/}

        </StyledSecurity>
    );
};

const StyledSecurity = styled.section`
  background-color: #F2F2F2;
  padding: 280px 0;
  .container-fluid{
    padding-right: ${props => props.offset ? props.offset : '90'}px;
  }
  .security-seal__img {
    //width: 100%;
    &__inner {
      padding-top: calc(420 / 528 * 100%);
      position: relative;
      width: 100%;

    }
  }

  .security-seal__text {
    padding-left: 55px;

    p {
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
      color: #3C3C3B;
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
    padding: 180px 0 120px !important;

    .dc-btn {
      margin-top: 30px;
    }
  }

  .popup-click{
    position: relative;
    //border-radius: 25px;
    overflow: hidden;
    &:before{
      //content: '';
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 9;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

`;
export default Investors;
