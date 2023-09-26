const html = document.documentElement;
const button = document.getElementById("switch").childNodes[1];

button.addEventListener("click", switching)

function switching(){
    if(!html.classList.contains("light")) {
        html.classList.add("light")
    } else {
        html.classList.remove("light");
    };
};