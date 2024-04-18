import React,{memo} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {hover, text} from "../../styles/globalStyleVars";
import {Img} from "../Img";
import reactHtmlParser from "react-html-parser";
import title from "../Title";

const MyComponent = ({data}) => {
    const section_data = data?.section_data
    const section_image = data?.images


    return (
        <StyledComponent className={'who-is pt-200 pb-200'}>
            {
                section_image?.list?.[0]?.full_path &&
                <Img alt={'Shanta Securities Limited'} src={section_image?.list?.[0]?.full_path ? section_image?.list?.[0]?.full_path : 'images/dynamic/20849.jpg'}/>

            }
            <Container>
                <Row>
                    <Col sm={2}>
                        {
                            section_data?.title &&
                            <h3 data-lag="0.3"  className={'desktop  '}>{section_data?.title}</h3>

                        }
                        {
                            section_data?.short_desc &&
                            <h4 data-lag="0.8" className={'desktop '}>{section_data?.short_desc}</h4>

                        }
                        {
                            section_data?.title &&
                            <h3 className={'mobile'}>{section_data?.title}</h3>
                        }

                        {
                            section_data?.short_desc &&
                            <h4 className={'mobile'}>{section_data?.short_desc}</h4>

                        }
                    </Col>
                    <Col className={'side-content'} sm={10}>
                        {
                            section_data?.description &&
                            reactHtmlParser(section_data?.description)
                        }

                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: relative;
  background-color: ${text};
  min-height: 100vh;
  display: flex;
  align-items: center;
  //overflow: hidden;

  .col-sm-2 {
    position: relative;
  }

  h3 {
    font-size: 60px;
    line-height: 60px;
    color: #3C3C3B;
    white-space: nowrap;
    font-family: "Avenir Heavy";
    //transform: rotate(-90deg) translateY(-85%);

    @media(max-width: 767px){
      font-size: 35px;
      line-height: 45px;
    }
    &.desktop {
      transform: rotate(-90deg);
      position: absolute;
      top: 40%;
      left: -72%;
      @media (min-width: 1599px) {
        left: -44%;
      }
      @media (max-width: 991px) {
        left: -110%;
      }
      @media (max-width: 800px) {
        left: -140%;
      }
    }


  }
  h4 {
    font-size: 60px;
    line-height: 60px;
    color: #3C3C3B;
    white-space: nowrap;
    font-family: "Avenir Heavy";
    //transform: rotate(-90deg) translateY(-85%);
    @media(max-width: 767px){
      font-size: 35px;
      line-height: 45px;
    }
    &.desktop {
      transform: rotate(-90deg);
      position: absolute;
      top: 60%;
      left: -36%;
      @media (min-width: 1599px) {
        left: -25%;
      }
      @media (max-width: 991px) {
        left: -68%;
      }
      @media (max-width: 800px) {
        left: -92%;
      }
    }


  }

 

  
  .side-content{
    h4{
      font-family: ${title};
      font-size: 24px;
      font-weight: 500;
      line-height: 36px;
      color: #3C3C3B;
      margin-bottom: 35px;
      white-space: normal;
    }

    p {
      font-size: 16px;
      line-height: 24px;
      color: #3C3C3B;
      font-weight: 500;

      &:not(:nth-last-child(1)) {
        margin-bottom: 30px;
      }
    }
  }

  @media (min-width: 768px) {
    .mobile {
      display: none;
    }
  }
  @media(max-width: 992px){
    
  }
  
  
  @media (max-width: 767px) {
    
    .col-sm-2, .col-sm-10 {
      min-width: 100%;
    }

    h4{
      &.mobile{
        margin-bottom: 40px;

      }
    }
   
    h3 {
      transform: none;
      margin-bottom: 0px;
      white-space: break-spaces;
    }

    .desktop {
      display: none;
    }
    
  

    p {
      font-size: 28px;
      line-height: 32px;
    }
  }

`;

export default React.memo(MyComponent);
