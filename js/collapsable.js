document.querySelectorAll(".qn_trigger").forEach(question => {
    question.addEventListener("click", function () {
        const answerId = this.getAttribute("trigger-id");
        const answer = document.querySelector(`[collabsable-id="${answerId}"]`);
        answer.classList.toggle("hidden");
    });
});

function toggleChevron(iconElement) {
    iconElement.classList.toggle('fa-chevron-down');
    iconElement.classList.toggle('fa-chevron-up');

    const circleIcon = document.getElementsByClassName('circleIcon');
    circleIcon.classList.toggle('fa-circle-question');
    circleIcon.classList.toggle('fa-circle-check');

    if (iconElement.classList.contains('fa-chevron-down')) {
        iconElement.style.color = '#FFFFFF';
    } else {
        iconElement.style.color = '#EAFEFF';
    }
}
