import {useState} from "react";
import {FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa";
import {RiMenu2Line} from "react-icons/ri";
import {motion} from "framer-motion";
import {MdClose} from "react-icons/md";

export const sosmed = [<FaFacebook />, <FaTwitter />, <FaYoutube />];

function NavbarSection() {
  const [open, setOpen] = useState<boolean>(false);
  const items = [
    {
      name: "Home",
      url: "#home",
    },
    {
      name: "About Us",
      url: "#about",
    },
    {
      name: "Services",
      url: "#service",
    },
    {
      name: "Page",
      url: "#page",
    },
    {
      name: "Contact Us",
      url: "#home",
    },
  ];

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <nav className="flex h-20 border-b items-center">
      <div className="flex w-[90%] mx-auto items-center justify-between md:justify-end gap-8 relative">
        <div>
          <button
            className="flex md:hidden text-2xl text-black"
            onClick={() => setOpen((prev) => !prev)}
          >
            <RiMenu2Line />
          </button>
        </div>
        <ul className="gap-5 hidden md:flex">
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
        <motion.div
          variants={variants}
          animate={open ? "open" : "closed"}
          className={`fixed top-0 bottom-0 left-0 right-0 bg-white ${
            open ? "" : "hidden"
          }`}
        >
          <ul className="flex flex-col justify-center items-center h-screen gap-7 relative">
            <button
              className=" text-2xl text-black absolute top-6 left-5"
              onClick={() => setOpen((prev) => !prev)}
            >
              <MdClose />
            </button>
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.url} className="text-3xl">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="flex gap-3">
          {sosmed.map((item, index) => (
            <button key={index} className="">
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavbarSection;
