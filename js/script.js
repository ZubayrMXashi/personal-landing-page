const header = document.querySelector("header");
const a = document.querySelectorAll("a");
const skillsSection = document.getElementById("skills");

console.log(header);

a.forEach((a) => {
  if (a.parentElement.tagName === "NAV") {
    console.log(a);
  }
});

console.log(skillsSection);

console.log(`header title: `, header.innerText);

a.forEach((a) => {
  if (a.parentElement.tagName === "NAV") {
    console.log(`${a.text} Nav Link: `, a.href);
  }
});

// All together
console.log(skillsSection.textContent);

for (const element of skillsSection.children) {
  // Seperated
  if (element.children.length == 0) {
    console.log(element.textContent);
  } else {
    for (const innerBranchedElement of element.children) {
      if (innerBranchedElement.children.length == 0) {
        console.log(innerBranchedElement.textContent);
      } else {
        console.log(element.children);
      }
    }
  }
}

const toggleBtn = document.getElementsByClassName("toggleBtn")[0];
const content = document.getElementsByClassName("content")[0];
// console.dir(content); // Just keeping this here for keeps sake

// Deal with the Logic behind the button click
toggleBtn.onclick = () => {
  console.log("button clicked"); // Console log the button being clicked
  toggleBtn.classList.toggle("btnToggled"); // Toggle the class name for the button when it is clicked

  content.classList.toggle("contentShown"); // Toggle the class name for the content to show it
};
