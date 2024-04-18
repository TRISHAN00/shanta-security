import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Circle = styled.svg`
  height: 124px;
  width: 124px;
`;

const BackgroundEllipse = styled.ellipse`
  fill: transparent;
  stroke: rgb(202, 157, 117);
  transition: all 200ms cubic-bezier(.25, .74, .22, .99);
`;

const ForegroundEllipse = styled.ellipse`
  fill: transparent;
  stroke-dasharray: 377;
  stroke-dashoffset: 377;
  stroke: white;
  transform-origin: 50% 50%;
  transform: rotate(-180deg);
  transition: all 800ms cubic-bezier(.25, .74, .22, .99);
`;

const Line = styled.line`
  stroke-width: 2;
  stroke: #1abc9c;
  transform-origin: 50% 50%;
  transition: all 500ms cubic-bezier(.25, .74, .22, .99);
`;

const Line2 = styled(Line)`
  transform: rotate(-90deg);
`;

const HoverableCircle = styled(Circle)`
  &:hover {
    cursor: pointer;
    
    ${BackgroundEllipse} {
      stroke: transparent;
    }
    
    ${ForegroundEllipse} {
      stroke-dashoffset: 0;
      transform: rotate(-90deg);
    }
    
    ${Line} {
      stroke: #EE3769;
      transform: rotate(180deg);
    }
    
    ${Line2} {
      transform: rotate(0);
    }
  }
`;


const HoverableCircleComponent = () => {
    return (
        <StyledComponent>
            <Container>
                <Row className={'svg'}>
                    <Col sm={5} className={'svg-position'}>
                        <button className={'svg__icon'} >
                          <span className={'svg__icon__svg'}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30" height="30">
                                <path d="M25 8.5L25 41.3 39.6 26.7c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-16 16c-.4.4-1 .4-1.4 0l-16-16c-.4-.4-.4-1 0-1.4s1-.4 1.4 0L25 41.3 25 8.5z" fill="white"/>
                            </svg>
                              </span>
                            <span className={'svg__icon__svgg'} >
                                <HoverableCircle xmlns="http://www.w3.org/2000/svg">
                                       <g>
                                  <BackgroundEllipse ry="60" rx="60" cy="62.5" cx="62.5" stroke-width="2" />
                                           <ForegroundEllipse ry="60" rx="60" cy="62.5" cx="62.5" stroke-width="2" />

                                     </g>
                                    </HoverableCircle>
                            </span>
                        </button>
                    </Col>
                    <Col sm={{ span: 5, offset: 1 }}>
                        <div className={'svg__text'}>
                            <p className={'splittext-two'}>
                                LUXURY FAMILY RESIDENCES
                                WITH A WELL-DEVELOPED
                                INFRASTRUCTURE <span> WITHIN A MINUTE </span>
                                OF VICTORY PARK</p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  padding: 200px 0px;
  background-color: #181d24;

  .svg {
    &__icon {
      position: absolute;
      background: unset;
      border: unset;
      &:hover {
        cursor: pointer;

        ${BackgroundEllipse} {
          stroke: transparent;
        }

        ${ForegroundEllipse} {
          stroke-dashoffset: 0;
          transform: rotate(-90deg);
        }

        ${Line} {
          stroke: #EE3769;
          transform: rotate(180deg);
        }

        ${Line2} {
          transform: rotate(0);
        }
      }
      
      
      &__svg{
       
        svg{
          position: absolute;
          left: 0;
          top: 35%;
          width: 100%;
          overflow: visible;
          cursor: pointer;
        }
      }
      &__svgg{
        svg{
          cursor: pointer;
        }
      }
    }

    &__text p {
      font-size: 28px;
      color: #ca9d75;
      line-height: 1.42857em;
      letter-spacing: .1em;

      span {
        color: white;
      }
    }
  }
  .svg-position{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  }
`;

export default HoverableCircleComponent;
