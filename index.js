function mostrar(){
    var formulario = document.getElementById('seccionForm');
    formulario.style.display = "block";
}

function ocultar(){
    var formulario = document.getElementById('seccionForm');
    formulario.style.display = "none";
}

document.getElementById('register-form').addEventListener('submit', guardaTarea);

function guardaTarea (e) {

    let titulo = document.getElementById("titulo").value;
    let descripcion = document.getElementById("Descripcion").value;
    let responsable = document.getElementById("Responsable").value;
    let fechaEnt = document.getElementById("FechaEn").value;

    const tarea = {
        titulo,
        descripcion,
        responsable,
        fechaEnt
    };

    console.log(tarea)

    e.preventDefault();

}