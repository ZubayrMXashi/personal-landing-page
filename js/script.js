// DOM Selections
const toggleBtn = document.getElementsByClassName("toggleBtn")[0];
const content = document.getElementsByClassName("content")[0];
// console.dir(content); // Just keeping this here for keeps sake

// States
let isSkillsOpen = false;

// Funtions
const toggleOpenSkills = () => {
  isSkillsOpen = !isSkillsOpen;
  renderSkillsState(isSkillsOpen);
};

const renderSkillsState = (isSkillsOpen) => {
  if (isSkillsOpen) {
    toggleBtn.classList.add("btnToggled");
    toggleBtn.setAttribute("aria-expanded", true);
    content.classList.add("contentShown");
  } else {
    toggleBtn.classList.remove("btnToggled");
    toggleBtn.setAttribute("aria-expanded", false);
    content.classList.remove("contentShown");
  }
};

// Event Listeners
toggleBtn.onclick = toggleOpenSkills;

toggleBtn.onkeydown = (e) => {
  if (e.code === "Enter" || e.code === "Space") {
    e.preventDefault();
    toggleOpenSkills();
  }
};
