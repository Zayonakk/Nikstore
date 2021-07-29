const selected = document.querySelector(".container-block-selected");
const optionsContainer = document.querySelector(".container-block-optionslist");
const optionsList = document.querySelectorAll(".block-optionslist-option");
const arrow = document.querySelector(".block-selected-arrow")

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });

  selected.addEventListener("click", () => {
    arrow.classList.toggle("active");
  });

  arrow.addEventListener("click", () => {
    arrow.classList.toggle("active");
  });

  arrow.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });

optionsList.forEach(o => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
      arrow.classList.remove("active");
  });
});
;
