import {useSelector} from "react-redux";
import {NextSeo} from "next-seo";
import {ApiServices} from "../api/network/ApiServices";
import {wrapper} from "../api/store";
import {fetchPosts} from "../api/redux/course";
import {useRouter} from "next/router";

const Course = () => {
    const getPost = useSelector((state) => state.courseReducer);

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
            course Page
        </>
    );
};


Course.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
    let api_services = ApiServices.POSTS;

    await store.dispatch(fetchPosts([api_services]));
});

export default Course;
