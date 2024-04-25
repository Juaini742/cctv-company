import {motion, useInView} from "framer-motion";
import {useRef} from "react";
import {BsFillHandThumbsUpFill} from "react-icons/bs";

const leftVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const centerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const rightVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
};

function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {margin: "-100px"});
  return (
    <section
      ref={ref}
      className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center my-10"
    >
      <motion.div
        variants={leftVariant}
        initial="initial"
        animate={inView && "animate"}
        className="flex flex-col h-80 overflow-hidden shadow-round rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg col-span-1 md:col-span-2 lg:col-span-1"
      >
        <div className="overflow-hidden flex items-center">
          <img src="./about.jpg" alt="" className="object-fill" />
        </div>
        <div className="overflow-hidden flex items-center">
          <img src="./about2.jpg" alt="" className="object-fill" />
        </div>
      </motion.div>
      <motion.div
        variants={centerVariant}
        initial="initial"
        animate={inView && "animate"}
        className="flex flex-col h-full bg-secondary shadow-roundM text-white p-6 gap-4 md:rounded-bl-lg lg:rounded-lg"
      >
        <h1 className="text-4xl font-[500]">About Us</h1>
        <p className="text-sm pr-5 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          dignissimos dicta minus libero quasi perspiciatis voluptatum nesciunt
          beatae officiis unde sed molestias illum animi ullam nostrum
          reiciendis assumenda, qui neque ea autem. Explicabo, eveniet fugit
          possimus ut distinctio nulla magni pariatur exercitationem consectetur
          voluptas earum aliquam incidunt impedit repellendus fugiat.
        </p>
        <p className="text-sm pr-5 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non
          omnis, sunt molestiae repellat placeat ex ut reprehenderit nemo
          maiores.
        </p>
        <div className="">
          <button className="bg-primary px-5 py-2 rounded-lg">
            Learn More
          </button>
        </div>
      </motion.div>
      <motion.div
        variants={rightVariants}
        initial="initial"
        animate={inView && "animate"}
        className="flex flex-col h-full lg:h-fit  bg-white shadow-round p-8 rounded-b-lg md:rounded-b-none md:rounded-br-lg lg:rounded-r-lg gap-3"
      >
        <motion.h2
          variants={rightVariants}
          className="text-2xl text-primary font-[500]"
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          variants={rightVariants}
          className="text-sm text-secondary pr-5 leading-6"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </motion.p>
        <div className="flex flex-col gap-3">
          {[...Array(3)].map((_, index) => (
            <motion.div key={index} className="flex flex-col gap-1">
              <motion.div
                variants={rightVariants}
                className="flex items-center gap-3"
              >
                <span className="p-3 rounded-md text-white bg-primary">
                  <BsFillHandThumbsUpFill />
                </span>
                <h4 className="text-primary font-[500]">23 Years Experience</h4>
              </motion.div>
              <motion.p
                variants={rightVariants}
                className="text-sm text-secondary"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
                molestias?
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
