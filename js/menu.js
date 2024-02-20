const open = document.getElementById("menu-btn");
const close = document.getElementById("menu-close");
const div = document.getElementById("menu");


open.addEventListener("click", function() {
  div.style.transform = 'translateX(0px)';
});

close.addEventListener("click", function() {
  div.style.transform = 'translateX(-120%)';
}); 