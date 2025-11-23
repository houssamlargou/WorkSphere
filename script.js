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
  roleValue = e.target.value;
});
// delete
const deleteIcon = document.querySelectorAll(".delete-icon");
// add experiences
const addExperienceBtn = document.getElementById("add-experience");
const experienceContent = document.getElementById("experience-content");
//photo
const photoInput = document.getElementById("photo-input");
// add icon
const addIcon = document.querySelectorAll(".add-icon");
const cardRoom = document.getElementById("card-room");

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
let list = [];
let dataIndex = 0;
let employees = [];
let receptionniste = [];
let securite = [];
let manager = [];
let nettoyage = [];
let it = [];
let imageURL = "";

function addEmployeeFormHandle(e) {
  e.preventDefault();
  if (photoInput.files && photoInput.files.length > 0) {
    imageURL = URL.createObjectURL(photoInput.files[0]);
  } else {
    imageURL =
      "data:image/png;base64,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";
  }
  if (
    usernameInput.value == "" ||
    emailInput.value == "" ||
    phoneInput.value == "" ||
    roleValue == ""
  )
    return;

  employees.push({
    id: id,
    username: usernameInput.value,
    role: roleValue,
    email: emailInput.value,
    phone: phoneInput.value,
    url: imageURL,
  });
  let cardContent = `
  <div
  data-id="${employees[dataIndex].id}"
  id="employee-card-${employees[dataIndex].id}"
          class="employee-card flex justify-between p-4 shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg items-center"
        >
          <div id="userProfileContainer" class="flex gap-2.5 items-center">
            <div class="userProfile w-10 h-10 rounded-full overflow-hidden">
            <img src="${employees[dataIndex].url}" class="w-full h-full object-cover object-center" />
            </div>
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
  // list
  list.push(employees[dataIndex]);
  // roles
  if (employees[dataIndex].role == "receptionniste")
    receptionniste.push(employees[dataIndex]);
  else if (employees[dataIndex].role == "it") it.push(employees[dataIndex]);
  else if (employees[dataIndex].role == "securite")
    securite.push(employees[dataIndex]);
  else if (employees[dataIndex].role == "manager")
    manager.push(employees[dataIndex]);
  else if (employees[dataIndex].role == "nettoyage")
    nettoyage.push(employees[dataIndex]);
  ///////////////////////////////
  dataIndex++;
  id++;
  hideForm();
}
employeeForm.addEventListener("submit", addEmployeeFormHandle.bind(this));

// delete

employeeCardsContainer.addEventListener("click", function (e) {
  let deleteTarget = e.target.closest(".delete-icon");
  let idTarget = e.target.closest(".employee-card").dataset.id;
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
// rooms
let conference = [];
let reception = [];
let serveurs = [];
let securiteRoom = [];
let personnel = [];
let archives = [];

// + icon
// conference
let cardRoomContent;
let cardRoomCount = 0;
let workerName = "";

addIcon.forEach((el) => {
  el.addEventListener("click", function (e) {
    if (conference.length >= 5) return;
    if (e.target.closest("#conference-room")) {
      if (receptionniste.length == 1) {
        workerName = receptionniste[0].username
          .split(" ")
          .map((el) => el[0])
          .join("")
          .toUpperCase("");
        cardRoomContent = `
       <div
               data-id="${receptionniste[0].id}" class="room-worker bg-amber-900 flex items-center justify-center flex-col relative"
              >
                            <i class='remove-icon bx bxs-minus-circle text-red-700 text-[10px] absolute top-0 right-0 translate-x-1/3 -translate-y-1/3'></i> 

                <div class="userProfile w-3 h-3 rounded-full overflow-hidden">
                  <img
                    src="${receptionniste[0].url}"
                    class="w-full h-full object-cover object-center"
                  />
                </div>
                <p class="text-amber-100 text-[10px]">${workerName}</p>
              </div>
       `;
        cardRoom.insertAdjacentHTML("beforeend", cardRoomContent);
        document
          .getElementById(`employee-card-${receptionniste[0].id}`)
          .remove();
        conference.push(receptionniste[0]);
        list.find((el, i) => {
          if (el.id == receptionniste[0].id) list.splice(i, 1);
        });
        receptionniste.splice(0, 1);
        // receptionniste = [];
      } else if (receptionniste.length > 1 && receptionniste.length <= 6) {
        selectWorkerConference.innerHTML = "";
        selectWorkerConference.classList.remove("hidden");
        selectWorkerConference.classList.add("flex", "flex-col", "gap-2");
        for (let i = 0; i < receptionniste.length; i++) {
          selectWorkerConference.insertAdjacentHTML(
            "beforeend",
            `
          <div
          data-id="${receptionniste[i].id}"
          id="conference-card-${receptionniste[i].id}"
          class="conference-card flex flex-col justify-between p-4 rounded-lg items-center gap-2 shadow-[0_0_20px_rgba(0,0,0,0.1)]"
        >
        <div id="userProfileContainer" class="flex gap-2.5 items-center">
            <div class="userProfile w-10 h-10 rounded-full overflow-hidden">
            <img src="${receptionniste[i].url}" class="w-full h-full object-cover object-center" />
            </div>
            <div>${receptionniste[i].username} - ${receptionniste[i].role}</div>
          </div>
        </div>
            `
          );
        }
      } else return;
    }
  });
});
//////////////////////////////////////
const selectWorkerConference = document.getElementById(
  "select-worker-conference"
);
selectWorkerConference.addEventListener("click", function (e) {
  const card = e.target.closest(".conference-card");
  if (!card) return;
  const cardId = +e.target.closest(".conference-card").dataset.id;
  const index = receptionniste.findIndex((el) => el.id == cardId);
  const worker = receptionniste[index];
  conference.push(worker);
  receptionniste.splice(index, 1);
  document.getElementById(`employee-card-${cardId}`).classList.add("hidden");
  card.classList.add("hidden");
  selectWorkerConference.classList.remove("flex", "flex-col", "gap-2");
  selectWorkerConference.classList.add("hidden");
  const uniqueWorker = employees.find((el) => el.id == cardId);
  workerName = uniqueWorker.username
    .split(" ")
    .map((el) => el[0])
    .join("")
    .toUpperCase("");
  cardRoomContent = `
      <div
                id="room-worker-${uniqueWorker.id}" data-id="${uniqueWorker.id}" class="room-worker bg-amber-900 flex items-center justify-center flex-col relative"
              >
              <i class='remove-icon bx bxs-minus-circle text-red-700 text-[10px] absolute top-0 right-0 translate-x-1/3 -translate-y-1/3'></i> 
                <div class="userProfile w-3 h-3 rounded-full overflow-hidden">
                  <img
                    src="${uniqueWorker.url}"
                    class="w-full h-full object-cover object-center"
                  />
                </div>
                <p class="text-amber-100 text-[10px]">${workerName}</p>
              </div>
      `;
  document.getElementById(`employee-card-${cardId}`).remove();
  cardRoom.insertAdjacentHTML("beforeend", cardRoomContent);
});

cardRoom.addEventListener("click", function (e) {
  const removeBtn = e.target.closest(".remove-icon");
  if (!removeBtn) return;
  const removeBtnId = +removeBtn.closest(".room-worker").dataset.id;
  let uniqueWorker = conference.find((el) => el.id == removeBtnId);
  let index = conference.findIndex((el) => el.id == removeBtnId);
  receptionniste.push(conference[index]);
  conference.splice(index, 1);
  let cardContent = `
  <div
  data-id="${uniqueWorker.id}"
  id="employee-card-${uniqueWorker.id}"
          class="employee-card flex justify-between p-4 shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg items-center"
        >
          <div id="userProfileContainer" class="flex gap-2.5 items-center">
            <div class="userProfile w-10 h-10 rounded-full overflow-hidden">
            <img src="${uniqueWorker.url}" class="w-full h-full object-cover object-center" />
            </div>
            <div>${uniqueWorker.username} - ${uniqueWorker.role}</div>
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
  removeBtn.closest(".room-worker").classList.add("hidden");
});
