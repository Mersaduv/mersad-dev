import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const renderSkeletonBox = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: 2,
      }}
    >
      <Skeleton
        animation="wave"
        variant="circular"
        sx={{ marginTop: 0.5 }}
        width={20}
        height={20}
      />
      <Box sx={{ width: "100%" }}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Box>
    </Box>
  );
};

const renderSkeletonBoxSecond = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: 2,
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Box>

      <Skeleton variant="rectangular" width={210} height={118} />
    </Box>
  );
};

export const LoadingHome = () => {
  return (
    <Box
      component="div"
      className="grid gap-8 grid-cols-1 sm:grid-cols-2 md2:grid-cols-3 "
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index}>{renderSkeletonBox()}</div>
      ))}
    </Box>
  );
};

export const LoadingHomeAllCoursesSection = () => {
  return (
    <Box component="div" className="grid gap-8 w-full lg:max-w-[80%] ">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index}>{renderSkeletonBoxSecond()}</div>
      ))}
    </Box>
  );
};
