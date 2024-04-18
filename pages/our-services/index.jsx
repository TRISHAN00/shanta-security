import {useSelector} from "react-redux";
import {NextSeo} from "next-seo";
import {ApiServices} from "../api/network/ApiServices";
import {ApiParamKey} from "../api/network/ApiParamKey";
import {wrapper} from "../api/store";
import {fetchPostDetail, fetchPosts} from "../api/redux/services";
import InnerbannerV9 from "../../components/innerbanner-v9";
import {useEffect} from "react";
import gsap, {CSSPlugin} from "gsap";
import {useRouter} from "next/router";
import ZigZag from "../../components/ZigZag";
import Newsletter from "../../components/Newsletter";
import BoxSlider from "../../components/BoxSlider";
import CTAV3 from "../../components/CTA-v3";
import styled from "styled-components";
import dynamic from "next/dynamic";

const Services = dynamic(() => import("../../components/Services"));


const Career = ({offset, winWidth}) => {
    const getPost = useSelector((state) => state.servicesReducer);
    const router = useRouter();
    let page_data = getPost?.posts?.data?.page_data;

    const banner = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'banner-services');
    const services_list = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'services-overview');
    const services_l = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'services-list');
    const newsletter = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'services-newsletter');
    const services_cta = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'services-cta');


    useEffect(() => {
        // Check if running in a browser environment
        if (typeof window !== 'undefined') {
            const urlFragment = window.location.hash;
            const urlhas = urlFragment ? `#${urlFragment}` : null; // Prepend '#' if fragment

            if (urlhas) {
                setTimeout(() => {
                    const targetElement = document.querySelector(urlhas);
                    if (targetElement) {
                        document.body.style.overflow = 'auto';
                        const html = document.querySelector('html');
                        html.style.overflow = 'auto';

                        gsap.to(window, {
                            duration: 1,
                            scrollTo: {y: targetElement.offsetTop}
                        });
                    }
                }, 600);
            }
        }
    }, []); // No dependencies, run once on mount

    // useEffect(() => {
    //     let split = gsap.utils.toArray(".split-up");
    //     gsap.registerPlugin(CSSPlugin);
    //
    //     if (window.innerWidth > 767) {
    //         gsap.utils.toArray('.split-up').forEach((item, i) => {
    //             const parentSplit = new SplitText(item, {
    //                 linesClass: "split-parent",
    //                 type: "lines",
    //             });
    //             const childSplit = new SplitText(item, {
    //                 type: "lines",
    //                 linesClass: "split-child"
    //             });
    //
    //             gsap.from(parentSplit.lines, {
    //                 duration: 1,
    //                 yPercent: 150,
    //                 ease: 'power4.out',
    //                 stagger: .08,
    //                 scrollTrigger: {
    //                     trigger: item,
    //                     toggleActions: "restart none none reset",
    //                     start: "top 98%",
    //                 }
    //             });
    //         });
    //     }
    // }, [getPost]);


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
                            url: 'https://res.cloudinary.com/dgxoa4a9i/image/upload/page/landing-page/1688559694xs86e.webp',
                            width: 800,
                            height: 600,
                            alt: page_data?.og_title,
                        },
                        {
                            url:  'https://res.cloudinary.com/dgxoa4a9i/image/upload/page/landing-page/1688559694xs86e.webp',
                            width: 800,
                            height: 600,
                            alt: page_data?.og_title,
                        },
                    ],
                }}
            />
            <StyledComponent>
                <InnerbannerV9 title={page_data?.title} text={banner?.section_data?.short_desc}
                               src={banner?.images?.list?.[0]?.full_path}/>
                <div className="service service_page">
                    <Services id={'services'} services_data={services_list}/>
                </div>
                {
                    services_l?.posts?.list && services_l?.posts?.list?.length > 0 &&
                    services_l?.posts?.list?.map((e, index) => {
                        return (
                            index % 2 === 0 ?
                                <ZigZag index={index} data={e} offset={offset}/> :
                                <ZigZag index={index} data={e} reverse offset={offset}/>
                        );
                    })
                }

                <Newsletter no data={newsletter}/>

                <div className=" service_blog_slider">
                    <BoxSlider Data={getPost?.detail?.data}/>
                </div>
                <CTAV3 data={services_cta} winWidth={winWidth} offset={offset}/>
            </StyledComponent>
        </>
    );
};

const StyledComponent = styled.section`

    .home-blue-bg-info {
        padding-top: 160px;

    }

    @media (max-width: 767px) {
        .service_page {
            padding-bottom: 120px;
        }
    }

    .subscribe {
        margin-top: 200px;
    }

    .blog-slider {
        //padding-bottom: 200px;
    }
`;

Career.getInitialProps = wrapper.getInitialPageProps(store => async () => {


    const fetchData = async () => {
        const api_url = ApiServices.SECTIONS;
        const api_url_reserch = ApiServices.SERVICERESEARCH;

        const param = {
            [ApiParamKey.TYPE]: 'slug',
            [ApiParamKey.VALUE]: 'services',
            [ApiParamKey.GET_SECTION]: 'yes',
            [ApiParamKey.IMAGE]: 'yes',
            [ApiParamKey.POST]: 'yes',
            [ApiParamKey.GALLERY]: 'yes',
        };

        try {
            // Use Promise.all to wait for both API calls to complete
            await Promise.all([
                store.dispatch(fetchPosts([api_url, param])),
                store.dispatch(fetchPostDetail([api_url_reserch])),
            ]);
        } catch (error) {
            // Handle errors gracefully
            console.error('Error fetching data:', error);
            // Optionally, you can set a flag in the Redux store to indicate an error
            // This flag can be used to display an error message in the UI
            // Example: store.dispatch(setErrorFlag(true));
        }
    };

    await fetchData();
});


export default Career;
