import {sosmed} from "./navbar";

function FooterSection() {
  return (
    <footer
      style={{
        backgroundImage: "url(./bg2.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        marginTop: "30px",
      }}
    >
      <div className="w-full bg-black/45 py-10">
        <div className="w-[90%] mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 justify-end border-b-2 pb-7">
          <div className="">
            <p className="text-sm text-white leading-6 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              tempora sequi ab dolorem minus expedita.
            </p>
            <div className="flex gap-2">
              {sosmed.map((item, index) => (
                <span
                  key={index}
                  className="p-2 bg-primary text-white text-xl rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex md:justify-center gap-10 mt-5 md:mt-0">
            <div className="">
              <h6 className="text-xl text-white font-[500] mb-8">Navigation</h6>
              <ul>
                {["Home", "Pages", "About Us", "Services", "404"].map(
                  (item, index) => (
                    <li key={index} className="text-white">
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="">
              <h6 className="text-xl text-white font-[500] mb-8">Quick Link</h6>
              <ul>
                {["Contact Us", "FAQs", "Blog", "Gallery", "Pricing"].map(
                  (item, index) => (
                    <li key={index} className="text-white">
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="flex md:items-end flex-col mt-5 md:mt-0">
            <h6 className="text-xl text-white font-[500] mb-5">Work Hours</h6>
            <p className="my-5 text-white text-sm">7.AM - 5.PM Moon-Sat</p>
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="">
          <p className="text-white mt-4 italic text-sm text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            dolore hic officia nobis quisquam pariatur!
          </p>
        </div>
      </div>
    </footer>
  );
}
export default FooterSection;
