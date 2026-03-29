import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Cambiar el título de la pestaña
    document.title = "NEXA — Tu inmobiliaria trabaja sola 24h";

    // Cambiar la meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "¿Sientes que pasas más tiempo respondiendo mensajes y organizando papeles que cerrando ventas? En NEXA, hacemos que tu negocio trabaje para ti, y no al revés."
      );
    }

    // Cambiar meta author
    const metaAuthor = document.querySelector("meta[name='author']");
    if (metaAuthor) {
      metaAuthor.setAttribute("content", "NEXA");
    }

    // Cambiar Open Graph / Facebook
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute("content", "NEXA Inmobiliary Intelligence — Tu inmobiliaria trabaja sola 24h");
    }
    const ogDescription = document.querySelector("meta[property='og:description']");
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "¿Sientes que pasas más tiempo respondiendo mensajes y organizando papeles que cerrando ventas? En NEXA, hacemos que tu negocio trabaje para ti, y no al revés."
      );
    }
    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) {
      ogImage.setAttribute("content", "https://ibb.co/LXddy16J");
    }

    // Cambiar Twitter
    const twitterTitle = document.querySelector("meta[name='twitter:title']");
    if (twitterTitle) {
      twitterTitle.setAttribute("content", "NEXA Inmobiliary Intelligence — Tu inmobiliaria trabaja sola 24h");
    }
    const twitterDescription = document.querySelector("meta[name='twitter:description']");
    if (twitterDescription) {
      twitterDescription.setAttribute(
        "content",
        "¿Sientes que pasas más tiempo respondiendo mensajes y organizando papeles que cerrando ventas? En NEXA, hacemos que tu negocio trabaje para ti, y no al revés."
      );
    }
    const twitterImage = document.querySelector("meta[name='twitter:image']");
    if (twitterImage) {
      twitterImage.setAttribute("content", "https://ibb.co/LXddy16J");
    }
  }, []);

  return (
    <div>
      {/* Aquí va el resto de tu app */}
      <h1>Bienvenido a NEXA</h1>
    </div>
  );
}

export default App;