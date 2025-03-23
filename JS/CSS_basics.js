const editableObject = document.getElementById("editable-object");
const customCSS = document.getElementById("editable-area");

function toggleStylesheet() {
  const link = document.getElementById("theme-stylesheet");

  if (link) {
    link.remove();
  } else {
    const newLink = document.createElement("link");
    newLink.id = "theme-stylesheet";
    newLink.rel = "stylesheet";
    newLink.href = "../CSS/index.css";
    document.head.appendChild(newLink);
  }
}

console.log(customCSS.innerHTML);

function modifyCSS() {
  const stringCSS = customCSS.value;

  editableObject.style = stringCSS;
}

modifyCSS();
