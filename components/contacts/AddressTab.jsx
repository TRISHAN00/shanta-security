import React, {useState,memo} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Select from 'react-select'
import {Img} from "../Img";
import {Link} from 'next/link';
import reactHtmlParser from "react-html-parser";


const MyComponent = ({data, id, offset}) => {

    let section_data = data?.posts?.list;


    const [key, setKey] = useState('tab_0');


    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderRadius: 0,
            color: state.isSelected ? '#FFF' : '#221F1F',
            backgroundColor: state.isSelected ? '#191818' : '#FFF',
            margin: 0,
            fontSize: 12,
            cursor: 'pointer',
            paddingLeft: 25
        }), menu: (provided, state) => ({
            ...provided,
            color: '#FFF',
            backgroundColor: state.isSelected ? '#191818' : '#978C21',
            margin: 0,
            borderRadius: 5,
            fontSize: 12,

        }), menuList: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#C4C4C4' : '#FFF',
            borderRadius: 0,
            fontWeight: '600',
            color: '#FFF',
            fontSize: 12,

        }),

    };


    const [selected, setSelected] = useState('');
    const handleChange = event => {
        setSelected(event.value);
        // 80
        document.querySelector('#controlled-tab-example-tab-tab' + event.value).click();
    };

    const options = [
        {value: 'tab_0', label: 'Head Office'},
        {value: 'tab_1', label: 'Dilkusha Branch'},
        {value: 'tab_2', label: 'Chittagong Branch'},
        {value: 'tab_3', label: 'Digital Booth, Motijheel'},

    ];
    const handleResearch = (selectedOption) => {
        setKey(selectedOption);
    };

    return (

        <StyledComponent getoffset={offset} id={`${id ? id : 'AddressTab'}`} offset={offset}
                         className={`addresstab `}>
            <Container fluid>
                <Row>
                    <div className="tab_container">
                        <Col md={12}>

                            <div className="formobile">
                                <Select
                                    placeholder={'Select Location'}
                                    onChange={(e) => handleResearch(e.value)}
                                    styles={{
                                        dropdownIndicator: (provided, state) => ({
                                            ...provided,
                                            transform: state.selectProps.menuIsOpen && "rotate(180deg)"
                                        })
                                    }}
                                    classNamePrefix={'react-select'}
                                    className={'form-select'}
                                    options={options}
                                    theme={(theme) => ({
                                        ...theme,
                                        borderRadius: 0,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#e9e9e9',
                                            primary: 'black',
                                        },
                                    })}
                                />
                            </div>

                            {
                                section_data && section_data?.length > 0 &&

                                <Tabs
                                    id="controlled-tab-example"
                                    activeKey={key}
                                    onSelect={(k) => setKey(k)}

                                >
                                    {
                                        section_data && section_data?.length > 0 &&
                                        section_data?.map((e,index) => {
                                            return(
                                                <Tab eventKey={`tab_${index}`} title={e?.data?.title ? e?.data?.title : ''}>
                                                    <div className="custom_pad row m-0">
                                                        <Col md={3}>
                                                            <span>Visit</span>
                                                            {
                                                                e?.data?.short_desc &&
                                                                <a href={e?.data?.map_url ? e?.data?.map_url : '/'} target={'_blank'}>
                                                                    {
                                                                        reactHtmlParser(e?.data?.short_desc)
                                                                    }
                                                                </a>
                                                            }

                                                        </Col>
                                                        <Col md={3} className={'email-col'}>
                                                            <span>Email</span>
                                                            {
                                                                e?.data?.subtitle &&
                                                                <a href={`mailto:${e?.data?.subtitle}`}>{e?.data?.subtitle}</a>
                                                            }


                                                        </Col>
                                                        <Col md={{span: 3}}>

                                                            <span>Phone</span>
                                                            {
                                                                e?.data?.description &&
                                                                reactHtmlParser(e?.data?.description)
                                                            }

                                                        </Col>
                                                        <Col md={3}>

                                                            <span>Fax</span>
                                                            {
                                                                e?.data?.extra_field &&
                                                                <a href={`tel:${e?.data?.extra_field}`}>{e?.data?.extra_field}</a>

                                                            }

                                                        </Col>
                                                    </div>
                                                    <Row>

                                                        <div className="clearfix"></div>
                                                        <Col md={12} className={'google_map'}>

                                                            <div className={'map_img'}>

                                                                {
                                                                    e?.images?.[0]?.full_path &&
                                                                    <a target={'_blank'} href={e?.map_url?e?.map_url :'/'}>
                                                                        <Img alt={'Shanta Securities Limited'} src={e?.images?.[0]?.full_path}/>

                                                                    </a>
                                                                }

                                                            </div>

                                                        </Col>
                                                    </Row>
                                                </Tab>
                                            )
                                        })
                                    }

                                </Tabs>
                            }


                        </Col>
                    </div>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: relative;
  padding-top: 80px;
  background: #F2F2F2;

  .email-col {
    padding-left: 45px;
  }

  @media (max-width: 992px) {
    overflow: hidden;
  }
  @media (max-width: 767px) {
    .google_map {
      padding: 0;
    }
  }

  .hotline {
    img {
      height: 50px;
    }
  }

  .map_img {
    position: relative;
    padding-top: calc(560 / 1268 * 100%);

    iframe {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      height: 100%;
      width: 100%;
    }
  }

  .formobile {
    display: none;
    @media (max-width: 767px) {
      display: block;
      margin: 0;
      padding: 0;
    }
  }

  &:after {
    height: 40vh;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: #FFF;
    width: 100%;
    z-index: 1;
    content: "";
    @media (max-width: 767px) {
      display: none;
      height: calc(100vh + 10px);
    }
  }

  .container-fluid {
    position: relative;
    z-index: 2;
    margin: 0;
    width: 100%;
    max-width: 100%;
    padding-right: ${props => props.getoffset ? props.getoffset + 'px' : ''};
    padding-left: 0;

    .google_map {
      padding-right: 0;
    }

    @media (max-width: 767px) {
      padding: 0 15px !important;
    }

  }

  .custom_pad {
    padding-left: ${props => props.getoffset ? props.getoffset - 15 + 'px' : ''};

  }

  .tab_container {
    width: 100%;

    .nav-tabs {
      border: none;
      padding-left: ${props => props.getoffset ? props.getoffset + 'px' : ''};

      @media (max-width: 767px) {
        display: none;
      }

      .nav-item {
        border: none;
        margin-right: 20px;

        &:last-child {
          margin-right: 0;
        }

        .nav-link {
          border: 1px solid rgba(60, 60, 59, 0.5);
          height: 45px;
          font-size: 16px;
          font-weight: 500;
          color: #3C3C3B;
          background: transparent;
          border-radius: 25px;
          padding: 0 30px;
          line-height: 45px;
          position: relative;
          transition: 0.8s all cubic-bezier(0.4, 0, 0, 1);
          font-family: 'Avenir';
          overflow: hidden;

          &:after {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: #978C21;
            content: "";
            border-radius: 25px;
            transition: 0.8s all cubic-bezier(0.4, 0, 0, 1);
            transform: translateY(150%);
            z-index: -1;
          }

          &:hover {
            color: #FFFFFF;

            &:after {
              transform: translateY(0);

            }
          }

          &.active {
            color: #FFFFFF;
            background: transparent;

            &:after {
              transform: translateY(0);


            }
          }
        }

      }

    }

    .google_map {
      margin-top: 80px;
    }

    .tab-pane {
      padding-top: 80px;
      @media (max-width: 767px) {
        padding-top: 40px;
        .col-md-3, .col-md-4, .col-md-2 {
          margin-bottom: 40px;
        }

        .col-md-3:last-child {
          margin: 0;
        }
      }

      p, a {
        color: #3C3C3B;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        line-height: 20px;
        display: block;
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      span {
        display: block;
        color: rgba(60, 60, 59, 0.5);
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        margin: 0 0 10px 0;
      }
    }
  }

  .react-select__control{
    border: none !important;
    height: 45px;
    background: #978c21;
    box-shadow: none !important;
    border-radius: 30px;

    .react-select__control--menu-is-open{
      box-shadow: none !important;
      .react-select__indicator{
        padding-right: 15px;

      }
    }
    .react-select__value-container{
      padding:3px 25px 0;
    }
    .react-select__indicator{
      padding: 0px 15px ;

      svg{
        path{
          fill: white;
          stroke-width: 0;
        }
      }
    }
    .react-select__indicator-separator{
      display: none;
    }
    .react-select__single-value{
      font-family: 'Avenir' !important;
      font-size: 16px !important;
      font-weight: 500 !important;
      line-height: 24px !important;
      color: #FFFFFF !important;
    }
    .select__single-value, .react-select__placeholder{
      font-family: 'Avenir' !important;
      font-size: 16px !important;
      font-weight: 500 !important;
      line-height: 24px !important;
      color: #FFFFFF !important;
    }
    .react-select__input-container{
      .react-select__input{
        font-family: 'Avenir' !important;
        font-size: 16px !important;
        font-weight: 500 !important;
        line-height: 24px !important;
        color: #FFFFFF !important;
      }
    }
  }


  @media (max-width: 993px) {
    .nav-tabs {
      padding-left: 60px !important;
      gap: 30px;
    }

    .custom_pad {
      padding-left: 60px;

      > div {
        max-width: 50%;
      }
    }
  }


  @media (max-width: 993px) {
    .nav-tabs {
      padding-left: 15px !important;
      gap: 30px;
    }

    .custom_pad {
      padding-left: 0px;

      > div {
        padding-left: 0px;
        padding-right: 0px;
        max-width: 100%;
      }
    }
  }

`;

export default React.memo(MyComponent);