// elements
const addEmployeeBtn = document.getElementById("add-employee-btn");
const highlight = document.getElementById("highlight");
const header = document.getElementById("header");
const employeeForm = document.getElementById("employee-form");
const closeIcon = document.getElementById("form__close-icon");

// show-form;
function showForm() {
  document.body.classList.add("overflow-hidden");
  highlight.classList.remove("hidden");
  highlight.classList.add("visible");
  employeeForm.classList.remove("hidden");
  employeeForm.classList.add("flex");
}
addEmployeeBtn.addEventListener("click", showForm);
// hide-form
function hideForm() {
  document.body.classList.remove("overflow-hidden");
  highlight.classList.remove("visible");
  highlight.classList.add("hidden");
  employeeForm.classList.remove("flex");
  employeeForm.classList.add("hidden");
}
closeIcon.addEventListener("click", hideForm);
highlight.addEventListener("click", hideForm);
