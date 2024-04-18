import {useSelector} from "react-redux";
import {NextSeo} from "next-seo";
import {ApiServices} from "../api/network/ApiServices";
import {ApiParamKey} from "../api/network/ApiParamKey";
import {wrapper} from "../api/store";
import {fetchPosts} from "../api/redux/research";
import {useEffect, useRef} from "react";
import InnerbannerV9 from "../../components/innerbanner-v9";
import ResearchList from "../../components/research/ResearchList";
import Newsletter from "../../components/Newsletter";
import Quotes from "../../components/Quotes";
import CTAV3 from "../../components/CTA-v3";
import styled from "styled-components";
import {text} from "../../styles/globalStyleVars";
import {useRouter} from "next/router";


const Research = ({offset, winWidth}) => {
    const getPost = useSelector((state) => state.researchReducer);

    let page_data = getPost?.posts?.data?.page_data
    const banner = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'research-banner');
    const newsletter = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'research-newsleter');
    const quotes = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'research-quotes');
    const cta = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'research-cta');

    const elementRef = useRef(null);
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
                <div ref={elementRef}>
                    <InnerbannerV9 title={page_data?.title} text={banner?.section_data?.short_desc}
                                   src={banner?.images?.list?.[0]?.full_path}/>

                    <div className="research-page">
                        <ResearchList data={getPost?.posts}/>
                    </div>
                    <Newsletter no data={newsletter}/>
                    <Quotes no data={quotes} background={'#F8F8F8'}/>
                    <CTAV3 no data={cta} winWidth={winWidth} offset={offset} />
                </div>
            </StyledComponent>
        </>
    );
};

const StyledComponent = styled.section`
    h3 {
        font-size: 28px;
        line-height: 42px;
        font-weight: 600;
        color: ${text};
    }
`;

Research.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
    let api_services = ApiServices.SECTIONS;
    let param = {
        [ApiParamKey.TYPE]: 'slug',
        [ApiParamKey.VALUE]: 'research-center',
        [ApiParamKey.GET_SECTION]: 'yes',
        [ApiParamKey.IMAGE]: 'yes',
        [ApiParamKey.POST]: 'yes',
        [ApiParamKey.GALLERY]: 'yes',
    }
    await store.dispatch(fetchPosts([api_services, param]));
});

export default Research;
