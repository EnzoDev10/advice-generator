// Runs an animation for the button when is clicked.
// It's removed and added to ensure that the animation
// runs every time that the button is clicked.

const btn = document.querySelector("#quote-btn");

document.querySelector("#quote-btn").addEventListener("click", () => {
  btn.classList.remove("btn-animation");

  setTimeout(function () {
    btn.classList.add("btn-animation");
  }, 1000);
});
