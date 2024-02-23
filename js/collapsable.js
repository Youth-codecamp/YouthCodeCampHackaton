document.querySelectorAll("#question_trigger").forEach(question => {
    question.addEventListener("click", function () {
        const answerId = this.getAttribute("trigger-id");
        const answer = document.querySelector(`[collabsable-id="${answerId}"]`);
        answer.classList.toggle("hidden");
    });
});