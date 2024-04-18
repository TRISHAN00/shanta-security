import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {Img} from "./Img";
import Button from "./ButtonNormal";
import {Link} from 'next/link';
import {hover, title} from "./../styles/globalStyleVars"
import Title from "./Title";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import reactHtmlParser from "react-html-parser";

const FingerTips = ({data,pading}) => {


    let section_data = data?.section_data
    let section_list = data?.posts?.list

    return (
        <StyledFingerTips className='finger-tips pt-200  pb-200'>
            <Container>
                <Row>
                    <Col md={12}>
                        {
                            section_data?.title &&
                            <Title margin={'0 0 70px 0'} text={section_data?.title}/>

                        }

                    </Col>

                </Row>
                <Row>
                    <div className="list">
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                        >
                            <Masonry >

                                {
                                    section_list && section_list?.length > 0 &&
                                    section_list?.map((e,index) => {
                                        return(
                                            <div className={'single-item'}>
                                                <div className="single-features">
                                                    {
                                                        e?.data?.title &&
                                                        <h3>{e?.data?.title}</h3>

                                                    }
                                                    {
                                                        e?.data?.description &&
                                                        <p>{reactHtmlParser(e?.data?.description)}</p>
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </Row>
            </Container>
        </StyledFingerTips>
    );
};

const StyledFingerTips = styled.section`

  background: #F2F2F2;
  .list{
    div{
      width: 100% !important;
    }
  }
  .single-item{
    padding: 0 15px;
      margin-bottom: 30px;
    .single-features{
      background: #ffffff;
      padding: 40px;
      width: 100%;
      min-height: 200px;
      h3{
        color: #978C21;
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        margin-bottom: 15px;
      }
    }

  }

`;
export default React.memo(FingerTips);
