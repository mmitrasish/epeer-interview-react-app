import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import PracticePage from "../pages/PracticePage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <App>
        <Route exact path="/" component={HomePage} />
        <Route path="/practice/:id" component={PracticePage} />
      </App>
    </Router>
  );
};
export default AppRouter;
