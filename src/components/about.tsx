import {BsFillHandThumbsUpFill} from "react-icons/bs";

function AboutSection() {
  return (
    <section className="w-[90%] mx-auto grid grid-cols-3 items-center my-10">
      <div className="flex flex-col h-80 overflow-hidden rounded-lg">
        <div className="overflow-hidden flex items-center">
          <img src="./hero.jpg" alt="" className="object-fill" />
        </div>
        <div className="overflow-hidden flex items-center">
          <img src="./hero.jpg" alt="" className="object-fill" />
        </div>
      </div>
      <div className="flex flex-col h-full bg-secondary text-white p-6 gap-4 rounded-lg">
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
      </div>
      <div className="flex flex-col bg-white shadow-round p-8 rounded-r-lg gap-3">
        <h2 className="text-2xl text-primary font-[500]">Why Choose Us</h2>
        <p className="text-sm text-secondary pr-5 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex flex-col gap-3">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="p-3 rounded-md text-white bg-primary">
                  <BsFillHandThumbsUpFill />
                </span>
                <h4 className="text-primary font-[500]">23 Years Experience</h4>
              </div>
              <p className="text-sm text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
                molestias?
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
