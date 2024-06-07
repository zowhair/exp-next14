'use client';
import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: "120px", mb: "100px" }} >

            <div  className="main-container">
                <div className="card-container">
                    <div className="card-image">
                        <Image src="/images/12.jpg" width={500} height={500} alt="image" />
                    </div>
                    <div>
                        <div className="card-ratings">
                            <div className="card-rating-days">
                            <h4>
                                <i className="fa-regular fa-calendar"></i> 7 days <i className="fa-regular fa-user"></i> 2
                            </h4>
                            </div>
                            <div className="card-rating-review">stars</div>
                        </div>
                        <div className="info" >
                            <p>
                                <span>subtitle</span>
                            </p>
                            <div className="display-column">
                            <p>From</p>
                            <h2 className="orange">$93.04</h2>
                            <p>
                                <s>$140.99</s>
                            </p>	
                            </div>
                            <hr />
                            
                            <div>
                                <p>price</p>
                                <div>
                                    <Link href={{
                                        pathname:"/product/newThing"
                                        }} >
                                        <button>Book now</button>
                                    </Link>
                                </div>

                            </div>
                            <p>compare price</p>
                        </div>
                       
                    </div>
                    

                </div>
                <style jsx >
                    {`
                          .card-container {
                            width: 320px;
                            background-color: rgba(128, 128, 128, 0);
                            height: auto;
                            // margin-left: 10px;
                            // margin-top: 20px;
                            margin-bottom: 20px;
                            display: flex;
                            flex-flow: column wrap;
                            // align-items: center;
                            // justify-content: center;
                            border-radius: 20px;
                            box-shadow: 1px 2px 2px 1px rgba(128, 128, 128, 0.404);
                        }
                        .card-image img {
                            border-radius: 10px;   
                            width: 320px;
                            height: 200px;
                            transition: all 0.8s ease;

                        }
                        .card-image img:hover {
                            transform: scale(1.09,1.09);
                            opacity: 0.84;
                        }
                        .info {
                            width: 90%;
                            text-align: start;
                            padding-left: 15px;
                        }
                        .card-image  {
                            // width: 100%;
                            display: flex;
                            // align-items: center;
                            overflow: hidden;
                        }
                        .card-ratings {
                            background-color: white;
                            box-shadow: 1px 2px 2px 1px rgba(128, 128, 128, 0.089);
                            width: 90%;
                            display:flex;
                            justify-content: space-around;
                            align-items: center;
                            margin: 0 auto;
                            position: relative;
                            top: -20px;
                            border-radius: 5px;    
                        }
                    
                    `}
                </style>
            </div>
        </Container>
    )
}

export default Card;