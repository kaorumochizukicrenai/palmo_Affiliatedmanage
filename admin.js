
const views = document.querySelectorAll(".view");
const navLinks = document.querySelectorAll(".nav-link");
const pageTitle = document.getElementById("pageTitle");
const taskCards = document.querySelectorAll(".task-card");
const logoutBackButton = document.querySelector('#logoutView [data-view="dashboardView"]');

const titles = {
  dashboardView: "ダッシュボード",
  membersView: "登録者一覧",
  surveySendView: "定期アンケート送付",
  surveyResultsView: "アンケート回答集計",
  staffView: "従業員追加",
  accountView: "ログイン情報変更",
  logoutView: "ログアウト"
};

function showView(viewId) {
  views.forEach((view) => {
    view.classList.remove("is-active");
  });

  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.classList.add("is-active");
  }

  navLinks.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === viewId);
  });

  pageTitle.textContent = titles[viewId] || "管理画面";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navLinks.forEach((button) => {
  button.addEventListener("click", () => {
    showView(button.dataset.view);
  });
});

taskCards.forEach((card) => {
  card.addEventListener("click", () => {
    showView(card.dataset.view);
  });
});

if (logoutBackButton) {
  logoutBackButton.addEventListener("click", () => {
    showView("dashboardView");
  });
}
