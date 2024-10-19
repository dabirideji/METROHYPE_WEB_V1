


function menuClick() {
  let menu = document.getElementById('menu');
  let sidebar = document.getElementById('sidebar');

  if (sidebar.classList.contains('hidden')) {
    sidebar.classList.remove('hidden');
  } else {
    sidebar.classList.add('hidden');
  }
}

// Initialize CKEditor
ClassicEditor.create(document.querySelector('#post-content')).catch((error) => {
  console.error(error);
});
