let menu = document.querySelector('.block__header');
function slideMenu(){
  menu.classList.toggle('active');
}

let comments = document.querySelector('.comments__twitter');
function openComment(){
  comments.classList.toggle('active');
}

const tabsBtn = document.querySelectorAll('.tabs_nav_btn');
const tabsItems = document.querySelectorAll('.tabs_item');
// console.log(tabsBtn);

tabsBtn.forEach(function(item) {
  item.addEventListener('click', function() {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);
    // console.log(currentTab);

    
    tabsBtn.forEach(function(item) {
      item.classList.remove('active');
    });
    tabsItems.forEach(function(item) {
      item.classList.remove('active');
    });
    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  });
});