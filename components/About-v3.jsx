import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {Img} from "../Img";
import Button from "../Button";
import {Link} from 'next/link';


const FingerTips = () => {
    return (
        <StyledFingerTips className='finger-tips pt-100  pb-100'>
            <Container>
                <Row>
                    <Col sm={7} className='finger-tips__text'>
                        <h2>Get <span>Lube Solution</span> at
                            your finger tips</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.</p>

                        <div className="finger-tips__text__bottom">
                            <Button src={'/'} text={'Learn More'}/>
                            <ul>
                                <li><Link href={'/'}><img src={'/images/static/playstore.svg'} alt="Shanta Securities Limited"/></Link></li>
                                <li><Link href={'/'}><img src={'/images/static/applestore.svg'} alt="Shanta Securities Limited"/></Link></li>
                            </ul>
                        </div>

                    </Col>

                    <Col sm={{span: 4, offset: 1}} className='finger-tips__img'>
                        <Img objectFit={'cover'} layout={'responsive'} alt={'Shanta Securities Limited'} src={'/images/dynamic/fingertips.jpg'}/>
                    </Col>
                </Row>
            </Container>
        </StyledFingerTips>
    );
};

const StyledFingerTips = styled.section`
  background-color: #F4F4F4;

  .finger-tips__text {
    h2 {
      font-size: 60px;
      line-height: 60px;
      margin-bottom: 54px;

      span {
        font-weight: bold;
      }
    }

    p {
      font-size: 16px;
      line-height: 22px;
      font-weight: 600;
      margin: 0;
    }

    &__bottom {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      ul {
        display: flex;

        li {
          &:nth-of-type(1) {
            margin-right: 30px;
          }

          a {
            display: flex;
            position: relative;
          }
        }
      }
    }
  }

  .finger-tips__img {
    position: relative;
  }

  @media (max-width: 991px) {
    .row {
      flex-direction: column-reverse;
    }

    .finger-tips__text {
      min-width: 100%;
      margin-top: 40px;
    }

    .finger-tips__img {
      min-width: 100%;
      margin: 0;
    }
  }

  @media (max-width: 767px) {
    .finger-tips__text h2 {
      font-size: 32px;
      line-height: 36px;
      margin-bottom: 40px;
    }
  }

  @media (max-width: 600px) {
    .finger-tips__text__bottom {
      margin-top: 20px;
      flex-wrap: wrap;
      flex-direction: column-reverse;
      align-items: flex-start;

      ul {
        min-width: 100%;
        margin-bottom: 40px;
        flex-wrap: wrap;

        li {
          min-width: 100%;


          &:nth-of-type(1) {
            margin-bottom: 20px;
            margin-right: 0;
          }

        }
      }
    }
  }

`;
export default React.memo(FingerTips);
