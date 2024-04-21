import Image from "next/image";
import styles from "./page.module.css";
import PackageCards from "./component/PackageCards";
import NewCard from "./component/card/NewCard";
import Hero from "./component/Hero";
import Carousel from "./component/Carousel";
import type { Metadata } from "next";
import { k2_concordia, nangaparbet, biafoHispar, northSouth, indus_valley_itinerary, skardu } from "./data";

export const metadata: Metadata = {
  title: "Expedition Asia Trek And Tours",
  description: "Skardu Gilgit Expedition K2"

}

export default async function Home() {
  return (
    <main >
      <Carousel />
        <Hero />
        {/* <Card /> */}
        <div className="block-component">
          <div className='container-block'>
            <div className='container_title'>
              <span className='title'>Trekking Tours</span>
            </div>
            <div className="card-wrapper container-block">
              <NewCard imgSrc="/images/k2-ggla.JPG" slug="k2-expedition" title={k2_concordia[0].title} desc={k2_concordia[0].description} tag="sale" price={k2_concordia[0].price} />
              <NewCard imgSrc="/images/parbet.jpeg" slug="nangaparbet" title={nangaparbet[0].title} desc={nangaparbet[0].description} tag="new" price={nangaparbet[0].price} />
              <NewCard imgSrc="/images/parbet.jpeg" slug="biafohispar" title={biafoHispar[0].title} desc={biafoHispar[0].description} tag="sale" price={biafoHispar[0].price} />
              
            </div>  
            
          </div>

          <div className='container-block'>
            <div className='container_title'>
              <span className='title'>Cultural Tours</span>
            </div>
            <div className="card-wrapper container-block">
              <NewCard imgSrc="/images/taxila.jpg" slug={indus_valley_itinerary[0].slug} title={indus_valley_itinerary[0].title} desc={indus_valley_itinerary[0].description} tag="discount" price={indus_valley_itinerary[0].price} />
              <NewCard imgSrc="/images/northsouth.jpeg" slug={northSouth[0].slug} title={northSouth[0].title} desc={northSouth[0].description} tag="sale" price={northSouth[0].price} />
              <NewCard imgSrc="/images/shigrilla.jpg" slug={skardu[0].slug} title={skardu[0].title} desc={skardu[0].description} tag="discount" price={skardu[0].price} />
            </div>            
          </div>
        </div>
        <PackageCards />

        {/* <Packages /> */}
        
        {/* <Arrange /> */}
        {/* <Form /> */}
        {/* <Stay /> */}
         
    </main>
  );
}
