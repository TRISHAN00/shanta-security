import {Link, useLocation} from 'react-router-dom';
import React, {useEffect, useRef, useState,memo} from 'react';
import styled from "styled-components";
import {Col, Container, Form, Row} from "react-bootstrap";
import {hover} from "../styles/globalStyleVars";
import {useDispatch, useSelector} from "react-redux";
import {gsap} from "gsap";
import Title from "../components/Title";
import {fetchData} from "./api/redux/search";
import {ApiServices as apiEndPoints} from "./api/network/ApiServices";
import {ApiParamKey as ApiParam} from "./api/network/ApiParamKey";
import {useRouter} from "next/router";


const Search = () => {


    const mobileMenuRaf = useRef()
    const menuRef = useRef()
    const hamburgerRef = useRef();
    const hamburgerCloseRef = useRef();
    const searchClickRef = useRef()
    const searchItemRef = useRef()
    const [border_height, setborder_height] = useState('')


    // search handle
    const [searchInput, setSearchInput] = useState('')
    const handleInput = (e) => {
        setSearchInput(e.target.value);
    }

    const searchSubmit = (e) => {
        e.preventDefault()

        if (searchInput === '') {

        } else {
            window.location.href = `/search?keyword=${searchInput}`;

            document.querySelector('.search-desktop').classList.remove('search-open')
            gsap.to(searchItemRef.current, {
                duration: .4, height: 0, opacity: 0, overflow: 'hidden'
            })
            gsap.to(searchItemRef?.current?.querySelector('.container'), {
                opacity: 0,
            }, '-=.4')
            gsap.to(searchItemRef.current, {
                display: 'none'
            })
        }

        // setSearchInput('')

        // document.querySelector('.search-desktop').classList.remove('search-open')
        // gsap.to(searchItemRef.current, {
        //     duration: .4, height: 0, opacity: 0, overflow: 'hidden'
        // })
        // gsap.to(searchItemRef.current.querySelector('.container'), {
        //     opacity: 0,
        // }, '-=.4')
        // gsap.to(searchItemRef.current, {
        //     display: 'none'
        // })
    }


    const location = useRouter()
    const dispatch = useDispatch()


    // api call
    const dispath = useDispatch()
    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.get('keyword') ? searchParams.get('keyword') : '';
    // api call
    useEffect(() => {
        let api_url = apiEndPoints.SEARCH


        let param = {
            [ApiParam.KEYWORD]: keyword,
        }

        if (keyword && keyword !== '') {
            setSearchInput(keyword)
        }

        dispath(fetchData([api_url, param]))

    }, [location])

    let getSearchData = useSelector(state => state.search);


// data
//     const filterProduct = getSearchData?.data?.data?.filter(f => f?.type === 'product');
    const filterProduct = getSearchData?.data?.data
    const total = filterProduct?.length

    return (
        <>

            {/*{loading && <Loading/>}*/}

            <StyledSearch className=''>
                {/*{getSearchData?.loading && <Loader/>}*/}
                <div className="search-desktop">
                    <Container className='search-desktop__top'>
                        <Form onSubmit={searchSubmit}>
                            <Form.Group className="search-input">
                                <Form.Control type="text" value={searchInput} onChange={e => handleInput(e)}
                                              placeholder={'Search'}/>
                                <button type='submit'>Search</button>
                            </Form.Group>
                        </Form>
                    </Container>
                </div>

                <div className="search-result pt-100 pb-160">
                    <Container>
                        <Row>
                            <Col>
                                {
                                    <Title noanim margin={'0 0 80px 0'}
                                           text={`Are you looking for : ${keyword && keyword !== '' ? keyword : 'Nothing Found' + keyword}`}/>


                                }
                            </Col>

                            <Col md={12}>
                                <div className="search-result-wrap">

                                    {filterProduct?.length > 0 ?


                                        filterProduct?.map((item) => {
                                            return(
                                                <div className={` fade-up search-result__single d-flex`} >

                                                    {
                                                        item?.type === 'page' ?
                                                            <Link to={`${item?.slug === 'landing-page' && '/'  ||
                                                            item?.slug === '' && '/'+ item?.slug   ||
                                                            item?.slug === 'downloads' && '/downloads' ||
                                                            item?.slug === 'easytrade' && '/easytrade' ||
                                                            item?.slug === 'services' && '/our-services'||
                                                            item?.slug === 'shanta-easytrade' && '/easytrade' ||
                                                            item?.slug === 'shanta-financial-literacy-program' && '/shanta-financial-literacy-program' ||
                                                            item?.slug === 'career' && '/career' ||
                                                            item?.slug === 'about-us' && '/about'||
                                                            item?.slug === 'contact' && '/contact' ||
                                                            item?.slug === 'downloads' && '/downloads'  ||
                                                            item?.slug === 'research-center' && '/research' ||
                                                            item?.slug === 'services' && '/services'
                                                            }`}></Link>
                                                                :  item?.type === 'research'  ?
                                                                <Link to={'/research'}></Link> :
                                                                item?.type === 'product'  ?
                                                                    <Link to={'/our-services'}></Link>

                                                                    :
                                                                    item?.type === 'product'  ?
                                                                        <Link to={'/our-services'}></Link>

                                                                    :
                                                                    item?.category_id === 4  ?
                                                                        <Link to={'/research#expert'}></Link>

                                                                :   item?.category_id === 14  ?
                                                                            <Link to={'/about#our-team'}></Link>

                                                                            :

                                                                            item?.type === 'page'  ?
                                                                                <Link to={item?.slug}></Link>

                                                                                :


                                                                            ''


                                                    }


                                                    <Col sm={6} className="search-result__single__content p-0">
                                                        <p>{item?.title}</p>
                                                    </Col>

                                                </div>
                                            )
                                        } ) : <p>It seems we can’t find what you’re looking for. Perhaps searching can help.</p>


                                    }


                                </div>

                            </Col>


                        </Row>
                    </Container>
                </div>

            </StyledSearch>
        </>
    );
};

const StyledSearch = styled.section`
  .search-desktop {

    padding: 200px 0 60px 0;
    background-color: #F9F9F9;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    //position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 100px;
    //height: 0;
    //display: none;
    //opacity: 0;
    //overflow: hidden;
    z-index: 9;

    .container {
      position: relative;
      //opacity: 0;
    }

    svg {
      position: absolute;
      top: -25px;
      right: -14px;
      font-size: 22px;
      cursor: pointer;

      &:hover {
        color: ${hover};
      }
    }

    form {
      min-width: 100%;

      .search-input {
        position: relative;

        button, p {
          box-shadow: none;
          border: none;
          background-color: transparent;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          height: fit-content;
          font-size: 12px;
          line-height: 18px;
          color: #221f1f;
          transition: color .3s ease;
          cursor: pointer;

          &:hover {
            color: ${hover};
          }
        }

        img {
          position: absolute !important;
          bottom: 19px;
          margin: auto;
        }

        .form-control {
          border: none;
          border-radius: 0;
          border-bottom: 1px solid #221F1F;
          padding-left: 0px;
          padding-bottom: 9px;
          padding-top: 0;
          height: 50px;
          font-size: 32px;
          line-height: 36px;
          font-weight: 500;
          color: #221F1F;
          background-color: transparent;

          ::placeholder {
            font-size: 32px;
            line-height: 36px;
            font-weight: 600;
            color: rgba(34, 31, 31, 0.20);
          }
        }

      }
    }

    .search-desktop__menu {
      margin-top: 23px;
      min-width: 100%;

      p {
        font-size: 12px;
        color: ${hover};
        font-weight: 600;
        line-height: 18px;
        margin-bottom: 13px;

      }

      ul {
        display: inline-flex;

        li {
          a {
            font-size: 16px;
            font-weight: 600;
            line-height: 22px;
            color: #221f1f;
            display: flex;
            margin-right: 30px;
          }

          &:nth-last-child(1) {
            a {
              margin-right: 0;
            }
          }
        }
      }

    }

    @media (max-width: 992px) {
      padding: 120px 0 60px 0 !important;
    }
  }

  .search-result-wrap {
    width: 100%;
  }

  .search-result {
    &__single {
      position: relative;
      margin-bottom: 40px;
      padding-bottom: 40px;
      border-bottom: 1px solid rgba(34, 31, 31, 0.30);

      //&:nth-last-of-type(1) {
      //  margin-bottom: 0;
      //  padding-bottom: 0;
      //  border-bottom: 0;
      //}

      a {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 2;
      }

      &__content {
        h2 {
          font-size: 26px;
          font-weight: bold;
          line-height: 32px;
          margin: 0 0 26px 0;
          transition: color .4s ease;

        }

        p {
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          white-space: normal;
        }
      }


      &__img {
        height: 160px;

        div {
          width: 100%;
          height: 100%;
        }

        img {
          position: static;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
      }

      &:hover {
        h2 {
          color: ${hover};
        }
      }
    }
  }

  @media (max-width: 550px) {
    .search-desktop form .search-input .form-control {
      padding-left: 30px;
      font-size: 20px;
      line-height: 25;
      padding-right: 0px;

      &::placeholder {
        font-size: 20px;
        line-height: 25;
      }
    }

    .search-result__single {
      flex-wrap: wrap;
      flex-direction: column-reverse;

      &__content {
        min-width: 100%;
      }

      &__img {
        min-width: 100%;
        margin: 0 0 20px 0;

        span {
          max-width: 200px !important;
          min-width: 200px !important;

          img {
            max-width: fit-content !important;
            min-width: fit-content !important;
            margin: 0 !important;
            left: 15px !important;
          }
        }
      }
    }

  }

  
  
`;


export default React.memo(Search);
