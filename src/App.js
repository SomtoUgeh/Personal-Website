import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ThemedWrapper from "./components/ThemedWrapper";
import AOS from "aos";
import "aos/dist/aos.css";
import CoolTests from "./components/tests/tests";

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
      delay: 500
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ThemedWrapper} />
          <Route exact path="/components" component={CoolTests} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
