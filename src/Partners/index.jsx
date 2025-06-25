import React from "react";
import Footer from "../components/Footer";

const partners = [
  "https://acceleratingtozero.org/wp-content/uploads/2022/10/Lagos-logo.png",
  "https://logos-world.net/wp-content/uploads/2020/05/Visa-Logo.png",
  "https://leadership.ng/wp-content/uploads/2023/12/Untitled-design-2023-12-17T134849.624.png",
  "https://pbs.twimg.com/profile_images/872480407161327616/vgSBrhWA_400x400.jpg",
];

function App() {
  return (
    <div className="w-full overflow-hidden">
      <section className="py-16 px-4 sm:px-6 lg:px-20 text-center bg-white relative z-20">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-10 text-[#3e4095]">
          Our Partners
        </h2>

        {/* Top Marquee */}
        <div className="w-full overflow-hidden">
          <div className="flex animate-marquee space-x-6">
            {partners.concat(partners).map((url, i) => (
              <div
                key={`row1-${i}`}
                className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] px-3"
              >
                <img
                  src={url}
                  alt={`Partner ${i}`}
                  className="w-full h-auto object-contain rounded-lg shadow-md aspect-[16/9]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Marquee (reverse) */}
        <div className="w-full overflow-hidden mt-8">
          <div className="flex animate-marquee-reverse space-x-6">
            {partners.concat(partners).map((url, i) => (
              <div
                key={`row2-${i}`}
                className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] px-3"
              >
                <img
                  src={url}
                  alt={`Partner ${i}`}
                  className="w-full h-auto object-contain rounded-lg shadow-md aspect-[16/9]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Gradient Strip */}
      <div className="w-full bg-gradient-to-br from-blue-500 to-indigo-900 h-[180px] sm:h-[300px] mt-[-80px] z-10 relative" />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;