window.addEventListener('load', (event) => {
  console.log("Page loaded.");


  // init Masonry
  var grid = document.querySelector('.grid');


  var msnry = new Masonry( grid, {
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true,
  });

  imagesLoaded( grid ).on( 'progress', function() {
    // layout Masonry after each image loads
    console.log("Image loaded.");
    msnry.layout();
  });

});
