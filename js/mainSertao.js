/* Tela de loading */
var i = setInterval(function() {
    clearInterval(i);
    document.getElementById("carregando").style.display = "none";
    document.getElementById("whole").style.display = "block";
}, 7000);