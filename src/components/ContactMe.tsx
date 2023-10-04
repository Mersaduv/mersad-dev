import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
// icons
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}
export default function ContactMe({ isOpen, setIsOpen }: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen((prev) => !prev)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Contact Me
                </Dialog.Title>
                <div className="my-8 flex gap-8 flex-wrap">
                  <div className="flex items-center gap-2">
                    <BsInstagram />{" "}
                    <a
                      className="text-blue-600"
                      href="https://instagram.com/mersad_dev"
                    >
                      instagram.com/mersad_dev
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <AiOutlineMail />{" "}
                    <a
                      className="text-blue-600"
                      href="mersadkarimi001@gmail.com"
                    >
                      mersadkarimi001@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <AiFillLinkedin />{" "}
                    <a
                      className="text-blue-600"
                      href="https://www.linkedin.com/in/mersadkarimi"
                    >
                      www.linkedin.com/in/mersadkarimi
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <AiFillGithub />{" "}
                    <a
                      className="text-blue-600"
                      href="https://github.com/Mersaduv"
                    >
                      github.com/Mersaduv
                    </a>
                  </div>
                </div>

                <div className="mt-4 flex justify-between ">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    Got it
                  </button>
                  <button
                    type="button"
                    className="inline-flex outline-double justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    Get resume
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
