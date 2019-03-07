"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");

  loop("span", 5);
}

function loop(element, rating) {
  console.log("loop");

  document.querySelectorAll(element).forEach(review => {
    const score = review.innerHTML;

    if (score <= rating) {
      review.parentNode.remove();
    }
  });
}
