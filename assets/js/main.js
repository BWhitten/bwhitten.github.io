var msnry;

window.addEventListener('load', (event) => {
  console.log("Page loaded.");

  msnry = new Masonry( '.grid', {
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  // use element for option
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  percentPosition: true,
  });

});


imagesLoaded('.grid', function( instance ) {
  console.log('all images are loaded');
  msnry.layout()
});