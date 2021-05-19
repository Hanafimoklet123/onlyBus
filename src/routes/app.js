import { AnimatedSwitch } from "react-router-transition";
import { Redirect, Route, Switch } from "react-router-dom";
import { PublicRoute } from "../component/PublicRoute";
import { Login } from "../pages/Login/Login";
import { App } from "../pages/App/App";
import { Home } from "../pages/Home/Home";
import { Contact } from "../pages/Contact/Contact";
import { Tiket } from "../pages/Tiket/Tiket";

export const AppRoute = () => {
  return (
    <Switch>
      <Route path={"/app/home"}>
        <Home />
      </Route>
      <Route path={"/app/tiket"}>
        <Tiket />
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
