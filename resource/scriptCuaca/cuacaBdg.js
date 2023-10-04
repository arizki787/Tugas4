document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "bff5873fa94dc50dc578e34f3190ed2a";
    const city = "Bandung";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const cuacaInfo = document.getElementById("cuaca-info");

    const xhr = new XMLHttpRequest();

    xhr.open("GET", apiUrl, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);

            cuacaInfo.innerHTML = `
            <p>Cuaca saat ini di ${city}:</p>
            <p>Suhu: ${data.main.temp}°C</p>
            <p>Kelembaban: ${data.main.humidity}%</p>
            <p>Deskripsi: ${data.weather[0].description}</p>
            `;
        } else {
            cuacaInfo.innerHTML = "<p>Gagal mengambil data cuaca.</p>";
        }
    };

    // Kirim permintaan ke server
    xhr.send();
});
