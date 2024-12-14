// select dom , var
let table = document.querySelector("table");

// function
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
  table.innerHTML += template;
}

// events
window.addEventListener("load", renderData(data));
