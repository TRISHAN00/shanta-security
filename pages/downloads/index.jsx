import {useSelector} from "react-redux";
import {NextSeo} from "next-seo";
import {ApiServices} from "../api/network/ApiServices";
import {ApiParamKey} from "../api/network/ApiParamKey";
import {wrapper} from "../api/store";
import {fetchPosts} from "../api/redux/downloads";
import DownloadList from "../../components/campaign/DownloadList";
import CTAV3 from "../../components/CTA-v3";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const Downloads = ({winWidth, data }) => {

    const [offset, setOffset] = useState('90');

    const getPost = useSelector((state) => state.downloadsReducer);
    let page_data = getPost?.posts?.data?.page_data
    let load_list = getPost?.posts?.download_list
    const download_cta = getPost?.data?.sections?.find(f => f?.section_data?.slug === 'downloads-cta');
    console.log(getPost)
    // get offset for container
    useEffect(() => {
        if (window.innerWidth > 767) {
            setOffset(document.querySelector('.container').offsetLeft + 15)
        }
    })

    const router = useRouter();

    const currentUrl = router && router.asPath;
// git
    return (
        <StyledComponent>
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
            <div className="black">
                <DownloadList data={load_list}/>
                <CTAV3 data={download_cta} winWidth={winWidth} offset={offset} />
            </div>
        </StyledComponent>
    );
};


Downloads.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
    let api_services = ApiServices.SECTIONS;
    let param = {
        [ApiParamKey.TYPE]: 'slug',
        [ApiParamKey.VALUE]: 'downloads',
        [ApiParamKey.GET_SECTION]: 'no',
        [ApiParamKey.IMAGE]: 'no',
        [ApiParamKey.POST]: 'yes',
        [ApiParamKey.FILE]: 'yes',
        [ApiParamKey.GALLERY]: 'no',
    }
    await store.dispatch(fetchPosts([api_services, param]));
});


const StyledComponent = styled.section`
.download-list{

}
 
`;

export default Downloads;
