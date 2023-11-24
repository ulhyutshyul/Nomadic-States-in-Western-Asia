// script.js
document.addEventListener("DOMContentLoaded", function () {
    var advertisement = document.getElementById("advertisement");
    var closeAdButton = document.getElementById("closeAd");

    // Отображение рекламы после загрузки страницы (можете изменить условие по вашему усмотрению)
    if (Math.random() < 0.5) {
        advertisement.style.display = "block";
    }

    // Обработка нажатия на кнопку "Закрыть"
    closeAdButton.addEventListener("click", function () {
        advertisement.style.display = "none";
    });
});
