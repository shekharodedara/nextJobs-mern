import React from "react";

function JobSuggestion() {
  const jobs = [
    {
      title: "Business Development Manager",
      company: "Siemens",
      location: "Munich, Germany",
      logo: "https://logo.clearbit.com/simens.com",
      posted: "Posted 2 days ago",
    },
    {
      title: "Frontend Developer",
      company: "Spotify",
      location: "Stockholm, Sweden",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
      posted: "Posted 1 day ago",
    },
    {
      title: "Cloud Infrastructure Engineer",
      company: "OVHcloud",
      location: "Roubaix, France",
      logo: "https://logo.clearbit.com/coursera.com",
      posted: "Posted 4 days ago",
    }
  ];
  return (
    <div className="border rounded-3xl p-5 flex flex-col gap-5">
      <div>
        <h3 className="font-medium">Jobs you might be interested in</h3>
      </div>
      <div className="flex flex-col gap-5">
        {jobs.map((job, index) => (
          <div key={index} className="border-b pb-3">
            <div className="flex justify-between">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">{job.title}</p>
                  <p className="text-[.78rem] font-medium text-gray-500">
                    {job.company}
                  </p>
                </div>
                <div>
                  <div>
                    <div className="flex gap-3 text-sm text-gray-600">
                      <span>
                        <i className="fa-solid fa-location-dot"></i>
                      </span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-end">
                <div className="h-14 w-14 rounded-3xl border overflow-hidden flex justify-center items-center">
                  <img src={job.logo} alt={`${job.company} logo`} />
                </div>
                <div>
                  <span className="text-xs font-light">{job.posted}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobSuggestion;
