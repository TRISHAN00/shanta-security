import React, {useContext, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton} from "react-share";
import ReactHtmlParser from "react-html-parser";
import reactHtmlParser from "react-html-parser";
import {Img} from "../../components/Img";
import Button from "../../components/Button";
import SmootherContext from "../../components/SmootherContext";
import {hover, title} from "../../styles/globalStyleVars";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import PopupV1 from "../../components/easy/PopupV1";
import {useRouter} from "next/router";
import {NextSeo} from "next-seo";
import gsap, {CSSPlugin, TimelineLite} from "gsap";
const CmapignDetails = ({data}) => {
    const router = useRouter();

    const { slug } = router.query;


    const getData = data && data;
    const pageData = getData?.data?.details?.data;
    const metaData = getData?.data?.details?.images;
    const detailSection = getData?.data?.sections;





    const [dataMain, setDataMain] = useState(null); // Initialize state for storing data

    useEffect(() => {
        let foundDetail = null; // Initialize a variable to hold the detail

        detailSection?.forEach((e) => { // Use forEach instead of map as we don't need to return anything
            if (e?.posts?.list) {
                foundDetail = e?.posts?.list?.find((f) => f.data?.slug === slug); // Find the detail
                console.log(foundDetail)
                if (foundDetail) {
                    setDataMain(foundDetail); // Set the found detail in state
                    return; // Exit loop once detail is found
                }
            }
        });
    }, [detailSection, slug, getData]);


// Now `detail` will either hold the found object or `undefined` if no matching object was found.
    let detail = null;



    let [shareUrl, setShareUrl] = useState('')

    let shareButtonClickM = useRef()
    let shareButtonContentM = useRef()


    useEffect(() => {
        setShareUrl(window.location.href)
    }, [shareUrl])

    useEffect(() => {
        shareButtonClickM.current.addEventListener('click', () => {
            shareButtonContentM.current.classList.toggle('open')
        })

        window.addEventListener('click', (e) => {
            if (shareButtonContentM?.current?.classList.contains('open')) {
                if (!e.target.matches('.social-vertical, .social-vertical img')) {
                    shareButtonContentM?.current.classList.remove('open')
                }
            }

        })


    }, [shareButtonContentM])



    // useEffect(() => {
    //     const contentRef = document.querySelector('.pin-it');
    //
    //     if(contentRef){
    //         contentRef.forEach((box) => {
    //             ScrollTrigger.create({
    //                 trigger: box,
    //                 pin: true,
    //                 start: 'top +200',
    //                 end: 'bottom',
    //             });
    //         });
    //     }
    //
    //
    //     // Clean up the ScrollTrigger instances when the component unmounts
    //     // return () => {
    //     //     contentRef.forEach((box) => {
    //     //         ScrollTrigger.getById(box.trigger).kill();
    //     //     });
    //     // };
    // }, [])


    useEffect(() => {
        const contentRefs = document.querySelectorAll('.pin-it');

        if (contentRefs) {
            contentRefs.forEach((box) => {
                ScrollTrigger.create({
                    trigger: box,
                    pin: true,
                    start: 'top +200',
                    end: 'bottom',
                });
            });
        }
    }, []);


    const dateString = dataMain?.data?.created_at;
    const date = new Date(dateString);
    const options = {day: 'numeric', month: 'long', year: 'numeric'};
    const formattedDate = date.toLocaleDateString('en-US', options);


    let [open, setOpen] = useState(false);
    let [videoId, setVideo] = useState('');
    const modalRef = useRef(null);

    const smoother = useContext(SmootherContext);
    const killSmoother = () => {
        if (smoother && smoother.revert) {
            smoother.revert();
        }
    };
    let handelOpen = (open, id) => {
        setOpen(open);
        setVideo(id);
        killSmoother();

        if (open) {
            if (smoother && smoother.revert) {
                smoother.revert();
            }

            if (modalRef.current) {
                gsap.to(window, {
                    duration: 1, // Set the duration of the scroll animation
                    scrollTo: {
                        y: modalRef.current.offsetTop,
                    },
                    ease: 'power2.out', // Set the easing function for the scroll animation
                });
            }
        }
    };
    const socialVerticalRef = useRef(null);

    const [show, setShow] = useState(false);
    const [popupId, setPopupId] = useState()
    const [showVideo, setShowVideo] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true)
        setPopupId(e)
        setVideo(true)
    }



    let banner = metaData.find(f => f?.banner === 'on')
    let background = metaData.find(f => f?.background === 'on')





    const [dateExpire, setDateExpire] = useState(false); // Initialize state for storing data
    const expiredDate = dataMain?.data?.date; // Assuming dataMain is already defined

    useEffect(() => {
        // Convert the expiredDate string to a Date object
        const expiredDateTime = new Date(expiredDate);
        // Get the current date
        const currentDate = new Date();

        // Compare the expiredDate with the current date
        if (expiredDateTime <= currentDate) {
            // If the expiredDate is in the past or equal to the current date, set dateExpire to true
            setDateExpire(true);
        } else {
            // Otherwise, set dateExpire to false
            setDateExpire(false);
        }
    }, [expiredDate]); // This effect will re-run whenever expiredDate changes


    const currentUrlTag = router && router.asPath;


    console.log(pageData, 'campaign details')
    console.log( metaData, 'campaign details')

    return (

        <>
            {/*dynamic title */}
            <NextSeo
                title={`${pageData?.title ? pageData?.title + ' | Campaign | ' : ''}Shanta Securities Limited`}
                description={pageData?.subtitle}
                canonical={"https://www.shantasecurities.com"+currentUrlTag}
                openGraph={{
                    title: pageData?.title,
                    description: pageData?.subtitle,
                    images: [
                        {
                            url: background?.full_path,
                            width: 800,
                            height: 600,
                            alt: background?.short_title,
                        },
                        {
                            url:  background?.full_path,
                            width: 800,
                            height: 600,
                            alt: background?.short_title,
                        },
                    ],
                }}
            />
            <StyledComponent>
                {
                    pageData?.link &&
                    <PopupV1 show={show} video={true} direct_video={pageData?.link} handleClose={handleClose}/>


                }

                <section id={'details'} className="case_study_detail pb-160">
                    <Container>
                        <Row>
                            <Col md={3}>
                                <div>
                                    <div className="social-vertical pin-it" ref={shareButtonClickM}>
                                        <p>Share:</p>
                                        <div className="clearfix"></div>
                                        <div className="social-lists" ref={shareButtonContentM}>
                                            <FacebookShareButton url={shareUrl}><FacebookIcon size={32}
                                                                                              round={true}/></FacebookShareButton>
                                            <LinkedinShareButton url={shareUrl}><LinkedinIcon size={32}
                                                                                              round={true}/></LinkedinShareButton>
                                            <EmailShareButton url={shareUrl}><EmailIcon size={32}
                                                                                        round={true}></EmailIcon></EmailShareButton>
                                        </div>

                                    </div>
                                    {
                                        dataMain?.files?.list?.[0]?.full_path &&
                                        <Button icondown target={'_blank'} newtablink={dataMain?.files?.list?.[0]?.full_path}
                                                text={"Download PDF"}
                                                margin={"30px 0 0 0"}
                                                background={"#978C21"}
                                                color={"#fff"}
                                                icon
                                        />

                                    }


                                    <div className="video">
                                        {
                                            dataMain?.data?.link &&
                                            <div className="click" onClick={() => handleShow(true)}>

                                                <Button iconvideo newtablink={'javascript:void(0)'}
                                                        text={"Watch Video"}
                                                        margin={"30px 0 0 0"}
                                                        background={"white"}
                                                        color={"#3C3C3B"} borderColor={'#3C3C3B'}
                                                        icon border={'1px solid'}
                                                />


                                            </div>
                                        }
                                    </div>

                                </div>
                            </Col>
                            <Col md={{span: 9}}>
                                <div className="header">
                                    {
                                        pageData?.title ?
                                            <h1 className={'split-up'}>{ReactHtmlParser(pageData?.title)}</h1>

                                            :
                                            <h1>Offer on Domestic Flights</h1>
                                    }

                                    <p>
                                        {
                                            pageData?.chapter ?
                                                <span>{pageData?.chapter} Chapters</span> :
                                                <span className={`${dateExpire ? 'red' : ''}`}>Validity: {pageData?.short_desc}</span>
                                        }




                                    </p>
                                </div>
                                <div className="case_study_image_wrapper">
                                    {

                                        banner?.full_path ?
                                            <Img src={banner?.full_path}/>
                                            :
                                            null
                                    }
                                </div>
                                <div className="blog_details">
                                    {
                                        pageData?.description &&
                                        reactHtmlParser(pageData?.description)
                                    }

                                </div>

                            </Col>

                        </Row>
                    </Container>

                </section>
            </StyledComponent>
        </>

    );
};

const StyledComponent = styled.section`


    position: relative;

    .position_relative {
        position: relative;
    }

    iframe {
        margin-top: 10px;
        width: 100%;
        min-height: 400px;
        @media (max-width: 767px) {
            height: 190px;
            min-height: auto;
        }
    }

    a {
        color: ${hover}
    }

    .case_study_detail {
        padding-top: 150px;

        .header {
            margin-bottom: 40px;

            p {
                font-size: 12px;
                font-weight: 500;
                line-height: 16px;
                color: #3C3C3B;

                span {
                    border-right: 1px solid rgba(60, 60, 59, 0.2);
                    padding-right: 20px;
                    padding-left: 20px;

                    &.red {
                        color: #d20f0f;
                    }

                    &:last-child {
                        padding-right: 20px;
                        border-right: 0;
                    }

                    &:first-child {
                        padding-left: 0;
                    }
                }


            }

            h1 {
                font-size: 32px;
                font-weight: 500;
                line-height: 32px;
                color: #978C21;
                margin: 0 0 10px;
                font-family: ${title};
            }
        }

        .case_study_image_wrapper {
            position: relative;
            padding-top: 50%;
          

        }

        .blog_details {
            padding-top: 80px;


            .ratio {
                position: relative;
                padding-top: 50%;

                iframe {
                    position: absolute;
                    inset: 0px;
                    object-fit: cover;
                    min-height: unset;
                    height: 100%;
                    width: 100%;
                }
            }

            

            h3 {
                font-size: 24px;
                font-weight: 500;
                line-height: 28px;
                color: #978C21;
                margin-bottom: 20px;
            }

            p {
                margin-bottom: 40px;

                &:last-child {
                    margin-bottom: 0;
                }
            }

            .flex {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: flex-start;

                img {
                    flex: 0 0 calc(50% - 15px);
                    display: block;
                    max-width: calc(50% - 15px);
                    @media (max-width: 767px) {
                        flex: 0 0 calc(50% - 7.5px);
                        display: block;
                        max-width: calc(50% - 7.5px);
                    }
                }
            }

            ul {
                margin-bottom: 20px;

                li {
                    padding-left: 15px;
                    margin-bottom: 10px;
                    position: relative;

                    &:after {
                        position: absolute;
                        left: 0;
                        top: 9px;
                        width: 5px;
                        height: 5px;
                        border-radius: 50%;
                        content: '';
                        background: ${hover};
                    }

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }

    .social-vertical {


        p {
            margin-bottom: 20px;
        }


    }

    .social-lists {
        display: flex;
        //flex-direction: column;
        width: auto;
        align-items: flex-start;
        @media (max-width: 767px) {
            flex-direction: row;

        }

        svg {
            height: 30px;
            width: 30px;

            circle {
                fill: transparent;
                stroke: #978C21;
            }

            path {
                fill: #978C21;
            }


            &:hover {
                circle {
                    stroke: #3C3C3B;

                }

                path {
                    fill: #3C3C3B;
                }
            }
        }

        button {
            margin-right: 20px;
            @media (max-width: 767px) {
                margin-bottom: 0px;
                margin-left: 0px;
                margin-right: 10px;
            }

            &:last-child {
                margin-bottom: 20px;
            }
        }
    }

    @media (max-width: 992px) {
        .case_study_detail {
            .row {
                flex-direction: column-reverse;

                .col-md-9, .col-md-3 {
                    width: 100%;
                    max-width: 100%;

                }
            }

            .social-vertical {
                margin-top: 60px;
            }
        }
    }

    @media (max-width: 767px) {
        .case_study_detail {
            padding-top: 150px;
        }

        .case_study_detail .case_study_image_wrapper {
            //padding-top: 22vh;
        }
    }

`;



export async function getServerSideProps(context) {
    const { query } = context;
    const { slug } = query;

    // Fetch data from an API or perform any async operations based on the slug
    const res = await fetch(`https://cms.shantasecurities.com/api/get-req-data/sections-campaign?type=slug&value=campaign&get_section=yes&image=yes&post=yes&file=yes&gallery=yes&post_slug=${slug}`);
    const data = await res.json();

    // Pass fetched data as props to the component
    return {
        props: {
            data,
        },
    };
}


export default CmapignDetails;
