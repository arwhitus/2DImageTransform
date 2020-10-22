function Transform() {
    let a = 1;
    let b = 0;
    let c = 0;
    let d = 1;

    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    d = document.getElementById("d").value;

    let matrixTxt = "matrix(" + a + ", " + b + ", " + c + ", " + d + ", 0, 0)"

    document.getElementById("photo").style.transform = matrixTxt;

    document.getElementById("retBtn").disabled = false;
}

function Return() {
    document.getElementById("photo").style.transform = "matrix(1, 0, 0, 1, 0, 0)";

    document.getElementById("retBtn").disabled = true;
}

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "t" || event.key ===  "T") {
        Transform();
    }
    else if (event.key === "r" || event.key ===  "R") {
        Return();
    }
});