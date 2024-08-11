"use client";
import JobOpening from "@/app/vacancies/_components/job-opening";
import React from "react";

const OsanWater = () => {
  const jobOpenings = [
    {
      title: "Driver",
      location: "Osan Water Industry, Lagos",
      type: "Full-time",
      summary: "We are looking for experienced drivers to safely and efficiently transport our products to various locations.",
      responsibilities: [
        "Transport bottled water to designated locations.",
        "Ensure timely delivery of products.",
        "Maintain vehicle in good working condition."
      ],
      qualifications: [
        "Valid driver's license.",
        "Minimum of 2 years driving experience.",
        "Knowledge of local routes and traffic laws."
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Overtime pay"
      ]
    },
    {
      title: "Packer",
      location: "Osan Water Industry, Lagos",
      type: "Full-time",
      summary: "We are seeking diligent packers to efficiently pack and prepare our bottled water for distribution.",
      responsibilities: [
        "Pack bottled water into cartons.",
        "Ensure products are packed securely.",
        "Maintain a clean and organized packing area."
      ],
      qualifications: [
        "Ability to work in a fast-paced environment.",
        "Attention to detail.",
        "Physical stamina for repetitive tasks."
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Performance bonuses"
      ]
    },
    {
      title: "Machine Operator",
      location: "Osan Water Industry, Lagos",
      type: "Full-time",
      summary: "We are looking for skilled machine operators to manage the operation of our bottling machinery.",
      responsibilities: [
        "Operate and monitor bottling machines.",
        "Perform routine maintenance on machines.",
        "Ensure machines run efficiently and safely."
      ],
      qualifications: [
        "Experience in machine operation.",
        "Technical skills in equipment maintenance.",
        "Attention to safety procedures."
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Training and development opportunities"
      ]
    },
    {
      title: "Store Keeper",
      location: "Osan Water Industry, Lagos",
      type: "Full-time",
      summary: "We are seeking a reliable storekeeper to manage inventory and ensure the smooth operation of our storage facilities.",
      responsibilities: [
        "Maintain accurate inventory records.",
        "Receive and inspect incoming products.",
        "Organize and manage storage areas."
      ],
      qualifications: [
        "Experience in inventory management.",
        "Strong organizational skills.",
        "Attention to detail."
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Employee discounts"
      ]
    },
    {
      title: "Motor Boy",
      location: "Osan Water Industry, Lagos",
      type: "Full-time",
      summary: "We are looking for motor boys to assist drivers in the delivery of products and loading/unloading of goods.",
      responsibilities: [
        "Assist in loading and unloading products.",
        "Accompany drivers on delivery routes.",
        "Ensure products are handled with care."
      ],
      qualifications: [
        "Physical stamina for manual tasks.",
        "Ability to work in a team.",
        "Basic knowledge of local routes."
      ],
      benefits: [
        "Competitive salary",
        "Overtime pay",
        "Career advancement opportunities"
      ]
    },
    {
      title: "Marketer",
      location: "Osan Water Industry, Lagos",
      type: "Full-time",
      summary: "We are seeking a dynamic marketer to promote our bottled water products and expand our market reach.",
      responsibilities: [
        "Develop and implement marketing strategies.",
        "Build and maintain customer relationships.",
        "Analyze market trends and report on performance."
      ],
      qualifications: [
        "Experience in marketing and sales.",
        "Strong communication and negotiation skills.",
        "Ability to work independently."
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Commission on sales"
      ]
    },
    {
      title: "Bottle Water Manager",
      location: "Osan Water Industry, Lagos",
      type: "Full-time",
      summary: "We are looking for an experienced manager to oversee the entire bottled water production process and ensure high-quality output.",
      responsibilities: [
        "Manage production schedules and staff.",
        "Ensure quality control throughout the production process.",
        "Coordinate with suppliers and vendors."
      ],
      qualifications: [
        "Experience in production management.",
        "Leadership and team management skills.",
        "Knowledge of water bottling standards."
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Leadership development opportunities"
      ]
    }
  ];

  return (
    <div className="lg:container mx-auto">
   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center px-1">
  Current Job Openings at Osan Water Industry
</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobOpenings.map((job, index) => (
          <JobOpening key={index} {...job} />
        ))}
      </div>
    </div>
  );
}

export default OsanWater;
