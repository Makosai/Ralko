import '../css/titlebar.css';

// Title
document.getElementById(
  'titlebrand'
).innerHTML = `${window.api.app.name} (v${window.api.app.version})`;

// Buttons
document.getElementById('minimize').addEventListener('click', () => {
  window.api.win.minimize();
});

const maximize = document.getElementById('maximize'); // TODO: Convert to e.target.innerHTML.
maximize.addEventListener('click', () => {
  if (window.api.win.maximize()) {
    maximize.innerHTML = '<span>&#128471;</span>';
  } else {
    maximize.innerHTML = '<span>&square;</span>';
  }
});

document.getElementById('close').addEventListener('click', () => {
  window.api.win.close();
});
