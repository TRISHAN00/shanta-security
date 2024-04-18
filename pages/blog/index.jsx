import {useSelector} from "react-redux";
import {NextSeo} from "next-seo";
import {ApiServices} from "../api/network/ApiServices";
import {ApiParamKey} from "../api/network/ApiParamKey";
import {wrapper} from "../api/store";
import {fetchPosts} from "../api/redux/blog";

const Blog = () => {
    const getPost = useSelector((state) => state.shantapathshalaReducer);
    let page_data = getPost?.posts?.data?.page_data
    const overview = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'pathshala-overview');
    return (
        <>
            <NextSeo
                title={getPost?.data?.page_data?.meta_title}
                description={getPost?.data?.page_data?.meta_description}
                openGraph={{
                    title: page_data?.og_title,
                    description: page_data?.og_description,
                }}
            />
            about Page
        </>
    );
};


Blog.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
    let api_services = ApiServices.SECTIONS;
    let param = {
        [ApiParamKey.TYPE]: 'slug',
        [ApiParamKey.VALUE]: 'news',
        [ApiParamKey.GET_SECTION]: 'yes',
        [ApiParamKey.IMAGE]: 'yes',
        [ApiParamKey.POST]: 'yes',
        [ApiParamKey.GALLERY]: 'yes',
    }
    await store.dispatch(fetchPosts([api_services, param]));
});

export default Blog;
