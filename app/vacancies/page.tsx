"use client";

import ApplicationProcess from "./_components/appication-process";
import CompanyOverview from "./_components/company-overview";
import ContactInformation from "./_components/contact-us";
import HeaderSection from "./_components/header-section";
import JobList from "./_components/job-list";
import WhyJoinUs from "./_components/why-join-us";


const VacancyPage = () => {
  return (
    <div>
      <HeaderSection />
      <CompanyOverview />
      <JobList />
      <ApplicationProcess />
      <WhyJoinUs />
      <ContactInformation />
    </div>
  );
};

export default VacancyPage;
