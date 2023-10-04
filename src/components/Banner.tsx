
import SmileGrid from "./SmileGrid";
// import Logo from "../static/banner.png";
const styles = {
  accentedButton:
    "bg-black text-white hover:outline rounded-full py-2 px-12 text-xl ",
  content:
    "flex-1 xs:mt-16 mt-24 flex flex-col-reverse gap-y-12 xs:flex-row xs:gap-2 items-center justify-between max-w-screen-2xl",
  wrapper:
    "h-max-[10rem]  xs:min-h-[650px] overflow-auto relative flex items-center justify-center bg-[#38bdf8] px-10",
};
const Banner = ({ onClicked }: { onClicked: () => void }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className="space-y-4 flex-[3] mb-5">
          <h1 className="max-w-xl text-5xl lg:text-7xl font-mediumSerif">
            Find your upgraded version.
          </h1>
          <h3 className="text-2xl pb-4">
            Don't look for a road map and course because you are going to have
            everything here for free.
          </h3>
          <button onClick={onClicked} className={styles.accentedButton}>
            Get started
          </button>
        </div>
        <SmileGrid />
      </div>
    </div>
  );
};

export default Banner;
