import React from "react";

function JobSeekerOverview() {
  return (
    <div className="pt-32 px-6 md:px-12 pb-20">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome Job Seeker!</h1>
        <p className="text-gray-700 text-lg">
          Explore job opportunities, apply to your dream jobs, and track your application status.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <OverviewCard
          title="Browse Jobs"
          description="Find jobs that match your skills and interests."
          icon="fa-magnifying-glass"
        />
        <OverviewCard
          title="Saved Jobs"
          description="Review the jobs you've saved to apply later."
          icon="fa-bookmark"
        />
        <OverviewCard
          title="Application Status"
          description="Track the status of your applications in real-time."
          icon="fa-chart-line"
        />
      </div>
    </div>
  );
}

function OverviewCard({ title, description, icon }) {
  return (
    <div className="border rounded-2xl shadow-md hover:shadow-lg transition duration-200 p-4 flex flex-col gap-4 bg-white">
      <div className="text-blue-600 text-3xl">
        <i className={`fa-solid ${icon}`} />
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default JobSeekerOverview;
