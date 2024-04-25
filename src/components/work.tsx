import {motion, useInView} from "framer-motion";
import {
  FaComments,
  FaLongArrowAltDown,
  FaLongArrowAltRight,
  FaTools,
  FaWrench,
} from "react-icons/fa";
import {opacityVariant} from "../App";
import {useRef} from "react";

const works = [
  {
    icon: <FaComments />,
    title: "Discussion",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, doloremque.",
  },
  {
    icon: <FaTools />,
    title: "Installation",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, doloremque.",
  },
  {
    icon: <FaWrench />,
    title: "Maintenance",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, doloremque.",
  },
];

function WorkSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {once: true, margin: "-100px"});

  return (
    <section ref={ref} className="w-[90%] mx-auto mt-10">
      <div className="text-center">
        <h1 className="text-5xl my-5 font-[600] text-primary">
          Our Working Process
        </h1>
        <p className="text-secondary leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis
          officia inventore molestiae voluptatum dicta laudantium accusamus
          nobis?
        </p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row gap-2">
        {works.map((item, index) => (
          <motion.div
            key={index}
            variants={opacityVariant}
            initial="initial"
            animate={inView && "animate"}
            className="flex flex-col md:flex-row gap-2"
          >
            {(index === 1 || index === 2) && (
              <motion.div
                variants={opacityVariant}
                className="flex justify-center items-center"
              >
                <span className="hidden md:block text-primary text-3xl">
                  <FaLongArrowAltRight />
                </span>
                <span className="md:hidden text-primary text-3xl">
                  <FaLongArrowAltDown />
                </span>
              </motion.div>
            )}
            <motion.div
              variants={opacityVariant}
              className="group shadow-round rounded-lg p-2 relative"
            >
              <div className="w-fit p-4 rounded-full bg-secondary group-hover:bg-primary flex justify-center items-center absolute left-0 right-0 m-auto">
                <span className="text-2xl text-white">{item.icon}</span>
              </div>
              <div className="p-3 pt-10 mt-8 text-center rounded-lg group-hover:bg-secondary trans-300">
                <h4 className="text-xl font-[500] my-3 group-hover:text-white">
                  {item.title}
                </h4>
                <p className="text-sm group-hover:text-white">{item.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WorkSection;
