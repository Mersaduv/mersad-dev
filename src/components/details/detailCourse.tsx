import { useParams } from "react-router-dom";
import { BiUser, BiLogoTelegram, BiDollar } from "react-icons/bi";
import { MdVideoLibrary } from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import Breadcrumb from "./breadcrumb";
import { useGetCourse } from "../../services/courses";
const DetailCourse = () => {
  const params = useParams();
  const { data: courseDetail } = useGetCourse(params.id);
  return (
    <div
      onClick={() => console.log(params.id, courseDetail)}
      className=" w-full"
    >
      <div className="pt-28 mx-auto   text-center bg-blue-100 relative">
        <div className="max-w-[1192px] md2:mx-auto gap-4 flex justify-between px-2">
          <div className="md2:flex flex-col flex-initial hidden  w-1/4">
            <Breadcrumb paramsTitle={courseDetail?.title} />
            <div className="h-[500px] p-4 mt-10 flex flex-col top-32 sticky  bg-gray-100 rounded-lg ">
              <h1>Details Course</h1>
              <hr className="my-4" />

              <div className="flex flex-col gap-y-4 h-full">
                {" "}
                <div className="flex items-center gap-2">
                  <div className="text-2xl">
                    {" "}
                    <BiUser />
                  </div>
                  <span>{courseDetail?.instructor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl">
                    {" "}
                    <MdVideoLibrary />
                  </div>
                  <span>{courseDetail?.episode}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl">
                    {" "}
                    <BiLogoTelegram />
                  </div>
                  <span className="text-sm text-blue-600">
                    Download from Telegram
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl">
                    {" "}
                    <FcApproval />
                  </div>
                  <span>
                    {courseDetail?.isComplete === true
                      ? "Complete"
                      : "InComplete"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl">
                    {" "}
                    <BiDollar />
                  </div>
                  <div>
                    <span className="line-through">
                      {courseDetail?.tuition.toLocaleString()}
                    </span>
                    -Free
                  </div>
                </div>
              </div>

              <a
                href="https://t.me/mersad_dev/566"
                className="flex my-4 rounded-md font-bold text-lg mx-2 items-center bg-[#38bdf8] justify-center py-1 hover:outline outline-blue-400 "
              >
                Get
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-100 mt-16 rounded-lg flex-1 ">
            <div className="text-start w-full md2:hidden mt-2 ml-8">
              <Breadcrumb paramsTitle={courseDetail?.title} />
            </div>
            <h1 className="text-[#38bdf8] text-3xl font-bold my-6">
              {courseDetail?.title}
            </h1>{" "}
            <div className=" mx-8">
              {" "}
              <img
                className="md2:h-[480px] md2:w-[750px] "
                src={courseDetail?.thumbnailUrl}
                alt={courseDetail?.title}
              />
            </div>
            <div className=" w-full  p-8 mt-10 flex md2:hidden flex-col  ">
              <h1 className="text-start">Details Course</h1>
              <hr className="my-2" />
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">
                    {" "}
                    <BiUser />
                  </div>
                  <span>{courseDetail?.instructor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl">
                    {" "}
                    <MdVideoLibrary />
                  </div>
                  <span>{courseDetail?.episode}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl">
                    {" "}
                    <BiLogoTelegram />
                  </div>
                  <span className="text-sm text-blue-600">
                    Download from Telegram
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl">
                    {" "}
                    <FcApproval />
                  </div>
                  <span>
                    {" "}
                    {courseDetail?.isComplete === true
                      ? "Complete"
                      : "InComplete"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl">
                    {" "}
                    <BiDollar />
                  </div>
                  <div>
                    <span className="line-through">
                      {courseDetail?.tuition}
                    </span>
                    -Free
                  </div>
                </div>
              </div>
              <a
                href="c"
                className="flex mt-8 rounded-md font-bold text-lg mx-2 items-center bg-[#38bdf8] justify-center py-1 hover:outline outline-blue-400 "
              >
                Get
              </a>
            </div>
            <hr className="my-12" />
            <div className="flex justify-start gap-8 items-center w-full p-8">
              <div className="p-2 font-bold text-lg  rounded text-end  bg-[#38bdf8]">
                descriptions
              </div>
              <a
                href={`https://t.me/mersad_dev/566`}
                className="underline text-blue-600"
              >
                Click to see more descriptions of the parts
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCourse;
