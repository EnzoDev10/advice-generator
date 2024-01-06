const btn = document.getElementById("quote-btn");

window.onload = getRandomAdvice();

async function getRandomAdvice() {
  const apiUrl = "https://api.adviceslip.com/advice";

  let response = await fetch(apiUrl);
  if (response.ok) {
    let json = await response.json();
    // Gets the content out of the API to a json file.
    let slip = json.slip;

    // Then puts the respective values inside two different variables.
    let id = slip.id;
    let advice = slip.advice;

  } else {
    alert("something went wrong.");
  }
}

// Runs an animation for the button when is clicked.
// It's removed and added to ensure that the animation
// runs every time that the button is clicked.

/* btn.addEventListener("click", () => {
  btn.classList.remove("btn-animation");

  setTimeout(function () {
    btn.classList.add("btn-animation");
  }, 1000);
});

 */
