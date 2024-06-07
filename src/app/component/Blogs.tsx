import Link from "next/link"
import Image from "next/image"

import { k2, Nangaparbet, Gasherbrum, BroadPeak, Gasherbrum_II, Gasherbrum_IV, Masherbrum, guidToSkardu, k2ExpeditionPreparation, mountainTrekking, nangaparbetTricks, sakrduTourWithUs } from '@/app/blog-data';

export default function StaticBlog() {
    const blogs = [k2, Nangaparbet, Gasherbrum, BroadPeak, Gasherbrum_II, Gasherbrum_IV, guidToSkardu, k2ExpeditionPreparation, mountainTrekking, nangaparbetTricks, sakrduTourWithUs];

    return (
        <div className="collection">
            <div className="blog_title">
                <h1>Blogs</h1>
            </div>
            <div className="container-block flex-row">
                {blogs && blogs.map((blog, index) => (
                    <Link href={'/blog/'+blog.slug} className="" key={index}>
                        <div className="blog__link">
                            {/* <Image className="blog-card" src="/images/k2-2inner.JPG" width={240} height={200} alt="Image of K2" /> */}
                            <span className="margin-top">{blog.metadata_}</span>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}