
// ===================================
// TRADUCCIONES ESPAÑOL E INGLÉS
// ===================================

const translations = {

    es: {
        title: "¡Bienvenidos a mi página!",
        about: "Sobre mí",
        project: "Mi proyecto de vida",

        description:
            "Me llamo Keiry Yuliana Moreno Bedoya, nací el 2 de abril de 2011. Actualmente tengo 15 años y de grande quiero trabajar en negocios internacionales. Me gusta entrenar vóley, casi no salgo, mi comida favorita es la hamburguesa y me gusta la plata. Me gusta compartir con mis papás, tengo 2 hermanos y me gusta el color azul y los animales.",

        projectDescription:
            "Mi proyecto de vida es estudiar, salir adelante, cumplir mis sueños y trabajar en negocios internacionales. Quiero esforzarme para tener un buen futuro y hacer sentir orgullosa a mi familia.",

        footer: "© 2026 - Keiry Moreno"
    },

    en: {
        title: "Welcome to my website!",
        about: "About me",
        project: "My life project",

        description:
            "My name is Keiry Yuliana Moreno Bedoya. I was born on April 2, 2011. I am currently 15 years old, and when I grow up I want to work in international business. I like playing volleyball, I don't go out very often, my favorite food is hamburgers, and I like money. I enjoy spending time with my parents, I have 2 siblings, and I like the color blue and animals.",

        projectDescription:
            "My life project is to study, succeed, achieve my dreams, and work in international business. I want to work hard to have a good future and make my family proud.",

        footer: "© 2026 - Keiry Moreno"
    }

};


// ===================================
// SELECCIONAR ELEMENTOS HTML
// ===================================

const title = document.querySelector(".title");

const aboutTitle = document.querySelector("#about-title");
const aboutDescription = document.querySelector("#about-description");

const projectTitle = document.querySelector("#project-title");
const projectDescription = document.querySelector("#project-description");

const navAbout = document.querySelector("#nav-about");
const navProject = document.querySelector("#nav-project");

const footer = document.querySelector("footer p");

const languageButtons = document.querySelectorAll(".lang-button");


// ===================================
// FUNCIÓN PARA CAMBIAR EL IDIOMA
// ===================================

function changeLanguage(language) {

    const text = translations[language];

    if (!text) return;

    // Traducir encabezado
    title.textContent = text.title;

    // Traducir sección sobre mí
    aboutTitle.textContent = text.about;
    aboutDescription.textContent = text.description;

    // Traducir proyecto de vida
    projectTitle.textContent = text.project;
    projectDescription.textContent = text.projectDescription;

    // Traducir menú
    navAbout.textContent = text.about;
    navProject.textContent = text.project;

    // Traducir pie de página
    footer.textContent = text.footer;

    // Activar botón seleccionado
    languageButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.lang === language
        );

    });

    // Guardar idioma seleccionado
    localStorage.setItem("language", language);

    // Actualizar idioma del documento
    document.documentElement.lang = language;

}


// ===================================
// EVENTOS DE LOS BOTONES
// ===================================

languageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const language = button.dataset.lang;

        changeLanguage(language);

    });

});


// ===================================
// CARGAR IDIOMA GUARDADO
// ===================================

const savedLanguage = localStorage.getItem("language") || "es";

changeLanguage(savedLanguage);


// ===================================
// ANIMACIÓN DE LOS ENLACES
// ===================================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        link.classList.add("clicked");

        setTimeout(() => {
            link.classList.remove("clicked");
        }, 300);

    });

});
