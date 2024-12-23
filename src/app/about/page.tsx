import SecondaryHeader from "@/app/components/shared/SecondaryHeader";
import ServiceBar from "@/app/components/shared/ServiceBar";

const About = () => {
  return (
    <section className="bg-[#FAF3EA] max-w-[1440px] mx-auto mb-12 font-poppins shadow-md">
      <SecondaryHeader routeName="About" />
      <div className="max-w-5xl mx-auto p-8">
        <div className="my-8">
          <h2 className="text-3xl font-semibold">Our Story</h2>
          <p className="mt-4 text-[15px] text-[#9F9F9F]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            rem error deleniti. Error corporis nostrum natus. Accusantium fugiat
            cum numquam sunt odit minus temporibus dolor, quis voluptates
            laudantium quo quia.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-[15px] text-[#9F9F9F]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            pariatur ut dolorem! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt, aliquam.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-3xl font-semibold">Core Values</h2>
          <ul className="list-disc pl-6 mt-4 text-[15px] text-[#9F9F9F]">
            <li>Quality craftsmanship</li>
            <li>Sustainable practices</li>
            <li>Customer-first approach</li>
          </ul>
        </div>

        <div className="my-8">
          <h2 className="text-3xl font-semibold">Meet Our Team</h2>
          <p className="mt-4 text-[15px] text-[#9F9F9F]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam fuga
            voluptates amet porro laborum quos soluta at. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Tempora, delectus.
          </p>
        </div>
      </div>

      <ServiceBar />
    </section>
  );
};

export default About;
