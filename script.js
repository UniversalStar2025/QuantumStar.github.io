// Dark/Light mode toggle & minor helpers
const body = document.documentElement;
const saved = localStorage.getItem('qs-mode');
if(saved === 'light'){ body.classList.add('light'); }
document.getElementById('modeToggle').addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('qs-mode', body.classList.contains('light') ? 'light' : 'dark');
});
document.getElementById('year').textContent = new Date().getFullYear();
