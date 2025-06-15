window.addEventListener('load', () => {
  console.log("Page loaded.");

  const grid = document.querySelector('.grid');
  if (!grid) return;

  // Initialize Masonry
  const msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true,
  });

  imagesLoaded(grid).on('progress', () => {
    console.log("Image loaded.");
    msnry.layout();
  });

  const modal = document.getElementById("displaymodal");
  const modalImg = document.getElementById("img01");
  const closeBtn = document.querySelector(".close");

  if (!modal || !modalImg || !closeBtn) return;

  // Event delegation for image clicks
  grid.addEventListener('click', (e) => {
    const img = e.target.closest('.grid-item > img');
    if (img) {
      modal.style.display = "block";
      modalImg.src = img.src;
    }
  });

  // Close modal on close button click
  closeBtn.onclick = () => {
    modal.style.display = "none";
    modalImg.src = "";
    modalImg.alt = "";
  };

  // Close modal on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
      modalImg.src = "";
      modalImg.alt = "";
    }
  });
});

