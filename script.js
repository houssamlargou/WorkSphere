// elements
const addEmployeeBtn = document.getElementById("add-employee-btn");
const highlight = document.getElementById("highlight");
const header = document.getElementById("header");
const employeeForm = document.getElementById("employee-form");
const closeIcon = document.getElementById("form__close-icon");
// form
const usernameInput = document.getElementById("username-input");
let roleSelect = document.getElementById("role-select");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");

roleSelect.addEventListener("change", function (e) {
  roleSelect = e.target.value;
});

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
