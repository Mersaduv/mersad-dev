import { Link } from "react-router-dom";
import { routes } from "../constant/routes";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 md2:hidden">
      <div className="font-semibold mt-8  text-3xl  flex">
        <div className="">Mersad</div> - <div className="font-bold">Dev</div>
      </div>
      <div></div>
      <hr className="my-8" />
      <div className="gap-4 flex mb-8">
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
    </footer>
  );
};

export default Footer;
