const textarea = document.querySelector("textarea");
const result = document.querySelector("#result");

textarea.addEventListener("keyup", (e) => {
  createSpan(e.target.value);
  if (e.key === "Enter") {
    selectRandomSpans();
  }
});

function createSpan(value) {
  const spans = value
    .split(",")
    .filter((span) => span.trim() !== "")
    .map((span) => span.trim());

  result.innerHTML = "";

  spans.forEach((span) => {
    const tag = document.createElement("span");
    tag.innerHTML = span;
    result.appendChild(tag);
  });
}

function selectRandomSpans() {
  const spansCreated = document.querySelectorAll("span");
  for (let i = 0; i < spansCreated.length; i++) {
    spansCreated[Math.floor(Math.random() * spansCreated.length)].classList.add(
      "highlight"
    );
    break;
  }
}
