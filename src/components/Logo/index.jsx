import React from "react";

function App() {
  const row1 = [
    "https://acceleratingtozero.org/wp-content/uploads/2022/10/Lagos-logo.png",
    "https://logos-world.net/wp-content/uploads/2020/05/Visa-Logo.png",
    "https://leadership.ng/wp-content/uploads/2023/12/Untitled-design-2023-12-17T134849.624.png",
    "https://pbs.twimg.com/profile_images/872480407161327616/vgSBrhWA_400x400.jpg",
  ];

  const logos = [...row1, ...row1]; // duplicate to allow seamless loop

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Top Decorative Gradient Strip */}
      <div className="w-full h-[200px] bg-gradient-to-br from-indigo-900 to-blue-500" />

      {/* Marquee */}
      <div className="relative z-10 flex flex-col items-center justify-center py-8 overflow-hidden">
        <div className="w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {logos.map((url, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[150px] sm:w-[180px] md:w-[200px] px-3 py-2"
              >
                <img
                  src={url}
                  alt={`partner-${i}`}
                  className="w-full h-auto object-contain rounded-md shadow aspect-[16/9]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Decorative Gradient Strip */}
      <div className="w-full h-[200px] bg-gradient-to-br from-blue-500 to-indigo-900 z-10" />
    </div>
  );
}

export default App;