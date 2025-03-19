let todoList = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet George', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false }
];
const ul = document.getElementById("myUL");
function displayTodoList() {
    ul.innerHTML = "";
    todoList.forEach(item => {
        const li = document.createElement("li");
        if (item.completed) {
            li.classList.add("checked");
        }
        li.innerHTML = `
                    ${item.task}
                    <span class="close" onclick="removeTask(${item.id})">×</span>
                `;
        ul.appendChild(li);
    });
}
window.onload = displayTodoList;
function removeTask(id) {
    todoList = todoList.filter(task => task.id !== id);
    displayTodoList();
}
function addTask() {
    const taskInput = document.getElementById("myInput").value;
    if (taskInput === "") {
        alert("Please enter a task!");
        return;
    }
    const newTask = {
        id: todoList.length + 1,
        task: taskInput,
        completed: false
    };
    todoList.push(newTask);
    document.getElementById("myInput").value = "";
    displayTodoList();
}