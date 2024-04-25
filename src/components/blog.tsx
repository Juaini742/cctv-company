import {motion, useInView} from "framer-motion";
import {FaLongArrowAltRight} from "react-icons/fa";
import {opacityVariant} from "../App";
import {useRef} from "react";

const articles = [
  {
    img: "/hero.jpg",
    name: "Security Solutions",
  },
  {
    img: "/hero.jpg",
    name: "Monitor the workplace",
  },
  {
    img: "/hero.jpg",
    name: "Why choose secure",
  },
];
function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {once: true, margin: "-100px"});
  return (
    <section ref={ref} className="w-[90%] mx-auto mt-10">
      <div className="mb-5">
        <h1 className="text-5xl font-[600] text-primary text-center mb-5">
          Blog & Article
        </h1>
        <p className="text-sm text-secondary text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, non
          laborum consequatur dicta in illum cupiditate dolorem rerum?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-5 ">
        {articles.map((item, index) => (
          <motion.div
            key={index}
            variants={opacityVariant}
            initial="initial"
            animate={inView && "animate"}
            className="hover:bg-primary/20 group p-2 rounded-lg trans-300"
          >
            <div className="h-[300px] sm:h-[400px] md:min-h-[500px] flex justify-center items-center overflow-hidden rounded-lg">
              <img
                src={item.img}
                alt={item.name}
                className="w-full group-hover:scale-110 trans-300 rounded-lg"
              />
            </div>
            <div className="">
              <h3 className="text-xl text-primary font-[500] my-4">
                {item.name}
              </h3>
              <p className="text-sm text-secondary mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                cupiditate dolorum consequatur.
              </p>
              <button className="text-sm text-primary flex items-center gap-2">
                Learn more{" "}
                <span className="text-lg">
                  <FaLongArrowAltRight />
                </span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
