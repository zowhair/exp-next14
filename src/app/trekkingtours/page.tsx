import Link from "next/link";
import { Collectioncard } from "../component/card/CollectionCard";
import { biafoHispar, k2_concordia, nangaparbet } from "../data";
import StaticBlog from "../component/Blogs";


export default function TrekkingPage() {
    return (
        <>
            <div className="collection-title">
                <h1>Trekking In Gilgit Baltistan</h1>
            </div>
            <Collectioncard data={biafoHispar[0]} /> 
            <Collectioncard data={nangaparbet[0]} /> 
            <Collectioncard data={k2_concordia[0]} />

            <StaticBlog />
        </>
    )
}