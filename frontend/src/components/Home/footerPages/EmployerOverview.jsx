import React from "react";

function EmployerOverview() {
  return (
    <div className="pt-32 px-6 md:px-12 pb-20">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome Recruiter!</h1>
        <p className="text-gray-700 text-lg">
          Post job openings, manage applicants, and connect with top talent.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <OverviewCard
          title="Post a Job"
          description="Create job listings and reach thousands of job seekers."
          icon="fa-briefcase"
        />
        <OverviewCard
          title="Manage Listings"
          description="Edit or remove active job posts easily."
          icon="fa-clipboard-list"
        />
        <OverviewCard
          title="View Applicants"
          description="Browse and manage applications for your job posts."
          icon="fa-users"
        />
      </div>
    </div>
  );
}

function OverviewCard({ title, description, icon }) {
  return (
    <div className="border rounded-2xl shadow-md hover:shadow-lg transition duration-200 p-4 flex flex-col gap-4 bg-white">
      <div className="text-green-600 text-3xl">
        <i className={`fa-solid ${icon}`} />
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default EmployerOverview;
