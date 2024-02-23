import Image from "next/image";
import styles from "./page.module.css";
import PackageCards from "./component/PackageCards";
import NewCard from "./component/card/NewCard";
import Hero from "./component/Hero";
import Carousel from "./component/Carousel";
import Head from "next/head";

export default function Home() {

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
              <NewCard imgSrc="/images/k2-ggla.JPG" slug="k2-expedition" title="k2 Gondogoro La Trek" desc="k2 expedition is ..." tag="sale" price="$3500" />
              <NewCard imgSrc="/images/parbet.jpeg" slug="nangaparbet" title="Nanga Parbat Fairy Meadows Trek" desc="We provide Nangaparbet Expedition...." tag="new" price="$690" />
              <NewCard imgSrc="/images/parbet.jpeg" slug="biafohispar" title="Biafo Hispar Nagar Snow Lake Trek" desc="Economy Package..." tag="sale" price="$3200" />
              
            </div>  
            
          </div>

          <div className='container-block'>
            <div className='container_title'>
              <span className='title'>Cultural Tours</span>
            </div>
            <div className="card-wrapper container-block">
              <NewCard imgSrc="/images/taxila.jpg" slug="indusvalley" title="Indus Valley Civilization Culture tours" desc="New Sale offer..." tag="discount" price="$2200" />
              <NewCard imgSrc="/images/northsouth.jpeg" slug="northandsouth" title="North and South Pakistan Culture Tours" desc="Economy Package..." tag="sale" price="$2500" />
              <NewCard imgSrc="/images/shigrilla.jpg" slug="skardutours" title="Skardu Tours " desc="New Sale offer..." tag="discount" price="$700" />
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
