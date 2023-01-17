const selectBtn = document.querySelector(".select-btn"),
  items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    items[i].classList.toggle("checked");
    if (items[i].classList.contains("parent")) {
      let j = i + 1;
      for (j; j < items.length; j++) {
        if (items[j].classList.contains("sub-item")) {
          if (items[i].classList.contains("checked")) {
            items[j].classList.add("checked");
          } else {
            items[j].classList.remove("checked");
          }
        } else {
          break;
        }
      }
    }

    let checked = document.querySelectorAll(".checked"),
      btnText = document.querySelector(".btn-text"),
      count = 0;

    for (let i = 0; i < checked.length; i++) {
      if (!checked[i].classList.contains("parent")) {
        count++;
      }
    }

    if (count > 0) {
      btnText.innerText = `${count} Selected`;
    } else {
      btnText.innerText = "Select Option";
    }
  });
}
