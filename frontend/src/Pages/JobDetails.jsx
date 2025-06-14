import React, { useState, useEffect } from "react";
import JobDetailsCard from "../components/JobDetails/JobDetailsCard";
import { contentService } from "../services/contentService";
import { useParams } from "react-router-dom";
import JobDescription from "../components/JobDetails/JobDescription";
import DisclaimerBanner from "../components/Common/DisclaimerBanner";
import JobSuggestion from "../components/JobDetails/JobSuggestion";

function JobDetails() {
  const [jobData, setJobData] = useState({});
  const { id } = useParams();
  const getDetails = async (id) => {
    try {
      const res = await contentService.getSingleJob(id);
      setJobData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails(id);
  }, []);

  return (
    <div className="mt-16">
      <DisclaimerBanner />
      <div className=" px-10 flex gap-8 lg:gap-14 flex-col md:flex-row">
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <JobDetailsCard jobData={jobData} />
          <JobDescription jobData={jobData} />
        </div>
        <div className="w-full md:w-1/3 sticky top-0 h-screen overflow-auto">
          <JobSuggestion />
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
