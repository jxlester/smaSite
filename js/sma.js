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

//Carousel

let slideIndex = 0;

function showSlide() {
    const slides = document.querySelector(".event-slide");
    const slideWidth = document.querySelector(".event").offsetWidth + 10; // Adjust for spacing
    slides.style.transform = `translateX(${-slideIndex * slideWidth * 1.1}px)`;
}

function nextSlide() {
    const totalSlides = Math.ceil(document.querySelectorAll(".event").length / 3);
    if (slideIndex < totalSlides - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    showSlide();
}

function prevSlide() {
    const totalSlides = Math.ceil(document.querySelectorAll(".event").length / 3);
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = totalSlides - 1;
    }
    showSlide();
}
