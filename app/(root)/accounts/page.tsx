import AccountDetails from "@/components/AccountDetails";
import AccountStatus from "@/components/AccountStatus";
import Breadcrumbs from "@/components/Breadcrumbs";
import Communication from "@/components/Communication";
import CompanyOverview from "@/components/CompanyOverview";
import ComplianceDocumentation from "@/components/ComplianceDocumentation";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import Policies from "@/components/Policies";
import PoliciesAccount from "@/components/PoliciesAccount";
import { getPoliciesData } from "@/lib/actions/data";
import React from "react";

const Page = async () => {
  const policiesData = await getPoliciesData();


  return (
    <section className="flex flex-col mt-9 mb-10">
      <Breadcrumbs />
      <CompanyOverview />
      <PerformanceMetrics />
      <Policies />

      <div className="flex flex-row gap-2.5 mt-11">
        <AccountStatus />
        <ComplianceDocumentation />
      </div>

      <AccountDetails />
      <Communication />
      <PoliciesAccount policiesData={policiesData} />
    </section>
  );
};

export default Page;
