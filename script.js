document.addEventListener("DOMContentLoaded", () => {
  const starContainer = document.body;

  // Function to create stars
  function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    // Randomize the position and size of the star
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDuration = Math.random() * 5 + 3 + "s"; // Animation duration
    const starSize = Math.random() * 4 + 2 + "px"; // Size between 2px and 6px
    star.style.width = star.style.height = starSize;

    // Add a twinkle animation delay for smoother effects
    star.style.animationDelay = Math.random() * 2 + "s";

    // Append star to the body
    starContainer.appendChild(star);

    // Remove star after the animation ends to avoid memory leaks
    setTimeout(() => {
      star.remove();
    }, 8000);
  }

  // Function to generate stars at intervals
  function generateStars() {
    setInterval(createStar, 200); // Add a new star every 200ms
  }

  // Add a floating effect to sections on scroll
  function addScrollEffect() {
    const floatingElements = document.querySelectorAll(".floating");
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      floatingElements.forEach((element, index) => {
        // Adjust translateY based on scroll position
        element.style.transform = `translateY(${scrollY * 0.1 * (index + 1)}px)`;
      });
    });
  }

  // Call functions
  generateStars();
  addScrollEffect();

  // Smooth Scroll to Sections on Button Click
  const buttons = document.querySelectorAll(".interactive-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetID = btn.getAttribute("data-target");
      const targetSection = document.querySelector(targetID);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50, // Offset for smoother scrolling
          behavior: "smooth",
        });
      }
    });
  });

  // Dynamic Emoji Glow Effect on Hover
  const emojiImages = document.querySelectorAll(".emoji-img");
  emojiImages.forEach((emoji) => {
    emoji.addEventListener("mouseenter", () => {
      emoji.style.filter = "drop-shadow(0 0 30px #9b59b6)";
    });
    emoji.addEventListener("mouseleave", () => {
      emoji.style.filter = "drop-shadow(0 0 10px #9b59b6)";
    });
  });
});
