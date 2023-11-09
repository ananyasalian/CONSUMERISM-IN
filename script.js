// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle the visibility of Flourish embeds
  function handleFlourishVisibility() {
    const flourishEmbeds = document.querySelectorAll('.flourish-embed');
    
    flourishEmbeds.forEach((embed) => {
      if (isInViewport(embed)) {
        embed.style.opacity = 1; // Make it visible
      } else {
        embed.style.opacity = 0; // Hide it
      }
    });
  }
  
  window.addEventListener('scroll', handleFlourishVisibility);

  window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var elementTop = document.querySelector('.home-page .overlap-group-2').offsetTop;
    if (scrollTop >= elementTop) {
      document.querySelector('.home-page .overlap-group-2').style.opacity = 1;
    }
  });

 


  document.addEventListener("DOMContentLoaded", function () {
    const imagesToAnimate = document.querySelectorAll(".home-page [class^='image-']");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.animationPlayState = "running";
          } else {
            entry.target.style.opacity = "0";
            entry.target.style.animationPlayState = "paused";
          }
        });
      },
      { threshold: 0.5 }
    );
  
    imagesToAnimate.forEach((image) => {
      observer.observe(image);
    });
  });
  
 
  document.addEventListener("DOMContentLoaded", function () {
    const imagesToAnimate = document.querySelectorAll(".home-page [class^='image-']");
  
    let currentIndex = 0;
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateImage(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    imagesToAnimate.forEach((image) => {
      observer.observe(image);
    });
  
    function animateImage(image) {
      setTimeout(() => {
        image.style.opacity = "1";
        image.style.transform = "translateX(0)";
      }, currentIndex * 10000); 
      currentIndex++;
    }
  });
  


  