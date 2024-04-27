import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

const partnersVariant = (index: number) => ({
  hidden: {
    x: -400,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5 * index,
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
});

function PartnersSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-10px 0px",
  });
  return (
    <section
      ref={ref}
      className="w-[90%] mx-auto my-10 grid grid-cols-3 md:grid-cols-4"
    >
      <motion.div
        initial={{opacity: 0, x: -400}}
        animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: -400}}
        transition={{duration: 1}}
        className="col-span-3 md:col-span-1"
      >
        <h1 className="text-xl font-[600] text-primary mb-2">Our Partners</h1>
        <p className="text-sm text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugit?
        </p>
      </motion.div>
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          variants={partnersVariant(index)}
          initial="hidden"
          animate={inView ? "animate" : "hidden"}
          className="flex justify-center items-center mt-10 md:mt-0"
        >
          Logo {index + 1}
        </motion.div>
      ))}
    </section>
  );
}

export default PartnersSection;
