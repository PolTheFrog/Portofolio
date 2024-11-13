// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // GSAP Animation for Hero Section
  gsap.from(".hero-content h2", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    delay: 0.5
  });
  
  gsap.from(".hero-content p", {
    opacity: 0,
    y: -30,
    duration: 1.5,
    delay: 1
  });
  
  gsap.from(".btn", {
    opacity: 0,
    y: 20,
    duration: 1.5,
    delay: 1.5
  });
  
  // Section Fade-In Animation (for when sections are in viewport)
  gsap.from(".section", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".section",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      toggleActions: "play none none reverse"
    }
  });
  