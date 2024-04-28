import Image from "next/image";
import styles from "./page.module.css";
import PackageCards from "./component/PackageCards";
import NewCard from "./component/card/NewCard";
import Hero from "./component/Hero";
import Carousel from "./component/Carousel";
import type { Metadata } from "next";
import { k2_concordia, nangaparbet, biafoHispar, northSouth, indus_valley_itinerary, skardu } from "./data";
import PartnersCarousel from "./component/PartnersCarousel";

export const metadata: Metadata = {
  title: "Expedition Asia Trek And Tours",
  description: "Skardu GB TrekPlan your next adventure with Expedition Asia Trek And Tours. From thrilling treks to captivating tours and exhilarating expeditions, we offer unforgettable experiences in breathtaking destinations. Book your next tour with us and embark on a journey of a lifetime!We offer tours and trips to K2 , Karakoram, Skardu, Hunza, Deosai, Kharmang, Shigar, Fort, Ganche, Khaplu!"

}

export default async function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "image": "https://expeditionasiaa.com/_next/image?url=%2Fimages%2Flogos%2Flogo-top.png&w=128&q=75",
    "url": "https://www.expeditionasiaa.com",
    "sameAs": ["https://www.expeditionasiaa.com", "https://expeditionasiaa.com/aboutus"],
    "logo": "https://expeditionasiaa.com/_next/image?url=%2Fimages%2Flogos%2Flogo-top.png&w=128&q=75",
    "name": "Expedition Asia Trek And Tours",
    "description": "Expedition Asia stands as a leading tour operator in Asia, operating out of Skardu, Pakistan. Our team comprises seasoned experts and passionate professionals with vast experience in global travel and tourism. Specializing in adventurous, cultural, educational, and religious tourism, we strive to offer unparalleled experiences in the diverse region of Asia. Our mission is to transcend borders, delivering unforgettable and everlasting travel experiences that leave a lasting impression on our clients. Join us on a journey of discovery and create memories that will last a lifetime with Expedition Asia",
    "email": "expeditionasiaa@gmail.com",
    "telephone": "+923004708813",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Parade Ground Metro Station, Blue area",
      "addressLocality": "Islamabad Pakistan",
      "addressCountry": "PK",
      "addressRegion": "PK",
      "postalCode": "44020"
    }
  }

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
              <NewCard imgSrc="/images/k2-ggla.JPG" slug="k2-expedition" title={k2_concordia[0].title} desc={k2_concordia[0].description_s} tag="sale" price={k2_concordia[0].price} />
              <NewCard imgSrc="/images/parbet.jpeg" slug="nangaparbet" title={nangaparbet[0].title} desc={nangaparbet[0].description_s} tag="new" price={nangaparbet[0].price} />
              <NewCard imgSrc="/images/parbet.jpeg" slug="biafohispar" title={biafoHispar[0].title} desc={biafoHispar[0].description_s} tag="sale" price={biafoHispar[0].price} />
              
            </div>  
            
          </div>

          <div className='container-block'>
            <div className='container_title'>
              <span className='title'>Cultural Tours</span>
            </div>
            <div className="card-wrapper container-block">
              <NewCard imgSrc="/images/taxila.jpg" slug={indus_valley_itinerary[0].slug} title={indus_valley_itinerary[0].title} desc={indus_valley_itinerary[0].description_s} tag="discount" price={indus_valley_itinerary[0].price} />
              <NewCard imgSrc="/images/northsouth.jpeg" slug={northSouth[0].slug} title={northSouth[0].title} desc={northSouth[0].description_s} tag="sale" price={northSouth[0].price} />
              <NewCard imgSrc="/images/shigrilla.jpg" slug={skardu[0].slug} title={skardu[0].title} desc={skardu[0].description_s} tag="discount" price={skardu[0].price} />
            </div>            
          </div>
        </div>
        <PackageCards />
        <PartnersCarousel />

        {/* <Packages /> */}
        
        {/* <Arrange /> */}
        {/* <Form /> */}
        {/* <Stay /> */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

         
    </main>
  );
}
