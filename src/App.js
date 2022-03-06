import React from "react";
import CustomCard from "./commonComponents/card/Card";
import Header from "./commonComponents/header/Header";
import LandingPage from "./modules/landingPage/LandingPage";

function App() {
  return (
    <React.Fragment>
      {/* <LandingPage /> */}
      <Header />
      <LandingPage />
    </React.Fragment>
  );
}

export default App;
