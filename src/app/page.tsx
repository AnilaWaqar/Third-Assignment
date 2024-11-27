import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Extension from "./components/extension";
import Customise from "./components/customise"
import Work from "./components/work";
import Sponcer from "./components/sponsors";
import Footer from "./components/footer";



export default function Home () {
    return (
        <div>
            <Navbar />   
            <Hero />
            <Extension />
            <Customise />
            <Work />
            <Sponcer />
            <Footer />
            
        </div>
    );
}