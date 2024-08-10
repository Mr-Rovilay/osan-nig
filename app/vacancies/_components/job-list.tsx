"use client";
import React from "react";
import JobOpening from "./job-opening";


const JobList = () => {
  const jobOpenings = [
    {
      title: "Senior Mechanical Engineer",
      location: "Osan Block Industry, Lagos",
      type: "Full-time",
      summary: "We are seeking a Senior Mechanical Engineer to lead the design and implementation of new machinery for our block manufacturing process.",
      responsibilities: [
        "Design and oversee the development of machinery and equipment.",
        "Collaborate with production teams to optimize manufacturing processes.",
        "Ensure all designs meet industry standards and safety regulations."
      ],
      qualifications: [
        "Bachelor's degree in Mechanical Engineering or related field.",
        "Minimum of 7 years of experience in a similar role.",
        "Proficiency in CAD software."
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Professional development opportunities"
      ]
    },
    // Add more job openings as needed
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Current Job Openings</h2>
        {jobOpenings.map((job, index) => (
          <JobOpening key={index} {...job} />
        ))}
      </div>
    </section>
  );
};

export default JobList;
