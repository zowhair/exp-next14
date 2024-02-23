import { Collectioncard } from "../component/card/CollectionCard";

import { indus_valley_itinerary, northSouth, skardu } from "../data"; 

export default function CulturePage() {
    
    return (
        <>
            <Collectioncard data={indus_valley_itinerary[0]} />
            <Collectioncard data={northSouth[0]} />
            <Collectioncard data={skardu[0]} />
        </>
    )
}