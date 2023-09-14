import React, { useState } from "react";

//Packages
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";

//Components
import Logo from "../Assets/Logo";
import Search from "../Components/Search";
import Loading from "../Components/Loading";
import Content from "./Content";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
      phone
      emojiU
      continent {
        name
        code
      }
    }
  }
`;

const Layout = () => {
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  const [input, setInput] = useState("");
  const [group, setGroup] = useState("All");

  return (
    <div>
      <Logo />
      <Search setInput={setInput} setGroup={setGroup} />

      {loading || error ? (
        <p>{error ? error.message : <Loading />}</p>
      ) : (
        <Content input={input} data={data} group={group} />
      )}
    </div>
  );
};

export default Layout;
