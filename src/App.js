
import About from "./about/About";
import HeroSection from "./heroSection/heroSection";
import { content } from "./content/Content";
import CoreValues from "./core-values/CoreValues";
import Services from "./services/Services";
import MissionAndVision from "./mission and vision/MissionAndVision";
import WhyChooseUs from "./why-choose-us/WhyChooseUs";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contact us/Contact";
function App() {
  return (
    <>
      <HeroSection heroContent = {content.hero} />
      <CoreValues />
      <About about={content.about} />
      <Services serviceContent={content.services} serviceHeading={content.serviceHeading} />
      <MissionAndVision mission ={content.mission} vision={content.vision} />
      <WhyChooseUs whyChooseUs={content.whyChooseUs}/>
      <Testimonials testimonials={content.testimonials}/>
      <Contact />
    </>
    
  );
}

export default App;
