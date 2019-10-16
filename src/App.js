import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import ExchangeRates from "./ExchangeRates";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

function App() {
  return (
    <div className='App'>
      <ApolloProvider client={client}>
        <ExchangeRates />
      </ApolloProvider>
    </div>
  );
}

export default App;
