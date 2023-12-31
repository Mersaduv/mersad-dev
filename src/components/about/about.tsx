import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#292929] text-white h-[100vh] w-full">
      <div className="pt-32 mx-auto  text-center">About</div>
    </div>
  );
};

export default About;
