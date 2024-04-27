import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

function BannerSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-10px 0px",
  });

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
      <div className="bg-black/45 w-full h-full">
        <motion.div
          initial={{opacity: 0}}
          animate={inView ? {opacity: 1} : {opacity: 0}}
          transition={{duration: 1}}
          className="w-[90%] mx-auto text-center flex justify-center items-center flex-col h-full gap-5"
        >
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
        </motion.div>
      </div>
    </section>
  );
}

export default BannerSection;
