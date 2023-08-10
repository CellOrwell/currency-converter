const devErrUp = document.getElementById("errorPopUp");
const devErrDown = document.getElementById("errorPopDown");
const devMsgUp = document.getElementById("responsePopUp");
const devMsgDown = document.getElementById("responsePopDown");
const errorSect = document.getElementById("errorMsg");
const errorDismiss = document.getElementById("dismissError");
const responseSect = document.getElementById("responseMsg");
const responseDismiss = document.getElementById("dismissResponse");



let canPush = true;

function popUp(popUpMsg, popUpButton) {
    popUpButton.style.display = "block";
    popUpMsg.classList.add("popUp");
    popUpButton.classList.add("buttonUp");
    setTimeout(() => {
        popUpMsg.classList.remove("popUp"); 
        popUpButton.classList.remove("buttonUp");
        popUpMsg.style.width = "30%";
        popUpMsg.style.height = "15%";
        popUpMsg.style.fontSize = "larger";
        popUpButton.style.width = "30%";
        popUpButton.style.height = "auto";
        popUpButton.style.fontSize = "medium";}, 750);
};

function popDown(popUpMsg, popUpButton) {
    popUpMsg.classList.add("popDown");
    popUpButton.classList.add("buttonDown");
    setTimeout(() => {
        popUpMsg.classList.remove("popDown"); 
        popUpButton.classList.remove("buttonDown"); 
        popUpButton.style.display = "none";
        popUpMsg.style.width = "0";
        popUpMsg.style.height = "0";
        popUpMsg.style.fontSize = "0";
        popUpButton.style.width = "0";
        popUpButton.style.height = "0";
        popUpButton.style.fontSize = "0";}, 750);
};

devErrUp.addEventListener('click', () => {
    popUp(errorSect, errorDismiss);
});

devErrDown.addEventListener('click', () => {
    popDown(errorSect, errorDismiss);
});

devMsgUp.addEventListener('click', () => {
    popUp(responseSect, responseDismiss);
});

devMsgDown.addEventListener('click', () => {
    popDown(responseSect, responseDismiss);
});

