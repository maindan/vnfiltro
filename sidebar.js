
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('nav');
  const sidebarButton = document.querySelector('nav button');
  const iButton = document.querySelector('#button-i');

  sidebarButton.addEventListener('click', () => {
    if (sidebar.classList.contains('closed')) {
      sidebar.classList.remove('closed');
      iButton.classList.replace('bi-list', 'bi-x-lg');
    } else {
      sidebar.classList.add('closed');
      iButton.classList.replace('bi-x-lg', 'bi-list');
    }
  });
});