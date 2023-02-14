export function Input(type, placeholder, value, style) {
  const input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;
  input.value = value;
  input.className = style;

  return input;
}