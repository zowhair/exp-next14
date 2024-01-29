import BookNowForm from "../../component/BookingForm"
export default function BookNow(...props: any) {
    console.log("booknow page .. ", props)
    return (
        <BookNowForm props={props} />
    )
}