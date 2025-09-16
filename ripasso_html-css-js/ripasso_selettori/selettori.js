// Ripasso selettori JS

// Selettore per id
const verde = document.getElementById("verde");
verde.textContent += " (selezionato con getElementById)";

// Selettore per classe
const rossi = document.getElementsByClassName("rosso");
for (let el of rossi) {
  el.textContent += " (selezionato con getElementsByClassName)";
}

// Selettore per tag
const paragrafi = document.getElementsByTagName("p");

// querySelectorAll
const evidenziaBtn = document.getElementById("btn");
evidenziaBtn.addEventListener("click", () => {
  const tutti = document.querySelectorAll("p");
  tutti.forEach((p) => p.classList.toggle("evidenziato"));
});
