"use client";
import React from "react";


import OsanBlock from "@/components/osanblock";
import InPageNavigation from "./inpage-navigation.tsx";
import OsanWater from "@/components/osanwater";

const JobList = () => {
  return (
    <section className="bg-gray-50 py-10 container">
<InPageNavigation routes={["Osan Block", "Osan Water"]}>
  <OsanBlock />
  <OsanWater/>
</InPageNavigation>
    </section>
  );
};

export default JobList;
