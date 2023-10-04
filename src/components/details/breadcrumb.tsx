import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../constant/routes";

const Breadcrumb = ({ paramsTitle }: { paramsTitle: string | undefined }) => {
  return (
    <div className="bg-grey-light w-full rounded-md">
      <ol className="list-reset flex">
        <li>
          <Link to={routes.HOME} className="hover:underline">
            courses
          </Link>
        </li>
        <li>
          <span className="mx-2 text-neutral-500">{">"}</span>
        </li>
        <li>
          <span className=" text-neutral-500 "></span>
        </li>
        <li className="text-[#38bdf8] underline">{paramsTitle}</li>
      </ol>
    </div>
  );
};

export default Breadcrumb;
