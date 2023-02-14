import { Input } from "../components/input.js";
import { Button } from "../components/button.js";
import { onNavigate } from "../routes/link";
import { isAuthecation } from "../utils/isAuthecation";



export const Login = document.createElement("div");

const divContent = document.createElement("div");
divContent.className = "login__content";

const form = document.createElement("form");
form.id = "form-login";
form.className = "form-login";

const divGroup = document.createElement("div");
divGroup.className = "form-group";

const labelEmail = document.createElement("label");
labelEmail.for = "exampleInputEmail1";
labelEmail.innerText = "Email address";

const inputEmail = Input("text", "email", "", "input-email");

const divGroup2 = document.createElement("div");
divGroup2.className = "form-group2";

const labelPassword = document.createElement("label");

labelPassword.for = "exampleInputPassword1";
labelPassword.innerText = "Password";

const inputPassword = Input("password", "senha", "", "input-password");

const div = document.createElement("div");
const a = document.createElement("a");
a.href = "/register";
a.innerText = "Não tem conta? Cadastre-se";
a.onclick = onNavigate;

const div2 = document.createElement("div");
const button = Button("submit", "login");

div.appendChild(a);
div2.appendChild(button);

divGroup.appendChild(labelEmail);
divGroup.appendChild(inputEmail);

divGroup2.appendChild(labelPassword);
divGroup2.appendChild(inputPassword);

form.appendChild(divGroup);
form.appendChild(divGroup2);
form.appendChild(div);
form.appendChild(div2);

divContent.appendChild(form);

Login.appendChild(divContent);

button.addEventListener("click", (event) => {
  event.preventDefault();

  const email = inputEmail.value;
  const senha = inputPassword.value;
  const div = document.createElement("div");
  div.className = "alert alert-danger";
  div.innerText = "Preencha todos os campos";
  div.style.backgroundColor = "red";

  const alert = document.querySelector(".alert");
  const alert2 = document.querySelector(".alert2");
  if (alert) {
    alert.remove();
  }

  if (alert2) {
    alert2.remove();
  }

  if (!email) {
    div.classList.add("alert");
    divGroup.appendChild(div);
  }

  if (!senha) {
    const error = document.createElement("div");
    error.className = "alert2 alert-danger";
    error.innerText = "Preencha todos os campos";
    error.style.backgroundColor = "red";

    divGroup2.appendChild(error);
    return;
  }
});
