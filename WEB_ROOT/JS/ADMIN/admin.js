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