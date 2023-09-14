import React from "react";

const ListItem = ({
  country,
  selected,
  setSelectedCountry,
  index,
  selectedCountry,
}) => {
  return (
    <div
      onClick={() => {
        if (index === selectedCountry - 1) {
          setSelectedCountry(0);
        } else {
          setSelectedCountry(index + 1);
        }
      }}
      className={`${
        selected ? "selected-glass" : "glass"
      } p-2 px-3 rounded-md text-white cursor-pointer hover:border-black`}
    >
      {country.name}
    </div>
  );
};

export default ListItem;
