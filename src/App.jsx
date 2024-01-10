import React from "react";
import { Header } from "./components/Header/Header";
import { Compass, Footer } from "./components";

export const App = () => {
  return (
    <div>
      <Header />
      <Compass />
      <Footer />
    </div>
  );
};

export default App;
