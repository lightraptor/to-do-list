const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let editMode = false; // Biến để xác định trạng thái chỉnh sửa

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
        return; // Thoát khỏi hàm nếu input trống
    }

    const task = document.createElement("div");
    task.className = "task";

    const li = document.createElement("li");
    li.innerHTML = inputBox.value;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", toggleTaskCompletion);

    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.classList.add("btn", "btn-primary");
    editButton.addEventListener("click", function() {
        if (!editMode) {
            enableEditMode(li);
            editButton.innerHTML = "Save";
            editButton.classList.remove("btn-primary");
            editButton.classList.add("btn-success");
        } else {
            disableEditMode(li);
            editButton.innerHTML = "Edit";
            editButton.classList.remove("btn-success");
            editButton.classList.add("btn-primary");
        }
        editMode = !editMode;
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("btn", "btn-primary");
    deleteButton.addEventListener("click", function() {
        task.remove();
    });

    task.appendChild(checkbox);
    task.appendChild(li);
    task.appendChild(editButton);
    task.appendChild(deleteButton);
    listContainer.appendChild(task);

    inputBox.value = '';
}

function toggleTaskCompletion() {
    const li = this.nextElementSibling;
    li.style.textDecoration = this.checked ? "line-through" : "none";
}

function enableEditMode(li) {
    li.contentEditable = true;
    li.classList.add("editable");
}

function disableEditMode(li) {
    li.contentEditable = false;
    li.classList.remove("editable");
}