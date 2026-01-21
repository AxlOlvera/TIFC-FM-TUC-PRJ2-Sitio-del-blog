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

const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const alertBtn = document.getElementById('successAlert');
    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('');

        alertPlaceholder.append(wrapper);
    };

    // 2. Evento de clic
    if (alertBtn) {
        alertBtn.addEventListener('click', () => {
            appendAlert('Mensaje Enviado', 'warning');
        });
    }