"use strict";

//author: Nguyen Huu Thang 
var topMenu = document.getElementById('ht-top-menu');
var toggleTopMenuIcon = document.getElementById('ht-toggle-top-menu-icon');
document.addEventListener('click', function (e) {
  if (toggleTopMenuIcon.contains(e.target)) {
    //click to toggle-top-menu-icon
    topMenu.classList.toggle('hidden');
    topMenu.classList.toggle('ht-top-menu-expended');
  } else {
    //click outside to top-menu
    if (topMenu.classList.contains('ht-top-menu-expended')) {
      topMenu.classList.remove('ht-top-menu-expended');
      topMenu.classList.add('hidden');
    }
  }
});