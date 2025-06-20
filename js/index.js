function handleLoadNewPage(templateName) {
    unloadPageContent();
    loadNewPageContent(templateName);
}

function unloadPageContent() {
    document.querySelectorAll(".page").forEach(page => {
        if (!page.classList.contains("hidden")) {
            page.classList.add("hidden");
        }
    });
}

function loadNewPageContent(templateName) {
    const template = document.getElementById(templateName);
    if (!template) {
        console.error("Template not found: ", templateName);
        return;
    }

    const clone = template.content.cloneNode(true);

    const divWrapper = document.createElement("div");
    divWrapper.classList.add("page");
    divWrapper.appendChild(clone);

    document.getElementById("page-content").appendChild(divWrapper);
}

handleLoadNewPage("home-page-template");