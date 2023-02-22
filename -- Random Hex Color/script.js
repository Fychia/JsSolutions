const hexColor = document.querySelector(".hexColor");
const btnColor = document.querySelector(".btnColor");


const generateColor = () =>
{
    const randomColor = Math.random().toString(16).substring(2, 8);
    checkColor.style.backgroundColor = '#' + randomColor;
    hexColor.innerHTML = '#' + randomColor;
};

btnColor.addEventListener("click", generateColor);

generateColor();