import { ReactElement, useState } from "react";
import Header from "../Header";
import { BsArrowBarRight } from "react-icons/bs";
import DrawerMenu from "../DrawerMenu";
import Footer from "../Footer";

interface Props {
  children: ReactElement;
}

const Layout = ({ children }: Props) => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  return (
    <div className="flex flex-col h-full bg-white relative">
      <Header />
      {!isShowMenu && (
        <div
          onClick={() => setIsShowMenu(true)}
          className=" left-0 fixed top-24 text-white bg-black rounded-r-lg cursor-pointer text-2xl px-1 py-2 z-10 sm:hidden"
        >
          <BsArrowBarRight />
        </div>
      )}
      <DrawerMenu isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
