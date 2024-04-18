import styled from "styled-components";
import {Accordion, Col, Container, Row} from "react-bootstrap";
import {BsChevronDown} from "react-icons/bs";
import React from "react";
import Title from "../Title";
import {title} from "../../styles/globalStyleVars";
import reactHtmlParser from "react-html-parser";
import {hover} from "../../styles/globalStyleVars"
const Faq = ({data}) => {

    let section_data = data?.section_data?.subtitle ? data?.section_data?.subtitle : 'Frequently </br> Asked </br> Questions';
    let section_post = data?.posts?.list



    return (
        <StyledFaq id={'faq'} className="job-lists pt-160 ">

            <Container>


                <Row>
                    <Col sm={4} className='job-lists__sidebar'>

                        {
                            section_data &&
                            <Title noanim margin={'0 0 40px 0'} text={section_data}/>

                        }

                    </Col>

                    <Col sm={8} className='job-lists__content'>


                        {
                            section_post && section_post?.length > 0 &&

                            <Accordion defaultActiveKey="0">

                                {
                                    section_post?.map((e,index) => {
                                        return(
                                            <Accordion.Item eventKey={String(index)}>
                                                <Accordion.Header>
                                                    {
                                                        e?.data?.title &&
                                                        reactHtmlParser(e?.data?.title)
                                                    }
                                                    <span><BsChevronDown/></span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p>
                                                        {
                                                            e?.data?.description &&
                                                            reactHtmlParser(e?.data?.description)
                                                        }
                                                    </p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                        )
                                    })
                                }


                            </Accordion>



                        }
                    </Col>

                </Row>


            </Container>

        </StyledFaq>
    );
};
const StyledFaq = styled.section`
  .job-lists__sidebar {

    &__mobile-dropdown {
      @media (min-width: 551px) {
        display: none;
      }
    }

    p {
      font-size: 32px;
      line-height: 36px;
      font-weight: 600;
      width: 80%;
    }

    ul {
      @media (max-width: 550px) {
        display: none;
      }

      li {
        margin-bottom: 10px;

        a {
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
          position: relative;

          &:after {
            content: '';
            position: absolute;
            border-radius: 50%;
            top: 0;
            bottom: 0;
            right: -15px;
            margin: auto;
            height: 10px;
            width: 10px;
            background-color: red;
            display: none;
          }
        }

        &.active {
          a {
            color: red;

            &:after {
              display: block;
            }
          }
        }
      }
    }
  }

  .accordion-item {
    margin-bottom: 20px;
  }

  .accordion-header {
    position: relative;
    margin: 0px;
    font-size: unset;
    line-height: unset;

    button {
      border: none;
      background-color: transparent;
      padding-left: 0;
      color: #3C3C3B;
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
      padding-bottom: 15px;
      border-bottom: 1px solid #3C3C3B;
      width: 100%;
      font-family: ${title};
      text-align: left;
      //margin-bottom: 50px;
      transition: all .4s ease;

      &.collapsed {
        color: #3C3C3B;
        border-color: #3C3C3B;

        span {
          background-color: #3C3C3B;

          svg {
            transform: rotate(0deg);
          }

          &:after {
            background-color: #3C3C3B !important;
          }
        }
      }
    }

    span {
      position: absolute;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      color: #ffffff;
      background-color: #978C21;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: 16px;

      &:after {
        height: 0;
        width: 0;
        background-color: #978C21;
        border-radius: 50%;
        opacity: 0;
        transition: all .4s ease;
        content: '';
        position: absolute;
        //transform: translateY(150%);
      }

      svg {
        font-size: 13px;
        z-index: 2;
        transform: rotate(180deg);
      }

    }

    &:hover {
      span {
        &:after {
          height: 100%;
          width: 100%;
          opacity: 1;
          //transform: translateY(150%);

        }
      }

      button {
        color: #978C21;
        border-color: #978C21;
      }
    }
  }

  .accordion-body {
    padding-bottom: 20px;
    padding-top: 40px;

    p {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: #3C3C3B;
    }
    h6{
      font-size: 20px;
      margin-bottom: 10px;
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


  .css-yk16xz-control, .css-1pahdxg-control {
    border-radius: 18px !important;
    border-color: #989898;
    height: 40px;
    background-color: red;
    cursor: pointer;
    padding-left: 15px;
  }

  .css-yk16xz-control .css-1wa3eu0-placeholder, .css-1pahdxg-control .css-1wa3eu0-placeholder, .css-1uccc91-singleValue {
    color: #ffffff !important;
    font-size: 12px !important;
    font-weight: bold;
    cursor: pointer;
  }

  .css-yk16xz-control .css-tlfecz-indicatorContainer, .css-1pahdxg-control .css-tlfecz-indicatorContainer, .css-yk16xz-control .css-1gtu0rj-indicatorContainer, .css-1pahdxg-control .css-1gtu0rj-indicatorContainer {
    margin-right: 20px;
    margin-top: 2px;
  }


  @media (max-width: 767px) {
    .job-lists__sidebar {
      margin-bottom: 50px;

      p {
        width: 100%;
      }
    }
  }

`;
export default React.memo(Faq);
