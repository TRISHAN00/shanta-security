import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Modal from "react-bootstrap/Modal";
import {Col, Container, Form, Row} from "react-bootstrap";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Title from "./Title";
import Select from "react-select";
import Button from "./Button";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {useDispatch} from "react-redux";
import CanvasJSReact from '@canvasjs/react-charts';
import {ApiServices} from "../pages/api/network/ApiServices";

const PopupV1 = ({
                     show,
                     handleClose,
                     no_img,
                     item,
                     title,
                     description,
                     data,
                     subtitle,
                     img, parsedData
                 }) => {


    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const [startDate, setStartDate] = useState('');
    const popupData = data;
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
    const handleInput = (e) => {
        // name = e.target.name;
        // value = e.target.value;
        // setReg({...reg, [name]: value})
        // if (name === 'name') {
        //     emptyValidation(value) ? setValidName(true) : setValidName(false)
        // }
        // if (name === 'phone') {
        //     emptyNumber(value) ? setValidPhone(true) : setValidPhone(false)
        // }
        // if (name === 'email') {
        //     emailValidation(value) ? setValidEmail(true) : setValidEmail(false)
        // }
        // if (name === 'msg') {
        //     emptyValidation(value) ? setValidMsg(true) : setValidMsg(false)
        // }
    }

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
    let options = []
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
            // const response = await fetch('https://bestinbd.com/projects/web/2305SSL/dev/api/' + apiEndPoints.INVESTOR + '?date=' + selectedDate + '&stock=' + selectedStocks + '&year' = selectedStocksYear);
            const response = await fetch('https://bestinbd.com/projects/web/2305SSL/dev/api/' + ApiServices.INVESTOR +  '?stock=' + selectedStocks + '&year=' + selectedOptionsYear + '&payment=' + paymentValue)
            const data = await response.json();
            const stockTotal = selectedOptions?.length;
            const mainData = data?.data;



            let final_value = data.portfolioValue[data.portfolioValue.length - 1]?.result;

            data.portfolioValue?.map((e,index) =>
            {
                let year = Math.floor(e?.year.split("-")[0]); // Extract the year from the date
                updatedDataOption.push({ x: year, y: parseFloat(e?.result.replace(/,/g, '')) })

//                 let year = parseInt(e?.year.split("-")[0]); // Extract the year from the date and convert to integer
//                 let month = parseInt(e?.year.split("-")[1]) - 1; // Extract the month from the date and subtract 1 to match JavaScript's 0-indexed month
// // Create a new Date object with the year and month
//                 updatedDataOption.push({ x: new Date(year, month), y: parseFloat(e?.result.replace(/,/g, '')) });
//

                    // let year = parseInt(e?.year.split("-")[0]); // Extract the year from the date and convert to integer
                    // let month = parseInt(e?.year.split("-")[1]) - 1; // Extract the month from the date and subtract 1 to match JavaScript's 0-indexed month
                    //

                    // updatedDataOption.push({ x: year, y: parseFloat(e?.result.replace(/,/g, '')) });

                }



        )

            updatedDataOption.sort((a, b) => a.x - b.x); // Sort the data points based on the x (date) values

            setDataOption(updatedDataOption);

            // Update the result HTML with the calculated values
            const resultElement = document.getElementById('result');
            if (resultElement) {
                resultElement.innerHTML = `
                <div class="result-wrp">
                    <p>Earning</p>
                    <h3>${final_value}</h3>
                </div>
            `;
            }
            setCan(true);

        } catch (error) {
            // Handle error if the API request fails
            console.error('Failed to fetch data from the API:', error);
        }


    };



// Remove duplicate years from dataOption array

    let uniqueDataOption = [...new Map(dataOption.map(item => [item.x, item])).values()];



    options = {
        theme: "light1", // "light1", "dark1", "dark2"
        animationEnabled: true,
        title: {
            text: "Investor Calculator"
        },
        axisY: {
            title: "Investment Amount"
        },
        toolTip: {
            shared: true
        },

        axisX: {
            labelFormatter: function (e) {
                return Math.floor(e.value);
            }
        },
        data: [
            {
                type: "line",
                name: "Investment Amount",
                showInLegend: false,
                dataPoints: uniqueDataOption

            }]
    }





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


    return (

        <StyledModal>
            <Modal
                show={show}
                item={item}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="gph_modal popup-version-one investor_popup"
            >
                <SimpleBar className="main_scroll" style={{height: '100vh'}}>
                    <Modal.Body>
                        <Container>
                            <Row className={'for-close'}>
                                <div onClick={() => {handleClose(); setCan(false)}}  className="modal-close ">

                                    <svg id="Button_-_Close" data-name="Button - Close"
                                         xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
                                        <g id="Ellipse_18" data-name="Ellipse 18" fill="none" stroke="#3c3c3b"
                                           stroke-width="1" opacity="0.3">
                                            <circle cx="22" cy="22" r="22" stroke="none"/>
                                            <circle cx="22" cy="22" r="21.5" fill="none"/>
                                        </g>
                                        <g id="Ellipse_19" data-name="Ellipse 19" fill="none" stroke="#3c3c3b"
                                           stroke-width="1" strokeDasharray="0 142" opacity={'0'}>
                                            <circle cx="22" cy="22" r="22" stroke="none"/>
                                            <circle cx="22" cy="22" r="21.5" fill="none"/>
                                        </g>
                                        <g id="Group_18979" data-name="Group 18979" transform="translate(-3149 -104.5)">
                                            <line id="Line_4" data-name="Line 4" x2="8" y2="8"
                                                  transform="translate(3167 122.5)" fill="none" stroke="#3c3c3b"
                                                  strokeLinecap="round" stroke-width="1"/>
                                            <line id="Line_3877" data-name="Line 3877" x1="8" y2="8"
                                                  transform="translate(3167 122.5)" fill="none" stroke="#3c3c3b"
                                                  strokeLinecap="round" stroke-width="1"/>
                                        </g>
                                    </svg>

                                </div>

                            </Row>
                        </Container>
                        <Container>
                            <Row>


                                <div className="modal-data d-flex">

                                    <Col sm={{span: 12}} className='modal-data__content'>


                                        <div className="scroll-div">
                                            {window.innerWidth > 767 ?
                                                <SimpleBar autoHide={true} style={{maxHeight: 'calc(100vh - 100px)'}}>

                                                    <Row>
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

                                                                                type="text"
                                                                                name='payment'
                                                                                placeholder="Payment"
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
                                                        {
                                                            can == true ?

                                                                <Col md={12}> <br/>
                                                                    {
                                                                        can == true ?
                                                                            <CanvasJSChart options={options}
                                                                                /* onRef={ref => this.chart = ref} */
                                                                            />
                                                                            : ''
                                                                    }

                                                                </Col>
                                                                : ''
                                                        }
                                                        <Col className={'invest-content'} md={12}>


                                                            <Title margin={'0 0 30px 0'}
                                                                   text={'Using Investment Calculator'}/>

                                                            <ul>
                                                                <li><span>Enter an initial investment:</span> If you
                                                                    have, say,
                                                                    $1,000 to invest right now, include that amount
                                                                    here. If you don’t have an initial amount to invest
                                                                    now, you can enter $0.
                                                                </li>
                                                                <li>
                                                                    <span> Enter your regular contributions:</span> If
                                                                    you plan to invest a certain amount every month into
                                                                    your investment account (a strategy known as
                                                                    dollar-cost averaging), include this amount after
                                                                    selecting the “monthly” option. Or, if you’d rather
                                                                    invest one lump sum once per year, choose “annually”
                                                                    and include your planned annual contribution. If you
                                                                    do not plan to make regular contributions, select
                                                                    either option and enter $0.
                                                                </li>
                                                                <li>
                                                                    <span>Choose how long your investment will grow:</span> How
                                                                    long do you plan to keep your money invested? If
                                                                    you’re investing in stocks, it’s generally a good
                                                                    idea to stay invested for at least five years to
                                                                    weather any volatility post-purchase.
                                                                </li>
                                                                <li>
                                                                    <span>Enter your expected rate of return:</span> For
                                                                    a point of reference, the S&P 500 has a historical
                                                                    average annual total return of about 10%, not
                                                                    accounting for inflation. This doesn’t mean you can
                                                                    expect 10% growth every year; you could experience a
                                                                    gain one year and a loss the next. But if you keep
                                                                    your money invested for the long term, the goal is
                                                                    for these gains and losses to average out over time,
                                                                    ideally ending significantly in the black by the end
                                                                    of the investment period. We've added a default
                                                                    return of 6%, which is fairly conservative — feel
                                                                    free to adjust it to match your expectations for
                                                                    your own investment portfolio.
                                                                </li>
                                                                <li>
                                                                    <span> Enter how frequently you want your investment returns to compound:</span> You
                                                                    can opt to match the compounding frequency to your
                                                                    contribution frequency — meaning, if you plan to
                                                                    make additional contributions on a monthly basis,
                                                                    you'd choose monthly compounding. If you plan to
                                                                    make annual contributions, you might opt for annual
                                                                    compounding. But daily compounding is likely to get
                                                                    you closest to estimating typical investment
                                                                    performance. Compounding at more frequent intervals
                                                                    leads to higher growth over time.
                                                                </li>

                                                            </ul>
                                                        </Col>
                                                    </Row>
                                                </SimpleBar>
                                                :
                                                <>
                                                    <Row>
                                                        <Col className={'form'} md={6}>
                                                            <Title margin={'0 0 30px 0'}
                                                                   text={'Investment calculator'}/>

                                                            <div className="form-wrapper-all">
                                                                <Form.Group className="col-md-12 pb-30">
                                                                    <Form.Control
                                                                        className={'form-control-lg'}

                                                                        type="text"
                                                                        name='payment'
                                                                        placeholder="Payment"
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
                                                            </div>
                                                        </Col>
                                                        <Col md={{span: 5, offset: 1}} className={'result'}>
                                                            <div className="result-wrp">
                                                                <p>Duration</p>
                                                                <h3>10 years</h3>
                                                                <p className={'last'}>Earning</p>
                                                                <h3>$25,485</h3>
                                                            </div>
                                                        </Col>

                                                        <Col className={'invest-content'} md={12}>
                                                            <Title margin={'0 0 30px 0'}
                                                                   text={'Using Investment Calculator'}/>

                                                            <ul>
                                                                <li><span>Enter an initial investment:</span> If you have, say,
                                                                    $1,000 to invest right now, include that amount
                                                                    here. If you don’t have an initial amount to invest
                                                                    now, you can enter $0.
                                                                </li>
                                                                <li>
                                                                    <span> Enter your regular contributions:</span> If you plan to invest a certain amount every month into your investment account (a strategy known as dollar-cost averaging), include this amount after selecting the “monthly” option. Or, if you’d rather invest one lump sum once per year, choose “annually” and include your planned annual contribution. If you do not plan to make regular contributions, select either option and enter $0.
                                                                </li>
                                                                <li>
                                                                    <span>Choose how long your investment will grow:</span> How long do you plan to keep your money invested? If you’re investing in stocks, it’s generally a good idea to stay invested for at least five years to weather any volatility post-purchase.
                                                                </li>
                                                                <li>
                                                                    <span>Enter your expected rate of return:</span> For a point of reference, the S&P 500 has a historical average annual total return of about 10%, not accounting for inflation. This doesn’t mean you can expect 10% growth every year; you could experience a gain one year and a loss the next. But if you keep your money invested for the long term, the goal is for these gains and losses to average out over time, ideally ending significantly in the black by the end of the investment period. We've added a default return of 6%, which is fairly conservative — feel free to adjust it to match your expectations for your own investment portfolio.
                                                                </li>
                                                                <li>
                                                                    <span> Enter how frequently you want your investment returns to compound:</span> You can opt to match the compounding frequency to your contribution frequency — meaning, if you plan to make additional contributions on a monthly basis, you'd choose monthly compounding. If you plan to make annual contributions, you might opt for annual compounding. But daily compounding is likely to get you closest to estimating typical investment performance. Compounding at more frequent intervals leads to higher growth over time.
                                                                </li>

                                                            </ul>
                                                        </Col>
                                                    </Row>
                                                </>
                                            }

                                        </div>


                                    </Col>


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
