window.parseISOString = function parseISOString(s) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
};
const desc = document.querySelector("#seeking-description");
if (desc) desc.classList.add("hidden")
const checkbox = document.querySelector("#seeking-talent");
if (checkbox) checkbox.addEventListener("change", () => {
  if (checkbox.checked)
    document.querySelector("#seeking-description").classList.remove("hidden")
  else
    document.querySelector("#seeking-description").classList.add("hidden")
})