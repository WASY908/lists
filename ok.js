const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // This is the multiplication symbol (×) used as a delete button
    li.appendChild(span);
  }
  inputBox.value = "";
  savedata();
}

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");  // Toggles the checked class for tasks
    savedata();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();  // Removes the task when the delete button is clicked
    savedata();
  }
}, false);

function savedata() {
  localStorage.setItem("data", listContainer.innerHTML); // Saves the current list to local storage
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data"); // Loads the list from local storage
}

showTask();
