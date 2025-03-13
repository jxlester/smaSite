document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".signup-form");
    const emailInput = document.querySelector(".tbEmail");
    const editButton = document.querySelector(".editButton");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from refreshing the page

        const submittedEmail = emailInput.value.trim(); //gets input value
        console.log("Submitted Email:", submittedEmail);

        if (submittedEmail) {
            alert("Thank you for submitting your Email!");

            //new placeholder
            emailInput.value = "";
            emailInput.placeholder = submittedEmail;
            emailInput.disabled = true;
            emailInput.style.backgroundColor = "d3d3d3"; //light gray background

            //Show submitted email button
            editButton.style.display = "inline-block";
        }
    });

    //Handle "Enter a Different Email" click event
    editButton.addEventListener("click", function(event) {
        event.preventDefault(); //Prevents form from submitting when button is clicked

        console.clear();

        //re-enable input field
        emailInput.disabled = false;
        emailInput.style.backgroundColor = "";
        emailInput.value = "";
        emailInput.placeholder = "Enter your email here:";

        //hide submitted email and edit button
        editButton.style.display = "none";
    });
});
