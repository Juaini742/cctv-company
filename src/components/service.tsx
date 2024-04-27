import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {FaBox, FaCogs, FaLightbulb, FaStar} from "react-icons/fa";

const variants = (index: number) => ({
  hidden: {
    y: 90,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.2 * index,
    },
  },
});

function ServiceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-10% 0px",
  });
  const service = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <FaStar />,
      title: "High Quality",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <FaBox />,
      title: "Best Product",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <FaCogs />,
      title: "Top Services",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <section className="w-[90%] mx-auto flex  rounded-lg mt-10">
      <div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 gap-2 gap-y-14 md:gap-y-0 bg-secondary p-4 rounded-lg shadow-round"
      >
        {service.map((item, index) => (
          <motion.div
            key={index}
            variants={variants(index)}
            initial="hidden"
            animate={inView ? "animate" : "hidden"}
            className=" text-white group text-center relative"
          >
            <div className="p-3 flex flex-col gap-2 rounded-lg group-hover:h-[230px] group-hover:absolute trans-300 group-hover:bg-primary -top-[44px] bottom-0 justify-center items-center">
              <span className="group-hover:scale-y-95 text-3xl">
                {item.icon}
              </span>
              <h2 className="group-hover:scale-y-90 text-xl font-[500]">
                {item.title}
              </h2>
              <p className=" group-hover:scale-y-90 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
