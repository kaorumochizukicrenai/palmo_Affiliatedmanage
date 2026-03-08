const meta = {
  home: { title: "ホーム", desc: "やること、未回答事項、お知らせを確認します。" },
  store: { title: "店舗情報確認", desc: "店舗の基本情報や紹介文の確認・変更申請を行います。" },
  benefits: { title: "会員特典", desc: "会員向け特典の内容確認と変更申請を行います。" },
  magazine: { title: "会報誌確認", desc: "次号会報誌の掲載内容に回答します。" },
  posters: { title: "掲示物・POP", desc: "掲示状況の報告や再送依頼を行います。" },
  requests: { title: "改善依頼・問い合わせ", desc: "運営からの改善依頼への回答や問い合わせを送信します。" },
  referral: { title: "会員紹介登録", desc: "紹介したお客さまの情報を登録します。" },
  history: { title: "通知・対応履歴", desc: "これまでの通知や申請・対応履歴を確認します。" }
};
const navs = document.querySelectorAll('.portal-nav-item');
const pages2 = document.querySelectorAll('.page');
const pageTitle2 = document.getElementById('pageTitle');
const pageDesc2 = document.getElementById('pageDesc');

function show(page){
  const target = meta[page] ? page : 'home';
  pages2.forEach(p => p.classList.toggle('active', p.dataset.page === target));
  navs.forEach(n => n.classList.toggle('active', n.dataset.page === target));
  pageTitle2.textContent = meta[target].title;
  pageDesc2.textContent = meta[target].desc;
  location.hash = target;
  document.getElementById('sidebar').classList.remove('open');
}
navs.forEach(n => n.addEventListener('click', ()=> show(n.dataset.page)));
document.querySelectorAll('[data-page-link]').forEach(el => el.addEventListener('click', ()=> show(el.dataset.pageLink)));
document.getElementById('menuToggle').addEventListener('click', ()=> document.getElementById('sidebar').classList.toggle('open'));
window.addEventListener('hashchange', ()=> show(location.hash.replace('#','')));
show(location.hash.replace('#','') || 'home');