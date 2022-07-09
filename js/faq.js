let num = document.querySelectorAll(".quest").length;

console.log(num);
for (let i = 0; i < num; i++) {
  document.querySelectorAll(".quest")[i].addEventListener("click", function () {
      document.querySelectorAll(".answer")[i].classList.toggle("show");
      document.querySelectorAll(".answer")[i].style.transition = "all 0.2s";
    });
}