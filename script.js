// attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function () {

  // sélectionner les éléments
  const colorBox = document.getElementById("color-box");
  const button = document.getElementById("change-color-btn");

  // fonction couleur aléatoire
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  // événement click
  button.addEventListener("click", function () {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
  });

});