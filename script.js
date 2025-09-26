document.addEventListener("DOMContentLoaded", () => {
  const giftIcon = document.querySelector(".gift-icon");
  const loginCard = document.querySelector(".login-card");
  const flipCard = document.querySelector(".card");
  const nameInput = document.getElementById("name-input");

  // Hide flip card initially
  flipCard.style.display = "none";
  flipCard.style.opacity = 0;

  giftIcon.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (!name) {
      alert("Please enter your name first!");
      return;
    }

    // Personalize flip card
    flipCard.querySelector(".front p").textContent = 'Happy Birthday, ${name}!;

    // Fade out login card
    loginCard.style.transition = "opacity 0.8s ease";
    loginCard.style.opacity = 0;

    setTimeout(() => {
      loginCard.style.display = "none";

      // Show flip card with fade-in
      flipCard.style.display = "block";
      setTimeout(() => {
        flipCard.style.opacity = 1;
      }, 50);
    }, 800);
  });
});