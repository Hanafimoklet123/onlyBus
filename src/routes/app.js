import { AnimatedSwitch } from "react-router-transition";
import { Redirect, Route, Switch } from "react-router-dom";
import { PublicRoute } from "../component/PublicRoute";
import { Login } from "../pages/Login/Login";
import { App } from "../pages/App/App";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";

export const AppRoute = () => {
  return (
    <Switch>
      <Route path={"/app/home"}>
        <Home />
      </Route>
      <Route path={"/app/about"}>
        <About />
      </Route>
      <Route path={"/app/contact"}>
        <Contact />
      </Route>
      <Route path="/app" exact>
        <Redirect to={"/app/home"} />
      </Route>
    </Switch>
  );
  // <About/>
};
