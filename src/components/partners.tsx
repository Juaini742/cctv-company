import {motion} from "framer-motion";
import {opacityVariant} from "../App";

function PartnersSection() {
  return (
    <section className="w-[90%] mx-auto my-10 grid grid-cols-3 md:grid-cols-4">
      <motion.div
        variants={opacityVariant}
        initial="initial"
        whileInView="animate"
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
          variants={opacityVariant}
          initial="initial"
          whileInView="animate"
          className="flex justify-center items-center mt-10 md:mt-0"
        >
          Logo {index + 1}
        </motion.div>
      ))}
    </section>
  );
}

export default PartnersSection;
