// script.js
document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".filter-button");
  const images = document.querySelectorAll(".image img");

  // Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener("click", function() {
      const filter = button.getAttribute("data-filter");
      
      images.forEach(image => {
        if (filter === "all" || image.parentElement.classList.contains(filter)) {
          image.parentElement.style.display = "block";
        } else {
          image.parentElement.style.display = "none";
        }
      });
    });
  });

  // Open image in new tab functionality
  images.forEach(image => {
    image.addEventListener("click", function() {
      window.open(image.src, "_blank");
    });
  });
});
