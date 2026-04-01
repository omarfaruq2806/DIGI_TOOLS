import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="text-white bg-[#101727]   grid grid-cols-1 md:grid-cols-5 px-10 md:px-30 py-10 gap-10 justify-around">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">DigiTools</h2>
          <p>
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">Products</h1>
          <p>Features</p>
          <p>Pricing</p>
          <p>Tamplates</p>
          <p>Integrations</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">Company</h1>
          <p>About</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Press</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">Resources</h1>
          <p>Documentation</p>
          <p>Help Center</p>
          <p>Community</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">Social Links</h1>
          <div className="flex gap-4">
            <FaFacebookF size={24} />
            <FaInstagram size={24} />
            <FaTwitter size={24} />
          </div>
        </div>
      </div>
      <div className="px-10 md:px-30 py-6 border-t flex justify-between text-white bg-[#101727]">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-3">
          <p>Privacy Policy</p>
          <p>Terms & Services</p>
          <p>Cookies</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
