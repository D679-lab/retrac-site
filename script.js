const texts = [
  "Clean UI. Fast Performance.",
  "Modern software experience.",
  "Minimal design. Maximum clarity.",
  "Smooth navigation system.",
  "Optimized for speed.",
  "Next-gen interface layout."
];

let i = 0;

function rotate() {
    const el = document.getElementById("rotatingText");
    if (!el) return;

    el.style.opacity = "0";

    setTimeout(() => {
        i = (i + 1) % texts.length;
        el.textContent = texts[i];
        el.style.opacity = "1";
    }, 200);
}

document.addEventListener("DOMContentLoaded", () => {

    const el = document.getElementById("rotatingText");

    if (el) {
        setInterval(rotate, 2500);
    }

    // fade in fix
    document.body.style.opacity = "0";
    document.body.style.transition = "0.4s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 50);

});