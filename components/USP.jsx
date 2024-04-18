import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {Col, Row} from "react-bootstrap";
import {hover} from "../styles/globalStyleVars";
import reactHtmlParser from "react-html-parser";

const MyComponent = ({data, id, offset}) => {
    const section_data = data?.section_data
    const containerRef = useRef(null);

    return (
        <StyledComponent id={id} offset={offset}  className={'ministry '} >
            <div className={'ministry__container'} ref={containerRef}>
                <Row>
                    <Col  md={{span: 4, offset: 1}} className={'box'}>
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

                        {
                            section_data?.short_desc &&
                            <h3 className={'split-up'}>{reactHtmlParser(section_data?.short_desc)}</h3>


                        }

                    </Col>
                    <Col md={{span: 5, offset: 1}}>
                        {
                            section_data?.description &&
                            reactHtmlParser(section_data?.description)
                        }
                    </Col>
                </Row>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: relative;
background: #f2f2f2;
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 50%;
    bottom: 0;
    background-color: #FFFFFF;
  }

  .ministry__container{
     padding-left: ${props => props.offset + 15}px;
  }

  .ministry__container {
    position: relative;
    z-index: 2;

    .customs-list {
      padding: 0;
      counter-reset: listItem;


      li {

        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        position: relative;
        color: #FFFFFF;

        p{
          font-weight: 500;
          font-size: 20px;
          line-height: 28px;
          position: relative;
          color: #FFFFFF;
          margin: 0 !important;

        }
        padding-left: 62px;

        &:not(:last-child) {
          border-bottom: 1px solid rgba(217, 217, 217, 0.5);
          padding-bottom: 40px;
        }

        &:not(:first-child) {
          padding-top: 40px;

        }

        &:before {
          content: counter(listItem);
          counter-increment: listItem;
          position: absolute;
          top: 55px;
          left: 0;
          //transform: translate(-50%,-50%);
          margin-top: -15px;
          width: 10px;
          height: 10px;
          box-sizing: content-box;
        }

        &:first-child {
          &:before {
            top: 15px !important;
          }
        }
      }

    }

    .row {
      background-color: #3C3C3B;
      padding: 120px 0;
    }
  }

  img {
    height: 100px;
  }

  .col-sm-6 {
    &:not(:nth-last-of-type(1)) {
      margin-bottom: 100px;
    }

  }

  h3 {
    font-size: 44px;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 56px;
    margin-top: 60px;
    color: #FFFFFF;

    span {
      color: ${hover};
    }
  }


  @media (max-width: 767px) {
    h3 {
      font-size: 32px;
      line-height: 40px;
      margin-top: 60px;
      margin-bottom: 60px;

    }

    .ministry__container {
      padding-left: 0 !important;

      .row {
        margin-left: 0 !important;
        margin-right: 0 !important;
      }

      .col-sm-2, .col-sm-7 {
        min-width: 100%;
        margin: 0;
      }

      .col-sm-2 {
        padding: 0 30px !important;
        margin-bottom: 60px;

        img {
          height: 70px;
        }
      }

      .col-sm-6 {
        min-width: 100%;

        &:not(:nth-last-of-type(1)) {
          margin-bottom: 60px;
        }

        h4 {
          font-size: 60px;
          line-height: 60px;
          padding-bottom: 10px;
          margin-bottom: 20px;
          letter-spacing: -4px;

          &:after {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default MyComponent;