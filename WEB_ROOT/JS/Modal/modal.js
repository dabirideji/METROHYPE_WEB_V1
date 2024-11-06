const btn = document.getElementById('btn');
const closebtn = document.getElementById('closebtn');
const modal = document.getElementById('modal');
const Content = document.getElementById('Content');

btn.addEventListener('click', () => {
modal.classList.remove('hidden');
});

closebtn.addEventListener('click', () => {
modal.classList.add('hidden');
});

modal.addEventListener('click', (event) => {
if (event.target === modal) {
    modal.classList.add('hidden');
}
});