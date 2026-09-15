export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(
        `<!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Sport Social</title>
        </head>
        <body>
          <h1>⚽ Sport Social</h1>
          <p>Bienvenue sur ton réseau social sportif.</p>
        </body>
        </html>`,
        {
          headers: {
            "content-type": "text/html;charset=UTF-8"
          }
        }
      );
    }

    return new Response("Page non trouvée", { status: 404 });
  }
};
