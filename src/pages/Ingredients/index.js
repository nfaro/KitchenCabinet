import React from "react";
import { Link } from "react-router-dom";
import { Header, SideNav } from "../../components";

const SIDENAV_COMPONENTS = [
  {
    name: "My Ingredients",
    link: "/ingredients/my-ingredients",
    key: "myingredients",
  },
  {
    name: "Find Ingredients",
    link: "/ingredients/find-ingredients",
    key: "findingredients",
  },
];

export default function Ingredients() {
  return (
    <div>
      <Header pageTitle="ingredients" />
      <SideNav props={SIDENAV_COMPONENTS} />
      <div>Hello!</div>
    </div>
  );
}
