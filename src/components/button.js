export function Button(type, text, onClick) {
  const button = document.createElement("button");
  button.type = type;
  button.innerText = text;
  button.onclick = onClick;
  return button;
}
