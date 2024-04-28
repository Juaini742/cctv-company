import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  hidden: {
    x: -500,
    opacity: 0,
  },
};

const imgVariant = {
  initial: {
    x: 500,
    opacity: 0,
  },
  hidden: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-10% 0px",
  });

  const [count, setCount] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    const targetNumbers = [67, 83, 100];
    let currentNumbers = [0, 0, 0];

    const updateNumbers = () => {
      const nextNumbers = currentNumbers.map((currentNumber, index) => {
        const targetNumber = targetNumbers[index];
        const increment = Math.ceil((targetNumber - currentNumber) / 100);
        const nextNumber = currentNumber + increment;
        return nextNumber < targetNumber ? nextNumber : targetNumber;
      });

      setCount(nextNumbers);
      currentNumbers = nextNumbers;

      if (
        !currentNumbers.every(
          (number, index) => number === targetNumbers[index]
        )
      ) {
        requestAnimationFrame(updateNumbers);
      }
    };

    requestAnimationFrame(updateNumbers);

    return () => {
      requestAnimationFrame(updateNumbers);
    };
  }, []);

  return (
    <div className="w-[90%] mx-auto overflow-hidden flex flex-col justify-center items-center mt-10">
      <div
        ref={ref}
        className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 w-full py-3"
      >
        <motion.div
          initial="hidden"
          animate={inView ? "animate" : "hidden"}
          variants={textVariants}
          className="flex-1 flex flex-col gap-3"
        >
          <motion.h1
            variants={textVariants}
            className="text-4xl lg:text-5xl text-primary font-[500] text-center md:text-left"
          >
            Professional <br />
            <span className="text-secondary font-[600]">Security Services</span>
            <br /> You Can Trust
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="lg:w-[600px] text-sm leading-6 text-gray-500 text-center md:text-left"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa
            blanditiis soluta nulla pariatur aliquid, voluptatem eaque error,
            officia sapiente quis ipsum dicta animi quidem!
          </motion.p>
          <motion.div
            variants={textVariants}
            className="flex gap-4 justify-center md:justify-start "
          >
            {count.map((item, index) => (
              <motion.div
                key={index}
                initial={{scale: 0.5, opacity: 0}}
                animate={
                  inView && {scale: 1, opacity: 1, transition: {duration: 1}}
                }
                className="p-3 rounded text-secondary flex justify-center flex-col items-center"
              >
                <h5 className="font-bold text-4xl">{item}</h5>
                <span>Experience</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "animate" : "hidden"}
          variants={imgVariant}
          className="mr-3"
        >
          <div className="p-3 bg-white shadow-round rounded-t-full">
            <div className="w-64 h-96 overflow-hidden flex items-start rounded-t-full ">
              {/* <img src="./hero.jpg" alt="" className="object-fill" /> */}
              <img
                src="https://res.cloudinary.com/dixdqxpza/image/upload/v1714262140/hero_hutkuy.jpg"
                alt=""
                className="object-fill"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
