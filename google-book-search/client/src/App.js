import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App () {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" Component={Search} />
          <Route exact path="/saved" Component={Saved} />
          <Route exact path="/saved/:id" component={Saved} />
          <Route Component = {NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
