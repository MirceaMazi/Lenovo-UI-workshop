// Overall JS
const pages = [
  "index.html",
  "HTML_basics.html",
  "CSS_basics.html",
  "layout_fundamentals.html",
  "JS_fundamentals.html",
  "feedback_form.html",
];

function getCurrentPage() {
  const currentPage = window.location.pathname.substring(25);

  return pages.findIndex((page) => page === currentPage);
}

function navigatePreviousPage() {
  const currentIndex = getCurrentPage();

  if (currentIndex !== 1) {
    window.location.href = pages[currentIndex - 1];
  } else {
    window.location.href = "../index.html";
  }
}

function navigateNextPage() {
  const currentIndex = getCurrentPage();
  window.location.href = pages[currentIndex + 1];
}

/**
 * Main function used for real-time style manipulation
 *
 * This function listens for the Enter key press in a textarea and applies the CSS code entered in the textarea to the corresponding element.
 * It also handles the parsing of the CSS code to extract classes and IDs, and then dynamically adds/removes these classes to the target element.
 */
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", function (event) {
    if (event.target.tagName === "TEXTAREA" && event.key === "Enter") {
      event.preventDefault();

      const textarea = event.target;
      const editableObjectId = textarea.dataset.target;
      const editableObject = document.querySelector(
        `[data-targetable="${editableObjectId}"]`
      );

      if (editableObject) {
        const cssCode = textarea.value.trim();
        const parsedClassesAndIds = parseClassesAndIds(cssCode);

        applyClassesAndIds(editableObject, parsedClassesAndIds);

        const styleTagId = `dynamic-style-${editableObjectId}`;
        let existingStyle = document.getElementById(styleTagId);
        if (existingStyle) {
          existingStyle.remove();
        }

        if (cssCode) {
          const styleTag = document.createElement("style");
          styleTag.id = styleTagId;
          styleTag.innerHTML = cssCode;
          document.head.appendChild(styleTag);
        }
      }
    }
  });
});

/**
 * Helper function to parse CSS input and extract classes and IDs
 * @param {string} cssCode - The input CSS code from the textarea
 * @returns {Object} - An object with classes and ids for dynamic manipulation
 */
function parseClassesAndIds(cssCode) {
  const parsed = {
    classes: [],
    ids: [],
  };

  const classRegex = /\.([a-zA-Z0-9_-]+)/g; // Match classes (e.g., .class-name)
  const idRegex = /#([a-zA-Z0-9_-]+)/g; // Match ids (e.g., #id-name)

  let match;

  while ((match = classRegex.exec(cssCode)) !== null) {
    parsed.classes.push(match[1]);
  }

  while ((match = idRegex.exec(cssCode)) !== null) {
    parsed.ids.push(match[1]);
  }

  return parsed;
}

/**
 * Helper function to apply/remove classes and IDs to/from the target element
 * @param {HTMLElement} targetElement - The target element to which the classes and IDs will be applied
 * @param {Object} parsedClassesAndIds - The parsed classes and ids
 */
function applyClassesAndIds(targetElement, parsedClassesAndIds) {
  targetElement.className = "";

  parsedClassesAndIds.classes.forEach((cls) => {
    targetElement.classList.add(cls);
  });

  if (parsedClassesAndIds.ids.length > 0) {
    targetElement.id = parsedClassesAndIds.ids[0];
  }
}
