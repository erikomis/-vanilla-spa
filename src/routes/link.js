export const onNavigate = (event) => {
  console.log(event)
  event.preventDefault();
  const { pathname } = event.target;
  window.history.pushState({}, pathname, window.location.origin + pathname);
  const navEvent = new PopStateEvent("popstate");
  dispatchEvent(navEvent);
}

// criar função para navegar entre as rotas
// export const onNavigate = (path) => {
//   window.history.pushState({}, path, window.location.origin + path);
//   route(path);
// }

// criar função para escutar o evento popstate
export const onPopState = () => {
  route(window.location.pathname);
}

// criar função para escutar o evento click
export const onClick = (event) => {
  event.preventDefault();
  onNavigate(event.target.pathname);
}

// criar função para escutar o evento submit  
export const onSubmit = (event) => {
  event.preventDefault();
  onNavigate(event.target.pathname);
}

// criar função para escutar o evento submit  
export const onInput = (event) => {
  event.preventDefault();
  onNavigate(event.target.pathname);
}

// criar função para escutar o evento submit  
export const onChange = (event) => {
  event.preventDefault();
  onNavigate(event.target.pathname);
}


