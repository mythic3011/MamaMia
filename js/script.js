function toggleClass(selector, className) {
    const element = document.querySelector(selector);
    element.addEventListener("click", () => {
        element.classList.toggle(className);
    });
}

toggleClass(".right-toolbar-button", "show");
toggleClass(".left-toolbar-button", "show");
toggleClass(".menu-button", "show");

// add navbar menu to html
function addNavbarMenuToHtml() {
    const navbarMenuHtml = document.createElement("div");
    navbarMenuHtml.classList.add("navbar-menu");
    navbarMenuHtml.innerHTML = `
        <div class="navbar-menu-div">
        <button class="navbar-home-button">
        <a href="index.html">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             class="bi bi-house" viewBox="0 0 16 16">
            <path d="M4 13.5V2H2v3H0v9h3v3h13v-3h3v-9h-3zM6.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3.5a.5.5 0 0 1 .5-.5zm0 1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0V3.5a.5.5 0 0 0-.5-.5z"/>
            <path d="M10.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3.5a.5.5 0 0 1 .5-.5zm0 1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0V3.5a.5.5 0 0 0-.5-.5z"/>
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3.5a.5.5 0 0 1 .5-.5zm0 1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0V3.5a.5.5 0 0 0-.5-.5z"/>
        </svg>
        </a>
        <button class="navbar-menu-button">
        <a href="menu.html">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             class="bi bi-list" viewBox="0 0 16 16">
            <path d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </a>
        </button>
        <button class="navbar-about-button">
        <a href="about.html">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M5.25 5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3z"/>
            <path d="M2.5 2.5A.5.5 0 0 1 3 2h8a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0 4A.5.5 0 0 1 3 7h8a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0 4A.5.5 0 0 1 3 12h8a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </a>
        </button>
        <button class="navbar-menu-contact-button">
        <a href="contact.html">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             class="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2z"/>
        </svg>
        </a>
        </button>
        </div>
        `;
    navbarMenuHtml.classList.add("navbar-menu");
}
