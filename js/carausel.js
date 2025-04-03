document.addEventListener("DOMContentLoaded", function () {
 
  const myCarousel = new bootstrap.Carousel(
    document.getElementById("elixirCarousel"),
    {
      interval: 5000,
      wrap: true,
    }
  );


  const carouselElement = document.getElementById("elixirCarousel");
  carouselElement.addEventListener("mouseenter", function () {
    myCarousel.pause();
  });
  carouselElement.addEventListener("mouseleave", function () {
    myCarousel.cycle();
  });
});
