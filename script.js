let btn1 = document.getElementById("mybutton1");
let btn2 = document.getElementById("mybutton2");
let copydiv = document.querySelector(".copycode");
let rgb1 = "#051937";
let rgb2 = "#a8eb12";

let generator = () => {
    let myhexvalue = "0123456789abcdef"
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + myhexvalue[Math.floor(Math.random() * 16)];
    }
    return color;
};
const handlebtn1 = () => {
    rgb1 = generator();
    document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1}, ${rgb2})`;
    document.querySelector(".copycode").innerHTML = `background-image: linear-gradient(to right top,  ${rgb1}, ${rgb2});`;
    btn1.innerText = `${rgb1}`;
};

const handlebtn2 = () => {
    rgb2 = generator();
    document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1}, ${rgb2})`;
    document.querySelector(".copycode").innerHTML = `background-image: linear-gradient(to right top, ${rgb1}, ${rgb2});`;
    btn2.innerText = `${rgb2}`;
};

btn1.addEventListener("click", handlebtn1);
btn2.addEventListener("click", handlebtn2);

copydiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copydiv.innerText)
    alert("Copied")
});