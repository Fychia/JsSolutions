const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons-div");

buttons.addEventListener("click", (x) => 
{
    if(x.target.classList.contains("add"))
    {
        count.innerHTML++;
        setColor();
    }
});

buttons.addEventListener("click", (x) => 
{
    if(x.target.classList.contains("subtract"))
    {
        count.innerHTML--;
        setColor();
    }
});

buttons.addEventListener("click", (x) => 
{
    if(x.target.classList.contains("reset"))
    {
        count.innerHTML = 0;
        setColor();
    }
});


function setColor()
{
    if(count.innerHTML > 0)
    {
        count.style.color = "green";
    }
    else if(count.innerHTML < 0)
    {
        count.style.color = "pink";
    }
    else
    {
        count.style.color = "white";
    }
}