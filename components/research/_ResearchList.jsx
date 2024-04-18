import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Img} from "../Img";
import {hover} from "../../styles/globalStyleVars";
import title from "../Title";
import Button from "../ButtonLoadMore";
import ButtonSubmit from "../Button";
import React, {useEffect, useState} from "react";
import Select from "react-select";
import ExpertList from "../research-expert/ExpertList";
import reactHtmlParser from "react-html-parser";
import {Link} from 'next/link';
import BoxSlider from "../BoxSlider";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
const RandomSliderV1 = ({offset, data}) => {

    const [activeTab, setActiveTab] = useState('economy');
    const [height, setHeight] = useState();

    const handleClick = (tab) => {
        // gsap.registerPlugin(ScrollTrigger);



        gsap.registerPlugin(ScrollTrigger);


        setActiveTab(tab); // Assuming you have a function to handle tab activation
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 300);
    };


    // blog-slider__slider-wrap
    useEffect(() => {
        let heightblog = document.querySelector('.blog-slider__slider-wrap')?.clientHeight ;

        setHeight(heightblog)

    })
    const DropdownOption = [
        {value: 'economy', label: 'Economy'},
        {value: 'blog', label: 'Blog'},
        {value: 'market', label: 'Market Review'},
        {value: 'sector', label: 'Strategy Report'},
        {value: 'company', label: 'Company Review'},
        {value: 'expert', label: 'Research Experts'},
        {value: 'dashboard', label: 'Economic Dashboard'},
        {value: 'Company Dashboard', label: 'Company Dashboard'}
    ];


    const handleResearch = (e) => {
        setActiveTab(e);

        // setReg({...reg, department: e})
    }
    useEffect(() => {


    }, [])

    return (
        <StyledBlog offset={offset} id={'blog-slider'} className='blog-slider  pb-160'>

            <Container>
                <Row>
                    <Col md={12} className={'filter'}>
                        <ul className={'desktop'}>
                            {
                                data?.economy && data?.economy?.length > 0 &&
                                <li className={activeTab === 'economy' ? 'active' : ''} id="economy"
                                    onClick={() => handleClick('economy')}>
                                    <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'} width={'100'}
                                                  text={'Economy'} color={'#3C3C3B'}
                                                  hoverBackground={hover}
                                                  background={'transparent'}/>
                                </li>
                            }

                            <li className={activeTab === 'blog' ? 'active' : ''} id="blog"
                                onClick={() => handleClick('blog')}>
                                <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'} width={'100'}
                                              text={'Blog'} color={'#3C3C3B'}
                                              hoverBackground={hover}
                                              background={'transparent'}/>
                            </li>
                            <li className={activeTab === 'market' ? 'active' : ''} id="market"
                                onClick={() => handleClick('market')}>
                                <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'} width={'100'}
                                              text={'Market Review'} color={'#3C3C3B'}
                                              hoverBackground={hover}
                                              background={'transparent'}/>
                            </li>
                            <li className={activeTab === 'sector' ? 'active' : ''} id="sector"
                                onClick={() => handleClick('sector')}>
                                <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'} width={'100'}
                                              text={'Strategy Report'} color={'#3C3C3B'}
                                              hoverBackground={hover}
                                              background={'transparent'}/>
                            </li>
                            <li className={activeTab === 'company' ? 'active' : ''} id="company"
                                onClick={() => handleClick('company')}>
                                <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'} width={'100'}
                                              text={'Company Review'} color={'#3C3C3B'}
                                              hoverBackground={hover}
                                              background={'transparent'}/>
                            </li>

                            <li className={activeTab === 'dashboard' ? 'active' : ''} id="dashboard"
                                onClick={() => handleClick('dashboard')}>
                                <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'} width={'100'}
                                              text={'Economic Dashboard'} color={'#3C3C3B'}
                                              hoverBackground={hover}
                                              background={'transparent'}/>
                            </li>
                            <li className={activeTab === 'company_dashboard' ? 'active' : ''} id="company_dashboard"
                                onClick={() => handleClick('company_dashboard')}>
                                <ButtonSubmit border={'1px'} borderColor={'rgba(60,60,59,0.5)'} width={'100'}
                                              text={'Company Dashboard'} color={'#3C3C3B'}
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
                                placeholder={'Research'}
                                onChange={(e) => handleResearch(e.value)}
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
                    {
                        data?.economy && data?.economy?.length > 0 &&
                        <div data-tab={'economy'}
                             className={` fade-up blog-slider__slider-wrap ${activeTab === 'economy' ? 'active' : ''}`}>
                            <div className="blog-slider__slider-wrap__inner row">
                                {
                                    data?.economy?.map((e, index) => {
                                        const dateString = e?.data?.created_at;
                                        const date = new Date(dateString);
                                        const options1 = {day: 'numeric'};
                                        const options2 = {month: 'long', year: 'numeric'};
                                        const formattedDate1 = date.toLocaleDateString('en-US', options1);
                                        const formattedDate2 = date.toLocaleDateString('en-US', options2);
                                        return (
                                            <Col md={4}  className={'blog-single-single-wrp'}>
                                                <div  className='blog-single '>
                                                    <div className="blog-single__inner">
                                                        {
                                                            e?.file?.list?.[0]?.full_path &&
                                                            <a href={e?.file?.list?.[0]?.full_path} target={'_blank'}></a>

                                                        }
                                                        {
                                                            e?.images?.list?.[0]?.full_path &&
                                                            <Img alt={'Shanta Securities Limited'} src={e?.images?.list?.[0]?.full_path ? e?.images?.list?.[0]?.full_path : 'images/static/blur.jpg'}
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
                                                                        e?.file?.list?.[0]?.full_path &&
                                                                        <a className={'link-dc'}
                                                                           href={e?.file?.list?.[0]?.full_path}
                                                                           target={'_blank'}>Read More</a>

                                                                    }

                                                                </div>
                                                                {
                                                                    e?.data?.title &&
                                                                    <h2>{reactHtmlParser(e?.data?.title)}</h2>
                                                                }

                                                            </div>
                                                            <div className="blog-single__inner__content__bottom">
                                                                {
                                                                    formattedDate1 &&
                                                                    <h4>{formattedDate1}</h4>
                                                                }
                                                                <p>
                                                                    {
                                                                        formattedDate2 &&
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
                            {
                                data?.economy?.length > 10 &&
                                <Row>
                                    <Col className={'text-center load'} md={12}>
                                        <Button icon src={'/'} color={'#3C3C3B'} hoverColor={'#3C3C3B'} text={'Learn More'}/>

                                    </Col>
                                </Row>
                            }

                        </div>

                    }
                    <div data-tab={'blog'}
                         className={` blog-tab fade-up blog-slider__slider-wrap ${activeTab === 'blog' ? 'active' : ''}`}>
                        <div className="blog-slider__slider-wrap__inner row">
                            {
                                data?.blog?.map((e, index) => {
                                    const dateString = e?.data?.created_at;
                                    const date = new Date(dateString);
                                    const options1 = {day: 'numeric'};
                                    const options2 = {month: 'long', year: 'numeric'};
                                    const formattedDate1 = date.toLocaleDateString('en-US', options1);
                                    const formattedDate2 = date.toLocaleDateString('en-US', options2);
                                    return (
                                        <Col md={4}  className={'blog-single-single-wrp'}>
                                            <div className='blog-single '>
                                                <div className="blog-single__inner">
                                                    {
                                                        e?.data?.slug &&
                                                        <Link to={`blog/${e?.data?.slug}`} ></Link>

                                                    }

                                                    {
                                                        e?.images?.list?.[0]?.full_path &&
                                                        <Img alt={'Shanta Securities Limited'} src={e?.images?.list?.[0]?.full_path ? e?.images?.list?.[0]?.full_path : 'images/static/blur.jpg'}
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
                                                                    <Link className={'link-dc'} to={`blog/${e?.data?.slug}`} ></Link>

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
                            }

                        </div>

                        {
                            data?.blog?.length > 10 &&
                            <Row>
                                <Col className={'text-center load'} md={12}>
                                    <Button icon src={'/'} color={'#3C3C3B'} hoverColor={'#3C3C3B'} text={'Learn More'}/>

                                </Col>
                            </Row>
                        }
                    </div>

                    <div data-tab={'market'}
                         className={` fade-up blog-slider__slider-wrap ${activeTab === 'market' ? 'active' : ''}`}>
                        <iframe src="https://www.lipsum.com/" title="description"></iframe>
                    </div>
                    <div data-tab={'sector'}
                         className={` fade-up blog-slider__slider-wrap ${activeTab === 'sector' ? 'active' : ''}`}>
                        <iframe src="https://www.lipsum.com/" title="description"></iframe>

                    </div>
                    <div data-tab={'company'}
                         className={` fade-up blog-slider__slider-wrap ${activeTab === 'company' ? 'active' : ''}`}>
                        <iframe src="https://www.lipsum.com/" title="description"></iframe>

                    </div>
                    <div data-tab={'expert'}
                         className={` fade-up blog-slider__slider-wrap ${activeTab === 'expert' ? 'active' : ''}`}>
                        <ExpertList data={data?.expert} />


                        {
                            data?.expert?.length > 10 &&
                            <Row>
                                <Col className={'text-center load'} md={12}>
                                    <Button icon src={'/'} color={'#3C3C3B'} hoverColor={'#3C3C3B'} text={'Learn More'}/>

                                </Col>
                            </Row>
                        }
                    </div>

                    <div data-tab={'dashboard'}
                         className={` fade-up blog-slider__slider-wrap ${activeTab === 'dashboard' ? 'active' : ''}`}>
                        <iframe src="https://docs.google.com/spreadsheets/d/1R2XX9N7Xy9Vi7nF0XdhxVZcej8OcjV_H/edit?usp=sharing&ouid=102875954432237213933&rtpof=true&sd=true" title="description"></iframe>

                    </div>
                    <div data-tab={'company_dashboard'}
                         className={`blog-slider__slider-wrap ${activeTab === 'company_dashboard' ? 'active' : ''}`}>
                        <iframe src="https://docs.google.com/spreadsheets/d/1HNmEB-6-wPudkIL2N0Ip7XmCYSlQfq6t/edit?usp=sharing&ouid=102875954432237213933&rtpof=true&sd=true" title="description"></iframe>

                    </div>


                </div>
            </Container>

        </StyledBlog>
    );
};

const StyledBlog = styled.section`
  padding-top: 80px;
  
  
  iframe{
    height: 500px;
    width: 100%;
  }
  
  .min-height-box{
    min-height: 20vh;
  }
  .css-lkh0o5-menu{
    z-index: 9;
    margin: 0 ;
  }
  .mobile{
    display: none;
  }

  .filter{
    margin-bottom: 80px;
    ul{
      display: flex;
      gap: 30px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .active{
      a{
        &:before{
          transform: unset;
        }
        span{
          color: white;
        }
      }
    }
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

    &.active {
      visibility: visible;
      height: auto;
      //display: block;
      opacity: 1;
    }
    &.blog-tab{

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

            .hover-content{
              position: absolute;
              left: 40px;
              top: 40px;
              right: 40px;
              transition: all 1s cubic-bezier(.25, .74, .22, .99);
              transform: translateY(-30px);
              opacity: 0;

              .link-dc{
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
                &:hover{
                  &:before{
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

            .link-dc{
              transform: none;
              opacity: 1;
              &:before{
                //height: 4px;
              }
            }

            .hover-content{
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
        
        .hover-content{
          position: absolute;
          left: 40px;
          top: 40px;
          right: 40px;
          transition: all 1s cubic-bezier(.25, .74, .22, .99);
          transform: translateY(-30px);
          opacity: 0;

          .link-dc{
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
            &:hover{
              &:before{
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
        
        .link-dc{
          transform: none;
          opacity: 1;
          &:before{
            //height: 4px;
          }
        }
        
        .hover-content{
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

    .mobile{
      display: block;
    }
    .desktop{
      display: none !important;
    }
    padding-top: 0;
    .filter{
      padding: 0;
      .react-select__control{
        border: none !important;
        height: 60px;
        background: #978c21;
        box-shadow: none !important;

        .react-select__control--menu-is-open{
          box-shadow: none !important;
          .react-select__indicator{
            padding-right: 15px;

          }
        }
        .react-select__value-container{
          padding: 0px 15px;
        }
        .react-select__indicator{
          padding: 15px;
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

`;
export default React.memo(RandomSliderV1);