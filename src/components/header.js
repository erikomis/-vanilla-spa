import { onNavigate } from "../routes/link";

export const Header = document.createElement("header");

const div = document.createElement("div");
div.className = "header__content";

const h1 = document.createElement("h1");
h1.innerText = "My App";

const nav = document.createElement("nav");

const home = document.createElement("a");
home.href = "/home";
home.style.marginRight = "10px";

home.innerText = "Home";
home.onclick = onNavigate;

const login = document.createElement("a");
login.href = "/";
login.style.marginRight = "10px";
login.innerText = "Login";
login.onclick = onNavigate;

const register = document.createElement("a");
register.href = "/register";
register.innerText = "Register";
register.onclick = onNavigate;

nav.appendChild(home);
nav.appendChild(login);
nav.appendChild(register);

div.appendChild(h1);
div.appendChild(nav);

Header.appendChild(div);

Header.className = "header";
