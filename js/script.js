document.getElementById('menu-btn').addEventListener('click', function() {
  document.getElementById('nav-menu').classList.toggle('hidden');
});

document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('nav-menu').classList.add('hidden');
});

