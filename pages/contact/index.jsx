import {useSelector} from "react-redux";
import {NextSeo} from "next-seo";
import {ApiServices} from "../api/network/ApiServices";
import {ApiParamKey} from "../api/network/ApiParamKey";
import {wrapper} from "../api/store";
import {fetchPosts} from "../api/redux/contact";
import InnerbannerV9 from "../../components/innerbanner-v9";
import AddressTab from "../../components/contacts/AddressTab";
import ListWithForm from "../../components/contacts/ListWithForm";
import AccordionV2 from "../../components/contacts/Accordion-v2";
import {useEffect, useRef, useState} from "react";
import Loadable from "react-loadable";
import {useRouter} from "next/router";
import gsap from "gsap";

const Feedback = Loadable({
    loader: () => import('../../components/contacts/Feedback'),
    loading: () => <div>Loading...</div>,
});

const Contact = ({offset}) => {
    const getPost = useSelector((state) => state.contactReducer);
    let page_data = getPost?.posts?.data?.page_data

    const banner = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'banner-contact');
    const address = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'address');
    const faq = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'faq');
    const feedback = getPost?.posts?.data?.sections?.find(f => f?.section_data?.slug === 'feedback-contact');

    // const elementRef = useRef(null);

    // useEffect(() => {
    //     const element = elementRef.current;
    //
    //     // Function to handle the scroll trigger animation
    //     const animateElement = () => {
    //         // Your animation logic here using gsap
    //         gsap.to(element, { opacity: 0, duration: 1 });
    //     };
    //
    //     // Initialize the ScrollTrigger
    //     ScrollTrigger.create({
    //         trigger: element,
    //         onEnter: animateElement,
    //     });
    //
    //     // Refresh ScrollTrigger when the height of the element changes
    //     const observer = new ResizeObserver(() => {
    //         ScrollTrigger.refresh();
    //     });
    //
    //     observer.observe(element);
    //
    //     // Cleanup
    //     return () => {
    //         observer.disconnect();
    //     };
    // }, []);

    // on page load go down
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
    }, []);


    // useEffect(() => {
    //
    //     let split = gsap.utils.toArray(".split-up");
    //     gsap.registerPlugin(SplitText, CSSPlugin);
    //
    //
    //     if(window > 767){
    //
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
    //
    //     }
    // }, [getPost])
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
            <InnerbannerV9 title={page_data?.title} text={banner?.section_data?.short_desc}
                           src={banner?.images?.list?.[0]?.full_path}/>
            <div className="black">
                <AddressTab data={address} offset={offset}/>
                <ListWithForm data={banner}/>
                <AccordionV2 data={faq}/>
                <div className="feedback feedback_form_contact">
                    <Feedback data={feedback} offset={offset}/>
                </div>
            </div>
        </>
    );
};


Contact.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
    let api_services = ApiServices.SECTIONS;

    let param = {
        [ApiParamKey.TYPE]: 'slug',
        [ApiParamKey.VALUE]: 'contact',
        [ApiParamKey.GET_SECTION]: 'yes',
        [ApiParamKey.IMAGE]: 'yes',
        [ApiParamKey.POST]: 'yes',
        [ApiParamKey.GALLERY]: 'yes',
    }
    await store.dispatch(fetchPosts([api_services, param]));
});

export default Contact;
