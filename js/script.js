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

const wrapper = document.createElement("div"); // Makes Wrapper for skills section
wrapper.className = "wrapper"; // Name the Class for the skills section Wrapper to style it

const TBDiv = document.createElement("div"); // Makes Wrapper for the title and the button
TBDiv.className = "TBDiv"; // Name the Class for the title and button Wrapper to style it

const ContentDiv = document.createElement("div"); // Makes Wrapper for the content section (more like holds the ul)
ContentDiv.className = "ContentDiv"; // Name the class for the content section Wrapper to style it

// Wrap the elements in the divs
for (const element of skillsSection.children) {
  // Get all elements in the skills section (h2 and ul)
  if (element.tagName === "H2") {
    element.replaceWith(TBDiv); // Replace the h2 with the div
    TBDiv.append(element); // Put the h2 inside the div
  } else {
    element.replaceWith(ContentDiv); // Replace the content with the div
    ContentDiv.append(element); // Put the content inside the div
  }
}

const toggleBtn = document.createElement("button"); // Create the button
const arrow = document.createElement("span"); // Create span for arrow
arrow.textContent = "▾"; // Add the arrow into the span
arrow.className = "arrow"; // Name the Class for the Arrow to style it

toggleBtn.append(arrow); // Put the arrow inside the button
toggleBtn.className = "toggleBtn"; // Name the Class for the button to style it

// Deal with the Logic behind the button click
toggleBtn.onclick = () => {
  console.log("button clicked"); // Console log the button being clicked
  toggleBtn.classList.toggle("btnToggled"); // Toggle the class name for the button when it is clicked

  if (toggleBtn.className === "toggleBtn btnToggled") {
    wrapper.append(ContentDiv); // If it is opened add the content (show it)
  }

  if (toggleBtn.className === "toggleBtn") {
    ContentDiv.remove(); // If it is closed remove it (hide it)
  }
};

TBDiv.append(toggleBtn); // add the button to the title and button div

for (const element of skillsSection.children) {
  element.replaceWith(wrapper); // Replace the original skills section with this new div-wrapped skills section
  wrapper.append(element); // add the old skill section into this new div-wrapped skill section
}

// Make content closed (hidden/removed) in the original state, for it to be toggled (shown/hidden) with the button afterwards
if (toggleBtn.className === "toggleBtn") {
  const contentDiv = wrapper.children[1]; // Get a reference to the content div
  contentDiv.remove(); // Remove the content div (hide it)
}
