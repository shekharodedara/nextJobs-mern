import React, { useEffect, useState } from "react";
import LogoSlider from "../components/Home/LogoSlider";
import JobSeekers from "../components/Home/JobSeekers";
import Hero from "../components/Home/Hero";
import HomeStats from "../components/Home/HomeStats";
import HomeRecruiters from "../components/Home/HomeRecruiters";
import Footer from "../components/Home/Footer";
import { userService } from "../services/userService";

function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await userService.getCurrentUser();
        setUserData(user);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUser();
  }, []);
  return (
    <div className="font-Poppins justify-center items-center">
      <Hero userData={userData} />
      <HomeStats />
      <LogoSlider />
      <JobSeekers userData={userData} />
      <HomeRecruiters userData={userData} />
      <Footer />
    </div>
  );
}

export default Home;
