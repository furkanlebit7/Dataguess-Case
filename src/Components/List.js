import React, { useEffect } from "react";

//Components
import ListItem from "./ListItem";

const List = ({ countries, selectedCountry, setSelectedCountry }) => {
  return (
    <div className="flex flex-col gap-4">
      {countries.map((country, index) =>
        index + 1 === selectedCountry ? (
          <ListItem
            selectedCountry={selectedCountry}
            country={country}
            key={index}
            index={index}
            selected={true}
            setSelectedCountry={setSelectedCountry}
          />
        ) : (
          <ListItem
            selectedCountry={selectedCountry}
            country={country}
            index={index}
            key={index}
            setSelectedCountry={setSelectedCountry}
          />
        )
      )}
    </div>
  );
};

export default List;
