import { useQuery } from "react-query";
import { Course, GetCoursesResponse } from "../types/courses";
import { paths } from "../constant/paths";
import { getHeaders, handleQuery } from "./utils";

export const useGetCourses = () => {
    return useQuery<string, Error, GetCoursesResponse>(["GET_COURSES_QUERY_KEY"], () =>
      fetch(paths.getCourses, {
        method: "GET",
        headers: getHeaders(),
      }).then(handleQuery)
    );
};

export const useGetCourse = (courseId?: string) => {
  return useQuery<string, Error, Course>(
    ["GET_COURSE_QUERY_KEY", courseId],
    () =>
      fetch(`https://apimersaddevme.azurewebsites.net/api/courses/${courseId}`).then(handleQuery),
    {
      enabled: !!courseId,
    }
  );
};
  