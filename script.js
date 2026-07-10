//Variables
const elements = document.querySelectorAll(".reveal", "reveal-left");
const observer = new IntersectionObserver(
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
