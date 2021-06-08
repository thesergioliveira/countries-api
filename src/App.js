import React, { useState, useEffect, Fragment} from "react";
import Loading from "./components/Loading";
import Country from "./components/Country";


function App() {
  return (
    <React.Fragment>
      <Loading/>
      <Country/>
    </React.Fragment>
  );
}

export default App;
