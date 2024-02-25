function toggleChevron(iconElement) {
    if (iconElement && iconElement.classList) {
        iconElement.classList.toggle('fa-chevron-down');
        iconElement.classList.toggle('fa-chevron-up');

        const circleIcon = iconElement.parentElement.querySelector('.circleIcon');

        if (circleIcon && circleIcon.classList) {
            circleIcon.classList.toggle('fa-circle-question');
            circleIcon.classList.toggle('fa-circle-check');
        }

        iconElement.style.color = iconElement.classList.contains('fa-chevron-down') ? '#000000' : '#000000';
    } else {
        console.error("Invalid icon element provided.");
    }
}

document.querySelectorAll(".qn_trigger").forEach(question => {
    question.addEventListener("click", function () {
        const answerId = this.getAttribute("trigger-id");
        const answer = document.querySelector(`[collapsible-id="${answerId}"]`);
        answer.classList.toggle("hidden");
    });
});

function changeBackground(element) {
    element.style.backgroundColor = "#EAFEFF";
}

