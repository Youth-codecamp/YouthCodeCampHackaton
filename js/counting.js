dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element, dateString) {
    const targetDate = dayjs(dateString);

    setInterval(() => {
        const now = dayjs();
        const duration = dayjs.duration(targetDate.diff(now));

        element.querySelector(".until--numeric--minutes").textContent = duration.minutes().toString().padStart(2, "0");
        element.querySelector(".until--numeric--hours").textContent = duration.hours().toString().padStart(2, "0");
        element.querySelector(".until--numeric--days").textContent = duration.days().toString().padStart(2, "0");
        element.querySelector(".until--numeric--months").textContent = duration.months().toString().padStart(2, "0");
    }, 250);

}

activateCountdown(document.getElementById("myCountdown"), "2024-8-16");