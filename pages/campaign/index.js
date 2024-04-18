import {useSelector} from "react-redux";
import {NextSeo} from "next-seo";
import {wrapper} from "../api/store";
import {ApiServices} from "../api/network/ApiServices";
import {ApiParamKey} from "../api/network/ApiParamKey";
import {fetchPosts} from "../api/redux/campaign";
import styled from "styled-components";
import CampaignList from "../../components/campaign/CampaignList";
import {useRouter} from "next/router";
const Campaign = () => {
    const getPost = useSelector((state) => state.campaignReducer);

    let page_data = getPost?.posts?.data?.page_data
    let load_list = getPost?.posts?.data?.sections
    const router = useRouter();
    const currentUrl = router && router.asPath;
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
                    <CampaignList data={load_list}/>
                </div>
        </StyledComponent>
    );
};
const StyledComponent = styled.section`
.download-list{

}
 
`;



Campaign.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
    let api_services = ApiServices.SECTIONS;
    let param = {
        [ApiParamKey.TYPE]: 'slug',
        [ApiParamKey.VALUE]: 'campaign',
        [ApiParamKey.GET_SECTION]: 'yes',
        [ApiParamKey.IMAGE]: 'yes',
        [ApiParamKey.POST]: 'yes',
        [ApiParamKey.GALLERY]: 'yes',
    }
    await store.dispatch(fetchPosts([api_services, param]));
});


export default Campaign;
