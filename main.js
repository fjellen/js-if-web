const inputField = document.getElementById("age");
const myButton = document.getElementById("press");

function whenClicked() {
    const userAge = parseInt(inputField.value);

    if (userAge >= 25 && userAge < 90) {
        alert("You've got the age to use this site!");
    } else if (userAge >= 90) {
        alert("You are too old to use this site!");
    }
    else {
        alert("You are too young to use this site!");
    }
}

myButton.addEventListener("click", whenClicked);