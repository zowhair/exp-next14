import StaticBlog from "@/app/component/Blogs"
import BookNowForm from "../../component/BookingForm"
export default function BookNow(...props: any) {
    return (
        <>
            <BookNowForm props={props} />
            <StaticBlog />
        </>
    )
}