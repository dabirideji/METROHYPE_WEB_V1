document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menu = document.getElementById('menu');
    const main = document.getElementById('main');

    menu.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');

        if (!sidebar.classList.contains('hidden')) {
            main.classList.add('md:ml-[250px]');
        } else {
            main.classList.remove('md:ml-[250px]');
        }
    });
});
















const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const sidebarToggle = document.getElementById('sidebarToggle');


sidebarToggle.addEventListener('click', () => {
  if (sidebar.classList.contains('-translate-x-full')) {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
  } else {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  }
});


overlay.addEventListener('click', () => {
  sidebar.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
});