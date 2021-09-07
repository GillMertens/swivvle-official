const el = document.querySelector("#container");

document.addEventListener("mousemove", (e) => {
    el.style.backgroundPositionX = (50 + (e.offsetX * .01)) + "%";
    el.style.backgroundPositionY = (57 + (e.offsetY * .01)) + "%";
});