import { Highlight } from "@mui/icons-material";
import { Bluetext } from "../Bluetext";
import Title from "../Title";
import Link from "next/link";
import Image from "next/image";

export function Collectioncard ( data: any ){
    const link: string = '/product/'+data.data.slug;

    return(
        <Link href={link}>
            <div className="collection">
                    <div className="container-block">
                        <div className="item-wrapper">
                            <div className="product-block">
                                <div className="product-block-item">
                                    <Image alt="image" width={500} height={1000} src={data.data.banner} />
                                </div>
                                <div className="product-block-item product-body">
                                    <div className="body-top">
                                        <Title title={data.data.title} />
                                        <p className="text-long">
                                            {data.data.description}
                                        </p>
                                        <Bluetext />
                                    </div>
                                    {/* <div className="body-bottom"> */}
                                        {/* <Highlight text="go to hell"/> */}
                                    {/* </div> */}
                                </div>
                            </div>    
                        </div>    
                    </div>
            </div>
        </Link>
        )
}