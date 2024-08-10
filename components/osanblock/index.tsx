"use client";
import JobOpening from "@/app/vacancies/_components/job-opening";
import React from "react";

const OsanBlock = () => {
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
    {
      title: "Production Supervisor",
      location: "Osan Block Industry, Lagos",
      type: "Full-time",
      summary: "We are looking for an experienced Production Supervisor to oversee our block manufacturing operations.",
      responsibilities: [
        "Supervise daily production activities.",
        "Coordinate with the engineering team to ensure quality standards.",
        "Train and manage production staff."
      ],
      qualifications: [
        "Bachelor's degree in Industrial Engineering or related field.",
        "Minimum of 5 years of experience in a supervisory role.",
        "Strong leadership and communication skills."
      ],
      benefits: [
        "Health insurance",
        "Paid time off",
        "Professional growth opportunities"
      ]
    },
    {
      title: "Quality Control Inspector",
      location: "Osan Block Industry, Lagos",
      type: "Full-time",
      summary: "We are seeking a Quality Control Inspector to ensure our products meet industry standards.",
      responsibilities: [
        "Inspect and test materials and products.",
        "Document inspection results and create reports.",
        "Ensure compliance with safety and quality standards."
      ],
      qualifications: [
        "High school diploma or equivalent.",
        "2+ years of experience in quality control.",
        "Attention to detail and strong analytical skills."
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Career development support"
      ]
    },
    {
      title: "Logistics Coordinator",
      location: "Osan Block Industry, Lagos",
      type: "Full-time",
      summary: "We are looking for a Logistics Coordinator to manage the transportation and distribution of our products.",
      responsibilities: [
        "Coordinate product shipments and deliveries.",
        "Manage inventory levels and track shipments.",
        "Work with suppliers and customers to ensure timely deliveries."
      ],
      qualifications: [
        "Bachelor's degree in Logistics or Supply Chain Management.",
        "3+ years of experience in logistics.",
        "Excellent organizational and problem-solving skills."
      ],
      benefits: [
        "Health insurance",
        "Retirement plan",
        "Employee discounts"
      ]
    },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Current Job Openings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobOpenings.map((job, index) => (
          <JobOpening key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default OsanBlock;
