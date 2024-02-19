// POPUP
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

// SPINNER
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// TAHUN OTOMATIS
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

function showToast() {
  var toast = document.getElementById("toast");
  toast.classList.remove("hide");
  toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
    toast.classList.add("hide");
  }, 7000); // Durasi tampilan toast dalam milidetik (misalnya, 3000ms untuk 3 detik)
}

// SALJU
  document.addEventListener("DOMContentLoaded", function() {
const container = document.getElementById("snowfall-container");

for (let i = 0; i < 100; i++) {
  createSnowflake();
}

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.style.left = `${Math.random() * 100}vw`; // vw untuk posisi horizontal di seluruh lebar layar
  snowflake.style.animationDuration = `${Math.random() * 6 + 5}s`; // Durasi animasi acak antara 2 hingga 5 detik
  container.appendChild(snowflake);
}
});
