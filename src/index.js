//Color Functionality

document.getElementById("colorInput").addEventListener("input", function () {

    const inputColor = document.getElementById("colorInput");
    const inputColorValue = inputColor.value;

    document.getElementById("blockColor").style.backgroundColor = inputColorValue;

    const hexColor = document.getElementById("hexadecimal");
    const rgbColor = document.getElementById("rgb");
    const hslColor = document.getElementById("hsl");

    hexColor.style.color = inputColorValue;
    rgbColor.style.color = inputColorValue;
    hslColor.style.color = inputColorValue;


    const hexToRgb = (hex) => {
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);
        return `rgb(${r}, ${g}, ${b})`;
    };

    const rgbToHsl = (rgb) => {
        const r = parseInt(rgb.substring(4, rgb.indexOf(",")));
        const g = parseInt(rgb.substring(rgb.indexOf(",") + 2, rgb.lastIndexOf(",")));
        const b = parseInt(rgb.substring(rgb.lastIndexOf(",") + 2, rgb.lastIndexOf(")")));
        const r1 = r / 255;
        const g1 = g / 255;
        const b1 = b / 255;
        const cMax = Math.max(r1, g1, b1);
        const cMin = Math.min(r1, g1, b1);
        const delta = cMax - cMin;
        let h, s, l;
        if (delta === 0) {
            h = 0;
        } else if (cMax === r1) {
            h = 60 * (((g1 - b1) / delta) % 6);
        } else if (cMax === g1) {
            h = 60 * (((b1 - r1) / delta) + 2);
        } else {
            h = 60 * (((r1 - g1) / delta) + 4);
        }
        l = (cMax + cMin) / 2;
        if (cMax === 0) {
            s = 0;
        } else {
            s = delta / (1 - Math.abs(2 * l - 1));
        }
        return `(${h.toFixed(0)}, ${s.toFixed(2) * 100}%, ${l.toFixed(2) * 100}%)`;
    }

    hexColor.innerHTML = inputColorValue;
    rgbColor.innerHTML = hexToRgb(inputColorValue);
    hslColor.innerHTML = rgbToHsl(hexToRgb(inputColorValue));
});


// COPY TO CLIPBOARD FUNCTIONALITY

const copyToClipBoard = (element) => {
    const value = element.innerHTML;
    navigator.clipboard.writeText(value);
    alert("Copied to clipboard!");
};

document.getElementById("hexadecimalContainer").addEventListener("click", function () {
    copyToClipBoard(document.getElementById("hexadecimal"));
});

document.getElementById("rgbContainer").addEventListener("click", function () {
    copyToClipBoard(document.getElementById("rgb"));
});

document.getElementById("hslContainer").addEventListener("click", function () {
    copyToClipBoard(document.getElementById("hsl"));
});