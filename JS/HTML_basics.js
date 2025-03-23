const selectElement = document.querySelector("select");

function changeShownTag() {
  const selectedOption = selectElement.selectedOptions[0].value;
  const possibleTags = document.getElementsByClassName("possible");

  for (let tag of possibleTags) {
    if (selectedOption !== tag.id) {
      tag.classList.add("hidden");
    } else {
      tag.classList.remove("hidden");
    }
  }
}

changeShownTag();
