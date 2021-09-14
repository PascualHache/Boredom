import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import LayoutLogin from "./layouts/LayoutLogin/LayoutLogin";
import LayoutDashboard from "./layouts/LayoutDashboard/LayoutDashboard";
import { GlobalStyle } from "./App.style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={LayoutLogin}>
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={LayoutLogin}>
          {localStorage.getItem("userName") && <Redirect to="/dashboard" />}
        </Route>
        <Route exact path="/dashboard" component={LayoutDashboard} />
      </Switch>
    </div>
  );
}

export default App;
