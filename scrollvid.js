document.addEventListener("DOMContentLoaded", () => {
  const scrollIndicator = document.getElementById("scroll-indicator");

  function hideScrollIndicator() {
    if (window.scrollY > 5) {
      scrollIndicator.style.opacity = "0";
      scrollIndicator.style.pointerEvents = "none";
      window.removeEventListener("scroll", hideScrollIndicator);
    }
  }

  window.addEventListener("scroll", hideScrollIndicator);

  const fadeHeadings = document.querySelectorAll('.fade-in-up');
  const p1image = document.querySelector('#p1image');
  const paragraph1 = document.querySelector('#paragraph1');
  const learnMore = document.querySelector('#learn-more-button');
  const video = document.querySelector('.video');
  const demoimg = document.querySelector('#demoimage');
  const neuralnetwork = document.querySelector('#howitworksimage1')
  const arch = document.querySelector('#howitworksimage2')
  const mission = document.querySelector('#missionimage')

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;

        if (target === p1image) {
          p1image.classList.add('visible');

          if (paragraph1) {
            setTimeout(() => paragraph1.classList.add('visible'), 400);
          }

          if (learnMore) {
            setTimeout(() => learnMore.classList.add('visible'), 800);
          }

          observer.unobserve(p1image);
          if (paragraph1) observer.unobserve(paragraph1);
          if (learnMore) observer.unobserve(learnMore);

        } else if (target === paragraph1) {
          observer.unobserve(target);

        } else {
          target.classList.add('visible');
          observer.unobserve(target);
        }
      }
    });
  }, { threshold: 0.2 });

  fadeHeadings.forEach(element => observer.observe(element));
  if (p1image) observer.observe(p1image);
  if (paragraph1) observer.observe(paragraph1);
  if (learnMore) observer.observe(learnMore);
  if (video) observer.observe(video);
  if (demoimg) observer.observe(demoimg);
  if (neuralnetwork) observer.observe(neuralnetwork);
  if (arch) observer.observe(arch);
  if (mission) observer.observe(mission);
});