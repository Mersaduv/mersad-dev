import { Course } from "../types/courses";
import { MdVideoLibrary } from "react-icons/md";
import Avatar from "../static/blank.jpg";
import { Link } from "react-router-dom";
interface props {
  courseItem: Course;
}
const NewCourses = ({ courseItem }: props) => {
  return (
    <Link
      to={`/courses/${courseItem.id}`}
      className="flex w-full lg:max-w-[80%] justify-between gap-2 hover:shadow p-2"
    >
      <div className="flex gap-2 justify-between flex-col">
        <div>
          <div className="flex items-center gap-2">
            <img src={Avatar} className="w-5 h-5 border rounded-full" />
            <div className=" text-sm sm:text-base font-semibold">
              {courseItem.instructor}
            </div>{" "}
          </div>
          <div className="line-clamp-2 break-words text-xl font-bold">
            {courseItem.title}
          </div>
        </div>
        <div className="font-bold">
          Price - {courseItem.tuition.toLocaleString()}
        </div>
        <div>
          on channel for Free{" "}
          <span className="line-through">
            {courseItem.tuition.toLocaleString()}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="mb-2 text-lg font-bold">.</div>
          <span className="text-sm flex items-center gap-4">
            Ep : {courseItem.episode}
            <MdVideoLibrary />
          </span>
        </div>
      </div>
      <img
        src={courseItem.thumbnailUrl}
        className="h-[100px] w-[130px] sm:w-[150px] md:h-[134px] md:w-[200px] object-contain"
        alt=""
      />
    </Link>
  );
};

export default NewCourses;
