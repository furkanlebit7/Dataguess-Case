import React from "react";
import { TbWorldX } from "react-icons/tb";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-xl text-white gap-3">
      <TbWorldX className="text-3xl" />
      <span>Country not found</span>
    </div>
  );
};

export default NotFound;
