import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./containers/Home/Home")),
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./containers/Register/Register")),
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./containers/Login/Login")),
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() => import("./containers/Contacts/Contacts")),
  },
];
