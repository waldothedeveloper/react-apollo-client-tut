import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const BACKEND_DATA = gql`
  {
    # books {
    #   title
    #   author
    # }

    tickets {
      title
      description
    }
  }
`;

export default function ExchangeRates() {
  const { loading, error, data } = useQuery(BACKEND_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <>{JSON.stringify(data, null, 2)}</>;
}
