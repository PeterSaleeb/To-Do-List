window.onload = () => {
  const form1 = document.querySelector("#addForm");

  let tasks = document.getElementById("tasks");
  let submit = document.getElementById("submit");

  let editTask = null;

  form1.addEventListener("submit", addTask);
  tasks.addEventListener("click", removeTask);
};

function addTask(e) {
  e.preventDefault();

  if (submit.value != "Submit") {
    console.log("Hello");

    editTask.childNodes[0].childNodes[0].nodeValue =
        document.getElementById("task").value;

    submit.value = "Submit";
    document.getElementById("task").value = "";

    document.getElementById("lblsuccess").innerHTML =
        "Text edited successfully";

    document.getElementById("lblsuccess").style.display = "block";

    setTimeout(function () {
        document.getElementById("lblsuccess").style.display = "none";
    }, 3000);

    return false;
}

  let newTask = document.getElementById("task").value;
  if (newTask.trim() == "" || newTask.trim() == null)
    return false; // if task input empty do nothing
  else document.getElementById("task").value = ""; //reset task value for future tasks

  let li = document.createElement("li");
  li.className = "list-group-item";

  let textDiv = document.createElement("div");
  textDiv.className = "col-6 col-xs-8 col-lg-10 px-0 ";
  textDiv.appendChild(document.createTextNode(newTask));

  let deleteButtonDiv = document.createElement("div");
  let deleteButton = document.createElement("button");

  deleteButton.className = "btn-danger btn btn-sm float-right delete w-100";

  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButtonDiv.appendChild(deleteButton);
  deleteButtonDiv.className = "col-3 col-xs-2 col-lg-1 ps-1";

  let editButtonDiv = document.createElement("div");
  let editButton = document.createElement("button");

  editButton.className = "btn-success btn btn-sm float-right edit w-100";

  editButton.appendChild(document.createTextNode("Edit"));
  editButtonDiv.appendChild(editButton);
  editButtonDiv.className = "col-3 col-xs-2 col-lg-1 ps-1";

  let rowDiv = document.createElement("div");
  rowDiv.className = "row align-items-center";

  rowDiv.appendChild(textDiv);
  rowDiv.appendChild(deleteButtonDiv);
  rowDiv.appendChild(editButtonDiv);

  li.appendChild(rowDiv);

  tasks.appendChild(li);
}

function removeTask(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you Sure?")) {
      let li = e.target.parentNode.parentNode.parentNode;
      tasks.removeChild(li);
      document.getElementById("lblsuccess").innerHTML =
        "Text deleted successfully";

      document.getElementById("lblsuccess").style.display = "block";

      setTimeout(function () {
        document.getElementById("lblsuccess").style.display = "none";
      }, 3000);
    }
  }
  if (e.target.classList.contains("edit")) {
    let taskText = e.target.parentNode.parentNode.childNodes[0].innerText;
    document.getElementById("task").value = taskText.trim();
    submit.value = "EDIT";
    editTask = e.target.parentNode.parentNode; // Store the reference to the task's li element
}
}

function toggleButton(ref, btnID) {
  document.getElementById(btnID).disabled = false;
}
