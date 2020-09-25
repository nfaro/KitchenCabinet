import React from "react";
import { Link } from "react-router-dom";
import { Header, SideNav } from "../../components";

const SIDENAV_COMPONENTS = [
  { name: "Recipes by Cuisine", link: "/recipes/by-cuisine", key: "bycuisine" },
  {
    name: "Recipes by Ingredient",
    link: "/recipes/by-ingredient",
    key: "byingredient",
  },
  { name: "Saved Recipes", link: "/recipes/saved", key: "saved" },
  { name: "Custom Recipes", link: "/recipes/custom", key: "custom" },
];

export default function RecipesByCuisine() {
  return (
    <div>
      <Header pageTitle="recipes" />
      <SideNav props={SIDENAV_COMPONENTS} />
      <div> Hellooooo! </div>
    </div>
  );
}
