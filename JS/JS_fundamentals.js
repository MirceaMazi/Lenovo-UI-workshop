/**
 * Function which allows JS code execution from textarea HTML elements
 */
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", function (event) {
    if (event.target.tagName === "TEXTAREA" && event.key === "Enter") {
      event.preventDefault();

      const textarea = event.target;
      const scriptTagId = "dynamic-script";

      const existingScript = document.getElementById(scriptTagId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }

      const script = document.createElement("script");
      script.textContent = textarea.value.trim();
      script.id = scriptTagId;
      document.body.appendChild(script);
    }
  });
});
