const routes = {
    "": "home-page",
    "#home": "home-page",
    "#projects": "projects-page"
};

function handleLoadNewPage() {
    unloadPageContent();
    loadNewPageContent();
}

function unloadPageContent() {
    document.querySelectorAll(".page").forEach(page => {
        if (!page.classList.contains("hidden")) {
            page.classList.add("hidden");
        }
    });
}

function loadNewPageContent() {
    const pageName = routes[location.hash];

    const page = document.getElementById(pageName);
    if (!page) {
        console.error("Unable to load page, invalid page name: ", pageName);
        return;
    }

    page.classList.remove("hidden");

    updateActiveNavTab();
}

function updateActiveNavTab() {
    document.querySelectorAll(".nav-tab").forEach(tab => {
        if (tab.getAttribute("href") === location.hash) {
            tab.classList.add("active-nav-tab");
        } else {
            tab.classList.remove("active-nav-tab");
        }
    });
}

window.addEventListener("hashchange", handleLoadNewPage);

loadNewPageContent("home-page");