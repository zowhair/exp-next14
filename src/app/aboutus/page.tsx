import AboutUs from "../component/Aboutus";

export default async function AboutPage() {
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
          "streetAddress": "27 E 3rd floor Office #5 Ali Plaza Fazal Haq Road Blue area",
          "addressLocality": "Islamabad Pakistan",
          "addressCountry": "PK",
          "addressRegion": "PK",
          "postalCode": "44020"
        }
      }
    return (
        <>
            <AboutUs />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    )
}