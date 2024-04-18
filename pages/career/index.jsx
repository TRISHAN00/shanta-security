import {useSelector} from "react-redux";
import {NextSeo} from "next-seo";
import {ApiServices} from "../api/network/ApiServices";
import {ApiParamKey} from "../api/network/ApiParamKey";
import {wrapper} from "../api/store";
import {fetchPosts} from "../api/redux/career";
import CorporateSlider from "../../components/CorporateSlider";
import InnerbannerV9 from "../../components/innerbanner-v9";
import CareerText from "../../components/career/CareerText";
import BoxSlider from "../../components/career/BoxSlider";
import Job from "../../components/career/Job";
import Forms from "../../components/career/Forms";
import {useRouter} from "next/router";

const Career = () => {
    const getPost = useSelector((state) => state.careerReducer);

    let page_data = getPost?.posts?.data?.page_data
    let blog_data = getPost?.posts?.blog
    let job_data = getPost?.posts?.job

    const banner = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'career-banner');
    const overview_career = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'overview-career');
    const job_from = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'job-form');
    const gallery = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'the-corporate-haven');


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
            <InnerbannerV9  title={page_data?.title} text={banner?.section_data?.short_desc} src={banner?.images?.list?.[0]?.full_path}/>

            <div className="black">
                <CareerText data={overview_career}/>
                {
                    blog_data &&  blog_data?.length > 0 &&
                    <div className="career career_page">
                        <BoxSlider Data={blog_data} padding={'pb-200'} />
                    </div>
                }

                {
                    job_data?.length > 0 &&
                    <Job theData={job_data}/>
                }

                {
                    job_data?.length > 0 ?
                        <Forms  data={job_from}/>
                        :
                        <Forms padding={'pt-200 pb-200'} data={job_from}/>

                }
                <CorporateSlider data={gallery}/>
            </div>
        </>
    );
};


Career.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
    let api_services = ApiServices.SECTIONS;
    let param = {
        [ApiParamKey.TYPE]: 'slug',
        [ApiParamKey.VALUE]: 'career',
        [ApiParamKey.GET_SECTION]: 'yes',
        [ApiParamKey.IMAGE]: 'yes',
        [ApiParamKey.POST]: 'yes',
        [ApiParamKey.GALLERY]: 'yes',
    }
    await store.dispatch(fetchPosts([api_services, param]));
});

export default Career;
