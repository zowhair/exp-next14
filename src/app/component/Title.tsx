export default function Title(props: any){
    console.log("tite" , props.title)
    return(
        <div className="container_title">
            <span className="title">
                {
                    props.title ? 
                    props.title
                :
                    "lorem ipsum"
                }
            </span>
        </div>
    )
}