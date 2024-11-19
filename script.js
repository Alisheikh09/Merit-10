// Loading Screen
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 3000);
});

// Countdown Timer
const examDate = new Date("2025-02-15");
function updateCountdown() {
    const now = new Date();
    const diff = examDate - now;
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("exam-countdown").textContent = `${months} months, ${days} days, ${hours} hours`;
}
setInterval(updateCountdown, 1000);

// To-Do List
const tasks = [];
function addTask() {
    const taskInput = document.getElementById("task-input").value;
    if (taskInput) {
        tasks.push(taskInput);
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
    document.getElementById("completion-percentage").textContent = `${(tasks.length / 10) * 100}%`;
}
