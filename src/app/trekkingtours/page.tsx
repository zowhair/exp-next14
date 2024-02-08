import { Collectioncard } from "../component/card/CollectionCard";
import { biafoHispar, k2_concordia, nangaparbet } from "../data";


export default function TrekkingPage() {
    return (
        <>
            <Collectioncard data={biafoHispar[0]} /> 
            <Collectioncard data={nangaparbet[0]} /> 
            <Collectioncard data={k2_concordia[0]} /> 
        </>
    )
}