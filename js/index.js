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

    const editButton = document.createElement("i");
    //editButton.innerHTML = "Edit";
    // <i class="fa-solid fa-pen-to-square"></i>
    // <i class="fa-solid fa-check"></i>
    editButton.classList.add("fa-solid", "fa-pen-to-square");
    editButton.addEventListener("click", function() {
        if (!editMode) {
            enableEditMode(li);
            //editButton.innerHTML = "Save";
            editButton.classList.remove("fa-pen-to-squarey");
            editButton.classList.add("fa-check");
        } else {
            disableEditMode(li);
            //editButton.innerHTML = "Edit";
            editButton.classList.remove("fa-check");
            editButton.classList.add("fa-pen-to-square");
        }
        editMode = !editMode;
    });
    //<i class="fa-regular fa-trash-can"></i>
    const deleteButton = document.createElement("i");
    //deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("fa-regular", "fa-trash-can");
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
    if (editMode == false) {
        li.style.textDecoration = this.checked ? "line-through" : "none";
    }
    else this.checked = false;
    
}

function enableEditMode(li) {
    li.contentEditable = true;
    li.classList.add("editable");
}

function disableEditMode(li) {
    li.contentEditable = false;
    li.classList.remove("editable");
}