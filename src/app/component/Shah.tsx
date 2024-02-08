import Image from "next/image";
import Title from "./Title";

export default function Shah(){
    return(
        <div className="container-block aboutme-container">
            <div className="title">
                <h1>About me</h1>
            </div>
            <div className="colored">
                <div className="space">
                    <div className="image-div">
                        <Image src="/images/shmshad.jpg" width={500} height={500} alt="image" />
                    </div>
                    <div className="justify-content m0-auto">
                        <p className="listing-para">
                            About me
                        </p>
                        <p className="listing-para">
                            Do you know
                        </p>
                        <p className="listing-para">
                        who m I
                        </p>
                        <Title />
                        <p className="listing-para">
                            owner of expidition asia
                        </p>
                        <p className="listing-para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ab reprehenderit earum blanditiis tempora architecto, expedita quaerat praesentium quia iste illo laudantium, odit voluptatem adipisci optio, labore ipsum iusto similique?
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}