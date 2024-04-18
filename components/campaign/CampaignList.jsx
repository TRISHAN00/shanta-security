import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {hover} from "../../styles/globalStyleVars"
import {Img} from "../Img";
import Link from 'next/link';
const CampaignList = ({padding, data}) => {
    let list = data

    return (
        <StyledCampaignList className={`download-list ${padding ? padding : 'pt-200  pb-200'}`}>
            <Container>
                {
                    list && list?.length > 0 &&
                    list?.map((e, index) => {
                        return (
                            <Row className={'campaign-list'}>
                                <Col className={'download-single-item-left'} md={6}>
                                    <h5>{e?.section_data?.title}</h5>
                                    <p>{e?.section_data?.subtitle}</p>
                                </Col>
                                <Col className={''} md={6}>

                                    <Row>
                                        {
                                            e?.posts?.list && e?.posts?.list?.length > 0 &&
                                            e?.posts?.list?.map((e, index) => {

                                               let thumb = e?.images.find(f => f?.thumb === 'on')
                                                if (index === 0) {
                                                    return (
                                                        <Col md={12}>
                                                            <div className="download-single-item">
                                                                <Link href={`/campaign/${e?.data?.slug}`}>
                                                                    <a >
                                                                        <div className="image-wrapper">
                                                                            <Img alt={'Shanta Securities Limited'} src={thumb?.full_path ? thumb?.full_path : 'blur/images/static/blur.jpg'}/>
                                                                        </div>
                                                                        <div className="download-single-item__wrp">
                                                                            <h3>{e?.data?.title}</h3>
                                                                            <p>{e?.data?.subtitle}</p>
                                                                        </div>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </Col>
                                                    )
                                                } else {
                                                    return (
                                                        <Col md={12}>
                                                            <div className="download-single-item">
                                                                <Link href={`/campaign/${e?.data?.slug}`}>
                                                                    <a >
                                                                        <div className="image-wrapper">
                                                                            <Img alt={'Shanta Securities Limited'} src={e?.images?.[0]?.full_path ? e?.images?.[0]?.full_path : 'blur/images/static/blur.jpg'}/>
                                                                        </div>
                                                                        <div className="download-single-item__wrp">
                                                                            <h3>{e?.data?.title}</h3>
                                                                            <p>{e?.data?.subtitle}</p>
                                                                        </div>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </Col>
                                                    )
                                                }
                                            })
                                        }
                                    </Row>

                                </Col>
                            </Row>
                        )
                    })

                }


            </Container>
        </StyledCampaignList>
    );
};

const StyledCampaignList = styled.section`

    padding-top: 220px;

    .download-single-item {
        margin-bottom: 20px;
        border-radius: 30px;
        overflow: hidden;

        .image-wrapper {
            position: relative;
            padding-top: 50%;
        }

        &__wrp {
            background: #f2f2f2;
            padding: 30px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            height: 100%;

            h3 {
                font-size: 20px;
                font-weight: 500;
                line-height: 28px;
                color: #3C3C3B;
                margin: 0;
                max-width: 60%;
            }
        }

        .icon {
            height: 45px;
            width: 45px;
            border-radius: 50%;
            overflow: hidden;

            svg {
                #Ellipse_19 {
                    transition: 1s all ease;
                }
            }
        }

        &:hover {
            h3, p {
                color: ${hover};
            }

            .icon {
                svg {
                    #Ellipse_19 {
                        opacity: 1;
                        stroke-dasharray: 142px;
                    }
                }
            }
        }
    }

    .download-single-item-left {
        h5 {
            margin-bottom: 10px;
        }

        .dc-btn a {
            width: 190px;
        }
    }


    .campaign-list {
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    @media (max-width: 767px) {
        padding-top: 180px;
        padding-bottom: 120px;
    }

    .search {

        form {
            min-width: 100%;
            margin-top: 20px;

            .search-input {
                button, p, a {
                    box-shadow: none;
                    border: none;
                    background-color: transparent;
                    position: absolute;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                    height: fit-content;
                    font-size: 12px;
                    line-height: 18px;
                    color: #221f1f;
                    transition: color .3s cubic-bezier(0.4, 0, 0, 1);
                    cursor: pointer;

                    &:hover {
                        color: #D0CA10;
                    }
                }

                span {
                    position: absolute !important;
                    bottom: 18px;
                }

                .form-control {
                    border: none;
                    border-radius: 0;
                    border-bottom: 1px solid #221F1F;
                    padding-left: 0px;
                    padding-bottom: 9px;
                    padding-top: 0;
                    height: 50px;
                    font-size: 32px;
                    line-height: 36px;
                    font-weight: 600;
                    color: black;
                    background-color: transparent;

                    ::placeholder {
                        font-size: 32px;
                        line-height: 36px;
                        font-weight: 400;
                        color: rgba(60, 60, 59, 0.5);
                    }
                }

            }
        }

        &__menu {
            margin-top: 23px;
            min-width: 100%;

            p {
                font-size: 12px;
                color: #ed1b34;
                font-weight: 600;
                line-height: 18px;
                margin-bottom: 13px;

            }

            ul {
                display: inline-flex;

                li {
                    a {
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 22px;
                        color: #221f1f;
                        display: flex;
                        margin-right: 30px;
                    }

                    &:nth-last-child(1) {
                        a {
                            margin-right: 0;
                        }
                    }
                }
            }

        }

    }
    @media(max-width: 992px){
        .download-single-item-left{
            margin-bottom: 20px;
        }
        .col-md-6{
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
    
`;
export default CampaignList;
