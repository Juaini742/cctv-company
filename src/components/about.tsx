import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const leftVariant = {
  hidden: {
    x: -300,
    opacity: 0,
  },
  visible: {
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
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const rightVariants = {
  hidden: {
    x: 300,
    opacity: 0,
  },
  visible: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5 * index,
      // staggerChildren: 0.1,
      // delayChildren: 0.2,
    },
  }),
};

function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });
  return (
    <section className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center my-10">
      <motion.div
        variants={leftVariant}
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col h-80 overflow-hidden shadow-round rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg col-span-1 md:col-span-2 lg:col-span-1"
      >
        <motion.div className="overflow-hidden flex items-center">
          {/* <img src="./about.jpg" alt="" className="object-fill" /> */}
          <img
            src="https://res.cloudinary.com/dixdqxpza/image/upload/v1714262139/about_jwb8iy.jpg"
            alt=""
            className="object-fill"
          />
        </motion.div>
        <motion.div className="overflow-hidden flex items-center">
          {/* <img src="./about2.jpg" alt="" className="object-fill" /> */}
          <img
            src="https://res.cloudinary.com/dixdqxpza/image/upload/v1714262150/about2_yuq9ky.jpg"
            alt=""
            className="object-fill"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={centerVariant}
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
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
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        className="flex flex-col h-full lg:h-fit  bg-white shadow-round p-8 rounded-b-lg md:rounded-b-none md:rounded-br-lg lg:rounded-r-lg gap-3"
      >
        <motion.h2 className="text-2xl text-primary font-[500]">
          Why Choose Us
        </motion.h2>
        <motion.p className="text-sm text-secondary pr-5 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </motion.p>
        <div className="flex flex-col gap-3">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              variants={rightVariants}
              ref={ref3}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              custom={index}
              className="flex flex-col gap-1"
            >
              <motion.div className="flex items-center gap-3">
                <span className="p-3 rounded-md text-white bg-primary">
                  <BsFillHandThumbsUpFill />
                </span>
                <h4 className="text-primary font-[500]">23 Years Experience</h4>
              </motion.div>
              <motion.p className="text-sm text-secondary">
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
