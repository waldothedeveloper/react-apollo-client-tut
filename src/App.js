import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import ExchangeRates from "./ExchangeRates";

const client = new ApolloClient({
  uri: "http://127.0.0.1:4000"
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
