import React from "react";

//Icons
import { VscLoading } from "react-icons/vsc";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <VscLoading className="animate-spin text-2xl text-white" />
    </div>
  );
};

export default Loading;
