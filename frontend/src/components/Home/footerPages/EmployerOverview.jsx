// src/components/EmployerOverview.jsx
import React from "react";

function EmployerOverview() {
  return (
    <div className="p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-4">Welcome Employer!</h1>
      <p className="text-gray-700 mb-6">
        Post job openings, manage applicants, and connect with top talent.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <OverviewCard
          title="Post a Job"
          description="Create job listings and reach thousands of job seekers."
        />
        <OverviewCard
          title="Manage Listings"
          description="Edit or remove active job posts easily."
        />
        <OverviewCard
          title="View Applicants"
          description="Browse and manage applications for your job posts."
        />
      </div>
    </div>
  );
}

function OverviewCard({ title, description }) {
  return (
    <div className="border rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-200">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default EmployerOverview;
