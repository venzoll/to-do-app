// Select DOM elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// Handle form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

  // Create new task item
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  // Clear input
  input.value = "";
  input.focus(); // Focus input after adding a task
});

const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");
    const tasks = document.querySelectorAll("#todo-list li");

    tasks.forEach((task) => {
      switch (filter) {
        case "all":
          task.style.display = "flex";
          break;
        case "active":
          task.style.display = task.classList.contains("completed")
            ? "none"
            : "flex";
          break;
        case "completed":
          task.style.display = task.classList.contains("completed")
            ? "flex"
            : "none";
          break;
      }
    });
  });
});
