var icon = document.getElementById("iconKitchenLights");
var estado = true;

icon.onclick = function(e) {
    if (estado) {
        icon.classList.remove('fa-toggle-on');
        icon.classList.add('fa-toggle-off');
    } else {
        icon.classList.remove('fa-toggle-off');
        icon.classList.add('fa-toggle-on');
    }
    estado = !estado;
};