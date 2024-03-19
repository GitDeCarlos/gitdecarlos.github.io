const targetEl = document.querySelector('.content-main');

const loadPage = name => {
    fetch(`./Pages/${name}.html`).then(res => {
        if (res.ok) {
            return res.text();
        }
    }).then(htmlSnippet => {
        targetEl.innerHTML = htmlSnippet;
    });

    document.querySelector(".current-page").classList.remove("current-page");
    document.querySelector(`.${name}`).classList.add("current-page");
};