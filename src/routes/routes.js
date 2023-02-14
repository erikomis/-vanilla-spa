import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export const routes = [
  {
    path: "/home",
    component: Home,
    exact: true,
    protect: {
      isAuth: true,
      redirect: "/",
    },
  },
  {
    path: "/register",
    component: Register,
    exact: true,
  },
  {
    path: "/",
    component: Login,
    exact: true,
  },
  {
    component: {
      render: () => {
        const div = document.createElement("div");
        div.innerText = "Página não encontrada";
        return div;
      },
    },
  },
];
