import React from "react";

function About() {
  return (
    <div className="pt-20 max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-green-700">About NextJobs</h1>
      
      <p className="mb-4 text-lg text-gray-700">
        Welcome to our Job Portal — the platform designed to bridge the gap between talented job seekers and innovative recruiters.
      </p>
      
      <h2 className="text-2xl font-semibold mb-3 text-green-600">For Job Seekers</h2>
      <p className="mb-6 text-gray-700">
        Whether you're looking for a startup job, web3 opportunity, or remote work, our platform connects you to companies eager to hire. 
        Discover personalized job listings, save your favorites, and apply directly through our easy-to-use interface.
      </p>
      
      <h2 className="text-2xl font-semibold mb-3 text-green-600">For Recruiters</h2>
      <p className="mb-6 text-gray-700">
        Recruiters can post job openings, curate candidate lists, and leverage tools like Recruit Pro to find top talent efficiently. 
        Our platform offers flexible hiring solutions whether you're a startup or an established company.
      </p>
      
      <h2 className="text-2xl font-semibold mb-3 text-green-600">Our Mission</h2>
      <p className="text-gray-700">
        Our mission is to create a seamless experience that empowers both job seekers and recruiters. We aim to foster growth and innovation by making hiring and job hunting smarter, faster, and more transparent.
      </p>
    </div>
  );
}

export default About;
