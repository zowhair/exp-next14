import Link from "next/link"
import Image from "next/image"

export default function StaticBlog() {
    return (
        <div className="collection">
            <div className="blog_title">
                <h2>Blogs</h2>
            </div>
            <div className="container-block flex-row">
                <Link href="/blog/k2" className=" width-fixed ">
                    <div className="blog__link">
                        <Image className="blog-card" src="/images/k2-2inner.JPG" width={240} height={200} alt="Image of K2" />
                        <span className="margin-top">Climbing K2 is considered the top mountaineering expedition in whole world. K stands for Karakoram rang</span>
                    </div>
                </Link>

                <Link href="/blog/nangaparbet widt " className=" width-fixed ">
                    <div className="blog__link">
                        <Image className="blog-card" src="/images/nangaparbet-iin.jpg" width={240} height={200} alt="Image of Nangaparbet" />
                        <span className="margin-top">Nanga Parbat is the ninth highest mountain in the world. This is located</span>
                    </div>
                </Link>

                <Link href="/blog/gasherbrum_i" className=" width-fixed ">
                    <div className="blog__link">
                        <Image src="/images/gasherbrum.jpeg" alt="Gahserbrum Image" width={240} height={200} />
                        <span className="margin-top">This is the 11th highest mountain in the works and is also known as k5 or hidden mountain due to its remotenes</span>
                    </div>
                </Link>

                <Link href="/blog/broadPeak" className=" width-fixed ">
                    <div className="blog__link">
                        <Image className="blog-card" src="/images/k2/DSC_4032-1.JPG" width={240} height={200} alt="Broad Peak Image" />
                        <span className="margin-top">Broad Peak is located on the border of Pakistan and China. This is the 12th highest mountain in the worl</span>
                    </div>
                </Link>
            </div>

        </div>
    )
}