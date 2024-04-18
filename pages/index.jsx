import {NextSeo} from "next-seo";
import {useEffect, useState} from "react";
import {useInView} from 'react-intersection-observer';
import Router, {useRouter} from "next/router";
import {gsap} from "gsap";
import dynamic from "next/dynamic";


const Services = dynamic(() => import("../components/Services"));
const Invest = dynamic(() => import("../components/home/Invest"));
const Products = dynamic(() => import("../components/home/Products"));
const USP = dynamic(() => import("../components/USP"));
const Newsletter = dynamic(() => import("../components/home/Newsletter"));
const WhoIs = dynamic(() => import("../components/home/WhoIs"));
const TestimonialV1 = dynamic(() => import("../components/Testimonial-v1"));
const CTAV3 = dynamic(() => import("../components/CTA-v3"));
const Banner = dynamic(() => import("../components/home/Banner"));
const EasyTrade = dynamic(() => import("../components/EasyTrade"));
const Investors = dynamic(() => import("../components/home/Investors"));

const Home = ({data, winWidth}) => {
    const [offset, setOffset] = useState('90');
    const getPost = data && data;
    const {ref, inView} = useInView();
    const [windowWidth, setWindowWidth] = useState(0);
    const router = useRouter();
    const currentUrl = router && router.asPath;

    let page_data = getPost?.data?.page_data

    const home_banner = getPost?.data?.sections?.find(f => f?.section_data?.slug === 'banner');
    const feature_box = getPost?.data?.sections?.find(f => f?.section_data?.slug === 'feature-box');
    const services = getPost?.data?.sections?.find(f => f?.section_data?.slug === 'serivecs');
    const investing = getPost?.data?.sections?.find(f => f?.section_data?.slug === 'investing');
    const products = getPost?.data?.sections?.find(f => f?.section_data?.slug === 'products-home');
    const expert = getPost?.data?.sections?.find(f => f?.section_data?.slug === 'expert');
    const easytrade = getPost?.data?.sections?.find(f => f?.section_data?.slug === 'easy-trade');
    const investor = getPost?.data?.sections?.find(f => f?.section_data?.slug === 'investment-calculator');
    const newsletter = getPost?.data?.sections?.find(f => f?.section_data?.slug === 'news-letter');
    const who = getPost?.data?.sections?.find(f => f?.section_data?.slug === 'unbelievable');
    const testimonial = getPost?.data?.sections?.find(f => f?.section_data?.slug === 'testimonial');
    const cta = getPost?.data?.sections?.find(f => f?.section_data?.slug === 'cta');
    const modaldata = getPost?.data?.sections?.find(f => f?.section_data?.slug === 'opening-popup');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Place your hook-based code here
            const box = document.querySelectorAll('.box');
            const boxplus = document.querySelectorAll('.boxr');
            const cta = document.querySelectorAll('.cta');
            let reveal = gsap.utils.toArray(".reveal");
            reveal.forEach((cont) => {
                let img = cont.querySelector("img");
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: cont,
                        toggleActions: "restart none none reset",
                    },
                });
                // parallax
                // if () {
                gsap.to(img, {
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: cont,
                        // markers: true,
                        scrub: true
                    }
                });
                // }

                // image reveal
                tl.fromTo(
                    cont,
                    1.5,
                    {
                        xPercent: -100,
                        ease: "Expo.easeInOut",
                    },
                    {
                        xPercent: 0,
                        ease: "Expo.easeInOut",
                    }
                );

                tl.fromTo(
                    img,
                    1.5,
                    {
                        xPercent: 100,
                        ease: "Expo.easeInOut",
                        scale: 1.1,
                    },
                    {
                        delay: -1.5,
                        xPercent: 0,
                        scale: 1,
                        ease: "Expo.easeInOut",
                    }
                );
            });


            box.forEach((el, index) => {
                gsap.fromTo(el, {
                    y: -150,
                    ease: "none",
                }, {
                    y: 0,
                    autoAlpha: 1,
                    ease: "power2",
                    duration: 1,
                    scrollTrigger: {
                        id: `${index + 1}`,
                        trigger: el,
                        scrub: true
                    }
                });
            });

            boxplus.forEach((el, index) => {
                gsap.fromTo(el, {
                    y: 150,
                    ease: "none",
                }, {
                    y: 0,
                    autoAlpha: 1,
                    ease: "power2",
                    duration: 1,
                    scrollTrigger: {
                        id: `${index + 1}`,
                        trigger: el,
                        scrub: true
                    }
                });
            });
            cta.forEach((el, index) => {
                gsap.fromTo(el, {
                    y: -50,
                    ease: "none",
                }, {
                    y: 0,
                    autoAlpha: 1,
                    ease: "power2",
                    duration: 1,
                    scrollTrigger: {
                        id: `${index + 1}`,
                        trigger: el,
                        scrub: true
                    }
                });
            });

        }
    }, [Router, router.pathname]);

    // get offset for container
    useEffect(() => {
        if (window.innerWidth > 767) {
            setOffset(document.querySelector('.container').offsetLeft + 15)
        }

    })


    useEffect(() => {
        const updateOffset = () => {
            if (window.innerWidth > 767) {
                const container = document.querySelector('.container');
                if (container) {
                    setOffset(container.offsetLeft + 15);
                }
            }
        };

        // Add an event listener for the DOMContentLoaded event
        document.addEventListener('DOMContentLoaded', updateOffset);

        // Add event listener to update offset on window resize
        window.addEventListener('resize', updateOffset);
        window.addEventListener('load', updateOffset);

        return () => {
            document.removeEventListener('DOMContentLoaded', updateOffset);
            window.removeEventListener('resize', updateOffset);
            window.removeEventListener('load', updateOffset);
        };
    }, []);

    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Initial window width
        setWindowWidth(window.innerWidth);

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <NextSeo
                title={getPost?.data?.page_data?.meta_title}
                description={getPost?.data?.page_data?.meta_description}
                openGraph={{
                    type: 'website',
                    url: currentUrl,
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
            <Banner data={home_banner} windowWidth={windowWidth} offset={offset}  feature_data={feature_box}/>
            <Services services_data={services}/>
            <Invest data={investing} offsetContainer={offset}/>

            <div ref={ref}>
                <Products data={products}/>
                <USP data={expert} offset={offset}/>
                <div className="home_easy_trade">
                    <EasyTrade  data={easytrade}/>
                </div>
                <Investors
                    id="investor_calculator"
                    data={investor}
                    offset={offset}
                />
                <Newsletter data={newsletter}/>
                <WhoIs data={who}/>
                <TestimonialV1 data={testimonial}/>
                <CTAV3 data={cta} winWidth={winWidth} offset={offset}/>
            </div>

        </>
    );
};

export async function getServerSideProps() {
    // Fetch data from an API or perform any async operations
    const res = await fetch('https://cms.shantasecurities.com/api/get-req-data/sections?type=slug&value=landing-page&get_section=yes&image=yes&post=yes&gallery=yes');
    const data = await res.json();

    // Pass fetched data as props to the component
    return {
        props: {
            data,
        },
    };
}

export default Home;
