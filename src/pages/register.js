import { Input } from "../components/input";
import { Button } from "../components/button";
import { onNavigate } from "../routes/link";
import { isAuthecation } from "../utils/isAuthecation";



export const Register = document.createElement("div");
Register.className = "register";

const divContent = document.createElement("div");
divContent.className = "register__content";

const form = document.createElement("form");

const divGroup = document.createElement("div");

const labelName = document.createElement("label");
labelName.for = "name";
labelName.innerText = "Nome";

const inputName = Input("text", "name", "", "input-name");

const divGroup2 = document.createElement("div");

const labelEmail = document.createElement("label");

labelEmail.for = "email";

labelEmail.innerText = "Email";

const inputEmail = Input("text", "email", "", "input-email");

const divGroup3 = document.createElement("div");

const labelPassword = document.createElement("label");

labelPassword.for = "password";

labelPassword.innerText = "Password";

const inputPassword = Input("password", "password", "", "input-password");

const div = document.createElement("div");

const a = document.createElement("a");

a.href = "/login";

a.innerText = "Já tem conta? Faça login";

a.onclick = onNavigate;

const div2 = document.createElement("div");

const button = Button("submit", "register");

const aLogin = document.createElement("a");

aLogin.href = "/login";

aLogin.innerText = "Já tem conta? Faça login";

divGroup.appendChild(labelName);

divGroup.appendChild(inputName);

divGroup2.appendChild(labelEmail);

divGroup2.appendChild(inputEmail);

divGroup3.appendChild(labelPassword);

divGroup3.appendChild(inputPassword);

div.appendChild(a);

div2.appendChild(button);

form.appendChild(divGroup);

form.appendChild(divGroup2);

form.appendChild(divGroup3);

form.appendChild(div);

form.appendChild(div2);

divContent.appendChild(form);

Register.appendChild(divContent);

button.addEventListener("click", (event) => {
  event.preventDefault();

  const name = inputName.value;

  const email = inputEmail.value;

  const password = inputPassword.value;

  console.log(name, email, password);
});
