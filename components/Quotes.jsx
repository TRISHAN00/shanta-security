import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import 'swiper/css';
import "swiper/css/pagination";
import {hover} from "../styles/globalStyleVars";
import reactHtmlParser from "react-html-parser";

const MyComponent = ({background, data}) => {

    const section_data = data?.section_data
    const section_image = data?.images

    return (
        <StyledComponent background={background} className={'quotes pb-200 pt-200 as-image-text-slider'}>

            <Container>
                <Row>
                    <Col md={{span:9, offset: 1}}>
                        {
                            section_data?.description &&
                            reactHtmlParser(section_data?.description)
                        }
                        {
                            section_data?.subtitle &&
                            <p className={'author'}>{reactHtmlParser(section_data?.subtitle)}</p>
                        }

                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  overflow: hidden;
  background-color: ${p => p.background ? p.background : '#FFF'};
  
  h3{
    font-size: 60px;
    font-weight: 500 !important;
    line-height: 72px;
    color: #3C3C3B;
    span{
      // eslint-disable-next-line no-undef
      color: ${hover};
    }
  }
  
  .author{
    text-align: right;
    font-size: 20px;
    font-weight: 500;
    margin-top: 10px;
  }

`;

export default React.memo(MyComponent);