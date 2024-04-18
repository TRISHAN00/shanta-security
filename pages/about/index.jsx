import {useSelector} from "react-redux";
import {NextSeo} from "next-seo";
import {ApiServices} from "../api/network/ApiServices";
import {ApiParamKey} from "../api/network/ApiParamKey";
import {wrapper} from "../api/store";
import {fetchPosts} from "../api/redux/about";
import InnerbannerV9 from "../../components/innerbanner-v9";
import Invest from "../../components/home/Invest";
import {useEffect, useState} from "react";
import CoreValues from "../../components/about/CoreValues";
import Expert from "../../components/about/Expert";
import CTAV3 from "../../components/CTA-v3";
import styled from "styled-components";
import BestProduct from "../../components/about/BestProduct";
import {useRouter} from "next/router";
import gsap, {CSSPlugin} from "gsap";
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
const About = ({winWidth}) => {
    const [offset, setOffset] = useState('90');
    const getPost = useSelector((state) => state.aboutReducer);
    let page_data = getPost?.posts?.data?.page_data
    let expert = getPost?.posts?.expert
    let board = getPost?.posts?.board

    const banner = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'banner-about');
    const investing = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'overview-about');
    const mission_vision = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'mission-vision');
    const core_values = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'our-core-values');
    const about_cta = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'about-cta');

    // get offset for container
    useEffect(() => {
        if (window.innerWidth > 767) {
            setOffset(document.querySelector('.container').offsetLeft + 15)
        }
    })
    const router = useRouter();
    const currentUrl = router && router.asPath;



    return (
        <>
            <NextSeo
                title={`${page_data?.title ? page_data?.title + ' | Shanta Securities Limited' : 'Shanta Securities Limited' }`}
                description={page_data?.meta_description}
                canonical={"https://www.shantasecurities.com"+currentUrl}
                openGraph={{
                    type: 'website',
                    url: "https://www.shantasecurities.com"+currentUrl,
                    title: page_data?.og_title,
                    description: page_data?.og_description,
                    images: [
                        {
                            url: banner?.images?.list?.[0]?.full_path,
                            width: 800,
                            height: 600,
                            alt: page_data?.og_title,
                        },
                        {
                            url:  banner?.images?.list?.[0]?.full_path,
                            width: 800,
                            height: 600,
                            alt: page_data?.og_title,
                        },
                    ],
                }}
            />
            <StyledComponent>
                <InnerbannerV9 title={banner?.section_data?.subtitle} text={banner?.section_data?.short_desc}
                               src={banner?.images?.list?.[0]?.full_path}/>
                <div id={'who-we-are'}>
                    {/*<Invest winWidth={winWidth} bigtitle offsetContainer={offset} padding={'pt-80'} data={investing} browchure title={''}*/}
                    {/*        offset={offset}/>*/}
                    <Invest  bigtitle padding={'pt-80'} data={investing} browchure title={''}  offset={offset}/>
                </div>
                <div id={'mission-vision'}>
                    <BestProduct data={mission_vision} offset={offset}/>
                </div>
                <div id={'core-values'}>
                    <CoreValues data={core_values}/>
                </div>
                <div id={'our-board'}>
                    <Expert winWidth={winWidth} data={board} title={'Our <span>Board</span>'}/>
                </div>
                <div id={'our-team'}>
                    <Expert winWidth={winWidth} data={expert} padding={'pt-0'} title={'Our <span>Team</span>'}/>
                </div>
                <CTAV3 data={about_cta} winWidth={winWidth} offset={offset}/>
            </StyledComponent>
        </>
    );
};


About.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
    let api_services = ApiServices.SECTIONS;
    let param = {
        [ApiParamKey.TYPE]: 'slug',
        [ApiParamKey.VALUE]: 'about-us',
        [ApiParamKey.GET_SECTION]: 'yes',
        [ApiParamKey.IMAGE]: 'yes',
        [ApiParamKey.POST]: 'yes',
        [ApiParamKey.GALLERY]: 'yes',
    }
    await store.dispatch(fetchPosts([api_services, param]));
});

const StyledComponent = styled.section`
    .lube-testing {
        background: #f2f2f2;
        padding-bottom: 200px;
        @media (max-width: 767px) {
            padding-bottom: 120px;
            .lube-testing__text {
                margin-top: 40px;
            }

            .bigtitle {
                margin-bottom: 0;
            }

            .container-fluid {
                .row {
                    flex-direction: column;

                }
            }
        }
    }
`;
export default About;
