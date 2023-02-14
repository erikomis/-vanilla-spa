import "./styles/style.css";
import { routes } from "./routes/routes";

const app = document.getElementById("app");

const route = (path) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const route = routes.find((route) => route.path === path);

  if (route?.protect && token && user) {
    if (route.protect.isAuth) {
      app.innerHTML = "";
      app.appendChild(route.component);
    } else {
      window.location.href = route.protect.redirect;
    }
  }
  if (route) {
    app.innerHTML = "";
    app.appendChild(route.component);
  }

  if (!route) {
    app.innerHTML = "";
    app.appendChild(routes[3].component.render());
  }
};

export const onPopState = () => {
  route(window.location.pathname);
};

//usar rota  observar o evento click
route(window.location.pathname);
window.addEventListener("popstate", onPopState);
