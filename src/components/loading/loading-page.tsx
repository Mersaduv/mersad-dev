import { Box, Skeleton } from "@mui/material";

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
      <Skeleton width={200} />

      {/* <Skeleton variant="rectangular" width={210} height={118} /> */}
    </Box>
  );
};

const renderSkeletonBoxSecond = () => {
  return (
    <Box
      sx={{
        marginTop: 4,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Skeleton width={200} />

      <Skeleton variant="rectangular" width="90%" height={600} />
    </Box>
  );
};

export const LoadingDescriptionsSection = () => {
  return (
    <Box component="div" className="grid gap-8 w-full ">
      {Array.from({ length: 1 }).map((_, index) => (
        <div key={index}>{renderSkeletonBoxSecond()}</div>
      ))}
    </Box>
  );
};

export const LoadingDetailsSection = () => {
  return (
    <Box component="div" className="grid gap-8 w-full ">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index}>{renderSkeletonBox()}</div>
      ))}
    </Box>
  );
};
