//Variables
const elements = document.querySelectorAll(".reveal", "reveal-left");
const image = document.querySelector("#image");
// Variable declared with let to allow reassignment of the observer variable
let observer = new IntersectionObserver(
  (entries) => {
    // console.log(entries);
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  },
);
elements.forEach((element) => {
  observer.observe(element);
});
// Check if the width of the window object is less than 750px (for mobile devices) and remove the reveal class
function calcWidth() {
  if (window.innerWidth <= 750) {
    image.classList.remove("reveal");
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // threshold set to 1 to ensure the entire element is visible before triggering the animation
        threshold: 1,
      },
    );
  }
}
// Call when page load
calcWidth();
// Call when user resizes
window.addEventListener("resize", calcWidth);
