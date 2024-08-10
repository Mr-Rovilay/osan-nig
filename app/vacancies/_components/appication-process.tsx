"use client";
import React from "react";

const ApplicationProcess = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">How to Apply</h2>
        <ol className="list-decimal list-inside text-left max-w-2xl mx-auto text-lg space-y-4">
          <li>Review Job Listings: Browse through our current job openings and select the position that matches your qualifications.</li>
          <li>Prepare Your Application: Have your resume, cover letter, and any other required documents ready.</li>
          <li>Submit Your Application: Send your application to <a href="mailto:hr@osanindustries.com" className="text-custom-blue">hr@osanindustries.com</a>. Make sure to include the job title in the subject line.</li>
          <li>Application Review: Our HR team will review your application and reach out to you if your qualifications meet our needs.</li>
          <li>Interview Process: If selected, you will be invited for an interview with our hiring team.</li>
        </ol>
      </div>
    </section>
  );
};

export default ApplicationProcess;
