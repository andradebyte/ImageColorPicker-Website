document.getElementById("themeButton").addEventListener("click", function () {
    const body = document.querySelector("body");
    const themeButton = document.getElementById("themeButton");

    if (localStorage.getItem("light") === "disable") {
        body.classList.toggle("light");
    } else if (localStorage.getItem("light") === "enabled") {
        body.classList.toggle("light");
    }

    themeButton.addEventListener("click", function () {
        body.classList.toggle("light");

        // Save the user's preference
        if (body.classList.contains("light")) {
            localStorage.setItem("light", "enabled");
        } else {
            localStorage.setItem("light", "disabled");
        }
    });

});