"use strict";
document.addEventListener("DOMContentLoaded", startProgramme);

function startProgramme() {
  console.log("startProgramme");
  document.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", showModal);
  });
}
function showModal() {
  console.log("Show modal");
  document.querySelector("#modal_container").classList.remove("hidden");
  document.querySelector("#closebutton").addEventListener("click", hideModal);
}

function hideModal() {
  console.log("Hide modal");
  window.onclick = function(event) {
    if (event.target == document.querySelector("#modal_container")) {
      document.querySelector("#modal_container").classList.add("hidden");
    }
    if (event.target == document.querySelector("#closebutton")) {
      document.querySelector("#modal_container").classList.add("hidden");
    }
  };
}
