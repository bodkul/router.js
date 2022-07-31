let routes = {};

route("/", () => '<h1>Home</h1><a href="/about">About</a>');

route("/about", () => '<h1>About</h1><a href="/">Home</a>');

function route(path, template) {
    return routes[path] = template;
}

function router() {
    const app = document.getElementById("app");
    
    let url = window.location.pathname;
    let route = resolveRoute(url);

    app.innerHTML = route();

    function resolveRoute(route) {
        try {
            return routes[route];
        } catch (e) {
            throw new Error(`Route ${route} not found`);
        }
    }
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);