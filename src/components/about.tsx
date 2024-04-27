import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {BsFillHandThumbsUpFill} from "react-icons/bs";

const leftVariant = {
  hidden: {
    x: -400,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
const centerVariant = {
  hidden: {
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
  hidden: {
    x: 400,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-10px 0px",
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: "-10px 0px",
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    rootMargin: "-10px 0px",
  });
  return (
    <section className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center my-10">
      <motion.div
        ref={ref}
        variants={leftVariant}
        initial="hidden"
        animate={inView ? "animate" : "hidden"}
        className="flex flex-col h-80 overflow-hidden shadow-round rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg col-span-1 md:col-span-2 lg:col-span-1"
      >
        <motion.div
          variants={leftVariant}
          className="overflow-hidden flex items-center"
        >
          <img src="./about.jpg" alt="" className="object-fill" />
        </motion.div>
        <motion.div
          variants={leftVariant}
          className="overflow-hidden flex items-center"
        >
          <img src="./about2.jpg" alt="" className="object-fill" />
        </motion.div>
      </motion.div>
      <motion.div
        ref={ref2}
        variants={centerVariant}
        initial="hidden"
        animate={inView2 ? "animate" : "hidden"}
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
        ref={ref3}
        variants={rightVariants}
        initial="hidden"
        animate={inView3 ? "animate" : "hidden"}
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
