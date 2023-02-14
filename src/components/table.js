export function Table(itens) {
  const table = document.createElement("table");
  table.className = "table";

  const thead = document.createElement("thead");

  const tr = document.createElement("tr");

  const thId = document.createElement("th");

  thId.innerText = "Id";

  const thTitle = document.createElement("th");

  thTitle.innerText = "Title";

  const thBody = document.createElement("th");

  thBody.innerText = "Body";

  tr.appendChild(thId);

  tr.appendChild(thTitle);

  tr.appendChild(thBody);

  thead.appendChild(tr);

  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  itens.forEach((item) => {
    const tr = document.createElement("tr");

    const tdId = document.createElement("td");

    tdId.innerText = item.id;

    const tdTitle = document.createElement("td");

    tdTitle.innerText = item.title;

    const tdBody = document.createElement("td");

    tdBody.innerText = item.body;

    tr.appendChild(tdId);

    tr.appendChild(tdTitle);

    tr.appendChild(tdBody);

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);

  return table;
}
