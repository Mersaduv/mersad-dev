import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { BsXLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { menuItems } from "../constant/paths";


interface Props {
  isShowMenu: boolean;
  setIsShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}


const DrawerMenu = ({ isShowMenu, setIsShowMenu }: Props) => {
  return (
    <div>
      <Transition.Root show={isShowMenu} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setIsShowMenu}
        >
          {/*  opacity the screen for showing the menu */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          {/* menu */}
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-[250px] flex-col overflow-y-auto bg-white  shadow-xl">
                {/* close button */}
                <div className="flex flex-row-reverse px-4 pt-5 pb-2">
                  <BsXLg onClick={() => setIsShowMenu(false)} />
                </div>

                {/* Links */}
                <ul className="flex flex-col space-y-6 mt-12 ">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="relative group"
                      onClick={() => setIsShowMenu(false)}
                    >
                      <Link className="inline-block w-full p-3 " to={item.path}>
                        {item.name}
                      </Link>
                      <div className="absolute left-0 bottom-0 w-full h-1 bg-gray-300 transition-transform duration-500 ease-in-out transform translate-x-full group-hover:translate-x-0"></div>
                    </li>
                  ))}
                </ul>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default DrawerMenu;
