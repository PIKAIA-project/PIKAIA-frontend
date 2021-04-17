import React from "react";
import Shimmer from "../../Skeleton/Shimmer";
import SkeletonElement from "../../Skeleton/SkeletonElement";
import "../../Skeleton/Skeletons.css";

function emotionSkeleton() {
  return (
    <div className="skeleton-wrapper">
      <SkeletonElement type="text" />
      <Shimmer />
    </div>
  );
}

export default emotionSkeleton;
