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
