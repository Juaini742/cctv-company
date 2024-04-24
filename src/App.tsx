import AboutSection from "./components/about";
import HeroSection from "./components/hero";
import NavbarSection from "./components/navbar";
import ServiceSection from "./components/service";
// import PartnersSection from "./components/partners";
// import ProvideSection from "./components/provide";

function App() {
  console.log("ok");
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      {/* <PartnersSection />
      <ProvideSection /> */}
    </>
  );
}

export default App;
