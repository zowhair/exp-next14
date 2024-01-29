import { Highlights } from "../Highlights"
import { Button } from "../Button"
import Price from "../Price"

export default function NewCard({slug, title, desc, tag, price, imgSrc }) {
    let link = 'product/'+slug;
    
    return (
        <div className="product-block ">
            {/* single-card */}
            <div className="card-product">
                <div className="card-image-wrapper">
                    {imgSrc ? 
                        <img src={imgSrc} />
                    : 
                        <img src="https://cdn.bookatrekking.com/data/images/2019/06/mera-peak-climbing-cover-photo-768w.webp"/>
                    }
                </div>
                <div className="card-content-wrapper">
                    <div className="content-top">
                        {(() => {
                            if(tag == "sale") {
                                return  (<div className="tag sale">
                                            <span>Sale</span>
                                        </div>)
                            } else if(tag =="new") {
                                return  (<div className="tag new">
                                            <span>New</span>
                                        </div>)
                            } else if(tag =="discount") {
                                return  (<div className="tag discount">
                                            <span>20% discount</span>
                                        </div>)
                            } 
                        })()}
                        
                        <div className="content-heading">
                            <h3>{title}</h3>
                        </div>
                        <div>
                            <div className="product-block--item__partner">
                                {desc}
                            </div>
                            {/* <div className="product-block--item__partner">
                                hgfrh
                            </div> */}

                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="blue-buttons-body">
                            <div className="blue-buttons">
                                <Highlights text="15 days" />
                                <Highlights text="T4 Trail" />
                            </div>
                        </div>
                        <Price price={price} />
                        <Button content="book now" link={link} price={price} />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}