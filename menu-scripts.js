const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu ul');
menu.addEventListener('click', function() {
  menuList.style.display = (menuList.style.display === 'block') ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
  if (!menu.contains(event.target)) {
    menuList.style.display = 'none';
  }
});