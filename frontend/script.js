const fromSelect = document.getElementById("fromSelect");
const toSelect = document.getElementById("toSelect");

const errorSect = document.getElementById("errorMsg");
const errorMsg = document.getElementById("error");
const errorDismiss = document.getElementById("dismissError");
const responseSect = document.getElementById("responseMsg");
const responseDismiss = document.getElementById("dismissResponse");

let canPush = true;

window.onload = async () => {
    try {
        await getCurrencies(); 
        console.log("Page Loaded");
    }
    catch (error) {
        console.error(error);
        throwError(error, true);
    }
}

async function getCurrencies() {
    try{
        const response = await fetch("http://localhost:3000/getConvRates");
        const data = await response.json();
    
        for (const curr in data.data) {
            fromSelect.innerHTML += `<option value="${curr}">${curr}</option>`;
            toSelect.innerHTML += `<option value="${curr}">${curr}</option>`;
        }
    } catch (error) {
        throw new Error(`Error ${error.status}: ${error.message}`);
    };
};

function throwError(msg, severe) {
    errorMsg.innerHTML = msg;
    popUp(errorSect, errorDismiss);
    if(severe)
    {
        errorDismiss.style.display = "none";
    }
}

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

errorDismiss.addEventListener('click', () => {
    popDown(errorSect, errorDismiss);
});

responseDismiss.addEventListener('click', () => {
    popDown(responseSect, responseDismiss);
});

// Dev Tools

const devErrUp = document.getElementById("errorPopUp");
const devErrDown = document.getElementById("errorPopDown");
const devThrowErr = document.getElementById("throwErr");
const devMsgUp = document.getElementById("responsePopUp");
const devMsgDown = document.getElementById("responsePopDown");

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

devThrowErr.addEventListener('click', () => {
    throwError("Error 404: Page Not Found. Please Reload.", true);
});

