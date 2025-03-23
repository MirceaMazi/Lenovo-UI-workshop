// Overall JS
const pages = ["index.html", "HTML_basics.html", "CSS_basics.html"];

function getCurrentPage() {
  const currentPage = window.location.pathname.substring(6);
  return pages.findIndex((page) => page === currentPage);
}

function navigatePreviousPage() {
  const currentIndex = getCurrentPage();
  window.location.href = pages[currentIndex - 1];
}

function navigateNextPage() {
  const currentIndex = getCurrentPage();
  window.location.href = pages[currentIndex + 1];
}

// This will be used for all editable instances
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", function (event) {
    if (event.target.tagName === "TEXTAREA" && event.key === "Enter") {
      event.preventDefault();

      const textarea = event.target;
      const editableObjectId = textarea.dataset.target;
      const editableObject = document.getElementById(editableObjectId);

      if (editableObject) {
        editableObject.style = textarea.value;
      }
    }
  });
});
