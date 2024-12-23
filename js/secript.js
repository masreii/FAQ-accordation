

const faq = document.querySelectorAll(".faq")
console.log(faq)




faq.forEach((element) =>{
  element.addEventListener("click",function(){
    element.classList.toggle("active")
    const answer = element.querySelector(".answer")
    const icon = element.querySelector(".question img");

    // Ganti ikon berdasarkan status kelas "active"
    if (element.classList.contains("active")) {
      answer.style.transition = "max-height 1.5s ease";
      icon.src = "/assets/images/icon-minus.svg"; // Icon minus
    } else {
      answer.style.transition = "max-height 0.55s ease";
      icon.src = "/assets/images/icon-plus.svg"; // Icon plus
    }

  })
})