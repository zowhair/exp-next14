import { k2, Nangaparbet, Gasherbrum, BroadPeak, Gasherbrum_II, Gasherbrum_IV, Masherbrum } from '@/app/blog-data'
import "./blog-style.css"
import { Collectioncard } from '@/app/component/card/CollectionCard'
import { biafoHispar, nangaparbet, k2_concordia } from "@/app/data"
export default function Blog(props: any) {
    let content;
    const { params }  = props
    
    const {slug} = params
    if( slug == 'k2') {
        content = k2.content
    } else if(slug == 'nangaparbet') {
        content = Nangaparbet.content
    } else if(slug == 'gasherbrum_i') {
        content = Gasherbrum.content
    } else if(slug == 'broadPeak') {
        content = BroadPeak.content
    } else if(slug == 'gasherbrum_ii') {
        content = Gasherbrum_II.content
    } else if(slug == 'gasherbrum_iv') {
        content = Gasherbrum_IV.content
    } else if(slug == 'masherbrum') {
        content = Masherbrum.content
    }
    return ( 

        <div className='blog-page'>
            <div className='blog-wrapper'>
                <h1 className='blog__title'>{slug}</h1>
                <p className='blog__content'>{content}</p>
            </div>
            <div className='blog-recommended_products'>
                <h1>Recommended Treks</h1>
            </div>
            <Collectioncard data={biafoHispar[0]} /> 
            <Collectioncard data={nangaparbet[0]} /> 
            <Collectioncard data={k2_concordia[0]} />
        </div>
    )
}
