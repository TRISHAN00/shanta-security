import {useDispatch, useSelector} from "react-redux";
import {NextSeo} from "next-seo";
import {ApiServices as apiEndPoints, ApiServices} from "../api/network/ApiServices";
import {ApiParamKey} from "../api/network/ApiParamKey";
import {wrapper} from "../api/store";
import {fetchPosts} from "../api/redux/investor";
import {useEffect, useState} from "react";
import styled from "styled-components";
import PlusIcon from "../../components/animations/plus.svg";
import {Col, Container, Form, Row} from "react-bootstrap";
import 'simplebar-react/dist/simplebar.min.css';
import Title from "../../components/Title";
import Select from "react-select";
import Button from "../../components/Button";
import "react-datepicker/dist/react-datepicker.css";
import Chart from "chart.js";

import gsap, {CSSPlugin, TimelineLite} from "gsap";
import {useRouter} from "next/router";
// import CanvasJSReact from '@canvasjs/react-charts'
const InvestorCalculator = () => {
    const getPost = useSelector((state) => state.investorReducer);
    let page_data = getPost?.posts?.data?.page_data
    const banner = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'investor-banner');

    // investor calculator

    // var CanvasJS = CanvasJSReact.CanvasJS;
    // var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const [startDate, setStartDate] = useState('');
    const [winWidth, setWinWidth] = useState(true)
    const [can, setCan] = useState(false)
    let totalSum = 0;
    let sumView = 0;
    let weight = 0;
    let portfolio = []; // Empty array to store portfolioReturn values
    let portoflioreturn = 1;
    let cumulativeSum = 0;

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


    let name, value;


    const dispatch = useDispatch();


    const handleDepartment = (e) => {
    }

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const [dataOption, setDataOption] = useState([]);
    const [MainData, setMainData] = useState([]);
    const [principle, setPriciple] = useState('0');
    const [totalReturn, setTotalreturn] = useState('0');
    const [cagr, seCagr] = useState('0');
    let options = []

    console.log('dataOption', dataOption)


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission
        let portfolio = []; // Empty array to store portfolioReturn values
        let portoflioreturn = 1;
        try {


            // Extract required values from the retrieved data
            const paymentInput = document.querySelector('input[name="payment"]');
            const paymentValue = paymentInput.value;
            setPriciple(paymentValue)
            const principleAmount = paymentValue;
            const selectedStocks = selectedOptions.map((option) => option.value);
            const selectedStocksYear = selectedOptionsYear;
            const selectedDate = startDate ? formatDate(startDate) : formatDate(new Date());


            // Fetch investor data from the API
            const updatedDataOption = [];


            // let response = useSelector((state) => state.home);
            const response = await fetch('https://cms.shantasecurities.com/api/' + apiEndPoints.INVESTOR + '?stock=' + selectedStocks + '&year=' + selectedOptionsYear + '&payment=' + paymentValue)
            const data = await response.json();


            const stockTotal = selectedOptions?.length;
            const mainData = data?.data;


            let final_value = data.portfolioValue[data.portfolioValue.length - 1]?.result;
            let total_value = data.totalreturn[data.totalreturn.length - 1]?.totalreturn;
            let csgr = data.csgr[data.csgr.length - 1]?.csgr;

            data.portfolioValue?.map((e, index) => {

                const dateParts = e?.year.split("-");
                const year = parseInt(dateParts[0]);
                const month = parseInt(dateParts[1]) - 1;
                const dateValue = new Date(e?.year);
                updatedDataOption.push({x: dateValue, y: parseFloat(e?.result.replace(/,/g, ''))});


            })


            updatedDataOption.sort((a, b) => a.date - b.date);


            setDataOption(updatedDataOption);

            // Update the result HTML with the calculated values
            const resultElement = document.querySelector('.result');

            if (resultElement) {
                const selectedOptionsList = selectedOptions
                    ?.map((e) => {
                        return e?.label;
                    })
                    .join(', ');

                const lastIndex = selectedOptionsList.lastIndexOf(',');

                const formattedOptionsList =
                    lastIndex === -1
                        ? selectedOptionsList
                        : `${selectedOptionsList.slice(0, lastIndex)} and ${selectedOptionsList.slice(lastIndex + 1)}`;

                resultElement.innerHTML = `
    <div class="result-wrp">
      <p>If you invested equally in 
        ${formattedOptionsList}, ${selectedStocksYear} years ago, today you would have had BDT</p>
      <h3>${final_value}</h3>
      <p>Total Return</p>
      <h3>${total_value}</h3>
      <p>CAGR</p>
      <h3>${csgr}</h3>
    </div>
  `;
            }

            setCan(true);
            final_value = null;
        } catch (error) {
            // Handle error if the API request fails
            console.error('Failed to fetch data from the API:', error);
        }
    };


    let uniqueDataOption = [...new Map(dataOption.map(item => [item.x, item])).values()];

    useEffect(() => {
        // Check if dataOption exists and has a length property
        if (dataOption && dataOption.length > 0) {
            function formatDate(dateString) {
                const date = new Date(dateString);
                const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                const month = monthNames[date.getMonth()];
                const year = date.getFullYear();
                return `${month} ${year}`;
            }

            // Sort dataOption by date
            const sortedData = dataOption.sort((a, b) => new Date(a.x) - new Date(b.x));

            // Calculate intervals based on the month of each data point
            const intervals = [];
            for (let i = 0; i < sortedData.length - 1; i++) {
                const currentDate = new Date(sortedData[i].x);
                const nextDate = new Date(sortedData[i + 1].x);
                const monthDiff = (nextDate.getFullYear() - currentDate.getFullYear()) * 12 + nextDate.getMonth() - currentDate.getMonth();
                if (monthDiff >= 6) {
                    intervals.push(formatDate(sortedData[i].x));
                }
            }

            // Filter original dataset and create a new dataset with modified x values
            const newData = dataOption.map(item => {
                return { x: formatDate(item.x), y: item.y };
            });

            (async function() {
                const data = newData;
                new Chart(
                    document.getElementById('line-chart'), {
                        type: 'bar',
                        data: {
                            labels: data.map(row => row.x),
                            datasets: [{
                                backgroundColor: "#978C21",
                                borderColor: "#3182ce",
                                label: 'Investment Calculator',
                                data: data.map(row => row.y)
                            }]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        fontSize: 14 // Adjust the font size here
                                    },
                                }],
                                xAxes: [{
                                    ticks: {
                                        fontSize: 14 // Adjust the font size here
                                    }
                                }]
                            },
                            tooltips: {
                                callbacks: {
                                    label: function(tooltipItem, data) {
                                        return 'Portfolio Price: ' + tooltipItem.yLabel;
                                    }
                                }
                            },
                            legend: {
                                labels: {
                                    fontSize: 30, // Adjust the font size for the legend label
                                    fontColor: '#3c3c3b', // Change the font color
                                    fontStyle: 'bold' // Change the font weight
                                }
                            }
                        }
                    }
                );
            })();
        }
    }, [dataOption]);





    const DropdownOption = [
        {value: 'BRACBANK', label: 'BRAC BANK'},
        {value: 'CITYBANK', label: 'CITY BANK'},
        {value: 'SQURPHARMA', label: 'SQUR PHARMA'},
        {value: 'RENATA', label: 'RENATA'},
        {value: 'BXPHARMA', label: 'BX PHARMA'},
        {value: 'MARICO', label: 'MARICO'},
        {value: 'RECKITTBEN', label: 'RECKITTBEN'},
        {value: 'OLYMPIC', label: 'OLYMPIC'},
        {value: 'BATBC', label: 'BATBC'},
        {value: 'LHBL', label: 'LHBL'},
        {value: 'UNILEVERCL', label: 'UNILEVERCL'},
        {value: 'HEIDELBCEM', label: 'HEIDELBCEM'},
        {value: 'LINDEBD', label: 'LINDEBD'},
        {value: 'BERGERPBL', label: 'BERGERPBL'},
        {value: 'GP', label: 'GP'},
        {value: 'UPGDCL', label: 'UPGDCL'},

    ];
    const DropdownOptionYear = [
        {value: '2', label: '2 Years'},
        {value: '5', label: '5 Years'},
        {value: '10', label: '10 Years'},
        {value: '20', label: '20 Years'}

    ];

// Define a state to store the selected options
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedOptionsYear, setSelectedOptionsYear] = useState([]);

    // Function to handle the selected options
    const handleSelection = (selected) => {


        setSelectedOptions(selected);


    };


    const handleSelectionYear = (selected) => {
        setSelectedOptionsYear(selected?.value);
    };


    const CustomMultiValue = ({data}) => (
        <div>
            <span>{data.label}</span>
            <PlusIcon style={{
                marginLeft: '5px',
                verticalAlign: 'middle',
                marginRight: '5px',
                top: '-2px',
                position: 'relative'
            }}/>
        </div>
    );


    const CustomMultiValueLabel = ({data}) => (
        <div>
            <span>{data.label}</span>
            <PlusIcon style={{
                marginLeft: '5px',
                verticalAlign: 'middle',
                marginRight: '5px',
                top: '-2px',
                position: 'relative'
            }}/>
        </div>
    );

    useEffect(() => {


        const smoothContent = document.querySelector('#smooth-content');
        if (smoothContent) {
            smoothContent.style.overflow = 'auto';
        }


    }, [getPost])


    useEffect(() => {
        // Use GSAP ScrollTo plugin to smoothly scroll to the target section
        // gsap.to(window, {
        //     duration: 1,
        //     scrollTo: { y: 0  } // Adjust the offset as needed
        // });
    })




    return (
        <StyledComponent>
            <NextSeo
                title={`${page_data?.title ? page_data?.title + ' | Shanta Securities Limited' : ''}`}
                description={page_data?.meta_description}
                openGraph={{
                    title: page_data?.og_title,
                    description: page_data?.og_description,
                }}
            />
            <div className="investor_calculator pb-200 pt-200">
                <Container>
                    <Row>
                        <Col md={12} className='modal-data__content'>


                            <Row class={'desktop-view'}>
                                <Col className={'form'} md={6}>
                                    <Title margin={'0 0 30px 0'}
                                           text={'Investment Calculator'}/>

                                    <div className="form-wrapper-all">

                                        <Form onSubmit={handleSubmit} method="post"
                                              enctype="multipart/form-data">
                                            <Row>
                                                <Form.Group className="col-md-12 pb-30">
                                                    <Form.Control
                                                        className={'form-control-lg'}

                                                        type="number"
                                                        name='payment'
                                                        placeholder="Starting Amount"
                                                    />
                                                </Form.Group>

                                                <Form.Group className="col-md-12 pb-30">
                                                    <Select
                                                        isMulti
                                                        placeholder={'Stock'}
                                                        onChange={handleSelection} // replace with your selection handler function
                                                        styles={{
                                                            dropdownIndicator: (provided, state) => ({
                                                                ...provided,
                                                                transform: state.selectProps.menuIsOpen && "rotate(180deg)"
                                                            })
                                                        }}

                                                        classNamePrefix={'react-select'}
                                                        className={'form-select'}
                                                        isSearchable={false}
                                                        isOptionDisabled={() => selectedOptions.length >= 5}
                                                        options={DropdownOption} // replace with your dropdown options
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
                                                    <p className={'hints'}>Select up to 5 Stocks</p>
                                                </Form.Group>


                                                <Form.Group className="col-md-12 pb-30">

                                                    <Select

                                                        placeholder={'Year'}
                                                        onChange={handleSelectionYear} // replace with your selection handler function
                                                        styles={{
                                                            dropdownIndicator: (provided, state) => ({
                                                                ...provided,
                                                                transform: state.selectProps.menuIsOpen && "rotate(180deg)"
                                                            })
                                                        }}
                                                        classNamePrefix={'react-select'}
                                                        className={'form-select'}
                                                        options={DropdownOptionYear} // replace with your dropdown options
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

                                                </Form.Group>

                                                <div className="clear"></div>

                                                <Form.Group className="col-xl-6 widthHalf"
                                                            onClick={handleSubmit}>
                                                    <Button
                                                        margin={'40px 0 0'}
                                                        padding={'0'}
                                                        hoverColor={'#3C3C3B'}
                                                        hoverBackground={'#3C3C3B'}
                                                        width={'auto'}
                                                        text={'Calculate'}
                                                        classname={'col-md-6'}
                                                    />
                                                </Form.Group>
                                            </Row>
                                        </Form>

                                    </div>
                                </Col>

                                <Col md={{span: 5, offset: 1}} id={'result'}
                                     className={'result'}>
                                    <div className="result-wrp">
                                        {/*<p>Earning</p>*/}
                                        {/*<h3>0</h3>*/}
                                    </div>

                                </Col>
                            </Row>

                            <Row className={'desktop-view-blog'}>
                                {dataOption?.[0] &&
                                    <Col md={12}>
                                        <br />
                                        <div className="relative h-350-px">
                                            <canvas id="line-chart"></canvas>
                                        </div>
                                    </Col>
                                }

                                <Col className={'invest-content'} md={12}>


                                    <Title noanim margin={'0 0 30px 0'}
                                           text={'Using Investment Calculator'}/>


                                    <ul>
                                        <li>
                                            <span>Enter the amount</span> you wish you had invested a certain number of
                                            years ago.
                                        </li>
                                        <li>
                                            <span>Select up to five different types</span> of stocks for your investment
                                            during that period. The specified investment will be evenly distributed
                                            among the chosen stocks. You could even opt to select just one stock as
                                            well.
                                        </li>
                                        <li>
                                            <span>Choose the duration</span> you would have preferred to maintain your
                                            investment. In the case of stock investments, it is typically recommended to
                                            remain invested for a minimum of five years.
                                        </li>
                                        <li>
                                            <span>Click the "Calculate"</span> button to estimate the potential income
                                            you could have gained from those investments if made in the past,
                                            considering the current date as the ending point.
                                        </li>


                                    </ul>
                                </Col>
                            </Row>

                            <Row className={'mobile-view'}>
                                <Col className={'form'} md={6}>
                                    <Title margin={'0 0 30px 0'}
                                           text={'Investment calculator'}/>

                                    <div className="form-wrapper-all">
                                        <Form onSubmit={handleSubmit} method="post"
                                              enctype="multipart/form-data">
                                            <Row>
                                                <Form.Group className="col-md-12 pb-30">
                                                    <Form.Control
                                                        className={'form-control-lg'}

                                                        type="number"
                                                        name='payment'
                                                        placeholder="Starting Amount"
                                                    />
                                                </Form.Group>

                                                <Form.Group className="col-md-12 pb-30">
                                                    <Select
                                                        isMulti
                                                        placeholder={'Stock'}
                                                        onChange={handleSelection} // replace with your selection handler function
                                                        styles={{
                                                            dropdownIndicator: (provided, state) => ({
                                                                ...provided,
                                                                transform: state.selectProps.menuIsOpen && "rotate(180deg)"
                                                            })
                                                        }}
                                                        // components={{
                                                        //     MultiValue: CustomMultiValue,
                                                        //     MultiValueLabel: CustomMultiValueLabel,
                                                        // }}
                                                        classNamePrefix={'react-select'}
                                                        className={'form-select'}
                                                        isSearchable={false}
                                                        isOptionDisabled={() => selectedOptions.length >= 5}
                                                        options={DropdownOption} // replace with your dropdown options
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
                                                    <p className={'hints'}>Select up to 5 Stocks</p>

                                                </Form.Group>


                                                <Form.Group className="col-md-12 pb-30">


                                                    <Select

                                                        placeholder={'Year'}
                                                        onChange={handleSelectionYear} // replace with your selection handler function
                                                        styles={{
                                                            dropdownIndicator: (provided, state) => ({
                                                                ...provided,
                                                                transform: state.selectProps.menuIsOpen && "rotate(180deg)"
                                                            })
                                                        }}
                                                        classNamePrefix={'react-select'}
                                                        className={'form-select'}
                                                        options={DropdownOptionYear} // replace with your dropdown options
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

                                                </Form.Group>

                                                <div className="clear"></div>

                                                <Form.Group className="col-xl-6 widthHalf"
                                                            onClick={handleSubmit}>
                                                    <Button
                                                        margin={'40px 0 0'}
                                                        padding={'0'}
                                                        hoverColor={'#3C3C3B'}
                                                        hoverBackground={'#3C3C3B'}
                                                        width={'auto'}
                                                        text={'Calculate'}
                                                        classname={'col-md-6'}
                                                    />
                                                </Form.Group>
                                            </Row>
                                        </Form>

                                    </div>
                                </Col>
                                <Col md={{span: 5, offset: 1}} className={'result'}>
                                    <div className="result-wrp">
                                        <canvas id="line-chart"></canvas>
                                    </div>
                                </Col>

                                <Col className={'invest-content m-0'} md={12}>
                                    <Title margin={'0 0 30px 0'}
                                           text={'Using Investment Calculator'}/>

                                    <ul>

                                        <li>
                                            <span>Enter the amount</span> you wish you had invested a certain number of
                                            years ago.
                                        </li>
                                        <li>
                                            <span>Select up to five different types</span> of stocks for your investment
                                            during that period. The specified investment will be evenly distributed
                                            among the chosen stocks. You could even opt to select just one stock as
                                            well.
                                        </li>
                                        <li>
                                            <span>Choose the duration</span> you would have preferred to maintain your
                                            investment. In the case of stock investments, it is typically recommended to
                                            remain invested for a minimum of five years.
                                        </li>
                                        <li>
                                            <span>Click the "Calculate"</span> button to estimate the potential income
                                            you could have gained from those investments if made in the past,
                                            considering the current date as the ending point.
                                        </li>

                                    </ul>
                                </Col>
                            </Row>


                        </Col>
                    </Row>
                </Container>
            </div>
        </StyledComponent>
    );
};


InvestorCalculator.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
    let api_services = ApiServices.SECTIONS;
    let param = {
        [ApiParamKey.TYPE]: 'slug',
        [ApiParamKey.VALUE]: 'investment-calculator',
        [ApiParamKey.GET_SECTION]: 'no',
        [ApiParamKey.IMAGE]: 'no',
        [ApiParamKey.POST]: 'yes',
        [ApiParamKey.GALLERY]: 'no',
    }
    await store.dispatch(fetchPosts([api_services, param]));
});

const StyledComponent = styled.section`

    .desktop-view {
        display: flex;
    }
 .desktop-view-blog {
        display: block;
    }

    .mobile-view {
        display: none;
    }

    @media (max-width: 767px) {
        .desktop-view,.desktop-view-blog {
            display: none;
        }

        .mobile-view {
            display: block;
        }
    }

    .hints {
        font-size: 14px !important;
        color: gray !important;
        margin-bottom: 25px !important;
        margin-top: 5px;
        font-weight: 500;
    }

    .react-select__value-container {
        div:nth-of-type(5) {
            svg {
                display: none;
            }
        }
    }

    .custom {
        border: 1px solid black;
        border-collapse: collapse;

        td, th, td {
            border: 1px solid black;

        }
    }

    .modal-data__content {
        border-top: none;
    }

    .dc-btn a:hover {
        span {
            color: white;
        }
    }

    .form {
        input[type="Date"] {
            color: #3C3C3B;

        }

        .react-datepicker-wrapper {
            width: 100%;
        }

        .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before {
            left: -25px;
        }

        .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {
            left: -25px;

        }

        .react-datepicker__input-container {
            width: 100%;

            input {
                width: 100%;

                font-size: 14px;
                font-weight: 500;
                color: #3C3C3B;
                border-right: none;
                border-left: none;
                border-top: none;
                outline: none;
                box-shadow: none;
                padding-left: 0;
                padding-right: 0;
                padding-bottom: 10px;
                padding-top: 0;
                height: 33px;
                margin-bottom: 25px;
                border-bottom: 1px solid rgba(60, 60, 59, 0.5);

                &::placeholder {
                    font-size: 14px;
                    font-weight: 500;
                    color: rgba(60, 60, 59, 0.5);
                }
            }

        }

        .form-control {
            font-size: 14px;
            font-weight: 500;
            color: #3C3C3B;
            border-right: none;
            border-left: none;
            border-top: none;
            outline: none;
            box-shadow: none;
            padding-left: 0;
            padding-right: 0;
            padding-bottom: 10px;
            padding-top: 0;
            height: 33px;
            margin-bottom: 25px;
            border-bottom: 1px solid rgba(60, 60, 59, 0.5);

            &::placeholder {
                font-size: 14px;
                font-weight: 500;
                color: rgba(60, 60, 59, 0.5);
            }
        }

        .react-select__indicator {
            padding: 0;
        }

        .react-select__placeholder {
            margin: 0;
            padding: 0;
            font-size: 14px;
            font-weight: 500;
            color: rgba(60, 60, 59, 0.5);
        }

        .react-select__control {
            border-bottom: 1px solid rgba(60, 60, 59, 0.5);
            margin-bottom: 0px;
            border-right: none;
            border-left: none;
            border-top: none;
            outline: none;
            box-shadow: none;
            padding-left: 0;
            padding-right: 0;

            .react-select__indicator-separator {
                display: none;
            }

            .react-select__input-container {
                padding: 0;
                margin: 0;
            }

            .react-select__single-value {
                margin: 0;
                padding: 0;
                font-size: 14px;
                font-weight: 500;
                color: #3C3C3B;
            }

            .react-select__value-container {
                padding-left: 0;
                padding-right: 0;
                padding-top: 0;
                padding-bottom: 0;
            }
        }
    }

    .result-wrp {
        p {
            color: rgba(60, 60, 59, 0.5);
            margin-bottom: 9px !important;

            &.last {
                margin-top: 30px;
            }
        }

        h3 {
            font-size: 32px;
            font-weight: 500;
            line-height: 44px;
            color: #978C21;

        }
    }

    .simplebar-content {
        &::-webkit-scrollbar {
            display: none;
        }
    }

    .invest-content {
        margin-top: 80px;
        padding-top: 80px;
        //border-top: 1px;
        display: block;
        //border-style: solid;
        //border-color: #3C3C3B;
        border-bottom: none !important;

        ul {
            margin: 0;
            padding-left: 0;
            border: none !important;

            li {
                font-size: 16px;
                line-height: 24px;
                font-weight: 500;
                color: #3C3C3B;

                span {
                    font-family: "Avenir Heavy";
                }

                p {
                    font-size: 20px;
                    line-height: 24px;
                    font-weight: 500;
                    color: #3C3C3B;
                    margin: 0 !important;
                }

                padding: 0px 0 20px 35px !important;
                z-index: 50;
                position: relative;
                counter-increment: count;
                border-bottom: 1px solid rgba(198, 198, 198, 0.5);
                margin-bottom: 20px !important;

                &:first-child {
                    padding-top: 0;
                }

                &:last-child {
                    padding-bottom: 0;
                    border-bottom: 0;
                    margin-bottom: 0 !important;
                }

                &:first-child:before {
                    margin-top: 0;
                }

                &:last-child:before {
                    margin-bottom: 0;
                }

                &:after {
                    content: counter(count, upper-alpha) !important;
                    position: absolute !important;;
                    height: 20px !important;;
                    width: 20px !important;;
                    padding: 1px 0px 0px 0px !important;;
                    //margin: 35px 0;
                    font-size: 12px;
                    line-height: 20px;
                    font-weight: 500;
                    border: 1px solid #FFFFFF;
                    background-color: #978C21;
                    border-radius: 50%;
                    color: white !important;;
                    top: 0 !important;;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }

    }


    @media (max-width: 767px) {
        .scroll-div {
            padding: 0 !important;

        }

        .modal-data {
            margin-top: 0 !important;
        }

        .modal-close {
            right: 15px !important;
            //top: 0px !important;
        }

        .result {
            margin-top: 60px;
        }

        .invest-content {
            padding-top: 60px;
            margin-bottom: 60px;
        }

        .modal-data__content {
            margin-top: 60px !important;
            padding: 0 15px !important;
        }
    }
`;

export default InvestorCalculator;