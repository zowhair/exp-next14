export default function Title(props: any){
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