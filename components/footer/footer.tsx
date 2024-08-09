import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Osan Blocks</h3>
          <p className="text-gray-400 mb-6">
            Leading provider of high-quality bricks and blocks, committed to excellence and innovation in the building materials industry.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-custom-blue hover:text-white transition-colors duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="text-custom-blue hover:text-white transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-custom-blue hover:text-white transition-colors duration-300">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-custom-blue hover:text-white transition-colors duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-custom-blue transition-colors duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-custom-blue transition-colors duration-300">
                Our Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-custom-blue transition-colors duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-custom-blue transition-colors duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <form className="flex">
            <input
              type="email"
              className="w-full px-4 py-2 rounded-l-lg focus:outline-none"
              placeholder="Your email address"
            />
            <button
              type="submit"
              className="bg-custom-blue text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Osan Blocks. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
