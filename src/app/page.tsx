import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EditorPicks from "./components/EditorPicks";
import Product from "./components/Product";
import Footer from "./components/Footer";
import FeaturedPosts from "./components/FeaturedPosts";
import VitaClassic from "./components/VitaClassic";
import Neural from "./components/Neural";



export default function Home() {
  return (
    <div>
      <Navbar />
     <Hero />
     <EditorPicks />
     <Product />
     <VitaClassic />
     <FeaturedPosts />
     <Neural />
     <Footer />
    </div>
  );
}
