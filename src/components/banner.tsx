import {motion, useInView} from "framer-motion";
import {opacityVariant} from "../App";
import {useRef} from "react";

function BannerSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {once: true, margin: "-100px"});

  return (
    <section
      style={{
        marginTop: "45px",
        height: "500px",
        width: "100%",
        backgroundImage: "url(./bg2.jpg)",
      }}
      className="bg-cover bg-no-repeat"
      ref={ref}
    >
      <motion.div
        variants={opacityVariant}
        initial="initial"
        animate={inView && "animate"}
        className="bg-black/45 w-full h-full"
      >
        <div className="w-[90%] mx-auto text-center flex justify-center items-center flex-col h-full gap-5">
          <h1 className="text-5xl font-[600] text-white">
            Security Solutions for Your <br /> Work and Home
          </h1>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            temporibus beatae quidem dolor at explicabo consectetur
            necessitatibus excepturi, aperiam alias!
          </p>
          <div className="">
            <button className="px-5 py-2 bg-primary rounded-md text-white">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default BannerSection;
