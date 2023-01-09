const input = document.querySelector(".main__content-input");
const inputBtn = document.querySelector(".main__content-btn");
const box = document.querySelector(".main__content-box");

let arrayTasks = [];

inputBtn.addEventListener("click", () => {
  let value = input.value;
  if (value) {
    arrayTasks = JSON.parse(localStorage.getItem("tasks"));
    if (!arrayTasks) {
      arrayTasks = [];
    }

    arrayTasks.push(value);
    createItem(value);
    localStorage.setItem("tasks", JSON.stringify(arrayTasks));
    input.value = "";
  }
});

function createItem(arg) {
  const item = document.createElement("div");
  item.classList.add("main__content-item");

  const text = document.createElement("p");
  text.classList.add("main__content-text");
  text.textContent = arg;

  const span = document.createElement("div");
  span.classList.add("fa-solid", "fa-xmark", "main__content-delete");

  item.append(text);
  item.append(span);

  box.append(item);
}

function LSGet() {
  box.innerHTML = '';
  let LSArray = JSON.parse(localStorage.getItem("tasks"));
  if (LSArray) {
    LSArray.forEach((item) => {
      createItem(item);
    });
  }
}

LSGet();

const itemBtn = document.querySelectorAll(".main__content-delete");

box.addEventListener("click", (e) => {
  let childContent = e.target.parentElement.childNodes[0].textContent;

  let LSArray = JSON.parse(localStorage.getItem("tasks"));

  let newArray = LSArray.filter((item) => item !== childContent);

  localStorage.setItem("tasks", JSON.stringify(newArray));
  LSGet();

  e.target.parentElement.remove();
  console.log(e.target.parentElement);
});
