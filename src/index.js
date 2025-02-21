
document.getElementById("colorInput").addEventListener("input", function () {
    const inputColor = document.getElementById("colorInput");
    const inputColorValue = inputColor.value;

    document.getElementById("blockColor").style.backgroundColor = inputColorValue;
    document.getElementById("").style.backgroundColor = inputColorValue;
});
