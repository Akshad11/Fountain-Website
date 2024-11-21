import ScrollView from "./components/ScrollView";
import HomePage from "./HomePage";
import "./styles.css";
import Offer from "./components/Offers";

import Scroll1 from "./assets/scroll1.png";
import Scroll2 from "./assets/scroll2.png";
import Scroll3 from "./assets/scroll3.png";
import Scroll4 from "./assets/scroll4.png";
import Scroll5 from "./assets/scroll5.png";
import Scroll6 from "./assets/scroll6.png";
import Scroll7 from "./assets/scroll7.png";
import Scroll8 from "./assets/scroll8.png";
import Exampic from "./assets/Exampic.png";
import Reviews from "./Reviews";
import Footer from "./FooterPage";

export default function App() {
  const Textdata = ["Marketing", "Design", "Programming", "Technology"];
  const Imgdata = [Scroll1, Scroll2, Scroll3, Scroll4];
  const Imgdata1 = [Scroll5, Scroll6, Scroll7, Scroll8];
  const Textdata1 = [
    "NATURE of Science",
    "2022 Astro Report",
    "Data Analysis With Python",
    "Advanced UX Designs",
  ];
  return (
    <div className="App">
      <HomePage />
      <ScrollView
        title="Top cartegories"
        textList={Textdata}
        imgList={Imgdata}
      />
      <Offer
        title=""
        subheadText=""
        headText="We are Experts Learning Institution"
        pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit elit, bibendum volutpat platea mi, adipiscing eget magna. Eu nulla ut urna venenatis velit et tincidunt. Id vitae velit "
        btnText="Enroll now"
        img={Scroll6}
        highNum={3}
        isRevese={false}
      />
      <Offer
        title=""
        subheadText=""
        headText="Our online examination is top-notch"
        pText="Prepare your self for greater challenges with our online examination."
        btnText="Take a test"
        img={Exampic}
        highNum={3}
        isRevese={true}
      />
      <ScrollView
        title="Popular examination"
        textList={Textdata1}
        imgList={Imgdata1}
      />
      <ScrollView
        title="Featured Competition"
        textList={Textdata}
        imgList={Imgdata}
      />
      <Offer
        title=""
        subheadText=""
        headText="Get Publicstions from best Aurtors around the  Globe"
        pText="Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra.  pharetra. Aliquam"
        btnText="Register"
        img={Scroll5}
        highNum={2}
        isRevese={true}
      />
      <ScrollView
        title="Recent Publications"
        textList={Textdata1}
        imgList={Imgdata1}
      />
      <Reviews />
      <Footer />
    </div>
  );
}
