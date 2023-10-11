import { routes } from "./routes";
const baseURL = "https://apimersaddevme.azurewebsites.net/api"

export const paths = {
  getCourses: `${baseURL}/courses`,
  getCourse: (courseId: string) => `${baseURL}/courses/${courseId}`,
};


interface MenuItems {
  name: string;
  path: string;
}
export const menuItems: MenuItems[] = [
  { name: "Why free?", path: routes.WHY_FREE},
  { name: "Course registration", path: routes.COURSE_REGISTRATION },
  { name: "About", path: routes.ABOUT },
];
