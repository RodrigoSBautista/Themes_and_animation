let theme_button = document.querySelector("li.has_dropdown");
let light = document.getElementById("light");
let dark = document.getElementById("dark");
let solar = document.getElementById("solar");
let body = document.querySelector("body")

if (localStorage.theme !== undefined) {
    body.setAttribute("class", localStorage.theme)
}

light.addEventListener("click", ()=> { body.setAttribute("class", "light");
localStorage.theme = "light" })
dark.addEventListener("click", ()=> { body.setAttribute("class", "dark");
localStorage.theme = "dark" })
solar.addEventListener("click", ()=> { body.setAttribute("class", "solar");
localStorage.theme = "solar" })