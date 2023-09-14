import React, { useEffect, useState } from "react";

//Components
import List from "../Components/List";
import Detail from "../Components/Detail";
import NotFound from "../Components/NotFound";

const Content = ({ data, input, group }) => {
  const [selectedCountry, setSelectedCountry] = useState(10);

  const limitFilteredData = (data, group) => {
    if (group === "all") {
      return data;
    } else if (!isNaN(parseInt(group))) {
      const limit = parseInt(group);
      return data.slice(0, limit);
    } else {
      return data;
    }
  };

  const filteredData = limitFilteredData(
    data?.countries.filter((country) => {
      return (
        country.native?.toLowerCase().includes(input.toLowerCase()) ||
        country.name?.toLowerCase().includes(input.toLowerCase()) ||
        country.capital?.toLowerCase().includes(input.toLowerCase()) ||
        country.continent?.name?.toLowerCase().includes(input.toLowerCase()) ||
        country.languages?.some((language) =>
          language.name?.toLowerCase().includes(input.toLowerCase())
        )
      );
    }),
    group // Pass the group value to the limitFilteredData function
  );

  useEffect(() => {
    if (filteredData.length === 0) setSelectedCountry(0);
    if (filteredData.length < 10) setSelectedCountry(filteredData.length);
    if (filteredData.length >= 10) setSelectedCountry(10);
  }, [input, group]);

  if (filteredData.length === 0) return <NotFound />;

  return (
    <div className="flex gap-4 md:gap-10">
      <div className="w-1/2 md:w-2/3">
        <List
          countries={filteredData}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      </div>
      <div className="w-1/2 md:w-1/3 relative">
        {selectedCountry !== 0 && (
          <Detail country={filteredData[selectedCountry - 1]} />
        )}
      </div>
    </div>
  );
};

export default Content;
