const Footer = () => {
  return (
    <div className="relative z-[1] text-gray-800 bg-white">
      {/* Decorative background image */}
      <div className="footer absolute inset-0 opacity-10 -z-10" />

      {/* Main content */}
      <div className="py-12 px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="space-y-4">
            <a href="#">
              <img
                className="h-10"
                src="https://techpay.ng/assets/img/black-logo.png"
                alt="TechPay logo"
              />
            </a>
            <p className="text-[14px] text-gray-700 leading-relaxed">
              TechPay Limited is a Financial Technology (FinTech) firm that specializes in
              the provision of payment and collection solutions to its clients
              (Individual, Corporate or Government).
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h1 className="text-gray-800 font-semibold text-base mb-4">Company</h1>
            <ul className="space-y-2 text-sm">
              {["About Us", "Products", "Partners", "Contact Us"].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h1 className="text-gray-800 font-semibold text-base mb-4">Support</h1>
            <ul className="space-y-2 text-sm">
              {["FAQ's", "Terms & Condition", "Privacy Policy"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-2 text-sm">
            <h3 className="text-gray-800 font-semibold text-base mb-4">Address</h3>
            <p>Location: NECA House, Plot A2, Hakeem Balogun Way, Alausa, Lagos, Nigeria</p>
            <p>Email: info@techpay.ng</p>
            <p>Phone: (+234) 8072589575</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-gray-300">
        <div className="text-center py-6 px-4 text-sm text-gray-600">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} TechPay Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;