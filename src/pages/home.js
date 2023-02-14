import { Header } from "../components/header.js";
import { Table } from "../components/table.js";
import { isAuthecation } from "../utils/isAuthecation.js";


export const Home = document.createElement("div");

const divContent = document.createElement("div");
divContent.className = "home__content";

const h1 = document.createElement("h1");
h1.innerText = "Home";

const p = document.createElement("p");

p.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
  euismod, nisl sed lacinia ultrices, nisl nisl aliquet mauris, eget
  aliquet nisl nunc eget nisl. Donec euismod, nisl sed lacinia ultrices,
  nisl nisl aliquet mauris, eget aliquet nisl nunc eget nisl. Donec`;

divContent.appendChild(Header);
divContent.appendChild(h1);

divContent.appendChild(p);

let quantidade = 10;
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data = data.splice(0, quantidade);
    divContent.appendChild(Table(data));
  });

const pagination = document.createElement("div");
pagination.className = "pagination";
pagination.style.display = "flex";
pagination.style.justifyContent = "center";
pagination.style.marginBottom = "20px";

const button = document.createElement("button");
button.innerText = "Proxima pagina";
button.addEventListener("click", () => {
  quantidade = quantidade + 10;
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      const table = document.querySelector("table");
      table.remove();

      let valorInicial = quantidade > 10 ? quantidade - 10 : 0;

      valorInicial = valorInicial === 100 ? valorInicial - 10 : valorInicial;

      quantidade = quantidade <= 100 ? quantidade : quantidade - 10;
      data = data.slice(valorInicial, quantidade);

      divContent.appendChild(Table(data));
    });
});

const button2 = document.createElement("button");
button2.innerText = "Voltar pagina";
button2.addEventListener("click", () => {
  quantidade = quantidade - 10;
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())

    .then((data) => {
      let valorInicial = quantidade > 10 ? quantidade - 10 : 0;

      valorInicial = valorInicial === 100 ? valorInicial - 10 : valorInicial;

      quantidade = quantidade === 0 ? quantidade + 10 : quantidade;

      data = data.slice(valorInicial, quantidade);

      divContent.appendChild(Table(data));

      const table = document.querySelector("table");
      table.remove();
    });
});

button2.style.marginLeft = "10px";
button2.style.marginRight = "10px";
pagination.appendChild(button2);
pagination.appendChild(button);

divContent.appendChild(pagination);

Home.appendChild(divContent);
