import React from "react";
import Navbar from "./components/Navbar";
import Organization from "./components/Organization";
import Leftbar from "./components/Leftbar";
import RightOne from "./components/RightOne.jsx";
import RightTwo from "./components/RightTwo.jsx";
import RightThree from "./components/RightThree.jsx";
import RightFour from "./components/RightFour.jsx";
import RightFive from "./components/RightFive.jsx";
const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Organization />
      <div className="lg:pl-[100px]">
        <div className="lg:flex lg:flex-row md:flex md:flex-row">
          <Leftbar />
          <RightOne />
        </div>
        <RightTwo />
        <RightThree />
        <RightFour />
        <RightFive />
      </div>
    </div>
  );
};
export default App;
