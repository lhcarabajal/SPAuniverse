import { Router } from "./router.js";

const router = new Router();
// Usando orientação a objetos para mapear as rotas
router.add("/home", "/pages/home.html");
router.add("/universo", "/pages/ouniverso.html");
router.add("/exploracao", "/pages/exploracao.html");

// Usando Object literals para mapear as rotas
// const routes = {
//   "/home": "/pages/home.html",
//   "/universo": "/pages/ouniverso.html",
//   "/exploracao": "/pages/exploracao.html",
// };

// Chamando a função
router.handle();

// Método para que possa usar a seta para voltar a página anterior
window.onpopstate = () => router.handle();
// Fazendo com que o HTML seja lido chamando a função route()
window.route = () => router.route();
