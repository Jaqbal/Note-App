const notesContainer = document.querySelector(".notes-container");
console.log(notesContainer);
const createBtn = document.querySelector(".btn");
console.log(createBtn);
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

let notes = document.querySelector(".input-box");
console.log(notes);
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src =
    "data:image/png;base64,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";
  notesContainer.appendChild(inputBox).appendChild(img);
});
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
