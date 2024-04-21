import Link from "next/link"

export default function StaticBlog() {
    return (
        <div className="collection">
            <div className="container-block">
                <Link href="/blog/k2">
                    <div className="blog__link">
                        <span>Climbing K2 is considered the top mountaineering expedition in whole world. K stands for Karakoram rang</span>
                    </div>
                </Link>

                <Link href="/blog/nangaparbet">
                    <div className="blog__link">
                        <span>Nanga Parbat is the ninth highest mountain in the world. This is located</span>
                    </div>
                </Link>

                <Link href="/blog/gasherbrum_i">
                    <div className="blog__link">
                        <span>This is the 11th highest mountain in the works and is also known as k5 or hidden mountain due to its remotenes</span>
                    </div>
                </Link>

                <Link href="/blog/broadPeak">
                    <div className="blog__link">
                        <span>Broad Peak is located on the border of Pakistan and China. This is the 12th highest mountain in the worl</span>
                    </div>
                </Link>
            </div>

        </div>
    )
}