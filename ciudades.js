let status = "paris";
let acumuladorClics = 0;
function mostrarParis() {
    acumuladorClics = acumuladorClics + 1;
    if (status == "roma") {
        document.getElementById("h2Paris").classList.toggle("d-none");
        document.getElementById("pParis").classList.toggle("d-none");
        document.getElementById("imgParis").classList.toggle("d-none");
        document.getElementById("h2Roma").classList.toggle("d-none");
        document.getElementById("pRoma").classList.toggle("d-none");
        document.getElementById("imgRoma").classList.toggle("d-none");
        status = "paris";
    } else {
        return;
    }
    if (acumuladorClics > 5) {
        document.getElementById("main").innerHTML = "Has apretado más de 5 veces los botones";
    }
}


function mostrarRoma() {
    acumuladorClics = acumuladorClics + 1;
    if (status == "paris") {
        document.getElementById("h2Paris").classList.toggle("d-none");
        document.getElementById("pParis").classList.toggle("d-none");
        document.getElementById("imgParis").classList.toggle("d-none");
        document.getElementById("h2Roma").classList.toggle("d-none");
        document.getElementById("pRoma").classList.toggle("d-none");
        document.getElementById("imgRoma").classList.toggle("d-none");
        status = "roma";
    } else {
        return;
    }
    if (acumuladorClics > 5) {
        document.getElementById("main").innerHTML = "Has apretado más de 5 veces los botones";
    }
}

console.log (acumuladorClics);

var statusImgParis = "color";
function toggleParis(){
    if (statusImgParis == "color"){
        document.getElementById("imgParis").src = "img/paris_bn.jpg";
        statusImgParis = "bn";
    } else {
        document.getElementById("imgParis").src = "img/paris.jpg";
        statusImgParis = "color";
    }
}
var statusImgRoma = "color";
function toggleRoma() {
    if (statusImgRoma == "color"){
        document.getElementById("imgRoma").src = "img/roma_bn.jpg";
        statusImgRoma = "bn";
    } else {
        document.getElementById("imgRoma").src = "img/roma.jpg";
        statusImgRoma = "color";
    }
}