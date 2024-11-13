if (typeof gsap !== "undefined") {
  
  document.getElementById("menu-toggle").addEventListener("click", function () {
    const navMenu = document.getElementById("nav-menu");
    const menuButton = document.getElementById("menu-toggle");

    
    navMenu.classList.toggle("open");

    
    menuButton.classList.toggle("clicked");
  });

  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      
      targetSection.scrollIntoView({
        behavior: "smooth"
      });

      
      targetSection.classList.add("visible");
    });
  });

  
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
  }

  
  const sections = document.querySelectorAll("section");

  function showVisibleSections() {
    sections.forEach(section => {
      if (isInViewport(section) && !section.classList.contains("animated")) {
        gsap.fromTo(section, 
          { opacity: 0, y: 50 }, 
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" } 
        );
        section.classList.add("animated"); 
      }
    });
  }

  
  window.addEventListener("scroll", showVisibleSections);

  
  document.addEventListener("click", function (event) {
    const navMenu = document.getElementById("nav-menu");
    const menuButton = document.getElementById("menu-toggle");

    
    if (!navMenu.contains(event.target) && !menuButton.contains(event.target)) {
      navMenu.classList.remove("open");
      menuButton.classList.remove("clicked");
    }
  });
}
