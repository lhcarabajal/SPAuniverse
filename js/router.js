export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    // Aqui estou fazendo com que ao clicar no link acesse a página correta
    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname];

    // Métodos para que seja lido o HTML da página ao clicar no link
    fetch(route)
      .then(function (data) {
        return data.text();
      })
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
