const themeToggler = document.querySelector(".theme-ctrl");

// IMPLEMENT DARK MODE
function toggleTheme() {
    const docBody = document.body;
    const themeIcon = document.querySelector(".theme-ctrl i");

    if (themeToggler.classList.contains("to-dark")) {
        docBody.className = "dark-mode";
        themeToggler.classList.remove("to-dark");
        themeToggler.classList.add("to-light");

        // CHANGE THEME ICON TO SUN
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        docBody.classList.remove("dark-mode");
        themeToggler.classList.remove("to-light");
        themeToggler.classList.add("to-dark");

        // CHANGE THEME ICON TO MOON
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
}

themeToggler.addEventListener("click", toggleTheme);