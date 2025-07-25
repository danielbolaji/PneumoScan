document.addEventListener("DOMContentLoaded", () => {
  /*
  const section = document.querySelector("section.vid");
  const img = document.getElementById("scroll-img");
  const scrollIndicator = document.getElementById("scroll-indicator");

  const totalFrames = 600; 
  const framePrefix = "frames/frame";
  const frameExtension = ".jpg";

  const padNumber = (num, size) => {
    let s = "0000" + num;
    return s.slice(-size);
  };

  const scroll = () => {
    const scrollTop = window.scrollY;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const windowHeight = window.innerHeight;

    let scrollFraction = (scrollTop - sectionTop) / (sectionHeight - windowHeight);
    scrollFraction = Math.min(Math.max(scrollFraction, 0), 1);

    let frameIndex = Math.floor(scrollFraction * (totalFrames - 1)) + 1;
    let frameNumber = padNumber(frameIndex, 4);
    let frameSrc = `${framePrefix}${frameNumber}${frameExtension}`;

    img.src = frameSrc;

    if (scrollTop > 10) {
      scrollIndicator.style.opacity = "0";
      scrollIndicator.style.pointerEvents = "none";
    } else {
      scrollIndicator.style.opacity = "1";
      scrollIndicator.style.pointerEvents = "auto";
    }
  };

  scroll();
  window.addEventListener("scroll", scroll);
  */

  const section = document.querySelector('section.vid')
  const vid = document.querySelector('video')

  vid.pause

  const scroll = () => {
    const distance = window.scrollY
    const total = section.clientHeight - window.innerHeight

    let percentage = distance / total
    percentage = Math.max(0,percentage)
    percentage = Math.min(percentage,1)

    if (vid.duration > 0) {
      vid.currentTime = vid.duration * percentage
    }
  }

  scroll()
  window.addEventListener("scroll", scroll)

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