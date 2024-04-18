import React from 'react';
import reactHtmlParser from "react-html-parser";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {hover} from "../../styles/globalStyleVars";

const HrPhilosophy = ({data}) => {

    const section_data = data?.section_data


    return (
        <StyledHr className='hr-philosophy '>
            <Container>
                <Row className='hr-philosophy__title'>
                    <Col>
                        {
                            section_data?.short_desc &&
                            <h4 className={` fade-up`}>{reactHtmlParser(section_data?.short_desc)}</h4>

                        }

                    </Col>
                </Row>
                <Row className={` fade-up hr-philosophy__content`}>
                    {
                        section_data?.description &&
                        reactHtmlParser(section_data?.description)

                    }

                </Row>
            </Container>
        </StyledHr>
    );
};

const StyledHr = styled.section`
  padding-top: 80px;
  padding-bottom: 200px;
  .hr-philosophy__title {
    margin-bottom: 75px;

    h4 {
      font-family: 'Avenir';
      font-size: 32px;
      line-height: 44px;
      color:  #3C3C3B;
      font-weight: 500 !important;

    }
  }

  .hr-philosophy__content {
    h4 {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
      color: #3C3C3B;
      font-family: 'Avenir';
      margin-bottom: 20px;

    }

    p {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 20px;
      span{
        color: ${hover};
      }

      &:nth-last-child(1) {
        margin-bottom: 0;
      }
    }
  }


  @media (max-width: 767px) {
    padding-top: 120px;
    padding-bottom: 120px;
    .col-md-6{
      margin-bottom: 40px;
      &:last-child{
        margin-bottom: 0;
      }
    }
    .hr-philosophy__title {
      margin-bottom: 40px;
      h4{
        font-size: 28px;
        line-height: 36px;
        font-weight: 500;
      }
    }

    .hr-philosophy__content {
      .col-sm-6 {
        min-width: 100%;

        &:nth-of-type(1) {
          margin-bottom: 40px;
        }
      }
    }
  }
`;
export default React.memo(HrPhilosophy);
