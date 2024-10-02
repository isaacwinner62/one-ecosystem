// Get the button element
const submitButton = document.getElementById('submit');
const inputs = document.querySelectorAll('input');

// Function to check if any input field is empty
function checkInputs() {
    let allFilled = true;
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });
    submitButton.disabled = !allFilled;
}

// Initial check on page load
checkInputs();

// Add event listeners to inputs to check on every input change
inputs.forEach(input => {
    input.addEventListener('input', checkInputs);
});

// Change button text when clicked
submitButton.addEventListener('click', () => {
    submitButton.innerHTML = 'CONNECTING...';
});


const coverImg = document.getElementById("coverimg");
const allElement = document.querySelector(".allelement");
const bodyy = document.querySelector("body");



window.addEventListener("load", () => {
    // Show the changes after 2 seconds
    setTimeout(() => {
        coverImg.style.display = "flex";
        allElement.style.display = "none";
        bodyy.style.backgroundColor = "black";
    }, 0);

    // Revert the changes after 3 seconds
    setTimeout(() => {
        coverImg.style.display = "none";
        allElement.style.display = "block";
        bodyy.style.backgroundColor = ""; // Reset to the original background color, you might need to specify the original color if it's not empty
    }, 4000);
});
