import React from "react";

//Components
import Layout from "./Layouts/Layout";

const App = () => {
  return (
    <div className="min-h-screen bg-grad">
      <div className="max-w-5xl py-10 md:py-20 px-4 mx-auto flex justify-center flex-col">
        <Layout />
      </div>
    </div>
  );
};

export default App;
