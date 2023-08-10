const devErrUp = document.getElementById("errorPopUp");
const devErrDown = document.getElementById("errorPopDown");
const errorSect = document.getElementById("errorMsg");
const errorDismiss = document.getElementById("dismissError");


function errorPopUp() {
    errorDismiss.style.display = "block";
    errorSect.classList.add("popUp");
    errorDismiss.classList.add("buttonUp");
    setTimeout(() => {
        errorSect.classList.remove("popUp"); 
        errorDismiss.classList.remove("buttonUp");
        errorSect.style.width = "30%";
        errorSect.style.height = "15%";
        errorSect.style.fontSize = "larger";
        errorDismiss.style.width = "30%";
        errorDismiss.style.height = "auto";
        errorDismiss.style.fontSize = "medium";}, 750);
}

function errorPopDown() {
    errorSect.classList.add("popDown");
    errorDismiss.classList.add("buttonDown");
    setTimeout(() => {
        errorSect.classList.remove("popDown"); 
        errorDismiss.classList.remove("buttonDown"); 
        errorDismiss.style.display = "none";
        errorSect.style.width = "0";
        errorSect.style.height = "0";
        errorSect.style.fontSize = "0";
        errorDismiss.style.width = "0";
        errorDismiss.style.height = "0";
        errorDismiss.style.fontSize = "0";}, 750);
}

devErrUp.addEventListener('click', () => {
    errorPopUp();
});

devErrDown.addEventListener('click', () => {
    errorPopDown();
});