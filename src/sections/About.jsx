import React, { useState, useRef, useEffect } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const globeRef = useRef();
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.pointOfView({ lat: 16.705, lng: 74.2433, altitude: 2.2 }, 1000);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('Vishalsutar3731@gmail.com');

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Card 1: Intro */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I'm Vishal Sutar</p>
              <p className="grid-subtext">
                I am a dedicated React Native & Web Developer focused on building production-ready mobile applications and high-performance web platforms with responsive, user-centric experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/react.png" alt="React" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">React</p>
              <p className="grid-subtext">
                I specialize in building dynamic, high-performance web applications using React.js.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: React Native Card */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/react-native.png" alt="React Native" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">React Native</p>
              <p className="grid-subtext">
                I specialize in building cross-platform mobile applications for iOS & Android with React Native, delivering native performance and responsive UIs.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4: Expo Card */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/expo.png" alt="Expo" className="w-full sm:h-[276px] h-fit object-contain p-6" />

            <div>
              <p className="grid-headtext">Expo Framework</p>
              <p className="grid-subtext">
                I specialize in building mobile apps using Expo, leveraging Expo Go, Expo Router, EAS Build, and live OTA updates for fast development and seamless app delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5: Globe / Address */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center overflow-hidden">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 16.705,
                    lng: 74.2433,
                    text: "Kolhapur, Maharashtra, India",
                    color: "white",
                    size: 18,
                  },
                ]}
                labelDotRadius={1}
                labelColor={() => "#22c55e"}
                labelResolution={2}
                ringsData={[
                  {
                    lat: 16.705,
                    lng: 74.2433,
                  },
                ]}
                ringColor={() => (t) => `rgba(34, 197, 94, ${1 - t})`}
                ringMaxRadius={8}
                ringPropagationSpeed={3}
                ringRepeatPeriod={1000}
              />
            </div>

            <div>
              <p className="grid-headtext">Address</p>
              <p className="grid-subtext">I live In India, Maharashtra, Kolhapur.</p>
              <a href="#contact">
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Card 6: Contact / Email */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />

            <div className="space-y-2">
              <p className="grid-subtext">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">vishalsutar3731@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 7: Passion */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion For Development</p>
              <p className="grid-subtext">I love web and mobile development and building powerful digital experiences through code.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
