import Image from "next/image";
import Title from "./Title";

export default function Shah(){
    return(
        <div className="container-block aboutme-container">
            <div className="title">
                <h1>About me</h1>
            </div>
            <div className="colored">
                <div className="space container-block">
                    <div className="image-div">
                        <Image src="/images/shmshad.jpg" width={500} height={500} alt="image" />
                    </div>
                        {/* <Title /> */}
                        <div className="listing-para padding-para">
                            <p>
                        I was raised in a small, peaceful village in the glorious mountain region of Gilgit Baltistan, Pakistan, along with 4 brothers and 4 sisters.Access to higher education was severely restricted; I had to hike sixty kilometres (37 miles) from my home to attended classes, which were conducted under the comforting shade of a towered tree. With a positive attitude and a proactive mind-set, I successfully completed my college degree in the city of Skardu - an especially important achievement, considering that my siblings never had the chance to study beyond the 8th grade. To 	finance my studies, I worked in Skardu as  a porter 	, which effectively kicked off my professional career in the tourism industry. My dedicated efforts paid off when I earned my Tourism Guide License, which allowed me to advance my studies. I soon recognized that the tourism sector plays a critical role in both opening exhilarating vistas to visitors world-wide, as well as in the overall development of an economy. This win-win outcome further motivated me to engage in the study of the tourism industry with a concentration on the promotion of my stunningly beautiful home town of Gilgit Baltistan. 

                            </p>
                        </div>

                </div>
            </div>

        </div>
    )
}