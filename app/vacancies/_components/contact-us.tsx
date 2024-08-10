"use client";
import React from "react";

const ContactInformation = () => {
  return (
    <section id="contact-us" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg mb-4">If you have any questions about our job openings or the application process, feel free to reach out to our HR team:</p>
        <p className="text-lg"><strong>Email:</strong> <a href="mailto:hr@osanindustries.com" className="text-custom-blue">hr@osanindustries.com</a></p>
        <p className="text-lg"><strong>Phone:</strong> +234 800 123 4567</p>
        <p className="text-lg"><strong>Address:</strong> 123 Industry Road, Lagos, Nigeria</p>
      </div>
    </section>
  );
};

export default ContactInformation;
