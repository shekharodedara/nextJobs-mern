// src/components/JobSeekerOverview.jsx
import React from "react";

function JobSeekerOverview() {
  return (
    <div className="p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-4">Welcome Job Seeker!</h1>
      <p className="text-gray-700 mb-6">
        Explore job opportunities, apply to your dream jobs, and track your application status.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <OverviewCard
          title="Browse Jobs"
          description="Find jobs that match your skills and interests."
        />
        <OverviewCard
          title="Saved Jobs"
          description="Review the jobs you've saved to apply later."
        />
        <OverviewCard
          title="Application Status"
          description="Track the status of your applications in real-time."
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

export default JobSeekerOverview;
