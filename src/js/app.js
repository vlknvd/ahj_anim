const btn = document.querySelector('.btn_collapse');
const container = document.querySelector('.collapse_container');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.toggle('collapse_container');
  container.classList.toggle('show');
});
