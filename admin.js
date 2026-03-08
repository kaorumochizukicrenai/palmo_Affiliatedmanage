const pageMeta = {
  "dashboard": { title: "ダッシュボード", desc: "日々の対応状況と優先タスクを確認します。" },
  "merchants": { title: "加盟店一覧", desc: "加盟店の状態、運用区分、最終連絡日などを確認します。" },
  "merchant-detail": { title: "加盟店詳細", desc: "加盟店情報、掲載情報、対応履歴、会報誌関連を確認します。" },
  "members": { title: "会員一覧", desc: "会員の基本情報と入会経路を確認します。" },
  "magazine": { title: "会報誌管理", desc: "次号掲載の確認状況と原稿進行を確認します。" },
  "notifications": { title: "通達配信", desc: "加盟店向けのお知らせを作成・配信する画面です。" },
  "complaints": { title: "苦情・改善依頼", desc: "顧客からの苦情と加盟店への改善依頼状況を管理します。" },
  "referrals": { title: "紹介管理", desc: "加盟店からの紹介実績と紹介料対象の状態を確認します。" },
  "tasks": { title: "対応履歴・タスク", desc: "電話、メール、会報誌確認などの日常タスクを一覧で確認します。" },
  "settings": { title: "マスタ・設定", desc: "運用マスタ、通知設定、権限の確認用モックです。" }
};

const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const pageTitle = document.getElementById('pageTitle');
const pageDesc = document.getElementById('pageDesc');

function showPage(page) {
  const target = pageMeta[page] ? page : 'dashboard';
  pages.forEach(p => p.classList.toggle('active', p.dataset.page === target));
  navItems.forEach(n => n.classList.toggle('active', n.dataset.page === target));
  pageTitle.textContent = pageMeta[target].title;
  pageDesc.textContent = pageMeta[target].desc;
  location.hash = target;
  document.getElementById('sidebar').classList.remove('open');
}

navItems.forEach(item => item.addEventListener('click', () => showPage(item.dataset.page)));
document.querySelectorAll('[data-page-link]').forEach(link => {
  link.addEventListener('click', () => showPage(link.dataset.pageLink));
});

document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

window.addEventListener('hashchange', () => showPage(location.hash.replace('#','')));
showPage(location.hash.replace('#','') || 'dashboard');