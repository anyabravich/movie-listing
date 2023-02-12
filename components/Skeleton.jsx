import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      viewBox="0 0 282 480"
      backgroundColor="#20283E"
      foregroundColor="rgba(32, 40, 62, 0.5)"
      {...props}
    >
      <rect x="0" y="0" rx="12" ry="12" width="100%" height="100%" />
    </ContentLoader>
  );
};

export default Skeleton;
