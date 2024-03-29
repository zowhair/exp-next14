
import { Product } from "./Product"
import { Text } from "./Text"
import { Highlights } from "./Highlights"
import { Round } from "./Round"
import { Stay } from "./Stay"
import { Content } from "./Content"
import { Bluetext } from "./Bluetext"
import Image from "next/image"



export function Arrange(...props: any){
    const slug = props[0].slug ? props[0].slug : ''
    const details = props[0].details
    return(

        <div className="product-banner">
            <Image
                className="product-image-banner" 
                src={details[0].banner}
                alt="banner image"
                width={500}
                height={500}
            />
            <div className="container-block">
                <div className="space-manager">
                    <div className="arrange-container-left">
                    {/* <Product/> */}

                        <div className="mera-peak margin">
                            <div className="container-block">
                                {details[0]?.title ? 
                                <h1 className="mera-title">{details[0]?.title}</h1>
                                 :                                
                                <h1 className="mera-title">{slug}</h1>
                                }
                            </div>
                        </div>
                        {/* <Bluetext /> */}
                        <div className="blue-buttons-body">
                            <div className="blue-buttons">
                            <Highlights text="Distance: 15 - 20 km per day" />
                            <Highlights text="More than 1000 m ascent per day" />

                            </div>
                        </div>
                        <div className="margin">
                            <div className="container-block">
                                <ul className="anchor-list">
                                    <li className="anchor-list-item">
                                        <a href="#">overview</a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        {/* <Greytext/> */}
                        <Text itenerary={details[0].itenerary} />
                        <Content/>

                    </div>
                    <div className="arrange-container-right">
                        <Stay price={details[0].price} slug={slug} textContent="Book now"   />
                        <Round/>
                        <div className="margin">
                            <div className="container-block">
                                
                            </div>
                            
                        </div>
                    </div>

                </div>
            
            </div>

        </div>
        
    )
    
}