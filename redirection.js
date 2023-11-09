//try with data-target
const maxClicks = 3;

// Initialize separate counters for each target
const clickCounts = {
  'Badcon.html': 0,
  'good con.html': 0
};

// Function to handle button clicks and redirection
function handleButtonClick(button) {
  const targetURL = button.getAttribute('data-target');
  clickCounts[targetURL]++;

  // Check if the maximum number of clicks is reached for the target
  if (clickCounts[targetURL] >= maxClicks) {
    window.location.href = targetURL;
  } else {
    button.disabled = true;
  }
}

// Get all elements with the button1 class
const buttons = document.querySelectorAll('.button1');

// Add click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    handleButtonClick(button);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".choice .button1");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove the clicked-effect class from all buttons
      buttons.forEach((btn) => btn.classList.remove("clicked-effect"));

      // Add the clicked-effect class to the clicked button
      button.classList.add("clicked-effect");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".choice .button1");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove the clicked-effect class from all buttons
      buttons.forEach((btn) => btn.classList.remove("clicked-effect"));

      // Add the clicked-effect class to the clicked button
      button.classList.add("clicked-effect");
    });
  });
});



