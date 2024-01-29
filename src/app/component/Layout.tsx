import TopBanner from './TopBanner';
import ResponsiveAppBar from './NavR';
import Hero from './Hero';
import Footer from './Footer';

export default function Layout({children}) {
    return (
        <>
            <TopBanner />
            <ResponsiveAppBar />
            {children}
            <Footer />

        </>

    )
}