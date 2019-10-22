import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const BACKEND_DATA = gql`
  {
    tickets {
      title
      description
      ticketNumber
    }
  }
`;

export default function GetTicket() {
  const { loading, error, data } = useQuery(BACKEND_DATA);
  const [ticket, setTicket] = React.useState("");

  console.log("ticket, ", ticket);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  function onChange(e) {
    setTicket(e.target.value);
  }

  function Submit(e) {
    e.preventDefault();
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <form onSubmit={Submit}>
        Search Ticket:{" "}
        <input
          value={ticket}
          placeholder='Search for a ticket'
          type='text'
          name='ticket'
          onChange={onChange}
        />
      </form>
      <div style={{ marginTop: "2rem" }}>{JSON.stringify(data, null, 2)}></div>
    </div>
  );
}
