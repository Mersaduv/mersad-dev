import { Routes, Route } from "react-router-dom";
import { routes } from "../../constant/routes";
import Home from "../home/home";
import About from "../about/about";
import WhyFree from "../whyFree/whyFree";
import CourseRegistration from "../courseRegistration/courseRegistration";
import DetailCourse from "../details/detailCourse";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />}></Route>
      <Route path={routes.DETAIL} element={<DetailCourse />} />
      <Route path={routes.ABOUT} element={<About />} />
      <Route path={routes.WHY_FREE} element={<WhyFree />} />
      <Route
        path={routes.COURSE_REGISTRATION}
        element={<CourseRegistration />}
      />
    </Routes>
  );
};
