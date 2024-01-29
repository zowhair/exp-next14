'use client';

import Link from "next/link"
export function Button(...props: any){
    console.log("butto props ", {props})

    return(
        <>
            {
            props[0].type == "bookbtn" ? 
                <Link href={props[0].link ? `/${props[0].link}/${props[0].slug}`  : '' } className="btn">
                    <span>{props[0].textContent}</span> 
                </Link>
            :
                <Link href={props[0].link ? props[0].link : '' } className="btn">
                    <span>{props[0].content}</span>
                </Link>
            }
        </>
    )
}