/**
 * Function which allows JS code execution from textarea HTML elements
 */
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", function (event) {
    if (event.target.tagName === "TEXTAREA" && event.key === "Enter") {
      event.preventDefault();

      const textarea = event.target;

      // We can't add a simple script tag, because the context would be global
      // If we have const a = 1 inside of a textarea
      // After the first execution you would receive "Uncaught SyntaxError: Failed to execute 'appendChild' on 'Node': Identifier 'a' has already been declared"
      // So we execute the code inplace
      try {
        const script = textarea.value.trim();
        eval(script);
      } catch (e) {
        console.error("Error executing script:", e);
      }
    }
  });
});
