import { Collectioncard } from "../component/card/CollectionCard";
import { hunzaTrip } from "../data";
export default function MixedToursPage() {
    return (
        <Collectioncard data={hunzaTrip[0]} />
    )
}