export function isAuthecation() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (token && user) {
    return true;
  }
  return false;
}
