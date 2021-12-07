import { useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import API from "./components/API/API";
import APIcreateForm from "./components/API/APICreateForm";
import Header from "./components/Header";
import SideBar from "./components/NavBar/SideBar";

function App() {
  const [sideBar, showSideBar] = useState(true);
  const hideSideBar = () => {
    showSideBar(!sideBar);
  };

  return (
    <div className="App">
      <Header
       sideBar={sideBar}
      />
      <SideBar onChangeSideBar={hideSideBar} sideBar={sideBar} />
      <div className={`wrapper ${sideBar ? "wrapperWithSideBar" : "wrapperWithoutSideBar"}`}>
        <Switch>
          <Route path="/create-api">
            <APIcreateForm />
          </Route>
          <Route path="/api">
            <API></API>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
