import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Img} from "../Img";
import {hover} from "../../styles/globalStyleVars";
import title from "../Title";
import ButtonSubmit from "../Button";
import React, {useEffect, useState, useRef} from "react";
import Select from "react-select";
import reactHtmlParser from "react-html-parser";
import {Link, useLocation} from "react-router-dom";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import ExpertList from "../research-expert/ExpertList";
import Button from "../ButtonLoadMore";
import {useDispatch, useSelector} from "react-redux";

import PopupV1 from "../PopupV1";
import DateRangePicker, {Stack} from 'rsuite/DateRangePicker';
import 'rsuite/dist/rsuite.css';
import {ApiServices} from "../../pages/api/network/ApiServices";
import {fetchResearch} from "../../pages/api/redux/research";

const RandomSliderV1 = ({offset, data, filter}) => {
    const [activeTab, setActiveTab] = useState('report');
    const [activeTabReports, setActiveReports] = useState('economy');
    const [activeTabDashboard, setActiveDashboard] = useState('economic_dashboard');
    const [height, setHeight] = useState();
    const [filterD, setFilterD] = useState(false);
    const dateRangePickerRef = useRef(null);
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const dispatch = useDispatch()
    const [currentReport, setCurrentReport] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [showData, setShowData] = useState('');
    const handleResearch = (e, id) => {
        setVisibleItems(6)

        setActiveTab(e);
        if (id) {
            let api_url_search = ApiServices.REARCHLISTCAT + '?type=' + id;
            dispatch(fetchResearch([api_url_search]));
        }
    }
    const handleClick = (tab, id) => {
        setVisibleItems(6)
        if (id) {
            let api_url_search = ApiServices.REARCHLISTCAT + '?type=' + id;
            dispatch(fetchResearch([api_url_search]));
        }
        gsap.registerPlugin(ScrollTrigger);
        setActiveTab(tab); // Assuming you have a function to handle tab activation

        // Update the URL hash to reflect the selected tab
        window.location.hash = `${tab}`;
        if (tab === 'report') {
            handleClickReports('economy', 1)

        }
        // setTimeout(() => {
        //     ScrollTrigger.refresh();
        //
        //     // After you have fetched the data and updated the DOM, reinitialize the GSAP animations
        //     setupAnimations();
        // }, 300);
        // handleClickReports('economy',1)
    };
    const handleClickReports = (tab, id) => {
        setVisibleItems(6)

        if (id) {
            let api_url_search = ApiServices.REARCHLISTCAT + '?type=' + id + '&timestamp=' + Date.now();
            dispatch(fetchResearch([api_url_search]));
        }
        setCurrentReport(id)
        gsap.registerPlugin(ScrollTrigger);
        setActiveReports(tab);
        setComming(false)
        if (dateRangePickerRef.current) {
            dateRangePickerRef?.current?.close(true)
            setDateRange('')
        }
        setFilterD(false)

        if (id == 2) {
            // Update the filterCustom array with new values
            const updatedFilterCustom = [
                {value: '4', label: 'Daily Market Update'},
                {value: '5', label: 'Weekly Market Update'},
            ];

            // Update the state with the new filterCustom array
            setFilterCustom(updatedFilterCustom);
            setSelectedFilter(null);
        }
        if (id == 1) {
            // Update the filterCustom array with new values
            const updatedFilterCustom = [
                {value: '1', label: 'Fiscal Policy'},
                {value: '2', label: 'Money Market Update'},
                {value: '3', label: 'Macro-Regular update'}
            ];

            // Update the state with the new filterCustom array
            setFilterCustom(updatedFilterCustom);
            setSelectedFilter(null);
        }
        if (id == 3) {
            // Update the filterCustom array with new values
            const updatedFilterCustom = [
                {value: '6', label: 'FMCG'},
                {value: '7', label: 'Pharma'},
                {value: '8', label: 'Financials'},
                {value: '9', label: 'Telecom'},
                {value: '10', label: 'Market and Others'}
            ];

            // Update the state with the new filterCustom array
            setFilterCustom(updatedFilterCustom);
            setSelectedFilter(null);
        }
        if (id == 4) {
            // Update the filterCustom array with new values
            const updatedFilterCustom = [
                {value: '11', label: 'Initiation Coverage'},
                {value: '12', label: 'Valuation Update'},
                {value: '13', label: 'Flash Notes and Earnings Update'}
            ];

            // Update the state with the new filterCustom array
            setFilterCustom(updatedFilterCustom);
            setSelectedFilter(null);
        }


        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 900);


    }
    const handleClickDashboard = (tab) => {
        setVisibleItems(6)

        gsap.registerPlugin(ScrollTrigger);
        setActiveDashboard(tab)
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 300);
    }


    // blog-slider__slider-wrap
    useEffect(() => {
        let heightblog = document.querySelector('.blog-slider__slider-wrap')?.clientHeight;

        setHeight(heightblog)

    })
    const DropdownOption = [
        {value: 'report', label: 'Reports'},
        {value: 'dashboard', label: 'Dashboard'},
        {value: 'news_flash', label: 'News Flash', id: 6},
        {value: 'blog', label: 'Blog'},
        {value: 'expert', label: 'Research Experts'},
    ];
    const handleReport = (e, id) => {
        if (id) {
            let api_url_search = ApiServices.REARCHLISTCAT + '?type=' + id;
            dispatch(fetchResearch([api_url_search]));
        }
        setCurrentReport(id)
        setActiveReports(e);
        setFilterD(true)
        setDateRange(null)
        const cleanButton = document.querySelector('.rs-picker-toggle-clean');
        cleanButton && cleanButton.click();


        setComming(false)
        if (dateRangePickerRef.current) {
            dateRangePickerRef?.current?.close(true)
            setDateRange('')
        }
        setFilterD(false)


        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 300);

    }
    const DropdownOptionReports = [
        {value: 'economy', label: 'Economy', id: 1},
        {value: 'market', label: 'Market Review', id: 2},
        {value: 'company', label: 'Company Review', id: 4},
        {value: 'sector', label: 'Strategy Report', id: 3},
    ];
    const handleDashboard = (e) => {
        if (e?.id) {
            let api_url_search = ApiServices.REARCHLISTCAT + '?type=' + e?.id;
            dispatch(fetchResearch([api_url_search]));
        }

        setActiveDashboard(e);
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 300);

    }
    const DropdownOptionDasboard = [
        {value: 'economic_dashboard', label: 'Economy Dashboard'},
        {value: 'company_dashboard', label: 'Company Dashboard'}
    ];
    const [filterCustom, setFilterCustom] = useState([
        {value: '1', label: 'Fiscal Policy'},
        {value: '2', label: 'Money Market Update'},
        {value: '3', label: 'Macro-Regular update'}
    ]);
    const [state, setState] = useState('1');
    useEffect(() => {

        let api_url_search = ApiServices.REARCHLISTCAT + '?type=' + state;

        dispatch(fetchResearch([api_url_search]))


    }, [])
    let researchCategories = useSelector((state) => state.researchReducer); // Assuming 'research' is the reducer for the second API call.


    // date wise filter
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const formatDate = (date) => {
        // Helper function to format the date as yyyy-mm-dd.
        return date.toISOString().slice(0, 10);
    };
    const handleSelect = (dates) => {
        let start = formatDate(dates?.[0])
        let end = formatDate(dates?.[1])

        setDateRange(dates);
        let api_url_search = ApiServices.REARCHLISTCAT + '?type=' + currentReport + '&start_date=' + start + '&end_date=' + end;
        dispatch(fetchResearch([api_url_search]));

        setFilterD(true)
    };
    const handleFocus = () => {
        // Set body overflow to hidden on focus
        document.body.style.overflow = 'hidden';
        const html = document.querySelector('html')
        html.style.overflow = 'hidden';
    };
    const handleBlur = () => {
        // Revert body overflow to its original value on blur
        document.body.style.overflow = 'auto';
        const html = document.querySelector('html')
        html.style.overflow = 'auto';

    };
    const renderDateRangeInput = (value, placeholder) => {
        // Custom render function to set the placeholder for the input field
        return <input type="text" readOnly value={value} placeholder={placeholder}/>;
    };


    const handleFilter = (e, report) => {


        setSelectedFilter(e?.label);
        // document?.querySelector('.no_data').classList?.remove('active')
        let data = null;
        if (report === 'economy') {
            data = 1
        }
        if (report === 'market') {
            data = 2
        }
        if (report === 'sector') {
            data = 3
        }
        if (report === 'company') {
            data = 4
        }

        if (e, report) {
            let api_url_search = ApiServices.REARCHLISTCAT + '?type=' + data + '&filter=' + e?.value + '&timestamp=' + Date.now();
            dispatch(fetchResearch([api_url_search]));
        }
        // setCurrentReport(data)
        gsap.registerPlugin(ScrollTrigger);
        // setActiveReports(data);
        if (dateRangePickerRef.current) {
            dateRangePickerRef?.current?.close(true)
            setDateRange('')
        }



        if (activeTabReports === 'economy') {
            // Update the filterCustom array with new values
            const updatedFilterCustom = [
                {value: '1', label: 'Fiscal Policy'},
                {value: '2', label: 'Money Market Update'},
                {value: '3', label: 'Macro-Regular update'}
            ];

            // Update the state with the new filterCustom array
            setFilterCustom(updatedFilterCustom);
            setSelectedFilter(null); // Clear the selected value
        }

        if (activeTabReports === 'market') {
            // Update the filterCustom array with new values
            const updatedFilterCustom = [
                {value: '4', label: 'Daily Market Update'},
                {value: '5', label: 'Weekly Market Update'},
            ];

            // Update the state with the new filterCustom array
            setFilterCustom(updatedFilterCustom);
            setSelectedFilter(null); // Clear the selected value
        }
        if (activeTabReports === 'sector') {
            // Update the filterCustom array with new values
            const updatedFilterCustom = [
                {value: '6', label: 'FMCG'},
                {value: '7', label: 'Pharma'},
                {value: '8', label: 'Financials'},
                {value: '9', label: 'Telecom'},
                {value: '10', label: 'Market and Others'}
            ];

            // Update the state with the new filterCustom array
            setFilterCustom(updatedFilterCustom);
            setSelectedFilter(null); // Clear the selected value
        }
        if (activeTabReports === 'company') {
            // Update the filterCustom array with new values
            const updatedFilterCustom = [
                {value: '11', label: 'Initiation Coverage'},
                {value: '12', label: 'Valuation Update'},
                {value: '13', label: 'Flash Notes and Earnings Update'}
            ];

            // Update the state with the new filterCustom array
            setFilterCustom(updatedFilterCustom);
            setSelectedFilter(null); // Clear the selected value
        }
        setFilterD(true)

        // setTimeout(() => {
        //     const item2 = document?.querySelector('.no_data');
        //     if (filterD === true &&item2) {
        //
        //         setComming(true)
        //         item2.style.opacity = '1'
        //     }
        //     ScrollTrigger.refresh();
        // }, 900);


    }


    filter =  filter ? filter : researchCategories?.researchFilter?.data ;


    const [comming, setComming] = useState(false);

    useEffect(() => {
        if (filter?.length === 0) { // Check for an empty array
            setComming(true);
        } else {
            setComming(false);
        }
    }, [filter]);

    useEffect(() => {
        const buttonClickClose = document.querySelector('.rs-btn-close')
        if (buttonClickClose?.length > 0) {
            buttonClickClose.addEventListener('click', function (e) {
            })
        }

    }, [])

    const [visibleItems, setVisibleItems] = useState(6); // Number of items initially visible
    const itemsPerPage = 6; // Number of items to load per click

    const loadMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerPage);
    };



    // on page load go down
    // const location = useLocation();



    useEffect(() => {
        const urlhas = location.hash;
        if (urlhas) {
            const cleanedHash = urlhas.replace('#', ''); // Remove # from the hash value
            handleClick(cleanedHash)
        }
    }, []);

    return (
        <StyledBlog offset={offset} id={'blog-slider'} className='blog-slider  pb-160'>

            <Container>
                <Row>
                    <Col md={12} className={'filter filter_new_design'}>
                        <ul className={'desktop'}>
                            <li className={activeTab === 'report' ? 'active' : ''} id="report"
                                onClick={() => handleClick('report')}>
                                <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'} width={'100'}
                                              text={'Reports'} color={'#3C3C3B'}
                                              hoverBackground={hover}
                                              background={'transparent'}/>
                            </li>

                            <li className={activeTab === 'dashboard' ? 'active' : ''} id="dashboard"
                                onClick={() => handleClick('dashboard')}>
                                <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'} width={'100'}
                                              text={'Dashboard'} color={'#3C3C3B'}
                                              hoverBackground={hover}
                                              background={'transparent'}/>
                            </li>
                            <li className={activeTab === 'news_flash' ? 'active' : ''} id="news_flash"
                                onClick={() => handleClick('news_flash', 6)}>
                                <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'} width={'100'}
                                              text={'News Flash'} color={'#3C3C3B'}
                                              hoverBackground={hover}
                                              background={'transparent'}/>
                            </li>
                            <li className={activeTab === 'blog' ? 'active' : ''} id="blog"
                                onClick={() => handleClick('blog')}>
                                <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'} width={'100'}
                                              text={'Blog'} color={'#3C3C3B'}
                                              hoverBackground={hover}
                                              background={'transparent'}/>
                            </li>
                            <li className={activeTab === 'expert' ? 'active' : ''} id="expert"
                                onClick={() => handleClick('expert')}>
                                <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'} width={'100'}
                                              text={'Research Experts'} color={'#3C3C3B'}
                                              hoverBackground={hover}
                                              background={'transparent'}/>
                            </li>
                        </ul>
                        <div className="mobile">
                            <Select
                                placeholder={'Reports'}
                                onChange={(e) => handleResearch(e.value, e?.id)}
                                styles={{
                                    dropdownIndicator: (provided, state) => ({
                                        ...provided,
                                        transform: state.selectProps.menuIsOpen && "rotate(180deg)"
                                    })
                                }}
                                classNamePrefix={'react-select'}
                                className={'form-select'}
                                options={DropdownOption}
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
                    </Col>
                </Row>


                <div className="min-height-box">


                    {/*main tab start */}


                    {
                        filter && filter.length > 0 &&
                        <div data-tab={'news_flash'}
                             className={` fade-up blog-slider__slider-wrap ${activeTab === 'news_flash' ? 'active' : ''}`}>
                            <div className="blog-slider__slider-wrap__inner row">
                                {
                                    filter.slice(0, visibleItems).map((e, index) => {
                                        const dateString = e?.date;
                                        const date = new Date(dateString);
                                        const options1 = {day: 'numeric'};
                                        const options2 = {month: 'long', year: 'numeric'};
                                        const formattedDate1 = date.toLocaleDateString('en-US', options1);
                                        const formattedDate2 = date.toLocaleDateString('en-US', options2);
                                        return (
                                            <Col md={4} className={'blog-single-single-wrp'}>
                                                <div className='blog-single '>
                                                    <div className="blog-single__inner">
                                                        {
                                                            e?.attachment &&
                                                            <a href={e?.attachment}
                                                               target={'_blank'}></a>

                                                        }
                                                        <Img alt={'Shanta Securities Limited'}
                                                            src={e?.thumb ? e?.thumb : 'images/static/report.jpg'}
                                                            objectFit={'cover'} layout={'fill'}/>

                                                        <div className="blog-single__inner__content">
                                                            <div
                                                                className="blog-single__inner__content__top">
                                                                <div className="hover-content">
                                                                    {
                                                                        e?.subtitle &&
                                                                        <p>{reactHtmlParser(e?.subtitle)}</p>

                                                                    }
                                                                    {
                                                                        e?.attachment &&
                                                                        <a className={'link-dc'}
                                                                           href={e?.attachment}
                                                                           target={'_blank'}>Read More</a>

                                                                    }

                                                                </div>
                                                                {
                                                                    e?.title &&
                                                                    <h2>{reactHtmlParser(e?.title)}</h2>
                                                                }

                                                            </div>
                                                            <div
                                                                className="blog-single__inner__content__bottom">
                                                                {
                                                                    dateString &&
                                                                    <h4>{formattedDate1}</h4>
                                                                }
                                                                <p>
                                                                    {
                                                                        dateString &&
                                                                        reactHtmlParser(formattedDate2)
                                                                    }

                                                                    <span>News Flash</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                        )
                                    })
                                }


                            </div>
                            {visibleItems < filter.length && (
                                <Row>
                                    <Col onClick={loadMore} className={'text-center load'} md={12}>
                                        <Button icon nolink color={'#3C3C3B'} hoverColor={'#3C3C3B'} text={'Load More'} />
                                    </Col>
                                </Row>
                            )}
                        </div>

                    }


                    <div data-tab={'blog'}
                         className={` blog-tab  blog-slider__slider-wrap ${activeTab === 'blog' ? 'active' : ''}`}>
                        <div className="blog-slider__slider-wrap__inner row">
                            {
                                data?.blog?.length > 0 ?
                                    data?.blog?.map((e, index) => {
                                        const dateString = e?.data?.created_at;
                                        const date = new Date(dateString);
                                        const options1 = {day: 'numeric'};
                                        const options2 = {month: 'long', year: 'numeric'};
                                        const formattedDate1 = date.toLocaleDateString('en-US', options1);
                                        const formattedDate2 = date.toLocaleDateString('en-US', options2);
                                        return (
                                            <Col md={4} className={'blog-single-single-wrp'}>
                                                <div className='blog-single '>
                                                    <div className="blog-single__inner">
                                                        {
                                                            e?.data?.slug &&
                                                            <Link to={`blog/${e?.data?.slug}`}></Link>

                                                        }

                                                        {
                                                            e?.images?.list?.[0]?.full_path &&
                                                            <Img alt={'Shanta Securities Limited'}
                                                                src={e?.images?.list?.[0]?.full_path ? e?.images?.list?.[0]?.full_path : 'images/static/report.jpg'}
                                                                objectFit={'cover'} layout={'fill'}/>
                                                        }

                                                        <div className="blog-single__inner__content">
                                                            <div className="blog-single__inner__content__top">
                                                                <div className="hover-content">
                                                                    {
                                                                        e?.data?.body &&
                                                                        <p>{reactHtmlParser(e?.data?.body)}</p>

                                                                    }

                                                                    {
                                                                        e?.data?.slug &&
                                                                        <Link className={'link-dc'}
                                                                              to={`blog/${e?.data?.slug}`}></Link>

                                                                    }
                                                                </div>
                                                                {
                                                                    e?.data?.title &&
                                                                    <h2>{reactHtmlParser(e?.data?.title)}</h2>
                                                                }

                                                            </div>
                                                            <div className="blog-single__inner__content__bottom">

                                                                {
                                                                    e?.category?.category_data?.title &&
                                                                    <h4>{e?.category?.category_data?.title}</h4>


                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })
                                    :
                                    <div className={'col-md-12 commingsoon'}><h3>Coming Soon</h3></div>

                            }

                        </div>
                    </div>


                    <div data-tab={'report'}
                         className={` extramargin  blog-slider__slider-wrap ${activeTab === 'report' ? 'active' : ''}`}>
                        <div className="blog-slider__slider-wrap__inner row">
                            <Col md={12} className={'filter'}>
                                <ul className={'desktop'}>

                                    <li className={activeTabReports === 'economy' ? 'active' : ''} id="economy"
                                        onClick={() => handleClickReports('economy', 1)}>
                                        <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'}
                                                      width={'100'}
                                                      text={'Economy'} color={'#3C3C3B'}
                                                      hoverBackground={hover}
                                                      background={'transparent'}/>
                                    </li>


                                    <li className={activeTabReports === 'market' ? 'active' : ''} id="market"
                                        onClick={() => handleClickReports('market', 2)}>
                                        <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'} width={'100'}
                                                      text={'Market Review'} color={'#3C3C3B'}
                                                      hoverBackground={hover}
                                                      background={'transparent'}/>
                                    </li>
                                    <li className={activeTabReports === 'sector' ? 'active' : ''} id="sector"
                                        onClick={() => handleClickReports('sector', 3)}>
                                        <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'} width={'100'}
                                                      text={'Strategy Report'} color={'#3C3C3B'}
                                                      hoverBackground={hover}
                                                      background={'transparent'}/>
                                    </li>
                                    <li className={activeTabReports === 'company' ? 'active' : ''} id="company"
                                        onClick={() => handleClickReports('company', 4)}>
                                        <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'} width={'100'}
                                                      text={'Company Review'} color={'#3C3C3B'}
                                                      hoverBackground={hover}
                                                      background={'transparent'}/>
                                    </li>


                                </ul>
                                <div className="mobile">
                                    <Select
                                        placeholder={'Select Reports'}
                                        onChange={(e) => handleReport(e.value, e?.id)}
                                        styles={{
                                            dropdownIndicator: (provided, state) => ({
                                                ...provided,
                                                transform: state.selectProps.menuIsOpen && "rotate(180deg)"
                                            })
                                        }}
                                        classNamePrefix={'react-select'}
                                        className={'form-select'}
                                        options={DropdownOptionReports}
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
                            </Col>

                            <Col md={12}>
                                <div className="date date_wise_filter">
                                    <div className="flex">
                                        <div className="title">
                                            <h6>Filter by Topic</h6>
                                        </div>
                                        <div className="filter custom_filter">
                                            <Select
                                                placeholder={selectedFilter ?  selectedFilter : 'Select Topic'}
                                                onChange={(e) => handleFilter(e, activeTabReports)}
                                                styles={{
                                                    dropdownIndicator: (provided, state) => ({
                                                        ...provided,
                                                        transform: state.selectProps.menuIsOpen && "rotate(180deg)"
                                                    })
                                                }}

                                                classNamePrefix={'react-select'}
                                                className={'form-select'}
                                                options={filterCustom}
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
                                    </div>
                                    <div className="flex">
                                        <div className="title">
                                            <h6>Filter by Date</h6>
                                        </div>
                                        <form onSubmit="">

                                            <div className="rs-container">
                                                <DateRangePicker editable={true} ref={dateRangePickerRef}
                                                                 cleanable={false}
                                                                 onChange={handleSelect}
                                                                 onFocus={handleFocus} showMeridian
                                                                 onBlur={handleBlur} character={' to '} value={''}
                                                                 placement={'auto'}
                                                                 placeholder={'Start Date to End Date'}/>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Col>

                            {/*reports tab */}
                            <div className="min-height-box">
                                <div data-tab={'economy'}
                                     className={`  blog-slider__slider-wrap ${activeTabReports === 'economy' ? 'active' : ''}`}>
                                    <div className="blog-slider__slider-wrap__inner row">
                                        {
                                            filter?.map((e, index) => {
                                                const dateString = e?.date;
                                                const date = new Date(dateString);
                                                const options1 = {day: 'numeric'};
                                                const options2 = {month: 'long', year: 'numeric'};
                                                const formattedDate1 = date.toLocaleDateString('en-US', options1);
                                                const formattedDate2 = date.toLocaleDateString('en-US', options2);
                                                return (
                                                    <Col md={4} className={'blog-single-single-wrp'}>
                                                        <div className='blog-single '>
                                                            <div className="blog-single__inner">
                                                                {
                                                                    e?.attachment &&
                                                                    <a href={e?.attachment}
                                                                       target={'_blank'}></a>

                                                                }
                                                                <Img alt={'Shanta Securities Limited'}
                                                                    src={'images/static/report.jpg'}
                                                                    objectFit={'cover'} layout={'fill'}/>

                                                                <div className="blog-single__inner__content">
                                                                    <div
                                                                        className="blog-single__inner__content__top">
                                                                        <div className="hover-content">
                                                                            {
                                                                                e?.subtitle &&
                                                                                <p>{reactHtmlParser(e?.subtitle)}</p>

                                                                            }
                                                                            {
                                                                                e?.attachment &&
                                                                                <a className={'link-dc'}
                                                                                   href={e?.attachment}
                                                                                   target={'_blank'}>Read More</a>

                                                                            }

                                                                        </div>
                                                                        {
                                                                            e?.title &&
                                                                            <h2>{reactHtmlParser(e?.title)}</h2>
                                                                        }

                                                                    </div>
                                                                    <div
                                                                        className="blog-single__inner__content__bottom">
                                                                        {
                                                                            dateString &&
                                                                            <h4>{formattedDate1}</h4>
                                                                        }
                                                                        <p>
                                                                            {
                                                                                dateString &&
                                                                                reactHtmlParser(formattedDate2)
                                                                            }

                                                                            <span>Economy</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>

                                                )
                                            })
                                        }



                                    </div>

                                </div>
                                <div data-tab={'market'}
                                     className={`  blog-slider__slider-wrap ${activeTabReports === 'market' ? 'active' : ''}`}>
                                    <div className="blog-slider__slider-wrap__inner row">
                                        {
                                            filter?.map((e, index) => {
                                                const dateString = e?.date;
                                                const date = new Date(dateString);
                                                const options1 = {day: 'numeric'};
                                                const options2 = {month: 'long', year: 'numeric'};
                                                const formattedDate1 = date.toLocaleDateString('en-US', options1);
                                                const formattedDate2 = date.toLocaleDateString('en-US', options2);
                                                return (
                                                    <Col md={4} className={'blog-single-single-wrp'}>
                                                        <div className='blog-single '>
                                                            <div className="blog-single__inner">
                                                                {
                                                                    e?.attachment &&
                                                                    <a href={e?.attachment}
                                                                       target={'_blank'}></a>

                                                                }
                                                                <Img alt={'Shanta Securities Limited'}
                                                                    src={'images/static/report.jpg'}
                                                                    objectFit={'cover'} layout={'fill'}/>

                                                                <div className="blog-single__inner__content">
                                                                    <div
                                                                        className="blog-single__inner__content__top">
                                                                        <div className="hover-content">
                                                                            {
                                                                                e?.subtitle &&
                                                                                <p>{reactHtmlParser(e?.subtitle)}</p>

                                                                            }
                                                                            {
                                                                                e?.attachment &&
                                                                                <a className={'link-dc'}
                                                                                   href={e?.attachment}
                                                                                   target={'_blank'}>Read More</a>

                                                                            }

                                                                        </div>
                                                                        {
                                                                            e?.title &&
                                                                            <h2>{reactHtmlParser(e?.title)}</h2>
                                                                        }

                                                                    </div>
                                                                    <div
                                                                        className="blog-single__inner__content__bottom">
                                                                        {
                                                                            dateString &&
                                                                            <h4>{formattedDate1}</h4>
                                                                        }
                                                                        <p>
                                                                            {
                                                                                dateString &&
                                                                                reactHtmlParser(formattedDate2)
                                                                            }

                                                                            <span>Market Review</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>

                                                )
                                            })
                                        }

                                    </div>
                                </div>
                                <div data-tab={'sector'}
                                     className={`  blog-slider__slider-wrap ${activeTabReports === 'sector' ? 'active' : ''}`}>
                                    <div className="blog-slider__slider-wrap__inner row">
                                        {
                                            filter?.map((e, index) => {
                                                const dateString = e?.date;
                                                const date = new Date(dateString);
                                                const options1 = {day: 'numeric'};
                                                const options2 = {month: 'long', year: 'numeric'};
                                                const formattedDate1 = date.toLocaleDateString('en-US', options1);
                                                const formattedDate2 = date.toLocaleDateString('en-US', options2);
                                                return (
                                                    <Col md={4} className={'blog-single-single-wrp'}>
                                                        <div className='blog-single '>
                                                            <div className="blog-single__inner">
                                                                {
                                                                    e?.attachment &&
                                                                    <a href={e?.attachment}
                                                                       target={'_blank'}></a>

                                                                }
                                                                <Img alt={'Shanta Securities Limited'}
                                                                    src={'images/static/report.jpg'}
                                                                    objectFit={'cover'} layout={'fill'}/>

                                                                <div className="blog-single__inner__content">
                                                                    <div
                                                                        className="blog-single__inner__content__top">
                                                                        <div className="hover-content">
                                                                            {
                                                                                e?.subtitle &&
                                                                                <p>{reactHtmlParser(e?.subtitle)}</p>

                                                                            }
                                                                            {
                                                                                e?.attachment &&
                                                                                <a className={'link-dc'}
                                                                                   href={e?.attachment}
                                                                                   target={'_blank'}>Read More</a>

                                                                            }

                                                                        </div>
                                                                        {
                                                                            e?.title &&
                                                                            <h2>{reactHtmlParser(e?.title)}</h2>
                                                                        }

                                                                    </div>
                                                                    <div
                                                                        className="blog-single__inner__content__bottom">
                                                                        {
                                                                            dateString &&
                                                                            <h4>{formattedDate1}</h4>
                                                                        }
                                                                        <p>
                                                                            {
                                                                                dateString &&
                                                                                reactHtmlParser(formattedDate2)
                                                                            }

                                                                            <span>Strategy Report</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>

                                                )
                                            })
                                        }

                                    </div>

                                </div>
                                <div data-tab={'company'}
                                     className={`  blog-slider__slider-wrap ${activeTabReports === 'company' ? 'active' : ''}`}>
                                    <div className="blog-slider__slider-wrap__inner row">
                                        {
                                            filter?.map((e, index) => {
                                                const dateString = e?.date;
                                                const date = new Date(dateString);
                                                const options1 = {day: 'numeric'};
                                                const options2 = {month: 'long', year: 'numeric'};
                                                const formattedDate1 = date.toLocaleDateString('en-US', options1);
                                                const formattedDate2 = date.toLocaleDateString('en-US', options2);
                                                return (
                                                    <Col md={4} className={'blog-single-single-wrp'}>
                                                        <div className='blog-single '>
                                                            <div className="blog-single__inner">
                                                                {
                                                                    e?.attachment &&
                                                                    <a href={e?.attachment}
                                                                       target={'_blank'}></a>

                                                                }
                                                                <Img alt={'Shanta Securities Limited'}
                                                                    src={'images/static/report.jpg'}
                                                                    objectFit={'cover'} layout={'fill'}/>

                                                                <div className="blog-single__inner__content">
                                                                    <div
                                                                        className="blog-single__inner__content__top">
                                                                        <div className="hover-content">
                                                                            {
                                                                                e?.subtitle &&
                                                                                <p>{reactHtmlParser(e?.subtitle)}</p>

                                                                            }
                                                                            {
                                                                                e?.attachment &&
                                                                                <a className={'link-dc'}
                                                                                   href={e?.attachment}
                                                                                   target={'_blank'}>Read More</a>

                                                                            }

                                                                        </div>
                                                                        {
                                                                            e?.title &&
                                                                            <h2>{reactHtmlParser(e?.title)}</h2>
                                                                        }

                                                                    </div>
                                                                    <div
                                                                        className="blog-single__inner__content__bottom">
                                                                        {
                                                                            dateString &&
                                                                            <h4>{formattedDate1}</h4>
                                                                        }
                                                                        <p>
                                                                            {
                                                                                dateString &&
                                                                                reactHtmlParser(formattedDate2)
                                                                            }

                                                                            <span>Company Review</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>

                                                )
                                            })
                                        }



                                    </div>
                                </div>

                                <div className={`no_data ${filter?.length === 0 ||filter?.length === undefined ? 'active' : ''}`}>
                                    <h3>Coming Soon</h3>
                                </div>

                            </div>

                            {/*reports tab */}

                        </div>
                    </div>


                    <div data-tab={'dashboard'}
                         className={` extramargin  blog-slider__slider-wrap ${activeTab === 'dashboard' ? 'active' : ''}`}>
                        <div className="blog-slider__slider-wrap__inner row">
                            <Col md={12} className={'filter'}>
                                <ul className={'desktop'}>
                                    <li className={activeTabDashboard === 'economic_dashboard' ? 'active' : ''}
                                        id="economic_dashboard"
                                        onClick={() => handleClickDashboard('economic_dashboard')}>
                                        <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'} width={'100'}
                                                      text={'Economic Dashboard'} color={'#3C3C3B'}
                                                      hoverBackground={hover}
                                                      background={'transparent'}/>
                                    </li>
                                    <li className={activeTabDashboard === 'company_dashboard' ? 'active' : ''}
                                        id="company_dashboard"
                                        onClick={() => handleClickDashboard('company_dashboard')}>
                                        <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'} width={'100'}
                                                      text={'Company Dashboard'} color={'#3C3C3B'}
                                                      hoverBackground={hover}
                                                      background={'transparent'}/>
                                    </li>

                                </ul>
                                <div className="mobile">
                                    <Select
                                        placeholder={'Select Dashboard'}
                                        onChange={(e) => handleDashboard(e.value)}
                                        styles={{
                                            dropdownIndicator: (provided, state) => ({
                                                ...provided,
                                                transform: state.selectProps.menuIsOpen && "rotate(180deg)"
                                            })
                                        }}
                                        classNamePrefix={'react-select'}
                                        className={'form-select'}
                                        options={DropdownOptionDasboard}
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
                            </Col>


                            {/*dashboard tab */}
                            <div className="min-height-box">
                                <div data-tab={'economic_dashboard'}
                                     className={`  blog-slider__slider-wrap ${activeTabDashboard === 'economic_dashboard' ? 'active' : ''}`}>

                                    <Col md={12}>
                                        <h3>Coming Soon</h3>
                                    </Col>
                                </div>
                                <div data-tab={'company_dashboard'}
                                     className={`blog-slider__slider-wrap ${activeTabDashboard === 'company_dashboard' ? 'active' : ''}`}>
                                    <Col md={12}>
                                        <h3>Coming Soon</h3>

                                    </Col>
                                </div>

                            </div>
                            {/*dashboard tab */}
                        </div>
                    </div>


                    <div data-tab={'expert'}
                         className={`  blog-slider__slider-wrap ${activeTab === 'expert' ? 'active' : ''}`}>
                        <ExpertList data={data?.expert}/>


                        {/*{*/}
                        {/*    data?.expert?.length > 10 &&*/}
                        {/*    <Row>*/}
                        {/*        <Col className={'text-center load'} md={12}>*/}
                        {/*            <Button icon src={'/'} color={'#3C3C3B'} hoverColor={'#3C3C3B'}*/}
                        {/*                    text={'Learn More'}/>*/}

                        {/*        </Col>*/}
                        {/*    </Row>*/}
                        {/*}*/}
                    </div>
                    {/*main tab end */}


                </div>
            </Container>

        </StyledBlog>
    );
};

const StyledBlog = styled.section`
    padding-top: 80px;


    iframe {
        height: 500px;
        width: 100%;
    }

    .min-height-box {
        min-height: 20vh;
        width: 100%;

        .blog-slider__slider-wrap {

        }
    }

    .css-lkh0o5-menu {
        z-index: 9;
        margin: 0;
    }

    .mobile {
        display: none;
    }

    .filter {
        margin-bottom: 30px;

        ul {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .active {
            a {
                &:before {
                    transform: unset;
                }

                span {
                    color: white;
                }
            }
        }
    }

    .extramargin {
        padding: 0 15px;
    }

    .blog-title {
        position: relative;

        p {
            position: absolute;
            top: 0;
            right: 0;

        }

    }

    .blog-slider__slider-wrap {
        visibility: hidden;
        height: 0;
        //display: none;
        opacity: 0;
        //transition: 1s opacity ease, 0.5s height ease, 0.5s visibility ease;
        display: none;


        .blog-single-single-wrp {
            opacity: 0;
            transition: 3s all ease;
            transition-delay: 1s;
        }

        .commingsoon {
            opacity: 0;
            transition: 1s opacity ease, 0.5s height ease, 0.5s visibility ease;
            display: none;
        }

        &.active {
            visibility: visible;
            height: auto;
            display: block;
            opacity: 1;

            .commingsoon {
                opacity: 1;
                transition: 1s all ease;
                display: block;
            }


            .blog-single-single-wrp {
                opacity: 1;
                transition-delay: 1s;

            }
        }

        &.blog-tab {

            .blog-slider {
                &__slider-wrap {
                    &__inner {
                        .blog-single {
                            &__inner {
                                padding-top: 115%;
                            }
                        }
                    }
                }
            }

            .blog-single__inner {
                padding-top: calc(460 / 370 * 100%);
                position: relative;

                a {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    left: 0;
                    top: 0;
                    z-index: 3;
                }

                &__content {
                    &:after {
                        display: none !important;
                        //content: '';
                        height: 100%;
                        width: 100%;
                        //background-color: #3C3C3B;
                        top: 0;
                        left: 0;
                        right: 0;
                        position: absolute;
                        transition: height 1s cubic-bezier(.25, .74, .22, .99);
                    }

                    &__top {

                        .hover-content {
                            position: absolute;
                            left: 40px;
                            top: 40px;
                            right: 40px;
                            transition: all 1s cubic-bezier(.25, .74, .22, .99);
                            transform: translateY(-30px);
                            opacity: 0;

                            .link-dc {
                                font-size: 16px;
                                line-height: 24px;
                                color: #FFFFFF;
                                font-family: 'Avenir Heavy';
                                width: auto !important;
                                height: auto !important;
                                position: relative !important;
                                margin-top: 5px;
                                opacity: 0;
                                display: inline-block;


                                &:before {
                                    background: #fff;
                                    transition: all 1s cubic-bezier(.25, .74, .22, .99) 0s;
                                    content: "";
                                    position: absolute;
                                    left: 0px;
                                    bottom: 0px;
                                    height: 1px;
                                    width: 100%;
                                }

                                &:hover {
                                    &:before {
                                        height: 4px;
                                    }
                                }
                            }

                            p {
                                font-size: 16px;
                                font-weight: 500;
                                line-height: 24px;
                                color: #ffffff;
                                z-index: 2;
                                margin: 0;
                                opacity: 0;
                                transition: all 1s cubic-bezier(.25, .74, .22, .99);
                                overflow: hidden;
                                display: -webkit-box;
                                -webkit-line-clamp: 5;
                                -webkit-box-orient: vertical;
                            }
                        }

                        h2 {
                            position: absolute;
                            top: 40px;
                            left: 40px;
                            right: 40px;
                            z-index: 2;
                            font-size: 20px;
                            font-weight: 500;
                            font-family: ${title};
                            line-height: 28px;
                            color: #FFFFFF;
                            margin: 0;
                            transition: all 1s cubic-bezier(.25, .74, .22, .99);
                            overflow: hidden;
                            display: -webkit-box;
                            -webkit-line-clamp: 5;
                            -webkit-box-orient: vertical;
                        }
                    }

                    &__bottom {
                        position: absolute;
                        margin: 0;
                        left: 40px;
                        right: 40px;
                        bottom: 24px;
                        display: flex;
                        justify-content: space-between;
                        //border-top: 1px solid #221F1F;
                        padding-top: 20px;
                        z-index: 2;

                        h4 {
                            font-size: 16px;
                            color: #FFFFFF;
                            font-family: 'Avenir';
                            font-weight: 500;
                            line-height: 24px;
                            transition: color 1s cubic-bezier(.25, .74, .22, .99);
                        }

                        p {
                            font-size: 16px;
                            color: #FFFFFF;
                            text-align: right;
                            font-weight: 500;
                            line-height: 24px;
                            transition: color 1s cubic-bezier(.25, .74, .22, .99);

                            span {
                                display: block;
                                color: #FFFFFF;

                            }
                        }
                    }
                }

                &:hover {
                    .blog-single__inner__content:after {
                        height: 0;
                    }

                    .blog-single__inner__content__top {
                        h2 {
                        }

                        .link-dc {
                            transform: none;
                            opacity: 1;

                            &:before {
                                //height: 4px;
                            }
                        }

                        .hover-content {
                            transform: none;
                            opacity: 1;
                        }

                        p {
                            transform: none;
                            opacity: 1;
                        }
                    }

                    .blog-single__inner__content__bottom {
                        border-color: #FFF;

                        h4 {
                            color: #ffffff;
                        }

                        p {
                            color: #ffffff;

                            span {
                                color: #ffffff;
                            }
                        }
                    }
                }

            }


        }
    }

    .blog-single-single-wrp {
        margin-bottom: 30px;

    }

    .load {
        .dc-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 50px;
        }
    }


    .blog-slider {
        &__slider-wrap {
            &__inner {
                .blog-single {
                    &__inner {
                        padding-top: 115%;
                    }
                }
            }
        }
    }

    .blog-single__inner {
        padding-top: calc(460 / 370 * 100%);
        position: relative;

        a {
            position: absolute;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            z-index: 3;
        }

        &__content {
            &:after {
                content: '';
                height: 100%;
                width: 100%;
                background-color: #3C3C3B;
                top: 0;
                left: 0;
                right: 0;
                position: absolute;
                transition: height 1s cubic-bezier(.25, .74, .22, .99);
            }

            &__top {

                .hover-content {
                    position: absolute;
                    left: 40px;
                    top: 40px;
                    right: 40px;
                    transition: all 1s cubic-bezier(.25, .74, .22, .99);
                    transform: translateY(-30px);
                    opacity: 0;

                    .link-dc {
                        font-size: 16px;
                        line-height: 24px;
                        color: #FFFFFF;
                        font-family: 'Avenir Heavy';
                        width: auto !important;
                        height: auto !important;
                        position: relative !important;
                        margin-top: 5px;
                        opacity: 0;
                        display: inline-block;


                        &:before {
                            background: #fff;
                            transition: all 1s cubic-bezier(.25, .74, .22, .99) 0s;
                            content: "";
                            position: absolute;
                            left: 0px;
                            bottom: 0px;
                            height: 1px;
                            width: 100%;
                        }

                        &:hover {
                            &:before {
                                height: 4px;
                            }
                        }
                    }

                    p {
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 24px;
                        color: #ffffff;
                        z-index: 2;
                        margin: 0;
                        opacity: 0;
                        transition: all 1s cubic-bezier(.25, .74, .22, .99);
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 5;
                        -webkit-box-orient: vertical;
                    }
                }

                h2 {
                    position: absolute;
                    top: 40px;
                    left: 40px;
                    right: 40px;
                    z-index: 2;
                    font-size: 20px;
                    font-weight: 500;
                    font-family: ${title};
                    line-height: 28px;
                    color: #FFFFFF;
                    margin: 0;
                    transition: all 1s cubic-bezier(.25, .74, .22, .99);
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 5;
                    -webkit-box-orient: vertical;
                }
            }

            &__bottom {
                position: absolute;
                margin: 0;
                left: 40px;
                right: 40px;
                bottom: 24px;
                display: flex;
                justify-content: space-between;
                //border-top: 1px solid #221F1F;
                padding-top: 20px;
                z-index: 2;

                h4 {
                    font-size: 60px;
                    color: #FFFFFF;
                    font-family: 'Avenir Book';
                    line-height: 60px;
                    transition: color 1s cubic-bezier(.25, .74, .22, .99);
                }

                p {
                    font-size: 16px;
                    color: #FFFFFF;
                    text-align: right;
                    font-weight: 500;
                    line-height: 24px;
                    transition: color 1s cubic-bezier(.25, .74, .22, .99);

                    span {
                        display: block;
                        color: #FFFFFF;

                    }
                }
            }
        }

        &:hover {
            .blog-single__inner__content:after {
                height: 0;
            }

            .blog-single__inner__content__top {
                h2 {
                    opacity: 0;
                    transform: translateY(-20px);
                }

                .link-dc {
                    transform: none;
                    opacity: 1;

                    &:before {
                        //height: 4px;
                    }
                }

                .hover-content {
                    transform: none;
                    opacity: 1;
                }

                p {
                    transform: none;
                    opacity: 1;
                }
            }

            .blog-single__inner__content__bottom {
                border-color: #FFF;

                h4 {
                    color: #ffffff;
                }

                p {
                    color: #ffffff;

                    span {
                        color: #ffffff;
                    }
                }
            }
        }

    }


    @media (max-width: 767px) {

        .mobile {
            display: block;
        }

        .desktop {
            display: none !important;
        }

        padding-top: 0;
        .filter {
            padding: 0;

            .react-select__control {
                border: none !important;
                height: 60px;
                background: #978c21;
                box-shadow: none !important;
                border-radius: 0 !important;

                .react-select__control--menu-is-open {
                    box-shadow: none !important;

                    .react-select__indicator {
                        padding-right: 15px;

                    }
                }

                .react-select__value-container {
                    padding: 0px 15px;
                }

                .react-select__indicator {
                    padding: 15px;

                    svg {
                        path {
                            fill: white;
                            stroke-width: 0;
                        }
                    }
                }

                .react-select__indicator-separator {
                    display: none;
                }

                .react-select__single-value {
                    font-family: 'Avenir' !important;
                    font-size: 16px !important;
                    font-weight: 500 !important;
                    line-height: 24px !important;
                    color: #FFFFFF !important;
                }

                .select__single-value, .react-select__placeholder {
                    font-family: 'Avenir' !important;
                    font-size: 16px !important;
                    font-weight: 500 !important;
                    line-height: 24px !important;
                    color: #FFFFFF !important;
                }

                .react-select__input-container {
                    .react-select__input {
                        font-family: 'Avenir' !important;
                        font-size: 16px !important;
                        font-weight: 500 !important;
                        line-height: 24px !important;
                        color: #FFFFFF !important;
                    }
                }
            }
        }

        .blog-single__inner__content__top {
            p, h2 {
                left: 30px;
                right: 30px;
                top: 30px;
            }
        }

        .blog-single__inner__content__bottom h4, .blog-single__inner__content__bottom p {
            left: 30px;
            right: 30px;
            top: 30px;
        }

        .swiper-initialized {
            margin-left: 0;
            padding-right: 0;
        }

        .blog-slider {
            &__slider-wrap {
                //margin-left: 15px;
                //margin-right: 15px;

                .slider-nav-mobile {
                    margin-top: 40px;

                    ul {
                        display: flex;
                    }

                    li {
                        height: 50px;
                        width: 50px;
                        background-color: #000;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        cursor: pointer;

                        &:nth-of-type(1) {
                            margin-right: 20px;
                        }

                        svg {
                            color: #ffffff;
                            z-index: 2;
                        }
                    }
                }
            }
        }

        .blog-button {
            margin-bottom: 40px;

            .slider-nav {
                display: none;
            }
        }

        .slider-nav-mobile {
            display: block;
        }

    }


    //filter new design 
    .filter_new_design {
        ul {
            gap: 0;
            justify-content: space-between;
            flex-wrap: unset;

            li {
                width: 100%;

                &.active {
                    span {
                        color: #978C21;
                    }

                    a {
                        &:before {
                            transform: unset;
                            opacity: 1;
                        }
                    }
                }
            }
        }

        .dc-btn {
            a {
                border-radius: 0;
                border-left: none !important;
                border-right: none !important;
                border-top: none !important;
                border-bottom: none !important;

                &:before {
                    height: 2px !important;
                    border-radius: 0;
                    top: unset;
                    bottom: 0;
                    transform: unset;
                    opacity: 0;
                }

                &:after {
                    content: '';
                    background: rgba(198, 198, 198, 0.5);
                    height: 1px;
                    width: 100%;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }

                &:hover {
                    span {
                        color: #978C21;
                    }

                    &:before {
                        transform: unset;
                        opacity: 1;
                    }
                }
            }
        }
    }


    //date wise filter 
    .date_wise_filter {
        display: flex;
        justify-content: space-between;

        .flex {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin: 0 -15px 80px;

            .title {
                //display: none;
                h6 {
                    font-size: 20px;
                    font-weight: 300;
                    line-height: 46px;
                }
            }

            .rs-picker-toggle-wrapper {
                display: inline-block;
                vertical-align: middle;
                max-width: 100%;
                min-width: 250px;
                border-radius: 0px;
                display: flex;
                align-items: center;
                justify-content: center;

            }

            .rs-picker-toggle-textbox {
                padding-left: 0px;
            }

            .rs-picker-daterange .rs-picker-toggle.rs-btn {
                outline: none;
                box-shadow: none;
            }

            .rs-picker-daterange .rs-picker-toggle.rs-btn .rs-picker-toggle-clean {
                top: -10px;

            }

            .rs-picker-toggle-textbox, .rs-picker-has-value .rs-btn .rs-picker-toggle-value, .rs-picker-has-value .rs-picker-toggle .rs-picker-toggle-value {
                color: black;
                font-weight: 500;
                line-height: 45px;
            }

            hDFtcC .date_wise_filter .flex .rs-picker-toggle-textbox {
                padding-left: 0px;
                font-weight: 500;
                color: black;
                line-height: 45px;

            }

            .rs-calendar-table-cell-selected .rs-calendar-table-cell-content {
                background-color: #978C21;
            }

            .rs-picker-toggle-clean:hover svg path {
                stroke: #978C21;
            }

            .rs-picker-default .rs-picker-toggle.rs-btn {
                padding: 0 0 0 15px;
                height: 45px;
                box-sizing: border-box;
                border: 1px solid rgba(60, 60, 59, 0.5);
                border-radius: 22px;
                display: flex;
                justify-content: space-between;
                width: 100%;

                .rs-stack {
                    width: 100%;
                }
            }

            .rs-picker-daterange .rs-picker-toggle.rs-btn .rs-picker-toggle-caret {
                top: -10px;
            }
        }

        .rs-picker-default .rs-picker-toggle.rs-btn .rs-stack {
            top: 1px;
        }

        .rs-picker-toggle .rs-picker-toggle-placeholder, .rs-picker-toggle-textbox {
            font-size: 16px;
            font-weight: 500;
            line-height: 45px !important;
            color: rgb(60, 60, 59) !important;
        }
    }

    .no_data {
        opacity: 0;
        visibility: hidden;
        height: 0;

    }

    .no_data.active {
        opacity: 1;
        transition: 1s all ease;
        transition-delay: 0.5s;
        height: auto;
        visibility: visible;
    }

    [data-tab="dashboard"], [data-tab="expert"], [data-tab="blog"], [data-tab="news_flash"] {
        margin-top: 50px;
    }

    @media (max-width: 767px) {
        .date_wise_filter .flex {
            flex-direction: column;
        }

    }

    .react-select__control {
        padding: 0px 0px 0px 15px;
        height: 45px;
        box-sizing: border-box;
        border: 1px solid rgba(60, 60, 59, 0.5);
        border-radius: 22px;
        display: flex;
        -webkit-box-pack: justify;
        width: 100%;
        min-width: 330px;
        align-items: center;
        justify-content: center;

    }

    .css-1jqq78o-placeholder {
        color: rgb(60, 60, 59);
        margin-left: 0;
        margin-right: 0;
        box-sizing: border-box;
        line-height: 41px;
    }

    @media (max-width: 992px) {
        .date_wise_filter {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 0;
            display: block;
            width: 100%;

            .flex {
                margin-bottom: 0;
                display: block;

                &:last-child {
                    margin-bottom: 60px;
                }
            }
        }


        .custom_filter {
            .filter .react-select__control {
                padding: 0px 0px 0px 15px !important;
                height: 45px !important;
                box-sizing: border-box !important;
                border: 1px solid rgba(60, 60, 59, 0.5) !important;
                border-radius: 22px !important;
                display: flex !important;
                -webkit-box-pack: justify !important;
                width: 100% !important;
                min-width: 330px;
                align-items: center;
                justify-content: center;
                background: transparent !important;

            }

            .css-1jqq78o-placeholder {
                color: rgb(60, 60, 59) !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
                box-sizing: border-box !important;
                line-height: 41px;
            }
        }
    }

`;
export default React.memo(RandomSliderV1);