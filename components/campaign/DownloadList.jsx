import React  from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {hover} from "./../../styles/globalStyleVars"
const DownloadList = ({padding,data}) => {
    let list = data?.list
    return (
        <StyledDownloadList className={`download-list ${padding ? padding : 'pt-200  pb-200'}`}>
            <Container>
                <Row>

                    {
                        list && list?.length > 0 &&
                        list?.map((e,index) => {
                            return(
                                <Col className={'download-single-item'} md={4}>
                                    <a target={'_blank'} href={e?.full_path}>
                                        <div className="download-single-item__wrp">
                                            {
                                                e?.short_title &&
                                                <h3>{e?.short_title} </h3>

                                            }
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
                                                    <g id="Download_Icon" data-name="Download Icon" transform="translate(-598 -243)">
                                                        <g id="Ellipse_18" data-name="Ellipse 18" transform="translate(598 243)" fill="none" stroke="#3c3c3b" stroke-width="1" opacity="0.3">
                                                            <circle cx="22" cy="22" r="22" stroke="none"/>
                                                            <circle cx="22" cy="22" r="21.5" fill="none"/>
                                                        </g>
                                                        <g id="Ellipse_19" data-name="Ellipse 19" transform="translate(598 243)" fill="none" stroke="#978c21" stroke-width="1" strokeDasharray="1 142" opacity="0">
                                                            <circle cx="22" cy="22" r="22" stroke="none"/>
                                                            <circle cx="22" cy="22" r="21.5" fill="none"/>
                                                        </g>
                                                        <g id="Group_20821" data-name="Group 20821">
                                                            <path id="Path_9339" data-name="Path 9339" d="M21,231a1.079,1.079,0,0,0-1.078,1.078,8.885,8.885,0,1,1-17.769,0,1.078,1.078,0,0,0-2.156,0,11.044,11.044,0,0,0,11.041,11.041,11.044,11.044,0,0,0,11.041-11.041A1.079,1.079,0,0,0,21,231" transform="translate(608.959 32.922)" fill="#3c3c3b"/>
                                                            <path id="Path_9340" data-name="Path 9340" d="M154.384,14.819a2.093,2.093,0,0,0,2.959,0l2.713-2.713a1.08,1.08,0,1,0-1.527-1.527l-1.587,1.591V1.078a1.078,1.078,0,1,0-2.156,0V12.171l-1.591-1.591a1.08,1.08,0,0,0-1.527,1.527Z" transform="translate(464.137 253.959)" fill="#3c3c3b"/>
                                                        </g>
                                                    </g>
                                                </svg>

                                            </div>
                                        </div>
                                    </a>
                                </Col>
                            )
                        })

                    }

                </Row>
            </Container>
        </StyledDownloadList>
    );
};

const StyledDownloadList = styled.section`

  padding-top: 220px;
  .download-single-item{
    margin-bottom: 20px;
    &__wrp{
      background: #f2f2f2;
      padding: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      h3{
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        color: #3C3C3B;
        margin: 0;
        max-width: 60%;
      }
    }
    .icon{
      height: 45px;
      width: 45px;
      border-radius: 50%;
      overflow: hidden;
      svg{
        #Ellipse_19{
          transition: 1s all ease;
        }
      }
    }

    &:hover{
      h3{
        color: ${hover};
      }
      .icon{
        svg{
          #Ellipse_19{
            opacity: 1;
            stroke-dasharray: 142px;
          }
        }
      }
    }
  }

  @media(max-width: 767px){
    padding-top: 180px;
    padding-bottom: 120px;
  }

`;
export default React.memo(DownloadList);
