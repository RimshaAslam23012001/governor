import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Main from "./components/Main";
import Boxes from "./components/Boxes";
import Piaic from "./components/Piaic";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Navbar/> 
      <Herosection />
      <Main />
      <Boxes />
      <Piaic/>
      <Footer />
    </>
  );
}

export default Home;