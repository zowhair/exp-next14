'use client'
import Link from 'next/link';
import { Arrange } from '@/app/component/Arrange';
import { k2_concordia, nangaparbet, biafoHispar,indus_valley_itinerary,northSouth, skardu } from '@/app/data';
import StaticBlog from '@/app/component/Blogs';

export default function Product(props: any) {
    const slug = props.params.slug;
    let data;
    if(slug == 'k2-expedition') {
        data = k2_concordia
    } else if(slug == 'nangaparbet') {
        data = nangaparbet
    } else if(slug == 'biafohispar') {
        data = biafoHispar
    } else if(slug == 'indusvalley') {
        data = indus_valley_itinerary
    } else if(slug =='northandsouth') {
        data = northSouth
    } else if(slug == 'skardutours') {
        data = skardu
    }
    return (
        <>  
            <Arrange slug={slug} details={data} />
            <div className="productDetailPageContainer">
                <div className="productPageTopHead">
                    <div className="productHeading">
                    </div>
                    <div className="productDescription">
                    </div>
                </div>
                <div className="productPageBottomHead">
                    <div className="productLeftContainer">
                        <div className="productTabs">
                            {/* <h1>{title} {slug}</h1> */}

                        </div>

                    </div>
                    <div className="productRightContainer">
                    </div>
                </div>
            </div>
            <style jsx global>{`
                html,
                body {
                    query: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
                * {
                    box-sizing: border-box;
                }
            `}</style>
            <StaticBlog />
        </>

    )
}

