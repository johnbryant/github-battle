import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Battle from "../Battle/Battle";
import Popular from "../Popular/Popular";
import Search from "../Search/Search";
import Nav from "./Nav";
import NotFound from "./NotFound";
import { baseUrl } from "../../util/constant";

class App extends React.Component {
  render() {
    return (
      <Router basename={baseUrl}>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/battle" component={Battle} />
            <Route path="/popular" component={Popular} />
            <Route path="/search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
