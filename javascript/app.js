// select dom , var
let root = document.getElementById("root");
let addBtn = document.getElementById("add-btn");
let modal = document.getElementById("modal");
let closeBtn = document.getElementById("close-modal-btn");
let addModalBtn = document.getElementById("add-modal-btn");
const createFormFields = {
  name: document.getElementById("name"),
  family: document.getElementById("family"),
  nationalCode: document.getElementById("nationalcode"),
};

// functions
function renderData(List) {
  let template = List.map((item) => {
    const { id, name, family, nationalCode } = item;
    return `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${family}</td>
                <td>${nationalCode}</td>
                <td>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </td>
            </tr>
        `;
  }).join("");
  root.innerHTML = template;
}
// open Modal
const openModal = () => {
  modal.classList.add("show");
};
// close Modal
const closeModal = () => {
  modal.classList.remove("show");
};
// add
function addUser() {
  const user = {
    id: data.length + 1,
    name: createFormFields.name.value,
    family: createFormFields.family.value,
    nationalCode: createFormFields.nationalCode.value,
  };
  data.push(user);
  renderData(data);
  closeModal();
  for (const input of inputs) {
    input.value = "";
  }
}
// edit

// delete

// events
window.addEventListener("load", renderData(data));
addBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
addModalBtn.addEventListener("click", addUser);
