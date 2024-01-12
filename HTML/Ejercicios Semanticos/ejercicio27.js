function avanzarHistoria() {
    var storyContainer = document.getElementById('contenido');
    storyContainer.innerHTML = '<p>Una vez en un lugar lejano...</p>' +
                               '<button onclick="desarrollo1()">Continuar</button>';
}

function desarrollo1() {
    var storyContainer = document.getElementById('contenido');
    storyContainer.innerHTML = '<p>Te encuentras frente a dos caminos. ¿Cuál eliges?</p>' +
                               '<button onclick="desarrollo2()">Camino A</button>' +
                               '<button onclick="desarrollo3()">Camino B</button>';
}

function desarrollo2() {
    var storyContainer = document.getElementById('contenido');
    storyContainer.innerHTML = '<p>Has llegado a un bosque encantado...</p>' +
                               '<button onclick="final()">Explorar más</button>';
}

function desarrollo3() {
    var storyContainer = document.getElementById('contenido');
    storyContainer.innerHTML = '<p>Te enfrentas a una montaña imponente...</p>' +
                               '<button onclick="final()">Escalar la montaña</button>';
}

function final() {
    var storyContainer = document.getElementById('contenido');
    storyContainer.innerHTML = '<p>¡Felicidades, has llegado al final de la historia!</p>';
}