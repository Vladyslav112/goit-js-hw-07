document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.querySelector(`#name-input`);
  const output = document.querySelector(`#name-output`);
  textInput.addEventListener("input", () => {
    const trimmedValue = textInput.value.trim();
    output.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
  });
});
