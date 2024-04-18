import React, {useState, memo} from 'react';
import styled from 'styled-components';
import FeedbackForm from "../career/FeedbackForm";
import {Col, Container, Row} from "react-bootstrap";
import Title from "../Title";
import reactHtmlParser from "react-html-parser";
import ButtonSubmit from "../Button";
import {title} from '../../styles/globalStyleVars'
const HrPhilosophy = ({theData, popup,padding}) => {


    let joblist = theData;

    const [popupId, setPopupId] = useState()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true)
        setPopupId(e)
    }

    return (
        <StyledHr className={`job ${padding ? padding : 'pb-200'}`}>

            <Container>
                <Row className=''>
                    {
                        popup ? '' :
                            <Col md={6}>
                                <Title noanim margin={'0 0 75px 0'}
                                       text={'Take the right step with <span>Shanta Securities Limited</span>'}/>

                            </Col>
                    }

                    <Col md={12}>
                        <div className="list">
                            <FeedbackForm popupId={popupId} show={show} handleClose={handleClose}/>

                            {
                                joblist && joblist?.length > 0 ?
                                joblist?.map((e, index) => {
                                    return (

                                        <div key={index} className="single-item">

                                            {
                                                e?.data?.title &&
                                                <h4>{e?.data?.title}</h4>

                                            }
                                            <div className="time">
                                                {
                                                    e?.data?.overview &&
                                                    reactHtmlParser(e?.data?.overview)
                                                }

                                            </div>
                                            <div className="button" onClick={() => handleShow(e)}>
                                                <ButtonSubmit newtablink={'javascript:void(0)'} width={'180px'} text={'View Details'} color={'#fff'}
                                                              hoverBackground={'#3C3C3B'}
                                                              background={'#978C21'}/>
                                            </div>
                                        </div>

                                    )
                                })
                                    :
                                    <div >
                                        <h3>No Job Available</h3>
                                    </div>
                            }

                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledHr>
    );
};

const StyledHr = styled.section`

  background: #F2F2F2;

  .list {
    .single-item {
      display: flex;
      justify-content: space-between;
      padding-bottom: 40px;
      margin-bottom: 40px;
      border-bottom: 1px solid rgba(198, 198, 198, 0.5);

      &:last-child {
        margin-bottom: 0;
        border-bottom: none;
      }

      h4 {
        font-family: ${title};
        font-size: 20px;
        font-weight: 300;
        line-height: 28px;
        width: 40%;
      }

      .time {
        width: 30%;

        p {
          margin-bottom: 8px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      .button {
        //width: 30%;
      }
    }
    
    @media(max-width: 992px){
      .single-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 40px;
        margin-bottom: 40px;

        &:last-child {
          margin-bottom: 0;
        }

        h4 {
         margin-bottom: 20px;
width: 100%;
        }

        .time {
          width: 100%;

          p {
            margin-bottom: 8px;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }

        .button {
          margin-top: 20px;
          //width: 30%;
        }
      }

    }
  }
`;
export default React.memo(HrPhilosophy);
