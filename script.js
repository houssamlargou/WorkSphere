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
const employeeCardsContainer = document.getElementById(
  "employee-cards_container"
);

roleSelect.addEventListener("change", function (e) {
  roleSelect = e.target.value;
});
// delete
const deleteIcon = document.querySelectorAll(".delete-icon");
// add experiences
const addExperienceBtn = document.getElementById("add-experience");
const experienceContent = document.getElementById("experience-content");

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
// form
let id = 1;
let dataIndex = 0;
let employees = [];
employeeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    usernameInput.value == "" ||
    emailInput.value == "" ||
    phoneInput.value == "" ||
    roleSelect.value == ""
  )
    return;

  employees.push({
    id: id,
    username: usernameInput.value,
    role: roleSelect,
    email: emailInput.value,
    phone: phoneInput.value,
  });
  let cardContent = `
  <div
  data-id="${employees[dataIndex].id}"
  id="employee-card-${employees[dataIndex].id}"
          class="employee-card flex justify-between p-4 shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg"
        >
          <div class="flex gap-2.5 items-center">
            <div class="w-8 h-8 bg-black"></div>
            <div>${employees[dataIndex].username} - ${employees[dataIndex].role}</div>
          </div>
          <div class="delete-icon cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              style="fill: #fa5252"
            >
              <path
                d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"
              ></path>
            </svg>
          </div>
        </div>
    `;
  employeeCardsContainer.insertAdjacentHTML("beforeend", cardContent);
  dataIndex++;
  id++;
  hideForm();
});

// delete

employeeCardsContainer.addEventListener("click", function (e) {
  let deleteTarget = e.target.closest(".delete-icon");
  let idTarget = e.target.closest(".employee-card").dataset.id;
  console.log(idTarget);
  if (!deleteTarget) return;
  deleteTarget.closest(".employee-card").remove();
  for (const i in employees) {
    if (employees[i].id == idTarget) employees.splice(i, 1);
  }
});

// add experiences
let newExperience;
addExperienceBtn.addEventListener("click", function () {
  newExperience = `
          <div class="p-3 rounded-lg flex flex-col gap-4 bg-neutral-950/3">
            <div class="flex flex-col">
              <span class="font-bold">Entreprise</span>
              <input
                type="text"
                class="border border-neutral-700/20 py-2 px-3 rounded-lg bg-white"
              />
            </div>
            <div class="flex flex-col">
              <span class="font-bold">Date début</span>
              <input
                id="dateDebut-input"
                type="date"
                class="border border-neutral-700/20 py-2 px-3 rounded-lg bg-white w-full"
                placeholder="jj/mm/aaaa"
              />
            </div>
            <div class="flex flex-col">
              <span class="font-bold">Date fin</span>
              <input
                id="dateFin-input"
                type="date"
                placeholder="jj/mm/aaaa"
                class="border border-neutral-700/20 py-2 px-3 rounded-lg bg-white w-full"
              />
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="font-bold">Description</span>
              <textarea
                id="description-input"
                placeholder="Ajouter une description..."
                class="h-20 bg-white p-3"
              ></textarea>
            </div>
          </div>
  `;
  experienceContent.insertAdjacentHTML("beforeend", newExperience);
});
