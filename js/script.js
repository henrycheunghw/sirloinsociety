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