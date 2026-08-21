const shareBtn = document.querySelector(".share-btn");
const sharePortal = document.querySelector(".share-portal");

shareBtn.addEventListener("click", () => {
  console.log("The button was clicked successfully!");
  sharePortal.classList.toggle("active");
  shareBtn.classList.toggle("active");
});
