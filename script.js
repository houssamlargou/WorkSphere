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
const cardRoomConference = document.getElementById("card-room-conference");

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
let imageURL = "";
roleSelect.addEventListener("change", function (e) {
  roleValue = e.target.value;
  
});
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

  console.log(roleValue);
  

 
  ///////////////////////////////
  dataIndex++;
  id++;

  displaWorker();
  hideForm();
}

// employees.forEach((el) => {
//   console.log();
// });
employeeForm.addEventListener("submit", addEmployeeFormHandle.bind(this));

function displaWorker() {
  employeeCardsContainer.innerHTML = "";

  employees.forEach((el) => {
    employeeCardsContainer.innerHTML += `
  <div
  data-id="${el.id}"
  id="employee-card-${el.id}"
          class="employee-card flex justify-between p-4 shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg items-center"
        >
          <div id="userProfileContainer" class="flex gap-2.5 items-center">
            <div class="userProfile w-10 h-10 rounded-full overflow-hidden">
            <img src="${el.url}" class="w-full h-full object-cover object-center" />
            </div>
            <div id="profile-${el.id}" >${el.username} - ${el.role}</div>
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
  });
}

const addSalles = document.querySelectorAll(".add-icon");
let selectors = document.getElementById("selectors");
const closeBtn = document.getElementById("closeBtn");
const selectWorkers = document.getElementById("select-workers");
const cardRoomReception = document.getElementById("card-room-reception");
const cardRoomsServer = document.getElementById("card-room-server");
const cardRoomsSc = document.getElementById("card-room-security");
const cardRoomsPr = document.getElementById("card-room-staff");
const cardRoomsAr = document.getElementById("card-room-archive");
const prolifeWorkersPost = document.getElementById("profile-workers-post")
const prolifeWorker = document.getElementById("profile-worker")
// rooms
let conference = [];
let receptionW = [];
let serveurs = [];
let securiteRoom = [];
let personnel = [];
let archives = [];

const salles = [
  "conference",
  "serveur",
  "security",
  "reception",
  "staff",
  "archive",
];
addSalles.forEach((el, index) => {
  el.addEventListener("click", () => {
    postWorkers(salles[index]);

    selectWorkers.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  selectWorkers.classList.add("hidden");
});

let arrWorkers = [];

function postWorkers(salle) {
  selectors.innerHTML = "";

  if (salle) {
    if (salle === "conference") {
      arrWorkers = employees.filter(
        (item) =>
          item.role === "manager" ||
          item.role === "receptionniste" ||
          item.role === "nettoyage"
      );
    }

    if (salle === "reception") {
      arrWorkers = employees.filter(
        (item) =>
          item.role === "manager" ||
          item.role === "receptionniste" ||
          item.role === "nettoyage" ||
          item.role === "autre"
      );
    }

    if (salle === "serveur") {
      arrWorkers = employees.filter(
        (item) => item.role === "manager" || item.role === "it"
      );
    }

    if (salle === "security") {
      arrWorkers = employees.filter(
        (item) => item.role === "manager" || item.role === "securite"
      );
    }

    if (salle === "archive") {
      arrWorkers = employees.filter((item) => item.role === "manager");
    }

    if (salle === "personnel") {
      arrWorkers = employees.filter(
        (item) =>
          item.role === "manager" ||
          item.role === "receptionniste" ||
          item.role === "nettoyage"
      );
    }
  }

  arrWorkers.forEach((el) => {
    selectors.innerHTML += `
        <div class="bg-white flex items-center gap-2 p-2 rounded-sm">
            <img
              class="w-13 h-13 rounded-full"
              src="/houssam.png"
              alt="profile"
            />
            <div class="">
              <p id="profile-${el.id}" class="font-semibold text-xl">${el.username}</p>
              <p class="font-semibold">${el.role}</p>
            </div>
            <p id="plus-${el.id}" class="font-semibold cursor-pointer text-gray-600 ml-auto">&plus;</p>
          </div>
`;
  });

  arrWorkers.forEach((el)=>{
    const openProfile = document.getElementById(`profile-${el.id}`)
  console.log(openProfile);
  
    openProfile.addEventListener('click' , ()=>{


      profile(el)
    })
  
  })


  

  arrWorkers.forEach((el) => {
    const plus = document.getElementById(`plus-${el.id}`);

    plus.addEventListener("click", () => {
      removeCardFromSalle(el, salle);
      // arrWorkers = arrWorkers.filter((ele) =>  ele.id !== el.id)

      //  postWorkers(salle)
    });
  });
}

function removeCardFromSalle(el, salle) {
  if (salle !== "conference") {
    conference = conference.filter((item) => item.id !== el.id);
  }
  if (salle !== "reception") {
    receptionW = receptionW.filter((item) => item.id !== el.id);
  }
  if (salle !== "security") {
    securiteRoom = securiteRoom.filter((item) => item.id !== el.id);
  }
  if (salle !== "serveur") {
    serveurs = serveurs.filter((item) => item.id !== el.id);
  }
  if (salle !== "staff") {
    personnel = personnel.filter((item) => item.id !== el.id);
  }
  if (salle !== "archive") {
    archives = archives.filter((item) => item.id !== el.id);
  }
  if (salle !== "backHome") {
    arrWorkers = arrWorkers.filter((item) => item.id !== el.id);
  }

  if (salle !== "home") {
    employees = employees.filter((item) => item.id !== el.id);
  }

  switch (salle) {
    case "conference":
      if (!conference.some((ele) => ele.id === el.id)) {
        conference.push(el);
      }
      break;
    case "reception":
      if (!receptionW.some((ele) => ele.id === el.id)) {
        receptionW.push(el);
      }
      break;
    case "archive":
      if (!archives.some((ele) => ele.id === el.id)) {
        archives.push(el);
      }
      break;
    case "staff":
      if (!personnel.some((ele) => ele.id === el.id)) {
        personnel.push(el);
      }
      break;
    case "security":
      if (!securiteRoom.some((ele) => ele.id === el.id)) {
        securiteRoom.push(el);
      }
      break;
    case "serveur":
      if (!serveurs.some((ele) => ele.id === el.id)) {
        serveurs.push(el);
        console.log(serveurs);
      }

      break;
    case "backHome":
      if (!arrWorkers.some((ele) => ele.id === el.id)) {
        arrWorkers.push(el);
        console.log(arrWorkers);
      }

      break;
    case "home":
      if (!employees.some((ele) => ele.id === el.id)) {
        employees.push(el);
        console.log(employees);
      }

      break;
  }

 
// call functions for updating
  Conference();
  Reception();
  Serveur();
  Security()
  Personnel()
  Archives()
  postWorkers();
  displaWorker();
}

function Conference() {
  cardRoomConference.innerHTML = "";
  conference.forEach((el) => {
    cardRoomConference.innerHTML += `

  <div
                class="room-worker bg-amber-900 flex items-center justify-center flex-col relative"
              >
                            <i id="remove-${el.id}" class='remove-icon bx bxs-minus-circle text-red-700 text-[10px] absolute top-0 right-0 translate-x-1/3 -translate-y-1/3'></i> 

                <div class="userProfile w-3 h-3 rounded-full overflow-hidden">
                  <img
                    src="houssam.png"
                    class="w-full h-full object-cover object-center"
                  />
                </div>
                <p class="text-amber-100 text-[10px]">${el.username}</p>
              </div>

`;
  });
  conference.forEach((el) => {
    remove(el);
  });
}
function Reception() {
  cardRoomReception.innerHTML = "";
  receptionW.forEach((el) => {
    cardRoomReception.innerHTML += `

  <div
                class="room-worker bg-amber-900 flex items-center justify-center flex-col relative"
              >
                            <i id="remove-${el.id}" class='remove-icon bx bxs-minus-circle text-red-700 text-[10px] absolute top-0 right-0 translate-x-1/3 -translate-y-1/3'></i> 

                <div class="userProfile w-3 h-3 rounded-full overflow-hidden">
                  <img
                    src="houssam.png"
                    class="w-full h-full object-cover object-center"
                  />
                </div>
                <p class="text-amber-100 text-[10px]">${el.username}</p>
              </div>

`;
  });
  receptionW.forEach((el) => {
    remove(el);
  });
}
function Serveur() {
  cardRoomsServer.innerHTML = "";
  console.log(serveurs);

  serveurs.forEach((el) => {
    cardRoomsServer.innerHTML += `

  <div
                class="room-worker bg-amber-900 flex items-center justify-center flex-col relative"
              >
                            <i id="remove-${el.id}" class='remove-icon bx bxs-minus-circle text-red-700 text-[10px] absolute top-0 right-0 translate-x-1/3 -translate-y-1/3'></i> 

                <div class="userProfile w-3 h-3 rounded-full overflow-hidden">
                  <img
                    src="houssam.png"
                    class="w-full h-full object-cover object-center"
                  />
                </div>
                <p class="text-amber-100 text-[10px]">${el.username}</p>
              </div>

`;
  });
  serveurs.forEach((el) => {
    remove(el);
  });
}
function Security() {
  cardRoomsSc.innerHTML = "";
  securiteRoom.forEach((el) => {
    cardRoomsSc.innerHTML += `

  <div
                class="room-worker bg-amber-900 flex items-center justify-center flex-col relative"
              >
                            <i id="remove-${el.id}" class='remove-icon bx bxs-minus-circle text-red-700 text-[10px] absolute top-0 right-0 translate-x-1/3 -translate-y-1/3'></i> 

                <div class="userProfile w-3 h-3 rounded-full overflow-hidden">
                  <img
                    src="houssam.png"
                    class="w-full h-full object-cover object-center"
                  />
                </div>
                <p class="text-amber-100 text-[10px]">${el.username}</p>
              </div>

`;
  });
  securiteRoom.forEach((el) => {
    remove(el);
  });
}
function Personnel() {
  cardRoomsPr.innerHTML = "";
  personnel.forEach((el) => {
    cardRoomsPr.innerHTML += `

  <div
                class="room-worker bg-amber-900 flex items-center justify-center flex-col relative"
              >
                            <i id="remove-${el.id}" class='remove-icon bx bxs-minus-circle text-red-700 text-[10px] absolute top-0 right-0 translate-x-1/3 -translate-y-1/3'></i> 

                <div class="userProfile w-3 h-3 rounded-full overflow-hidden">
                  <img
                    src="houssam.png"
                    class="w-full h-full object-cover object-center"
                  />
                </div>
                <p class="text-amber-100 text-[10px]">${el.username}</p>
              </div>

`;
  });
  personnel.forEach((el) => {
    remove(el);
  });
}
function Archives() {
  cardRoomsAr.innerHTML = "";
  archives.forEach((el) => {
    cardRoomsAr.innerHTML += `

  <div
                class="room-worker bg-amber-900 flex items-center justify-center flex-col relative"
              >
                            <i id="remove-${el.id}" class='remove-icon bx bxs-minus-circle text-red-700 text-[10px] absolute top-0 right-0 translate-x-1/3 -translate-y-1/3'></i> 

                <div class="userProfile w-3 h-3 rounded-full overflow-hidden">
                  <img
                    src="houssam.png"
                    class="w-full h-full object-cover object-center"
                  />
                </div>
                <p class="text-amber-100 text-[10px]">${el.username}</p>
              </div>

`;
  });
  archives.forEach((el) => {
    remove(el);
  });
}
function remove(el) {
  const remove = document.getElementById(`remove-${el.id}`);
  remove.addEventListener("click", () => {
    removeCardFromSalle(el, "home");
  });
}

function profile(el){

  console.log(el);
  
  prolifeWorker.classList.remove("hidden")

  prolifeWorkersPost.innerHTML=`
  
          <p
          id="closeBtn-profile"
          class="absolute right-4 top-3 z-50 cursor-pointer"
        >
          x
        </p>
        <h2 class="font-semibold pb-4 text-2xl text-center">Profile Worker</h2>

        <div class="flex items-center gap-4 mb-8">
          <img class="w-20 h-20 rounded-full" src="/houssam.png" alt="" />
          <div>
            <p class="font-semibold text-gray-800 text-2xl">${el.username}</p>
            <p class="font-semibold text-gray-700 text-xl">${el.role}</p>
          </div>
        </div>
        <div
          class="w-full border flex flex-col gap-5 p-4 border-gray-300 rounded-md"
        >
          <p class="font-semibold flex items-center gap-3">
            Role :
            <span class="text-gray-700">${el.role}</span>
          </p>

          <p class="font-semibold flex items-center gap-3">
            Email :
            <span class="text-gray-700">${el.email}</span>
          </p>
          <p class="font-semibold flex items-center gap-3">
            Phone :
            <span class="text-gray-700">${el.phone}</span>
          </p>
        </div>
  
  
  `
}

////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
