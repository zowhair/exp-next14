import { Collectioncard } from "../component/card/CollectionCard";
import { helicopterSafari } from "../data";

export default function SpecialTours() {
    return (
        <>
            <Collectioncard data={helicopterSafari[0]} />
        </>
    )
}