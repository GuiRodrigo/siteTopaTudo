// aumenta ou diminui o tamanho da font
document.addEventListener("DOMContentLoaded", function () {
  let currentFontSize = parseInt(window.localStorage.getItem("fontSize")) || 16;

  document.body.style.fontSize = currentFontSize + "px";

  document
    .querySelector("#increase-font")
    .addEventListener("click", function () {
      if (currentFontSize < 100) {
        // Verifica se o tamanho não ultrapassa 100px
        currentFontSize += 2; // Aumenta o tamanho da fonte
        document.body.style.fontSize = currentFontSize + "px";
        window.localStorage.setItem("fontSize", currentFontSize);
      }
    });

  document
    .querySelector("#decrease-font")
    .addEventListener("click", function () {
      if (currentFontSize > 10) {
        // Verifica se o tamanho não é menor que 10px
        currentFontSize -= 2; // Diminui o tamanho da fonte
        document.body.style.fontSize = currentFontSize + "px";
        window.localStorage.setItem("fontSize", currentFontSize);
      }
    });
});
