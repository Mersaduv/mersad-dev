import { Course } from "../types/courses";
import { MdVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";
import Avatar from "../static/blank.jpg";

interface props {
  courseItem: Course;
  index: number;
}
const PostCard = ({ courseItem, index }: props) => {
  return (
    <Link
      to={`/courses/${courseItem.id}`}
      className="flex lg:w-[32%] hover:shadow"
    >
      <div className="text-[#F2F2F2] mr-4 -mt-2 font-bold text-[32px]">
        0{index + 1}
      </div>
      <div className="flex gap-2 flex-col max-w-[320xp]">
        <div className="flex items-center gap-2">
          <img src={Avatar} className="w-5 h-5 border rounded-full" />
          <div className="text-base font-semibold">
            {courseItem.instructor}
          </div>{" "}
        </div>
        <div className="line-clamp-2 break-words text-xl font-bold">
          {courseItem.title}
        </div>
        <div className="line-clamp-2 break-words">
          Free If you don't have a good financial situation, you can access the
          courses for free through the Telegram channel.
        </div>
        <div className="flex gap-2 items-center">
          <div className="mb-2 text-lg font-bold">.</div>
          <span className="text-sm flex items-center gap-4">
            Ep : {courseItem.episode}
            <MdVideoLibrary />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
