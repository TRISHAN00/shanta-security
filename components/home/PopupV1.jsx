import React, {useContext, useEffect, useRef, useState, memo} from 'react';
import styled from 'styled-components';
import Modal from "react-bootstrap/Modal";
import {Col, Container, Row} from "react-bootstrap";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import {BsX} from "react-icons/bs";
import reactHtmlParser from "react-html-parser";
import ModalVideo from "react-modal-video";

import SmootherContext from "../SmootherContext";

const PopupV1 = ({
                     show,
                     handleClose,
                     no_img,
                     item,
                     title,
                     description,
                     data,
                     subtitle,
                     video,direct_video
                 }) => {

    const popupData = data;
    const [winWidth, setWinWidth] = useState(true)
    useEffect(() => {
        if (window.innerWidth > 767) {
            setWinWidth(true)
        } else {
            setWinWidth(false)
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth > 767) {
                setWinWidth(true)
            } else {
                setWinWidth(false)
            }
        });
    }, [])



    const [open, setOpen] = useState(true);
    const [videoId, setVideo] = useState('');
    const modalRef = useRef(null);


    const handleCloseModal = () => {
        setOpen(false);
        setVideo('');
        handleClose();
    };


    return (

        <StyledModal>
            <Modal
                show={show}
                item={item}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={false}
                className="gph_modal modal_video_popup popup-version-one"
            >
                <SimpleBar className="main_scroll " style={{height: '100vh'}}>
                    <Modal.Body>
                        <Container>
                            <Row className={'for-close'}>
                                <div onClick={handleCloseModal} className="modal-close ">

                                    <svg id="Button_-_Close" data-name="Button - Close" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
                                        <g id="Ellipse_18" data-name="Ellipse 18" fill="none" stroke="#3c3c3b" stroke-width="1" opacity="0.3">
                                            <circle cx="22" cy="22" r="22" stroke="none"/>
                                            <circle cx="22" cy="22" r="21.5" fill="none"/>
                                        </g>
                                        <g id="Ellipse_19" data-name="Ellipse 19" fill="none" stroke="#3c3c3b" stroke-width="1" strokeDasharray="0 142" opacity={'0'}>
                                            <circle cx="22" cy="22" r="22" stroke="none"/>
                                            <circle cx="22" cy="22" r="21.5" fill="none"/>
                                        </g>
                                        <g id="Group_18979" data-name="Group 18979" transform="translate(-3149 -104.5)">
                                            <line id="Line_4" data-name="Line 4" x2="8" y2="8" transform="translate(3167 122.5)" fill="none" stroke="#3c3c3b" strokeLinecap="round" stroke-width="1"/>
                                            <line id="Line_3877" data-name="Line 3877" x1="8" y2="8" transform="translate(3167 122.5)" fill="none" stroke="#3c3c3b" strokeLinecap="round" stroke-width="1"/>
                                        </g>
                                    </svg>

                                </div>

                            </Row>
                        </Container>
                        <Container>
                            <Row>


                                <div className="modal-data d-flex">
                                    {
                                        popupData ?

                                    <ModalVideo ref={modalRef} channel='youtube' isOpen={video} videoId={popupData}  onClose={handleCloseModal}/>

                                            :

                                        <ModalVideo ref={modalRef} channel='youtube' isOpen={video} videoId={popupData}  onClose={handleCloseModal}

                                    />

                                    }

                                </div>
                            </Row>
                        </Container>
                    </Modal.Body>
                </SimpleBar>
            </Modal>
        </StyledModal>

    )
};


const StyledModal = styled.div`

  .modal-dialog {
    margin: 0;
  }

  h4 {
    letter-spacing: 1.5px;
  }

`;


export default React.memo(PopupV1);
