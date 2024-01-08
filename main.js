async function getRandomAdvice() {
  const apiUrl = "https://api.adviceslip.com/advice";

  let response = await fetch(apiUrl, {cache: 'no-cache'});
  if (response.ok) {
    let json = await response.json();
    // Gets the content out of the API to a json file.
    let slip = json.slip;

    // Then puts the respective values inside two different variables.
    let id = slip.id;
    let advice = slip.advice;

    document.getElementById("quote-index").innerHTML ="advice #" + id;
    document.getElementById("quote").innerHTML = advice;

  } else {
    // if the API doesn't work, sends an alert.
    alert("something went wrong.");
  }
}



// Runs an animation for the button when is clicked.
// It's removed and added to ensure that the animation
// runs every time that the button is clicked.

const btn = document.getElementById("quote-btn");
const dice = document.getElementById("dice");

const quote = document.getElementById("quote");
const id = document.getElementById("quote-index");

 btn.addEventListener("click", () => {
  dice.classList.remove("btn-animation");
  quote.classList.remove("quote-animation");
  id.classList.remove("quote.animation");

  setTimeout(function () {
    getRandomAdvice();
    dice.classList.add("btn-animation");
    id.classList.add("quote.animation");
    quote.classList.add("quote-animation");
  }, 1000);
});
