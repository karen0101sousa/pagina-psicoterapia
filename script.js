document.addEventListener("DOMContentLoaded", function() {
  const perguntas = document.querySelectorAll(".pergunta");

  perguntas.forEach(function(pergunta) {
    pergunta.addEventListener("click", function() {
      const resposta = pergunta.nextElementSibling;

      if (resposta.style.display === "block") {
        resposta.style.display = "none";
      } else {
        resposta.style.display = "block";
      }
    });
  });
});
