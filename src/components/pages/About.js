import React from "react";
import HeroSectionAbout from "../HeroSectionAbout";
import Footer from "../Footer";
import CardsAbout from "../CardsAbout";
import ContactSection from "../ContactSection";

const About = () => {
  return (
    <div>
      <HeroSectionAbout />
      <div className="bg-gradient-to-b from-green-100 to-blue-100 py-10">
        {/* Our Story Section */}
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-green-800 mb-4">
              Our Story
            </h1>
            <p className="text-lg text-blue-800 leading-relaxed mb-4">
              Welcome to Sadar Biotech Private Limited, a trusted global brand.
              Through our humble beginnings, we were established in 2017 with a
              commitment towards transforming agriculture through innovation,
              reliability, and sustainability. Over the years, we have grown
              into a globally trusted name, symbolizing excellence in enhancing
              and safeguarding agricultural produce. Embodying our ethos of
              “Factory to Farm,” we take pride in our streamlined approach to
              delivering quality products directly from our manufacturing
              facilities to the agricultural landscape worldwide. We have three
              manufacturing units, two of them are in the state of Gujrat and
              one in the state of Chhattisgarh. By blending state-of-the-art
              agricultural needs, we have carved a niche for ourselves in the
              market.
            </p>
            <p className="text-lg text-blue-800 leading-relaxed">
              Our offering was not only limited to the development of
              agriculture, we soon started addressing the gaps in the
              pharmaceutical sector. We have started our pharma journey by
              manufacturing high-quality APIs and intermediates. We are
              committed towards cultivating the trust that we have built over
              the years and provide some cutting-edge scientific solutions in
              the pharmaceutical sector.
            </p>
          </div>
          <div>
            <img
              src="/images/about3.png"
              alt="Our Story"
              className=" w-screen rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      <CardsAbout />

      {/* Grid Sections */}
      <div className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Vision and Mission */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-green-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-blue-800 leading-relaxed">
              At Sadar Biotech, we envision a world where agriculture flourishes
              with the support of cutting-edge scientific solutions. Our mission
              is to provide top-tier solutions to nourish farms and safeguard
              harvests, ensuring a sustainable and thriving future for
              agriculture. We believe in the mission of safeguarding
              agricultural produce by delivering high quality products.
            </p>
          </div>

          {/* Product Specialization */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-green-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Product Specialization
            </h2>
            <p className="text-blue-800 leading-relaxed">
              In agricultural sector, we specialize in the production and
              distribution of pesticides, herbicides, fungicides and
              surfactants. Our “Factory to Farm” approach ensures that quality
              products directly reach the consumers of the agriculture
              landscape, embodying efficiency and excellence.
            </p>
          </div>

          {/* Global Presence */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-green-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Global Presence
            </h2>
            <p className="text-blue-800 leading-relaxed">
              We have expanded our reach across continents, with a significant
              presence in Russia, the CIS countries, European markets including
              the UK and Ukraine, as well as select regions in Latin America as
              well as in the United States.
            </p>
          </div>

          {/* Pharmaceutical Excellence */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-green-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Pharmaceutical Excellence
            </h2>
            <p className="text-blue-800 leading-relaxed">
              In the pharmaceutical sector, we take pride in producing
              high-quality APIs, serving as the foundation for pharmaceutical
              formulations. Our commitment to stringent quality control and
              regulatory standards positions us as a reliable partner for
              pharmaceutical companies striving for excellence.
            </p>
          </div>

          {/* Sustainability */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-green-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Commitment To Sustainability
            </h2>
            <p className="text-blue-800 leading-relaxed">
              Sadar Biotech actively pursues eco-friendly formulations and
              manufacturing processes, aligning our goals with a greener future
              for agriculture ecosystem. Our latest R&D initiatives focus on
              exploring bio-pesticides for next-generation agricultural
              sustainability.
            </p>
          </div>

          {/* Environmental Stewardship */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-green-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Environmental Stewardship
            </h2>
            <p className="text-blue-800 leading-relaxed">
              We see ourselves as protectors and stewards of the environment,
              contributing to a world where progress and preservation coexist.
              Our responsibility extends beyond profit margins, reflecting our
              dedication to a sustainable and harmonious future.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
