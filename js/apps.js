function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;

    span.onclick = function () {
      span.classList.toggle("done");
    };

    const actions = document.createElement("div");
    actions.className = "actions";

    const editBtn = document.createElement("button");
    editBtn.innerHTML = "✏️";
    editBtn.onclick = function () {
      Swal.fire({
        title: 'Edit your task',
        input: 'text',
        inputValue: span.textContent,
        showCancelButton: true,
        confirmButtonText: 'Save',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed && result.value.trim() !== "") {
          span.textContent = result.value.trim();
        }
      });
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.onclick = function () {
      li.classList.add("fade-out");
      setTimeout(() => li.remove(), 400);
    };

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }