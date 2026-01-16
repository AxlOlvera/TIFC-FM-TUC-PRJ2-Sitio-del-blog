function incluirComponente(id, archivo) {
    fetch(archivo)
        .then(response => {
            if (response.ok) return response.text();
            throw new Error(`Error al cargar ${archivo}`);
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
    incluirComponente("nav-placeholder", "nav.html");
    incluirComponente("about-placeholder", "about.html");
    incluirComponente("contact-placeholder", "contact.html");
    incluirComponente("footer-placeholder", "footer.html");
});