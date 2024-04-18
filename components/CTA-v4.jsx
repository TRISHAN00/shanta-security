import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {Img} from "../Img";
import Button from "../Button";

const SecuritySeal = () => {
    return (
        <StyledSecurity className='security-seal pt-100 pb-100'>
            <Container>
                <Row>
                    <Col sm={5} className='security-seal__img'>
                        <div className="security-seal__img__inner">
                            <Img layout={'responsive'}  src={'/images/dynamic/628510c79751d.jpg'} alt="Shanta Securities Limited"/>
                        </div>
                    </Col>

                    <Col sm={{span: 6, offset: 1}} className='security-seal__text'>
                        <h2>Reap that value of our <span>Security Seal</span></h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.</p>
                        <Button src={'/'} margin={'43px 0 0 0'} text={'Learn More'} width={'150'}/>
                    </Col>
                </Row>
            </Container>
        </StyledSecurity>
    );
};

const StyledSecurity = styled.section`
  background-color: #F4F4F4;

  .security-seal__img {
    &__inner {
      position: relative;
      height: 100%;
      img{
        object-fit: contain;
      }
    }
  }

  .security-seal__text {
    h2 {
      font-size: 60px;
      line-height: 60px;
      margin: 0 0 55px 0;

      span {
        font-weight: bold;

      }
    }

    p {
      font-size: 16px;
      line-height: 22px;
      font-weight: 600;
      text-align: justify;
    }
  }

  @media (max-width: 991px) {
    .security-seal__img {
      min-width: 100%;
    }

    .security-seal__text {
      min-width: 100%;
      margin-top: 40px;
      margin-left: 0;
    }
  }

  @media (max-width: 767px) {
    .security-seal__text {
      h2 {
        font-size: 32px;
        line-height: 36px;
        margin-bottom: 26px;
      }
    }

    .dc-btn {
      margin-top: 30px;
    }
  }


`;
export default React.memo(SecuritySeal);
