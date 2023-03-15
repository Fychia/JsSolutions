const number = document.querySelector(".number");
const gerateNum = document.querySelector(".gerateNum");

const generateNum = () => 
{
    const randomNum = Math.floor(Math.random() * 101);
    number.innerHTML = randomNum;
};

gerateNum.addEventListener("click", generateNum);

generateNum();