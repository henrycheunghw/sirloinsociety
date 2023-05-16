// Masonry

var grid = document.querySelector('.msnry-grid');

var msnry = new Masonry( grid, {
    columnWidth: '.msnry-grid-sizer',
    gutter: '.msnry-gutter-sizer',
    itemSelector: '.msnry-grid-item',
    percentPosition: true
})

msnry.on('layoutComplete', function(laidOutItems){
    lazyloadInstance = new LazyLoad({
    callback_loaded: function(el) {
        console.log("Loaded", el);
        msnry.layout();
    }
    })
})

imagesLoaded( grid ).on( 'progress', function() {
    msnry.layout();
});

// Hamburger menu

const menu = document.querySelector(".js-menu");
const menu_open = document.querySelector(".js-menu-open");
const menu_close = document.querySelector(".js-menu-close");

menu_open.addEventListener("click", () => {
    menu.classList.add("open");
});

menu_close.addEventListener("click", () => {
    menu.classList.remove("open");
});

// Popup card

const subscribeButton = document.getElementById('subscribe-button');
const popupCard = document.getElementById('subscribe-success');
const closeButton = document.getElementById('close-button');

subscribeButton.addEventListener('click', () => {
    popupCard.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    popupCard.style.display = 'none';
});

// To top button
window.addEventListener('scroll', function() {
    var button = document.querySelector('.to-top-button');
    if (window.pageYOffset > 300) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });
  
// Custom cursor

var cursor = document.querySelector('.custom-cursor');
var mouseX = 0;
var mouseY = 0;
var delay = 10; // Adjust the delay value (in milliseconds) as desired

document.addEventListener('mousemove', function(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function animateCursor() {
  var distX = mouseX - cursor.offsetLeft;
  var distY = mouseY - cursor.offsetTop;
  var posX = cursor.offsetLeft + (distX / delay);
  var posY = cursor.offsetTop + (distY / delay);

  cursor.style.left = posX + 'px';
  cursor.style.top = posY + 'px';

  requestAnimationFrame(animateCursor);
};

animateCursor();

// Delay effect to navigating buttons
var buttons = document.querySelectorAll('.nav-btns');

function handleClick(event) {
  event.preventDefault();
  var target = event.target;
  
  target.classList.add('disabled');
  
  setTimeout(function() {
    target.classList.remove('disabled');
    window.location.href = target.href;
  }, 300); // Delay duration in milliseconds
}

buttons.forEach(function(button) {
  button.addEventListener('click', handleClick);
});