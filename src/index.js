import React from "react";
import ReactDOM from "react-dom";
import "./static/index.css";
import Ingredients from "./pages/Ingredients/";
import Dashboard from "./pages/Dashboard/";
import Recipes from "./pages/Recipes/";
import RecipesByCuisine from "./pages/Recipes/RecipesByCuisine";
import { BrowserRouter, Route } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Dashboard} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/ingredients" exact component={Ingredients} />
        <Route path="/recipes" exact component={Recipes} />
        <Route path="/recipes/by-cuisine" exact component={RecipesByCuisine} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
