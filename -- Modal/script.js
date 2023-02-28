const modal = document.querySelector(".modal"),
    modalContent = document.querySelector(".modalContent"),
    btn = document.querySelector(".btn"),
    close = document.querySelector(".close");

btn.addEventListener("click", openModal);

close.addEventListener("click", closeModal);

modal.addEventListener("click", closeModal);


//Open Modal Function
function openModal(e)
{
    e.preventDefault();
    modal.style.display = "block";
}

//Close Modal Function
function closeModal()
{
    modalContent.classList.add("closeSlideUp")
    setTimeout(() => 
    {
        modal.style.display = "none";
        modalContent.classList.remove("closeSlideUp");
    }, 500);
}
