const themeBtn = document.querySelector(".theme-btn");
const themeHtml = document.querySelector("html");

themeBtn.addEventListener('click', () => {
    if (themeBtn.classList.contains("theme-1")) {
        themeBtn.classList.remove("theme-1");
        themeBtn.classList.add("theme-2");
        themeHtml.setAttribute("data-theme", "theme-2");
    } else if (themeBtn.classList.contains("theme-2")) {
        themeBtn.classList.remove("theme-2");
        themeBtn.classList.add("theme-3");
        themeHtml.setAttribute("data-theme", "theme-3");
    } else if (themeBtn.classList.contains("theme-3")) {
        themeBtn.classList.remove("theme-3");
        themeBtn.classList.add("theme-1");
        themeHtml.setAttribute("data-theme", "theme-1");
    }
})

