import AboutSection from "./components/about";
import HeroSection from "./components/hero";
import NavbarSection from "./components/navbar";
import ServiceSection from "./components/service";
import PartnersSection from "./components/partners";
import ProvideSection from "./components/provide";
import WorkSection from "./components/work";
import BannerSection from "./components/banner";
import BlogSection from "./components/blog";
import FooterSection from "./components/footer";

export const opacityVariant = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
};

function App() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <PartnersSection />
      <ProvideSection />
      <WorkSection />
      <BannerSection />
      <BlogSection />
      <FooterSection />
    </>
  );
}

export default App;
