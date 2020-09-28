const red = document.querySelector(".red");
const orange = document.querySelector(".orange");
const blue = document.querySelector(".blue");
const purple = document.querySelector(".purple");
const pink = document.querySelector(".pink");

const center1 = document.querySelector(".center");

var getBGColor = (selectElement) => {
    return window.getComputedStyle(selectElement).backgroundColor;
};


var magicColor = (element,color) => {
    element.addEventListener("mouseenter",() => {
        center.style.background = color;
    });
}

magicColor(red,getBGColor(red));
magicColor(purple,getBGColor(purple));
magicColor(blue,getBGColor(blue));
magicColor(pink,getBGColor(pink));
magicColor(orange,getBGColor(orange));

