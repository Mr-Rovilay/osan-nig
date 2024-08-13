"use client";
import { db } from "@/lib/firebaseConfig";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaSpinner } from "react-icons/fa";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email.match(isValidEmail)) {
      setLoading(true); // Start loading
      try {
        console.log("Email submitted:", email);

        // Add email to Firestore
        await addDoc(collection(db, "subscriptions"), {
          email: email,
          time: serverTimestamp(),
        });

        // Show success message
        setSuccessMessage("Thank you for subscribing!");
        setErrorMessage("");

        // Clear the input field
        setEmail("");

        // Hide the success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } catch (error) {
        console.error("Error adding email to Firestore:", error);
        setErrorMessage("An error occurred. Please try again.");
        setSuccessMessage("");
      } finally {
        setLoading(false); // Stop loading
      }
    } else {
      // Show an error message
      setErrorMessage("Please enter a valid email address.");
      setSuccessMessage("");
    }
  };

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
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-black"
                placeholder="Your email address"
                disabled={loading} // Disable input during loading
              />
              <button
                type="submit"
                className={`bg-custom-blue text-white px-4 py-2 rounded-r-lg transition-colors duration-300 ${
                  loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-600"
                }`}
                disabled={loading} // Disable button during loading
              >
                {loading ? (
                  <FaSpinner className="animate-spin h-5 w-5 text-white inline-block" />
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
            {successMessage && (
              <p className="mt-4 text-green-500 text-sm">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="mt-4 text-red-500 text-sm">{errorMessage}</p>
            )}
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
