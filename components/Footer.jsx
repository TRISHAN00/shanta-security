import React, {useEffect} from 'react';
import styled from "styled-components";
import {Accordion, Col, Container, Row} from "react-bootstrap";
import Link from 'next/link';
import {hover} from '../styles/globalStyleVars';
import {gsap} from "gsap";

const MyComponent = (offset) => {

    // Return today's date and time
    var currentTime = new Date()

    // returns the year (four digits)
    var year = currentTime.getFullYear()

    useEffect(() => {

        // Add click event to all links
        const allLinks = document.querySelectorAll('a[href*="#"]');
        if (!allLinks.length) {
            return;
        }

        allLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                // event.preventDefault(); // Prevent the default link behavior (navigating to the href)

                const href = link.getAttribute('href');
                if (!href || !href.includes('#')) {
                    return;
                }

                const targetSelector = href.slice(href.indexOf('#')); // Extract the # value from the href
                const targetElement = document.querySelector(targetSelector);

                if (targetElement) {
                    setTimeout(() => {




                        // Revert body overflow to its original value on blur
                        document.body.style.overflow = 'auto';
                        const html = document.querySelector('html');
                        html.style.overflow = 'auto';

                        // Use GSAP ScrollTo plugin to smoothly scroll to the target section
                        gsap.to(window, {
                            duration: 1,
                            scrollTo: { y: targetElement.offsetTop - 100 } // Adjust the offset as needed
                        });
                    }, 600)
                }

                // if (!targetElement) {
                //     console.error(`Target element with selector '${targetSelector}' not found.`);
                //     // return;
                // }


            });
        });
    }, [currentTime])

    return (
        <>


            <Footer  className={'footer'}>

                <Accordion defaultActiveKey="0">

                <div className="footer__top">

                    <Container>
                        <Row>

                            <Col md={3}>
                                <svg id="Logo_-_White" data-name="Logo - White" xmlns="http://www.w3.org/2000/svg"
                                     width="188.736" height="48" viewBox="0 0 188.736 48">
                                    <path id="Path_752" data-name="Path 752"
                                          d="M196.26,373.158c-.451-9.748,9.9-10.213,12.147-3.249,3.6,29.249-29.242,36.211-38.242,22.749,5.4,6.964,33.741,2.787,26.095-19.5Z"
                                          transform="translate(-164.586 -353.967)" fill="#978c21" fillRule="evenodd"/>
                                    <path id="Path_753" data-name="Path 753"
                                          d="M187.505,359.912c9,1.392,10.346-9.285,3.6-12.071-27.892-5.571-36.89,27.855-24.294,38.069-6.3-6.035-.448-34.819,20.695-26Z"
                                          transform="translate(-161.231 -347.22)" fill="#978c21" fillRule="evenodd"/>
                                    <g id="Group_718" data-name="Group 718" transform="translate(53.717 13.804)">
                                        <path id="Path_754" data-name="Path 754"
                                              d="M268.706,382.586a5.444,5.444,0,0,1-1.926,4.354,6.95,6.95,0,0,1-4.6,1.536h-14.54v-3.322h14.54a4.458,4.458,0,0,0,2.372-.614,2.327,2.327,0,0,0,1.142-2.037,2.186,2.186,0,0,0-1.172-1.982,4.472,4.472,0,0,0-2.343-.586H253.19a6.356,6.356,0,0,1-4.159-1.368,5.136,5.136,0,0,1,0-7.786,6.366,6.366,0,0,1,4.159-1.368h14.372v3.322H253.19a2.529,2.529,0,0,0-1.62.531,1.72,1.72,0,0,0-.67,1.422,1.68,1.68,0,0,0,.67,1.425,2.634,2.634,0,0,0,1.62.5h8.986a6.793,6.793,0,0,1,4.6,1.591A5.526,5.526,0,0,1,268.706,382.586Z"
                                              transform="translate(-247.245 -369.356)" fill="#fff"/>
                                        <path id="Path_755" data-name="Path 755"
                                              d="M289.669,388.476h-3.322V369.412h3.322Zm16.018,0h-3.319v-7.928H291.175v-3.32h11.192v-7.816h3.319Z"
                                              transform="translate(-261.928 -369.356)" fill="#fff"/>
                                        <path id="Path_756" data-name="Path 756"
                                              d="M346.448,388.442l-4.272-.029-3.208-5.33h-9.043l2.008-3.294h5.053l-3.322-5.5-8.6,14.121H320.8l10.352-17.22a4.476,4.476,0,0,1,1.09-1.228,2.586,2.586,0,0,1,1.506-.642,2.467,2.467,0,0,1,1.507.615,4.375,4.375,0,0,1,1.089,1.255Z"
                                              transform="translate(-274.865 -369.323)" fill="#fff"/>
                                        <path id="Path_757" data-name="Path 757"
                                              d="M383.567,386.828q0,1.843-1.258,1.842a3.158,3.158,0,0,1-2.064-1.144l-12.223-12.279v13.23h-3.293V371.059a1.89,1.89,0,0,1,.362-1.157,1.211,1.211,0,0,1,1.034-.49,2.777,2.777,0,0,1,1.9.977l12.223,12.253v-13.23h3.322Z"
                                              transform="translate(-291.36 -369.356)" fill="#fff"/>
                                        <path id="Path_758" data-name="Path 758"
                                              d="M418.591,372.734h-7.507v15.742h-3.293V372.734h-7.535v-3.322h18.335Z"
                                              transform="translate(-304.7 -369.356)" fill="#fff"/>
                                        <path id="Path_759" data-name="Path 759"
                                              d="M448.026,388.442l-4.272-.029-3.208-5.33H431.5l2.011-3.294h5.052l-3.322-5.5-8.6,14.121h-4.269l10.353-17.22a4.436,4.436,0,0,1,1.09-1.228,2.58,2.58,0,0,1,1.506-.642,2.464,2.464,0,0,1,1.506.615,4.341,4.341,0,0,1,1.088,1.255Z"
                                              transform="translate(-313.007 -369.323)" fill="#fff"/>
                                    </g>
                                    <g id="Group_719" data-name="Group 719" transform="translate(53.973 40.983)">
                                        <path id="Path_760" data-name="Path 760"
                                              d="M249.7,419.85a4.62,4.62,0,0,1-.76-.044,1.568,1.568,0,0,1-.689-.307,3.1,3.1,0,0,1-.594-.686l.541-.29a4.35,4.35,0,0,0,.532.466,2.256,2.256,0,0,0,.97.2Zm2.279-2.1a1.982,1.982,0,0,1-.616,1.476,2.01,2.01,0,0,1-1.463.62c-.064,0-.131,0-.2-.009V419.2h.193a1.4,1.4,0,0,0,1.014-.432,1.358,1.358,0,0,0,.425-1.016q-.018-.758-1.592-1.368-1.945-.9-1.892-1.857a1.768,1.768,0,0,1,1.868-1.674v.654a1.084,1.084,0,0,0-.826.258,1.067,1.067,0,0,0-.4.764q-.061.62,1.235,1.205a6.657,6.657,0,0,1,1.12.576Q251.97,417.021,251.979,417.754Zm-1.153-3.449c-.041-.087-.081-.169-.122-.244a1.264,1.264,0,0,0-.3-.376,1.064,1.064,0,0,0-.69-.184v-.654a1.615,1.615,0,0,1,1.135.34,2.363,2.363,0,0,1,.576.83Z"
                                              transform="translate(-247.657 -412.844)" fill="#fff"/>
                                        <path id="Path_761" data-name="Path 761"
                                              d="M272.613,412.864h.646v6.985h-.646Zm.646.655v-.655h2.357v.655Zm0,2.523v-.655h2.357v.655Zm0,3.807v-.655h2.357v.655Z"
                                              transform="translate(-257.028 -412.851)" fill="#fff"/>
                                        <path id="Path_762" data-name="Path 762"
                                              d="M298.916,419.788a3.42,3.42,0,0,1-2.471-1,3.372,3.372,0,0,1,0-4.852,3.421,3.421,0,0,1,2.471-1v.656a2.8,2.8,0,0,0-2.027.8,2.752,2.752,0,0,0,0,3.934,2.8,2.8,0,0,0,2.027.8Zm1.8-5.631a2.866,2.866,0,0,0-1.8-.563v-.659a3.428,3.428,0,0,1,2.4.932Zm.6,4.706a3.441,3.441,0,0,1-2.4.926v-.655a2.879,2.879,0,0,0,1.8-.558Z"
                                              transform="translate(-265.59 -412.878)" fill="#fff"/>
                                        <path id="Path_763" data-name="Path 763"
                                              d="M322.9,418.862V412.89h.646v6.085Zm1.491.289h.5a.466.466,0,0,0,.246-.062q.193-.157.194-.846l.572.392a2.91,2.91,0,0,1,.026.358q0,.576-.255.733a1.254,1.254,0,0,1-.485.114c-.064.006-.329.014-.793.026a1.827,1.827,0,0,1-1.216-.254,1.3,1.3,0,0,1-.282-.978q0-.165.009-.384l.637.026c0,.291,0,.478.009.559a.326.326,0,0,0,.307.315Zm.893-.315v-5.972h.646v6.085Z"
                                              transform="translate(-275.911 -412.851)" fill="#fff"/>
                                        <path id="Path_764" data-name="Path 764"
                                              d="M347.916,416.818l1.965,3.031h-.656l-1.947-3h-.829v3H345.8v-6.985h1.714a2.336,2.336,0,0,1,1.558.542,1.734,1.734,0,0,1,.7,1.409,1.872,1.872,0,0,1-.541,1.356A2.2,2.2,0,0,1,347.916,416.818Zm-1.468-.628h1.072a1.764,1.764,0,0,0,1.173-.38,1.291,1.291,0,0,0-.014-1.945,1.8,1.8,0,0,0-1.16-.346h-1.072Z"
                                              transform="translate(-284.51 -412.851)" fill="#fff"/>
                                        <path id="Path_765" data-name="Path 765" d="M370.381,412.864h.646v6.985h-.646Z"
                                              transform="translate(-293.739 -412.851)" fill="#fff"/>
                                        <path id="Path_766" data-name="Path 766"
                                              d="M393.92,412.873v.655h-1.877v6.321H391.4v-6.33H389.45v-.655Z"
                                              transform="translate(-300.9 -412.851)" fill="#fff"/>
                                        <path id="Path_767" data-name="Path 767" d="M414.644,412.864h.646v6.985h-.646Z"
                                              transform="translate(-310.36 -412.851)" fill="#fff"/>
                                        <path id="Path_768" data-name="Path 768"
                                              d="M433.727,412.864h.647v6.985h-.647Zm.647.655v-.655h2.357v.655Zm0,2.523v-.655h2.357v.655Zm0,3.807v-.655h2.357v.655Z"
                                              transform="translate(-317.525 -412.851)" fill="#fff"/>
                                        <path id="Path_769" data-name="Path 769"
                                              d="M458.168,419.85a4.612,4.612,0,0,1-.759-.044,1.567,1.567,0,0,1-.69-.307,3.1,3.1,0,0,1-.593-.686l.542-.29a4.362,4.362,0,0,0,.533.466,2.247,2.247,0,0,0,.969.2Zm2.279-2.1a1.977,1.977,0,0,1-.616,1.476,2.009,2.009,0,0,1-1.463.62c-.064,0-.13,0-.2-.009V419.2h.194a1.394,1.394,0,0,0,1.014-.432,1.356,1.356,0,0,0,.426-1.016q-.018-.758-1.593-1.368-1.943-.9-1.89-1.857a1.766,1.766,0,0,1,1.868-1.674v.654a1.084,1.084,0,0,0-.827.258,1.067,1.067,0,0,0-.4.764q-.062.62,1.234,1.205a6.611,6.611,0,0,1,1.12.576Q460.439,417.021,460.447,417.754Zm-1.153-3.449c-.041-.087-.082-.169-.122-.244a1.244,1.244,0,0,0-.3-.376,1.064,1.064,0,0,0-.69-.184v-.654a1.616,1.616,0,0,1,1.135.34,2.357,2.357,0,0,1,.576.83Z"
                                              transform="translate(-325.936 -412.844)" fill="#fff"/>
                                    </g>
                                </svg>

                                <div className="footer__top__info">
                                    <p className="phone">
                                        <span className={'d-block'}>Call</span>
                                        <a href={'tel:+8801313778778'}>
                                            +8801313778778
                                        </a>
                                    </p>


                                    <p>
                                        <span className={'d-block'}>Visit</span>
                                        <a target={'_blank'}
                                              href={'https://www.google.com/maps/search/The+Glass+House++(Level-10,+Eastern+Side),++S.E+(B)-2,+38,+Gulshan+Avenue,++Gulshan-1,+Dhaka-1212/@23.7809179,90.414273,17z/data=!3m1!4b1?entry=ttu'}>
                                            The Glass House
                                            (Level-10, Eastern Side), <br/>
                                            S.E (B)-2, 38, Gulshan Avenue, <br/>
                                            Gulshan-1, Dhaka-1212

                                        </a>
                                    </p>

                                    <div className="hide-mobile">
                                        <ul className="social">
                                            <li>
                                                <a  href={'https://www.facebook.com/shantasecurities/'}
                                                      target={'_blank'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                     viewBox="0 0 30 30">


                                                    <g id="Group_19435" data-name="Group 19435"
                                                       transform="translate(15536 -9208)">
                                                        <circle id="Ellipse_602" data-name="Ellipse 602" cx="15" cy="15"
                                                                r="14" transform="translate(-15536 9208)" fill="none"
                                                                stroke="#fff" stroke-width="1"/>
                                                        <circle id="Ellipse_603" data-name="Ellipse 603" cx="15" cy="50"
                                                                r="15" transform="translate(-15536 9208)"
                                                                fill="#978c21"/>
                                                        <path id="Path_2115" data-name="Path 2115"
                                                              d="M1206.12,104.34l.406-2.652h-2.544v-1.72a1.325,1.325,0,0,1,1.495-1.432h1.157V96.278a14.1,14.1,0,0,0-2.053-.179,3.237,3.237,0,0,0-3.465,3.569v2.021h-2.329v2.652h2.329v6.409h2.866V104.34Z"
                                                              transform="translate(-16723.787 9119.901)" fill="#fff"/>
                                                    </g>
                                                </svg>


                                            </a>
                                            </li>
                                            <li><a href={'https://www.instagram.com/shantasecurities/'} target={'_blank'}>


                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                     viewBox="0 0 30 30">


                                                    <g id="Group_19435" data-name="Group 19435"
                                                       transform="translate(15536 -9208)">
                                                        <circle id="Ellipse_602" data-name="Ellipse 602" cx="15" cy="15"
                                                                r="14" transform="translate(-15536 9208)" fill="none"
                                                                stroke="#fff" stroke-width="1"/>
                                                        <circle id="Ellipse_603" data-name="Ellipse 603" cx="15" cy="50"
                                                                r="15" transform="translate(-15536 9208)"
                                                                fill="#978c21"/>


                                                    </g>
                                                    <g id="Group_1419" data-name="Group 1419"
                                                       transform="translate(8 8)">

                                                        <path id="Path_2109" data-name="Path 2109"
                                                              d="M1095.77,105.945a.854.854,0,1,0,.853.854A.854.854,0,0,0,1095.77,105.945Z"
                                                              transform="translate(-1084.635 -103.346)" fill="#fff"/>
                                                        <path id="Path_2110" data-name="Path 2110"
                                                              d="M1082.64,108.605a3.586,3.586,0,1,0,3.586,3.586A3.59,3.59,0,0,0,1082.64,108.605Zm0,5.882a2.3,2.3,0,1,1,2.3-2.3A2.3,2.3,0,0,1,1082.64,114.488Z"
                                                              transform="translate(-1075.301 -104.911)" fill="#fff"/>
                                                        <path id="Path_2111" data-name="Path 2111"
                                                              d="M1080.119,114.188h-5.813a4.379,4.379,0,0,1-4.374-4.374V104a4.378,4.378,0,0,1,4.374-4.373h5.813a4.378,4.378,0,0,1,4.374,4.373v5.813A4.379,4.379,0,0,1,1080.119,114.188ZM1074.306,101a3.007,3.007,0,0,0-3,3v5.813a3.007,3.007,0,0,0,3,3h5.813a3.007,3.007,0,0,0,3-3V104a3.007,3.007,0,0,0-3-3Z"
                                                              transform="translate(-1069.932 -99.628)" fill="#fff"/>
                                                    </g>
                                                </svg>


                                            </a>
                                            </li>
                                            <li><a href={'https://www.linkedin.com/company/74940628/admin/feed/posts/'} target={'_blank'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                     viewBox="0 0 30 30">
                                                    <g id="Group_19435" data-name="Group 19435"
                                                       transform="translate(15536 -9208)">
                                                        <circle id="Ellipse_602" data-name="Ellipse 602" cx="15" cy="15"
                                                                r="14" transform="translate(-15536 9208)" fill="none"
                                                                stroke="#fff" stroke-width="1"/>
                                                        <circle id="Ellipse_603" data-name="Ellipse 603" cx="15" cy="50"
                                                                r="15" transform="translate(-15536 9208)"
                                                                fill="#978c21"/>


                                                    </g>
                                                    <g id="linkedin-logotype" transform="translate(8 8)">
                                                        <path id="Path_8798" data-name="Path 8798"
                                                              d="M1.456,1.211a1.121,1.121,0,0,1,.875.351,1.355,1.355,0,0,1,.34.881,1.2,1.2,0,0,1-.358.881,1.329,1.329,0,0,1-.98.358H1.317a1.3,1.3,0,0,1-.962-.358A1.208,1.208,0,0,1,0,2.442a1.128,1.128,0,0,1,.391-.884A1.552,1.552,0,0,1,1.456,1.211ZM.156,4.659H2.71v7.173H.156ZM11.943,7.72v4.113H9.39V8a2.076,2.076,0,0,0-.3-1.177,1.114,1.114,0,0,0-1-.443,1.279,1.279,0,0,0-.858.273,1.632,1.632,0,0,0-.463.6,1.044,1.044,0,0,0-.06.265,3.071,3.071,0,0,0-.014.31v4.008H4.126q.016-1.821.017-3.337V6.062c0-.353,0-.654-.01-.9s-.007-.415-.007-.5H6.7V5.675L6.681,5.7H6.7V5.675A2.953,2.953,0,0,1,7,5.283a2.346,2.346,0,0,1,.46-.382,2.622,2.622,0,0,1,.656-.291A3.1,3.1,0,0,1,9,4.5a3.494,3.494,0,0,1,1.166.19,2.392,2.392,0,0,1,.935.6,2.848,2.848,0,0,1,.617,1.007A4.105,4.105,0,0,1,11.943,7.72Z"
                                                              transform="translate(0)" fill="#fff"/>
                                                    </g>
                                                </svg>


                                            </a>
                                            </li>
                                            <li><a href={'https://www.youtube.com/@shantasecurities4260'} target={'_blank'}>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                     viewBox="0 0 30 30">

                                                    <g id="Group_19435" data-name="Group 19435"
                                                       transform="translate(15536 -9208)">
                                                        <circle id="Ellipse_602" data-name="Ellipse 602" cx="15" cy="15"
                                                                r="14" transform="translate(-15536 9208)" fill="none"
                                                                stroke="#fff" stroke-width="1"/>
                                                        <circle id="Ellipse_603" data-name="Ellipse 603" cx="15" cy="50"
                                                                r="15" transform="translate(-15536 9208)"
                                                                fill="#978c21"/>


                                                    </g>
                                                    <path id="Path_2114" data-name="Path 2114"
                                                          d="M1146.9,113.13a2.813,2.813,0,0,0-2.813-2.813h-7.195a2.813,2.813,0,0,0-2.813,2.813v3.348a2.813,2.813,0,0,0,2.813,2.813h7.195a2.813,2.813,0,0,0,2.813-2.813Zm-4.231,1.925-3.226,1.6c-.126.068-.556-.023-.556-.167v-3.276c0-.146.433-.237.56-.165l3.089,1.68C1142.661,114.8,1142.8,114.985,1142.666,115.056Z"
                                                          transform="translate(-1125.074 -99.317)" fill="#fff"/>
                                                </svg>

                                            </a></li>
                                        </ul>

                                    </div>

                                </div>
                            </Col>
                            <Col md={2} className={'footer__top_col border'}>
                                <div className="footer__top__menu">
                                    <div className="hide-desktop">
                                        <p>Our Services</p>
                                        <ul>
                                            <li><Link href={'./our-services#services'}><a>SMS</a></Link></li>
                                            <li><Link href={'/our-services#services'}><a>BEFTN</a></Link></li>
                                            <li><Link href={'/our-services#services'}><a>DP</a></Link></li>
                                            <li><Link href={'/our-services#trading-account'}><a>Internet Trading</a></Link></li>
                                        </ul>

                                    </div>

                                    <div className="hide-mobile">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Our Services

                                                    <span>
                                                        <svg id="Group_19302" data-name="Group 19302"
                                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24">
  <g id="Rectangle_492" data-name="Rectangle 492" fill="none" stroke="#fff" stroke-width="1" opacity="0.5">
    <rect width="24" height="24" rx="12" stroke="none"/>
    <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="none"/>
  </g>
  <g id="Group_4824" data-name="Group 4824" transform="translate(7 7)">
    <g id="Group_4823" data-name="Group 4823" transform="translate(5)">
      <line id="Line_9" data-name="Line 9" y1="5" x2="5" transform="translate(0 5)" fill="none" stroke="#fff"
            strokeLinecap="round" stroke-width="1"/>
      <line id="Line_10" data-name="Line 10" x1="5" y1="5" fill="none" stroke="#fff" strokeLinecap="round"
            stroke-width="1"/>
    </g>
    <line id="Line_11" data-name="Line 11" x2="10" transform="translate(0 5)" fill="none" stroke="#fff"
          strokeLinecap="round" stroke-width="1"/>
  </g>
</svg>

                                                    </span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li><Link href={'/our-services#services'}><a>SMS></a></Link></li>
                                                        <li><Link href={'/our-services#services'}><a>BEFTN</a></Link></li>
                                                        <li><Link href={'/our-services#services'}><a>DP</a></Link></li>
                                                        <li><Link href={'/our-services#trading-account'}><a>Internet Trading</a></Link></li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>


                                    </div>
                                </div>
                            </Col>
                            <Col md={2} className={'footer__top_col border'}>
                                <div className="footer__top__menu">
                                    <div className="hide-desktop">
                                        <p>Corporate </p>
                                        <ul>
                                            <li><Link href={'/about'}><a>Shanta Securities Limited</a></Link></li>
                                            <li><Link href={'/career'}><a>Career</a></Link></li>
                                            <li><Link href={'/contact'}><a>Contact</a></Link></li>
                                        </ul>
                                    </div>

                                    <div className="hide-mobile">
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Corporate

                                                    <span>
                                                        <svg id="Group_19302" data-name="Group 19302"
                                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24">
  <g id="Rectangle_492" data-name="Rectangle 492" fill="none" stroke="#fff" stroke-width="1" opacity="0.5">
    <rect width="24" height="24" rx="12" stroke="none"/>
    <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="none"/>
  </g>
  <g id="Group_4824" data-name="Group 4824" transform="translate(7 7)">
    <g id="Group_4823" data-name="Group 4823" transform="translate(5)">
      <line id="Line_9" data-name="Line 9" y1="5" x2="5" transform="translate(0 5)" fill="none" stroke="#fff"
            strokeLinecap="round" stroke-width="1"/>
      <line id="Line_10" data-name="Line 10" x1="5" y1="5" fill="none" stroke="#fff" strokeLinecap="round"
            stroke-width="1"/>
    </g>
    <line id="Line_11" data-name="Line 11" x2="10" transform="translate(0 5)" fill="none" stroke="#fff"
          strokeLinecap="round" stroke-width="1"/>
  </g>
</svg>

                                                    </span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li><Link href={'/about'}><a>Shanta Securities Limited</a></Link></li>
                                                        <li><Link href={'/career'}><a>Career</a></Link></li>
                                                        <li><Link href={'/contact'}><a>Contact</a></Link></li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                    </div>

                                </div>

                            </Col>
                            <Col md={2} className={'footer__top_col'}>
                                <div className="footer__top__menu">

                                    <div className="hide-desktop">
                                        <p>Support</p>
                                        <ul>
                                            <li><Link href={'/contact#faq'}><a>FAQ</a></Link></li>
                                            <li><Link href={'/contact#feedback'}><a>Customer Support</a></Link></li>
                                        </ul>
                                    </div>

                                    <div className="hide-mobile">
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>Support

                                                    <span>
                                                        <svg id="Group_19302" data-name="Group 19302"
                                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24">
  <g id="Rectangle_492" data-name="Rectangle 492" fill="none" stroke="#fff" stroke-width="1" opacity="0.5">
    <rect width="24" height="24" rx="12" stroke="none"/>
    <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="none"/>
  </g>
  <g id="Group_4824" data-name="Group 4824" transform="translate(7 7)">
    <g id="Group_4823" data-name="Group 4823" transform="translate(5)">
      <line id="Line_9" data-name="Line 9" y1="5" x2="5" transform="translate(0 5)" fill="none" stroke="#fff"
            strokeLinecap="round" stroke-width="1"/>
      <line id="Line_10" data-name="Line 10" x1="5" y1="5" fill="none" stroke="#fff" strokeLinecap="round"
            stroke-width="1"/>
    </g>
    <line id="Line_11" data-name="Line 11" x2="10" transform="translate(0 5)" fill="none" stroke="#fff"
          strokeLinecap="round" stroke-width="1"/>
  </g>
</svg>

                                                    </span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li><Link href={'/contact#faq'}><a>FAQ</a></Link></li>
                                                        <li><Link href={'/contact#feedback'}><a>Customer Support</a></Link></li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                    </div>
                                </div>

                            </Col>
                            <Col md={2} className={'footer__top_col nomargin'}>
                                <div className="footer__top__menu">
                                    <div className="hide-desktop">
                                        <p>Regulatory Links</p>
                                        <ul>
                                            <li><a href={'https://sec.gov.bd/'}><a>BSEC</a></a></li>
                                            <li><a href={'https://www.dsebd.org/'}><a>DSE</a></a></li>
                                            <li><a href={'https://www.cse.com.bd/ '}><a>CSE</a></a></li>

                                        </ul>
                                    </div>
                                    <div className="hide-mobile">
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>Regulatory Links

                                                    <span>
                                                        <svg id="Group_19302" data-name="Group 19302"
                                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24">
  <g id="Rectangle_492" data-name="Rectangle 492" fill="none" stroke="#fff" stroke-width="1" opacity="0.5">
    <rect width="24" height="24" rx="12" stroke="none"/>
    <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="none"/>
  </g>
  <g id="Group_4824" data-name="Group 4824" transform="translate(7 7)">
    <g id="Group_4823" data-name="Group 4823" transform="translate(5)">
      <line id="Line_9" data-name="Line 9" y1="5" x2="5" transform="translate(0 5)" fill="none" stroke="#fff"
            strokeLinecap="round" stroke-width="1"/>
      <line id="Line_10" data-name="Line 10" x1="5" y1="5" fill="none" stroke="#fff" strokeLinecap="round"
            stroke-width="1"/>
    </g>
    <line id="Line_11" data-name="Line 11" x2="10" transform="translate(0 5)" fill="none" stroke="#fff"
          strokeLinecap="round" stroke-width="1"/>
  </g>
</svg>

                                                    </span>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li><a href={'https://sec.gov.bd/'}><a>BSEC</a></a></li>
                                                        <li><a href={'https://www.dsebd.org/'}><a>DSE</a></a></li>
                                                        <li><a href={'https://www.cse.com.bd/ '}><a>CSE</a></a></li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                    </div>
                                </div>

                            </Col>
                            <Col md={1} className={'footer__top_col hide-desktop'}>
                                <ul className="social hide-desktop">
                                    <li><a href={'https://www.facebook.com/shantasecurities'} target={'_blank'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                             viewBox="0 0 30 30">


                                            <g id="Group_19435" data-name="Group 19435"
                                               transform="translate(15536 -9208)">
                                                <circle id="Ellipse_602" data-name="Ellipse 602" cx="15" cy="15" r="14"
                                                        transform="translate(-15536 9208)" fill="none" stroke="#fff"
                                                        stroke-width="1"/>
                                                <circle id="Ellipse_603" data-name="Ellipse 603" cx="15" cy="50" r="15"
                                                        transform="translate(-15536 9208)" fill="#978c21"/>
                                                <path id="Path_2115" data-name="Path 2115"
                                                      d="M1206.12,104.34l.406-2.652h-2.544v-1.72a1.325,1.325,0,0,1,1.495-1.432h1.157V96.278a14.1,14.1,0,0,0-2.053-.179,3.237,3.237,0,0,0-3.465,3.569v2.021h-2.329v2.652h2.329v6.409h2.866V104.34Z"
                                                      transform="translate(-16723.787 9119.901)" fill="#fff"/>
                                            </g>
                                        </svg>


                                    </a>
                                    </li>
                                    <li><a href={'https://www.instagram.com/shantasecurities/'} target={'_blank'}>


                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                             viewBox="0 0 30 30">


                                            <g id="Group_19435" data-name="Group 19435"
                                               transform="translate(15536 -9208)">
                                                <circle id="Ellipse_602" data-name="Ellipse 602" cx="15" cy="15" r="14"
                                                        transform="translate(-15536 9208)" fill="none" stroke="#fff"
                                                        stroke-width="1"/>
                                                <circle id="Ellipse_603" data-name="Ellipse 603" cx="15" cy="50" r="15"
                                                        transform="translate(-15536 9208)" fill="#978c21"/>


                                            </g>
                                            <g id="Group_1419" data-name="Group 1419" transform="translate(8 8)">

                                                <path id="Path_2109" data-name="Path 2109"
                                                      d="M1095.77,105.945a.854.854,0,1,0,.853.854A.854.854,0,0,0,1095.77,105.945Z"
                                                      transform="translate(-1084.635 -103.346)" fill="#fff"/>
                                                <path id="Path_2110" data-name="Path 2110"
                                                      d="M1082.64,108.605a3.586,3.586,0,1,0,3.586,3.586A3.59,3.59,0,0,0,1082.64,108.605Zm0,5.882a2.3,2.3,0,1,1,2.3-2.3A2.3,2.3,0,0,1,1082.64,114.488Z"
                                                      transform="translate(-1075.301 -104.911)" fill="#fff"/>
                                                <path id="Path_2111" data-name="Path 2111"
                                                      d="M1080.119,114.188h-5.813a4.379,4.379,0,0,1-4.374-4.374V104a4.378,4.378,0,0,1,4.374-4.373h5.813a4.378,4.378,0,0,1,4.374,4.373v5.813A4.379,4.379,0,0,1,1080.119,114.188ZM1074.306,101a3.007,3.007,0,0,0-3,3v5.813a3.007,3.007,0,0,0,3,3h5.813a3.007,3.007,0,0,0,3-3V104a3.007,3.007,0,0,0-3-3Z"
                                                      transform="translate(-1069.932 -99.628)" fill="#fff"/>
                                            </g>
                                        </svg>


                                    </a>
                                    </li>
                                    <li><a href={'https://www.linkedin.com/company/74940628/admin/feed/posts/'} target={'_blank'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                             viewBox="0 0 30 30">
                                            <g id="Group_19435" data-name="Group 19435"
                                               transform="translate(15536 -9208)">
                                                <circle id="Ellipse_602" data-name="Ellipse 602" cx="15" cy="15" r="14"
                                                        transform="translate(-15536 9208)" fill="none" stroke="#fff"
                                                        stroke-width="1"/>
                                                <circle id="Ellipse_603" data-name="Ellipse 603" cx="15" cy="50" r="15"
                                                        transform="translate(-15536 9208)" fill="#978c21"/>


                                            </g>
                                            <g id="linkedin-logotype" transform="translate(8 8)">
                                                <path id="Path_8798" data-name="Path 8798"
                                                      d="M1.456,1.211a1.121,1.121,0,0,1,.875.351,1.355,1.355,0,0,1,.34.881,1.2,1.2,0,0,1-.358.881,1.329,1.329,0,0,1-.98.358H1.317a1.3,1.3,0,0,1-.962-.358A1.208,1.208,0,0,1,0,2.442a1.128,1.128,0,0,1,.391-.884A1.552,1.552,0,0,1,1.456,1.211ZM.156,4.659H2.71v7.173H.156ZM11.943,7.72v4.113H9.39V8a2.076,2.076,0,0,0-.3-1.177,1.114,1.114,0,0,0-1-.443,1.279,1.279,0,0,0-.858.273,1.632,1.632,0,0,0-.463.6,1.044,1.044,0,0,0-.06.265,3.071,3.071,0,0,0-.014.31v4.008H4.126q.016-1.821.017-3.337V6.062c0-.353,0-.654-.01-.9s-.007-.415-.007-.5H6.7V5.675L6.681,5.7H6.7V5.675A2.953,2.953,0,0,1,7,5.283a2.346,2.346,0,0,1,.46-.382,2.622,2.622,0,0,1,.656-.291A3.1,3.1,0,0,1,9,4.5a3.494,3.494,0,0,1,1.166.19,2.392,2.392,0,0,1,.935.6,2.848,2.848,0,0,1,.617,1.007A4.105,4.105,0,0,1,11.943,7.72Z"
                                                      transform="translate(0)" fill="#fff"/>
                                            </g>
                                        </svg>


                                    </a>
                                    </li>
                                    <li><a href={'https://www.youtube.com/@shantasecurities4260'} target={'_blank'}>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                             viewBox="0 0 30 30">

                                            <g id="Group_19435" data-name="Group 19435"
                                               transform="translate(15536 -9208)">
                                                <circle id="Ellipse_602" data-name="Ellipse 602" cx="15" cy="15" r="14"
                                                        transform="translate(-15536 9208)" fill="none" stroke="#fff"
                                                        stroke-width="1"/>
                                                <circle id="Ellipse_603" data-name="Ellipse 603" cx="15" cy="50" r="15"
                                                        transform="translate(-15536 9208)" fill="#978c21"/>


                                            </g>
                                            <path id="Path_2114" data-name="Path 2114"
                                                  d="M1146.9,113.13a2.813,2.813,0,0,0-2.813-2.813h-7.195a2.813,2.813,0,0,0-2.813,2.813v3.348a2.813,2.813,0,0,0,2.813,2.813h7.195a2.813,2.813,0,0,0,2.813-2.813Zm-4.231,1.925-3.226,1.6c-.126.068-.556-.023-.556-.167v-3.276c0-.146.433-.237.56-.165l3.089,1.68C1142.661,114.8,1142.8,114.985,1142.666,115.056Z"
                                                  transform="translate(-1125.074 -99.317)" fill="#fff"/>
                                        </svg>

                                    </a></li>
                                </ul>

                            </Col>
                            <Col md={3}>
                                <div className="content content_notices">
                                    <p>
                                        Trade License No. <br/>
                                        TRAD/DNCC/010650/2022</p>
                                </div>
                            </Col>
                            <Col md={{span: 9}}>
                                <div className="content content_notices m-0">
                                    <p>Shanta Securities Limited as a stock brokerage house, provides investment services. The information provided on this website is only for general information and should not be considered professional financial advice to buy or sell securities.
                                    </p>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </Accordion>
                <div className="footer__bottom">
                    <Container>
                        <Row>
                            <Col md={3} className={'one'}>
                                <p>© {year} Shanta Securities Limited. All Rights Reserved.</p>

                            </Col>
                            <Col md={3} className={'two'}>

                                <p><Link  target={'blank'} href={'https://dcastalia.com'}><a>Design & Developed by Dcastalia</a></Link></p>
                            </Col>
                            <Col md={{span: 2}} className={'three'}>
                                <p><Link href={'/privacy-policy'}><a>Privacy Policy</a></Link></p>
                            </Col>
                            <Col md={{span: 2}} className={'three'}>

                                <p><Link href={'/refund-policy'}><a>Refund Policy</a></Link></p>
                            </Col>
                            <Col md={{span: 2, offset: 0}} className={'four'}>

                                <p><Link href={'/terms-conditions'}><a>Terms & Conditions</a></Link></p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Footer>
        </>
    );
};

const Footer = styled.section`
  background: #3C3C3B;
  position: relative;
  overflow: hidden;

  .content_notices {
    p {
      margin: 0;
      font-size: 12px;
      font-weight: 500;
      line-height: 24px;
      color: rgba(255, 255, 255, 0.5);
    }
  }


  .footer {
    &__top {
      .container {
        position: relative;
        padding: 225px 15px 40px;

        &:before {
          position: absolute;
          left: 0;
          bottom: 0;
          right: 0;
          content: '';
          width: calc(100% - 30px);
          margin: 0 auto;
          height: 1px;
          background: rgba(247, 243, 240, 0.3);
          @media (max-width: 767px) {
            display: none;
          }
        }
      }


      &__info {
        margin-top: 40px;


        p {
          font-size: 16px;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 24px;
          margin-bottom: 40px;

          &:last-child {
            margin-bottom: 0;
          }

          span {
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.5);
            line-height: 24px;
            margin-bottom: 10px;
          }

          a {
            font-size: 16px;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 24px;
          }
        }
      }

      .border {
        border: none !important;
      }

      &__menu {
        p {
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 20px;
        }

        ul {
          li {
            margin-bottom: 15px;

            &:last-child {
              margin-bottom: 0;
            }

            a {
              display: inline-flex;
              align-items: flex-start;
              font-size: 16px;
              font-weight: 400;
              line-height: 24px;
              color: #FFFFFF;

              &:hover {
                color: ${hover} !important;

                p {
                  color: ${hover} !important;
                }

                svg {
                  path {
                    fill: ${hover};
                  }
                }
              }
            }
          }
        }
      }


      .social {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        svg {
          overflow: hidden;
          border-radius: 50%;

          #Ellipse_603, path {
            transition: 1s all cubic-bezier(.25, .74, .22, .99);
          }
        }

        li {
          margin-left: 0px;
          margin-bottom: 20px;

          &:first-child {
            margin-left: 0;
          }

          a {
            &:hover {
              svg {
                #Ellipse_603 {
                  cy: 15px;
                }


              }
            }
          }
        }
      }
    }


    &__bottom {
      padding: 40px 0;
      //background: #5C5550;

      p {
        color: rgba(255, 255, 255, 0.5);
        font-size: 12px;
        line-height: 24px;
        font-weight: 500;
      }

      a {
        color: rgba(255, 255, 255, 0.5);
        font-size: 12px;
        line-height: 24px;
        font-weight: 500;
      }
    }

  }

  //responsive
  .hide-mobile {
    display: none;
  }


  .accordion-item {
    .accordion-header {
      margin: 0;
      padding: 0;
      border: none;
      width: 100%;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(198, 198, 198, 0.5);

      button {
        margin: 0;
        padding: 0;
        border: none;
        background: transparent;
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 20px;
        font-weigt: 500;
        line-height: 28px;
        color: rgba(255, 255, 255, 0.5);

        span {
          svg {
            transition: 1s all cubic-bezier(.25, .74, .22, .99);
          }
        }
      }

      button[aria-expanded="true"] {
        color: rgba(255, 255, 255, 1);

        span {
          svg {
            transform: rotate(90deg);
          }
        }

      }
    }

    .accordion-body {
      padding-top: 20px;
    }
  }


  @media (min-width: 1550px) {
    .fixed-bg-1 {
      top: 100px;

    }

    .footer {
      &__top {

        h2 {
          font-size: 24px;
          font-weight: 500;
          line-height: 30px;
          color: #222222;
          text-transform: uppercase;
          margin: 0 0 20px;
          width: 80%;

          br {
            display: none;
          }
        }

        &__info {
          ul {
            li {


              a {
                font-size: 18px;

              }

              p {
                font-size: 18px;

              }
            }
          }
        }

        &__menu {
          ul {
            li {

              a {
                font-size: 18px;

              }
            }
          }
        }
      }


    }

  }
  @media (max-width: 992px) and (min-width: 768px) {
    #Logo_-_White {
      height: 30px !important;
      width: auto !important;
    }
  }
  @media (min-width: 768px) {
    .footer__bottom {
      position: relative;

      &:after {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 1px;
        width: calc(100% - 60px);
        margin: 0 auto;
      }
    }
  }
  @media (max-width: 767px) {
    .hide-desktop {
      display: none !important;
    }

    .hide-mobile {
      display: block !important;
    }
    .nomargin{
      margin-bottom: 0 !important;
    }


    .footer__bottom {
      padding-top: 20px !important;
    }
    
    .content_notices{
      margin-top: 80px;
      margin-bottom: 20px;
    }

    .footer {
      &__top {
        .container {
          padding: 120px 15px 0px;
        }

        .social {
          align-items: flex-start;
          flex-direction: row;
          //padding-bottom: 40px;
          padding-bottom: 0px;
          //border-bottom: 1px solid rgba(247, 243, 240, 0.3);
          margin-top: 40px;

          li {
            margin-bottom: 0;
            margin-right: 20px;

            &:last-child {
              margin-right: 0;
            }
          }
        }

        .footer__top_col {
          margin-bottom: 40px;
          border: none !important;
          &:last-child{
            margin-bottom: 0;
          }

          &.border {
            .footer__top__menu {
              padding-bottom: 0px;
              //border-bottom: 1px solid rgba(247, 243, 240, 0.3) !important;
              border-top: none !important;
              border-left: none !important;
              border-right: none !important;
            }

          }

          &:last-child {
            margin-bottom: 0;
          }
        }

        h2 {
          br {
            display: none;
          }
        }

        &__info {
          margin-bottom: 80px;

        }

        &__menu {

        }
      }


      &__bottom {
        svg {
          margin-bottom: 40px;
        }

        .text-right {
          margin-top: 10px;
          text-align: left !important;
        }
        
        .three{
          order: 1;
          margin-bottom: 40px;
        }
        
        .one{
          order: 3;
        }
        
        .two{
          order: 4;
        }
        
        .four{
          order: 2;
          margin-bottom: 40px;
        }
      }
    }

    .footer-top-bar {
      .flex {
        flex-direction: column;
        align-items: flex-start;

        .text {
          margin: 0 0 10px;
          font-size: 16px;
          line-height: 18px;
        }
      }
    }
  }

`;



export default React.memo(MyComponent);
