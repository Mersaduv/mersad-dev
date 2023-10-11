import { useEffect, useState } from "react";
import ContactMe from "../ContactMe";
import { menuItems } from "../../constant/paths";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../constant/routes";
const styles = {
  wrapper:
    "flex z-30 border-b border-black justify-center py-3 px-4 Header fixed top-0",
  content: "flex flex-1 justify-between  max-w-screen-2xl",
  logoContainer: "flex items-center flex-start",
  logo: "cursor-pointer object-contain ml-5",
  bannerNav: "flex cursor-pointer gap-6 items-center",
  accentedButton:
    "bg-black hover:outline button-header text-white rounded-full py-2 px-4 text-md",
};
const Navbar = () => {
  const location = useLocation();
  const [shouldHandleScroll, setShouldHandleScroll] = useState<boolean>(false);
  useEffect(() => {
    const header = document.querySelector(".Header");
    const buttonHeader = document.querySelector(".button-header");

    if (location.pathname === "/") {
      header?.classList.remove("about-class");
      header?.classList.remove("register-class");
      header?.classList.remove("why-free-class");
      header?.classList.remove("scrolled");
      buttonHeader?.classList.remove("scrolled");
      setShouldHandleScroll(true);
    } else if (location.pathname === "/about") {
      header?.classList.remove("register-class");
      header?.classList.remove("why-free-class");
      header?.classList.add("about-class");
      header?.classList.remove("scrolled");
      buttonHeader?.classList.remove("scrolled");
      setShouldHandleScroll(false);
    } else if (location.pathname === "/new-course") {
      header?.classList.remove("why-free-class");
      header?.classList.add("register-class");
      header?.classList.remove("scrolled");
      buttonHeader?.classList.remove("scrolled");
      setShouldHandleScroll(false);
    } else if (location.pathname === "/why-free") {
      header?.classList.add("why-free-class");
      header?.classList.remove("scrolled");
      buttonHeader?.classList.remove("scrolled");
      setShouldHandleScroll(false);
    }
  }, [location]);

  useEffect(() => {
    const header = document.querySelector(".Header");
    const buttonHeader = document.querySelector(".button-header");

    const handleScroll = () => {
      if (!shouldHandleScroll) return;
      if (window.scrollY > 150) {
        header?.classList.add("scrolled");
        buttonHeader?.classList.add("scrolled");
      } else {
        setShouldHandleScroll(true);
        header?.classList.remove("scrolled");
        buttonHeader?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldHandleScroll]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          {/* Logo  */}
          <Link to={routes.HOME} className="font-semibold text-3xl  flex">
            <div className="">Mersad</div> -{" "}
            <div className="font-bold">Dev</div>
          </Link>
        </div>
        <div className={styles.bannerNav}>
          {menuItems.map((item) => {
            return (
              <Link
                key={item.name}
                to={item.path}
                className="hover:underline py-4 hidden sm:block"
              >
                {item.name}
              </Link>
            );
          })}
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={styles.accentedButton}
          >
            Contact
          </div>
          <ContactMe isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
