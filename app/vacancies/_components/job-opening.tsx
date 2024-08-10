"use client";
import React from "react";
import Button from "@/components/Button";

interface JobOpeningProps {
  title: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
}

const JobOpening: React.FC<JobOpeningProps> = ({
  title,
  location,
  type,
  summary,
  responsibilities,
  qualifications,
  benefits,
}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-10">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-lg font-semibold mb-2">
        {location} | {type}
      </p>
      <p className="text-lg mb-4">{summary}</p>

      <h4 className="text-xl font-semibold mb-2">Key Responsibilities:</h4>
      <ul className="list-disc list-inside mb-4">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>

      <h4 className="text-xl font-semibold mb-2">Qualifications:</h4>
      <ul className="list-disc list-inside mb-4">
        {qualifications.map((qualification, index) => (
          <li key={index}>{qualification}</li>
        ))}
      </ul>

      <h4 className="text-xl font-semibold mb-2">Benefits:</h4>
      <ul className="list-disc list-inside mb-6">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      <Button text="Apply Now" variant="secondary" />
    </div>
  );
};

export default JobOpening;
