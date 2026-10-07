/* =========================================
   StudyFlow - Final Website JavaScript
========================================= */

const $ = id => document.getElementById(id);

const now = new Date();

function getDateKey(date = new Date()) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}

const todayKey = getDateKey(now);

let timerSeconds = 0;
let timerInterval = null;
let timerRunning = false;


/* =========================================
   Storage
========================================= */

function taskKey(date = todayKey) {
  return "studyflow_final_tasks_" + date;
}

function timeKey(date = todayKey) {
  return "studyflow_final_time_" + date;
}

function subjectTimeKey(date = todayKey) {
  return "studyflow_final_subject_time_" + date;
}

function loadTasks(date = todayKey) {
  try {
    return JSON.parse(localStorage.getItem(taskKey(date))) || [];
  } catch {
    return [];
  }
}

function saveTasks(tasks, date = todayKey) {
  localStorage.setItem(
    taskKey(date),
    JSON.stringify(tasks)
  );

  updateEverything();
}

function loadSubjectTimes(date = todayKey) {
  try {
    return JSON.parse(
      localStorage.getItem(subjectTimeKey(date))
    ) || {};
  } catch {
    return {};
  }
}

function saveSubjectTimes(data, date = todayKey) {
  localStorage.setItem(
    subjectTimeKey(date),
    JSON.stringify(data)
  );
}


/* =========================================
   Date
========================================= */

function showToday() {
  const el = $("todayDate");

  if (!el) return;

  el.textContent = now.toLocaleDateString(
    "ja-JP",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long"
    }
  );
}


/* =========================================
   Tasks
========================================= */

function addTask() {

  const subject = $("subjectInput")?.value.trim();
  const content = $("contentInput")?.value.trim();
  const minutes = Number($("minutesInput")?.value || 0);
  const priority = $("priorityInput")?.value || "普通";

  if (!content) {
    alert("学習内容を入力してください。");
    return;
  }

  const tasks = loadTasks();

  tasks.push({
    id: Date.now(),
    subject: subject || "その他",
    content,
    minutes: Math.max(0, minutes),
    priority,
    completed: false,
    createdAt: new Date().toISOString()
  });

  localStorage.setItem(
    taskKey(),
    JSON.stringify(tasks)
  );

  if ($("contentInput")) $("contentInput").value = "";
  if ($("minutesInput")) $("minutesInput").value = "";

  updateEverything();
}


function toggleTask(id) {

  const tasks = loadTasks();

  const task = tasks.find(
    item => item.id === id
  );

  if (!task) return;

  task.completed = !task.completed;

  localStorage.setItem(
    taskKey(),
    JSON.stringify(tasks)
  );

  updateEverything();
}


function deleteTask(id) {

  const tasks = loadTasks();

  const task = tasks.find(
    item => item.id === id
  );

  if (!task) return;

  const ok = confirm(
    `「${task.content}」を削除しますか？`
  );

  if (!ok) return;

  const newTasks = tasks.filter(
    item => item.id !== id
  );

  localStorage.setItem(
    taskKey(),
    JSON.stringify(newTasks)
  );

  updateEverything();
}


function escapeHTML(value) {

  const div = document.createElement("div");

  div.textContent = String(value);

  return div.innerHTML;
}


function renderTasks() {

  const list = $("taskList");

  if (!list) return;

  const tasks = loadTasks();

  if (tasks.length === 0) {

    list.innerHTML = `
      <div class="empty-state">
        今日の学習予定はまだありません。<br>
        上のフォームから追加してください。
      </div>
    `;

    return;
  }

  const priorityOrder = {
    "高": 1,
    "普通": 2,
    "低": 3
  };

  tasks.sort((a, b) => {

    if (a.completed !== b.completed) {
      return Number(a.completed) - Number(b.completed);
    }

    return (
      (priorityOrder[a.priority] || 2) -
      (priorityOrder[b.priority] || 2)
    );

  });

  list.innerHTML = tasks.map(task => {

    const timeText =
      task.minutes > 0
        ? `${task.minutes}分`
        : "時間未設定";

    return `
      <div class="task-item ${task.completed ? "completed" : ""}">

        <input
          type="checkbox"
          ${task.completed ? "checked" : ""}
          onchange="toggleTask(${task.id})"
          aria-label="完了"
        >

        <div class="task-subject">
          ${escapeHTML(task.subject)}
        </div>

        <div class="task-content">
          ${escapeHTML(task.content)}
        </div>

        <div class="task-time">
          ${timeText}
        </div>

        <div class="task-priority">
          優先度：${escapeHTML(task.priority)}
        </div>

        <button
          class="danger-btn"
          onclick="deleteTask(${task.id})"
          title="削除"
        >
          ×
        </button>

      </div>
    `;

  }).join("");
}


/* =========================================
   Today's progress
========================================= */

function updateTodayStats() {

  const tasks = loadTasks();

  const total = tasks.length;

  const done = tasks.filter(
    task => task.completed
  ).length;

  const percent =
    total === 0
      ? 0
      : Math.round(done / total * 100);

  const plannedMinutes = tasks.reduce(
    (sum, task) => sum + Number(task.minutes || 0),
    0
  );

  if ($("todayProgress")) {
    $("todayProgress").textContent =
      percent + "%";
  }

  if ($("progressDetail")) {
    $("progressDetail").textContent =
      `${done} / ${total} 完了`;
  }

  if ($("progressBar")) {
    $("progressBar").style.width =
      percent + "%";
  }

  if ($("plannedTime")) {
    $("plannedTime").textContent =
      formatMinutes(plannedMinutes);
  }

  if ($("actualTime")) {
    $("actualTime").textContent =
      formatSeconds(timerSeconds);
  }
}


/* =========================================
   Timer
========================================= */

function loadTimer() {

  timerSeconds =
    Number(localStorage.getItem(timeKey())) || 0;

  updateTimerDisplay();
}


function startTimer() {

  if (timerRunning) return;

  timerRunning = true;

  if ($("timerStatus")) {
    $("timerStatus").textContent = "学習中";
  }

  timerInterval = setInterval(() => {

    timerSeconds++;

    localStorage.setItem(
      timeKey(),
      String(timerSeconds)
    );

    const subject =
      $("timerSubject")?.value || "その他";

    const subjectTimes = loadSubjectTimes();

    subjectTimes[subject] =
      Number(subjectTimes[subject] || 0) + 1;

    saveSubjectTimes(subjectTimes);

    updateTimerDisplay();

    if (timerSeconds % 10 === 0) {
      renderHistory();
      renderStatistics();
    }

  }, 1000);
}


function pauseTimer() {

  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = null;
  timerRunning = false;

  if ($("timerStatus")) {
    $("timerStatus").textContent = "一時停止";
  }

  updateEverything();
}


function resetTimer() {

  const ok = confirm(
    "今日の学習時間をリセットしますか？"
  );

  if (!ok) return;

  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = null;
  timerRunning = false;
  timerSeconds = 0;

  localStorage.setItem(
    timeKey(),
    "0"
  );

  localStorage.setItem(
    subjectTimeKey(),
    JSON.stringify({})
  );

  if ($("timerStatus")) {
    $("timerStatus").textContent = "準備完了";
  }

  updateEverything();
}


function updateTimerDisplay() {

  if ($("timerDisplay")) {
    $("timerDisplay").textContent =
      formatClock(timerSeconds);
  }

  if ($("actualTime")) {
    $("actualTime").textContent =
      formatSeconds(timerSeconds);
  }
}


/* =========================================
   Formatting
========================================= */

function formatClock(seconds) {

  const h = Math.floor(seconds / 3600);

  const m = Math.floor(
    (seconds % 3600) / 60
  );

  const s = seconds % 60;

  return [
    h,
    m,
    s
  ]
    .map(value =>
      String(value).padStart(2, "0")
    )
    .join(":");
}


function formatSeconds(seconds) {

  const hours =
    Math.floor(seconds / 3600);

  const minutes =
    Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
    return `${hours}時間${minutes}分`;
  }

  return `${minutes}分`;
}


function formatMinutes(minutes) {

  const hours =
    Math.floor(minutes / 60);

  const mins =
    minutes % 60;

  if (hours > 0) {
    return `${hours}時間${mins}分`;
  }

  return `${mins}分`;
}


/* =========================================
   History
========================================= */

function getStoredDates() {

  const dates = new Set();

  for (let i = 0; i < localStorage.length; i++) {

    const key = localStorage.key(i);

    if (
      key &&
      key.startsWith("studyflow_final_tasks_")
    ) {
      dates.add(
        key.replace(
          "studyflow_final_tasks_",
          ""
        )
      );
    }

    if (
      key &&
      key.startsWith("studyflow_final_time_")
    ) {
      dates.add(
        key.replace(
          "studyflow_final_time_",
          ""
        )
      );
    }
  }

  dates.add(todayKey);

  return Array.from(dates)
    .sort()
    .reverse();
}


function renderHistory() {

  const list = $("historyList");

  if (!list) return;

  const dates = getStoredDates();

  const records = dates.map(date => {

    const tasks = loadTasks(date);

    const total = tasks.length;

    const done = tasks.filter(
      task => task.completed
    ).length;

    const percent =
      total === 0
        ? 0
        : Math.round(done / total * 100);

    const seconds =
      Number(
        localStorage.getItem(timeKey(date))
      ) || 0;

    return {
      date,
      total,
      done,
      percent,
      seconds
    };

  }).filter(record =>
    record.total > 0 ||
    record.seconds > 0
  );

  if (records.length === 0) {

    list.innerHTML = `
      <div class="empty-state">
        まだ学習記録がありません。
      </div>
    `;

    return;
  }

  list.innerHTML =
    records.slice(0, 14).map(record => {

      return `
        <div class="history-item">

          <div class="history-head">

            <span>
              ${formatDate(record.date)}
            </span>

            <span>
              ${record.percent}%
            </span>

          </div>

          <div class="history-detail">
            ${record.done}/${record.total} 完了
            ・ 学習時間 ${formatSeconds(record.seconds)}
          </div>

          <div class="progress-track">
            <div
              class="progress-bar"
              style="width:${record.percent}%"
            ></div>
          </div>

        </div>
      `;

    }).join("");
}


function formatDate(dateKeyValue) {

  const date =
    new Date(dateKeyValue + "T00:00:00");

  return date.toLocaleDateString(
    "ja-JP",
    {
      month: "long",
      day: "numeric",
      weekday: "short"
    }
  );
}


/* =========================================
   Statistics
========================================= */

function getLastNDates(number) {

  const dates = [];

  for (let i = 0; i < number; i++) {

    const date = new Date();

    date.setDate(
      date.getDate() - i
    );

    dates.push(getDateKey(date));
  }

  return dates;
}


function renderStatistics() {

  const last7Days =
    getLastNDates(7);

  let weeklySeconds = 0;
  let weeklyTasks = 0;
  let weeklyCompleted = 0;

  const subjectTotals = {};

  last7Days.forEach(date => {

    weeklySeconds +=
      Number(
        localStorage.getItem(timeKey(date))
      ) || 0;

    const tasks = loadTasks(date);

    weeklyTasks += tasks.length;

    weeklyCompleted +=
      tasks.filter(
        task => task.completed
      ).length;

    const subjectTimes =
      loadSubjectTimes(date);

    Object.entries(subjectTimes)
      .forEach(([subject, seconds]) => {

        subjectTotals[subject] =
          Number(subjectTotals[subject] || 0)
          + Number(seconds || 0);

      });

  });

  const weeklyRate =
    weeklyTasks === 0
      ? 0
      : Math.round(
          weeklyCompleted /
          weeklyTasks *
          100
        );

  if ($("weeklyTime")) {
    $("weeklyTime").textContent =
      formatSeconds(weeklySeconds);
  }

  if ($("weeklyRate")) {
    $("weeklyRate").textContent =
      weeklyRate + "%";
  }

  if ($("studyStreak")) {
    $("studyStreak").textContent =
      calculateStreak() + "日";
  }

  renderSubjectStatistics(
    subjectTotals
  );
}


function calculateStreak() {

  let streak = 0;

  for (let i = 0; i < 365; i++) {

    const date = new Date();

    date.setDate(
      date.getDate() - i
    );

    const key =
      getDateKey(date);

    const seconds =
      Number(
        localStorage.getItem(timeKey(key))
      ) || 0;

    const tasks =
      loadTasks(key);

    const studied =
      seconds > 0 ||
      tasks.some(
        task => task.completed
      );

    if (studied) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}


function renderSubjectStatistics(subjectTotals) {

  const container =
    $("subjectStats");

  if (!container) return;

  const entries =
    Object.entries(subjectTotals)
      .filter(
        ([, seconds]) =>
          Number(seconds) > 0
      )
      .sort(
        (a, b) => b[1] - a[1]
      );

  if (entries.length === 0) {

    container.innerHTML = `
      <div class="empty-state">
        タイマーを使うと、
        科目別の学習時間が表示されます。
      </div>
    `;

    return;
  }

  container.innerHTML =
    entries.map(([subject, seconds]) => `
      <div class="history-item">

        <div class="history-head">
          <span>${escapeHTML(subject)}</span>
          <span>${formatSeconds(seconds)}</span>
        </div>

      </div>
    `).join("");
}


/* =========================================
   Enter shortcut
========================================= */

function setupInputs() {

  const content =
    $("contentInput");

  if (!content) return;

  content.addEventListener(
    "keydown",
    event => {

      if (event.key === "Enter") {
        addTask();
      }

    }
  );
}


/* =========================================
   Update
========================================= */

function updateEverything() {

  renderTasks();
  updateTodayStats();
  updateTimerDisplay();
  renderHistory();
  renderStatistics();
}


/* =========================================
   Start website
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    showToday();
    loadTimer();
    setupInputs();
    updateEverything();

  }
);
