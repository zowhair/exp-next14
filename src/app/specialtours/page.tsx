import { Collectioncard } from "../component/card/CollectionCard";
import { helicopterSafari } from "../data";
import StaticBlog from "../component/Blogs";

export default function SpecialTours() {
    return (
        <>
            <Collectioncard data={helicopterSafari[0]} />
            <StaticBlog />
        </>
    )
}