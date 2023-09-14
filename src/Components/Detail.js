import React from "react";

const Detail = ({ country }) => {
  return (
    <div className="glass p-2 px-3 rounded-md flex flex-col sticky top-10 text-sm font-semibold gap-2 text-white">
      <p className="self-center text-lg font-semibold leading-3 ">
        {country?.name} <span className="text-sm">({country?.emoji})</span>
      </p>
      {/* <p className="self-center text-xs font-bold">(Tanzania)</p> */}
      <p className="mt-5">
        <span className="font-bold mr-1">Native : </span>
        <span>{country?.native}</span>
      </p>
      <p>
        <span className="font-bold mr-1">Capital : </span>
        <span>{country?.capital}</span>
      </p>
      <p>
        <span className="font-bold mr-1">Currency : </span>
        <span>{country?.currency}</span>
      </p>
      <p>
        <span className="font-bold mr-1">Language(s) : </span>
        {country?.languages.map((language, index) =>
          index === 0 ? (
            <span className="font-medium" key={index}>
              {language?.name}
            </span>
          ) : (
            <span className="font-medium" key={index}>
              , {language?.name}
            </span>
          )
        )}
      </p>
      <p>
        <span className="font-bold mr-1">Continent : </span>
        <span>{country?.continent?.name}</span>
      </p>
      <p>
        <span className="font-bold mr-1">Phone : </span>
        <span>{country?.phone}</span>
      </p>
    </div>
  );
};

export default Detail;
