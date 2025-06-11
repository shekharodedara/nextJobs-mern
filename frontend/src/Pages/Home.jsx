import React from "react";
import LogoSlider from "../components/Home/LogoSlider";
import JobSeekers from "../components/Home/JobSeekers";
import Hero from "../components/Home/Hero";
import HomeStats from "../components/Home/HomeStats";
import HomeRecruiters from "../components/Home/HomeRecruiters";
import Footer from "../components/Home/Footer";
import { useSelector } from "react-redux";
import JobSeekerOverview from "../components/Home/footerPages/JobSeekerOverview";
import EmployerOverview from "../components/Home/footerPages/EmployerOverview";
import About from "../components/Home/footerPages/About";

function Home() {
  const currentPath = window.location.pathname;
  const userData = useSelector((state) => state.auth.userData);

  return (
    <div className="font-Poppins justify-center items-center">
      {currentPath === "/home" && (
        <>
          <Hero userData={userData} />
          <HomeStats />
          <LogoSlider />
          <JobSeekers userData={userData} />
          <HomeRecruiters userData={userData} />
        </>
      )}
      {currentPath === "/candidate/overview" && <JobSeekerOverview />}
      {currentPath === "/recruiter/overview" && <EmployerOverview />}
      {currentPath === "/about" && <About />}
      <Footer />
    </div>
  );
}

export default Home;