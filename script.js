let time = 25 * 60;
let timerInterval;
let sessions = localStorage.getItem("sessions") || 0;

document.getElementById("sessions").innerText = sessions;

function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  document.getElementById("timer").innerText =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      updateTimer();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      sessions++;
      localStorage.setItem("sessions", sessions);
      document.getElementById("sessions").innerText = sessions;
      alert("Pomodoro Completed!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  time = 25 * 60;
  updateTimer();
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (!task) return;

  const li = document.createElement("li");
  li.innerText = task;
  li.onclick = () => li.remove();
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
