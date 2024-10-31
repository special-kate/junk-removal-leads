document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".progress-step");
  const carousel = document.getElementById("carouselExampleIndicators");

  function updateProgressIndicator(index) {
    // Update the progress indicator steps
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === index);
    });
    console.log(`Progress step ${index + 1} is active`);
  }

  // Initialize the active class on the first step
  updateProgressIndicator(0);

  // Listen for Bootstrap carousel's slide event to update progress indicator
  carousel.addEventListener("slide.bs.carousel", function (event) {
    updateProgressIndicator(event.to);
  });
});
