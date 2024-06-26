import { motion } from "framer-motion";
import { FaCamera, FaFire, FaHome, FaLongArrowAltRight } from "react-icons/fa";

export const mapVariants = (index: number) => ({
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5 * index,
    },
  },
});

function ProvideSection() {
  const provides = [
    {
      icon: <FaCamera />,
      name: "Security Camera",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero aharum laboriosam fuga corrupti placeat.",
    },
    {
      icon: <FaFire />,
      name: "Fire Derection",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero aharum laboriosam fuga corrupti placeat.",
    },
    {
      icon: <FaHome />,
      name: "Smart Home",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero aharum laboriosam fuga corrupti placeat.",
    },
  ];

  return (
    <section className="w-[90%] mx-auto mt-10 flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{
          once: true,
        }}
        className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-end "
      >
        <h1 className="text-5xl font-[600] text-primary">
          We Provide The Best services
        </h1>
        <p className="text-sm text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          delectus! Doloribus atque laboriosam autem non, numquam ducimus
          asperiores magnam eaque.
          <button className="flex items-center gap-2 text-primary text-sm">
            Learn More{" "}
            <span>
              <FaLongArrowAltRight />
            </span>
          </button>
        </p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-[330px_330px_330px] justify-center gap-4 mt-8">
        {provides.map((item, index) => (
          <motion.div
            key={index}
            variants={mapVariants(index)}
            initial="hidden"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="p-3 group hover:bg-white hover:shadow-round rounded-full"
          >
            <div className="px-8 py-5 lg:py-12 flex flex-col justify-center items-center lg:min-h-96 group-hover:bg-secondary trans-300 gap-5  rounded-full">
              <span className="text-4xl group-hover:text-white">
                {item.icon}
              </span>
              <h3 className="text-2xl text-center font-[500] group-hover:text-white">
                {item.name}
              </h3>
              <p className="text-center group-hover:text-white">{item.desc}</p>
              <button className="bg-primary rounded text-white px-5 py-2">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProvideSection;
