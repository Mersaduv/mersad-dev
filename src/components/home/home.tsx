import React, { useEffect, useState } from "react";
import { BiTrendingUp } from "react-icons/bi";
import PostCard from "../PostCard";
import Banner from "../Banner";
import NewCourses from "../NewCourses";
import { useGetCourses } from "../../services/courses";
import { Course } from "../../types/courses";
import { keywords } from "../../static/keywords";
import { Link } from "react-router-dom";
import { routes } from "../../constant/routes";
import {
  LoadingHome,
  LoadingHomeAllCoursesSection,
} from "../loading/loading-home";
const Home = () => {
  const [courses, setCourses] = useState<Course[]>();
  const [selectedKeyword, setSelectedKeyword] = useState<string>("");

  const { data, isLoading } = useGetCourses();
  useEffect(() => {
    if (data?.courses) {
      setCourses(data.courses);
    }
  }, [courses, data?.courses]);

  const scrollToTrendsSection = () => {
    const trendsSection = document.getElementById("trends-section");
    if (trendsSection) {
      trendsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <Banner onClicked={scrollToTrendsSection} />
      <div
        id="trends-section"
        className="px-4 max-w-[1192px] md2:mx-auto xs:mx-8 sm:mx-14 mt-10"
      >
        {isLoading ? (
          <LoadingHome />
        ) : (
          <div>
            <div className="flex gap-4 px-4 mb-5 -ml-2">
              <div className="border h-6 w-6 flex justify-center items-center text-xl border-black rounded-full">
                <BiTrendingUp />
              </div>
              <div className="font-bold">Trending courses</div>
            </div>
            <div className="grid sm:grid-cols-2 lg:flex lg:flex-wrap gap-2">
              {courses &&
                courses
                  .filter((courseItem) => courseItem.category === "trends")
                  .slice(0, 6)
                  .map((courseItem, index) => {
                    return (
                      <PostCard
                        key={courseItem.id}
                        courseItem={courseItem}
                        index={index}
                      />
                    );
                  })}
            </div>
          </div>
        )}
      </div>

      <hr className="my-12 md2:my-16" />
      <div className="flex px-4 flex-col-reverse md2:flex-row items-start justify-between max-w-[1192px] md2:mx-auto relative gap-12">
        {/* new course  */}
        <div className="flex flex-1 w-full flex-col gap-4">
          {isLoading ? (
            <LoadingHomeAllCoursesSection />
          ) : (
            courses &&
            courses
              .filter((courseItem) =>
                selectedKeyword
                  ? courseItem.keyword.includes(selectedKeyword)
                  : true
              )
              .map((courseItem) => {
                return (
                  <NewCourses key={courseItem.id} courseItem={courseItem} />
                );
              })
          )}
        </div>
        <hr className="md2:hidden my-4 w-full" />
        {/* topic */}
        <div className="flex-col flex md2:max-w-[380px] md:sticky md2:top-20">
          <h1 className="my-2 font-bold">
            Discover the course that matters to you
          </h1>

          <div className="flex flex-wrap gap-2.5 ">
            {keywords.map((keyItem) => (
              <div
                key={keyItem}
                className={`py-2 cursor-pointer px-4 bg-gray-100 inline-block rounded-full hover:outline outline-blue-100 ${
                  selectedKeyword === keyItem ? " text-white bg-[#43bef4]" : ""
                }`}
                onClick={() => setSelectedKeyword(keyItem)}
              >
                {keyItem}
              </div>
            ))}
          </div>

          <hr className="my-4 hidden sm:block" />
          <div className="gap-4 hidden md2:flex font-semibold text-gray-500  mb-8">
            <Link to={routes.ABOUT} className="hover:underline">
              About
            </Link>
            <Link to={routes.ABOUT} className="hover:underline">
              Help
            </Link>
            <Link to={routes.ABOUT} className="hover:underline">
              Terms
            </Link>
            <Link to={routes.ABOUT} className="hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
