// select dom , var
let root = document.getElementById("root");
let addModal = document.getElementById("add-modal");
let searchModal = document.getElementById("search-modal");
// buttons
let addBtn = document.getElementById("add-btn");
let addModalBtn = document.getElementById("add-modal-btn");
let closeBtn = document.getElementById("close-modal-btn");
let searchBtn = document.getElementById("search-btn");
let close_search_modal_btn = document.getElementById("close-search-modal-btn");

// inputs
let inputs = document.querySelectorAll("input");
// object
const createFormFields = {
  name: document.getElementById("name"),
  family: document.getElementById("family"),
  nationalCode: document.getElementById("nationalcode"),
};

// functions
// renderData
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
                    <i  onClick="removeUser(${id})" class="fa-solid fa-trash"></i>
                </td>
            </tr>
        `;
  }).join("");
  root.innerHTML = template;
}
// input empty
function inputEmpty() {
  for (const input of inputs) {
    input.value = "";
  }
}
// open Modal
const openModal = () => {
  addModal.classList.add("show");
};
// close Modal
const closeModal = () => {
  addModal.classList.remove("show");
  renderData(data);
  inputEmpty();
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
  inputEmpty();
}
// search
function openModalSearch() {
  searchModal.classList.add("show");
}
function closeEditModal() {
  searchModal.classList.remove("show");
  inputEmpty();
}
function serchUser(e) {
  let value = e.target.value;
  if (value) {
    let users = data.filter(
      (user) => user.name.search(value) > -1 || user.family.search(value) > -1
    );
    renderData(users);
  } else {
    renderData(data);
  }
}
// remove
function removeUser(id) {
  const userIndex = data.find((item) => item.id === id);
  data.splice(userIndex, 1);
  renderData(data);
}
// events
window.addEventListener("load", renderData(data));
addBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
addModalBtn.addEventListener("click", addUser);
searchBtn.addEventListener("click", openModalSearch);
close_search_modal_btn.addEventListener("click", closeEditModal);
