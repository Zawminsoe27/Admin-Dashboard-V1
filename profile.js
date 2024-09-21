let selector = (ele) => document.querySelector(ele);
let allSelector = (ele) => document.querySelectorAll(ele);

let lightBackgrounds = allSelector(".bg-light");
let blueBackgrounds = allSelector(".bg-primary");
let lightTexts = allSelector(".text-light");

let themeToggler = selector(".themeToggleBtn");
let themeValue = selector(".togglerIcon");
themeToggler.addEventListener("click", () => {
  lightBackgrounds.forEach((lightBackground) => {
    lightBackground.classList.toggle("bg-dark");
  });
  blueBackgrounds.forEach((blueBackground) => {
    blueBackground.classList.toggle("bg-dark");
  });
  lightTexts.forEach((lightText) => {
    lightText.classList.toggle("text-dark");
  });

  themeValue.textContent == "light_mode"
    ? (themeValue.textContent = "dark_mode")
    : (themeValue.textContent = "light_mode");
});
