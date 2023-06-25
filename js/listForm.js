// const dataLocal = localStorage.getItem("forms");
// const dataTable = JSON.parse(dataLocal);

function renderTags(tags) {
  const tagsAddHash = tags.map((tag) => `#${tag}`);
  const tagsHtmls = tagsAddHash
    .map((item) => `<div class='tag'>${item}</div>`)
    .join("");
  return tagsHtmls;
}

const renderRow = function (dataTable) {
  return dataTable.map(
    (item) => `
    <div class="flex items-center flex-center w-80px h-48px">
      <label class="container-checkbox">
        <input type="checkbox">
        <span class="checkmark"></span>
      </label>
    </div>
    <!-- Author  -->
    <div class="flex items-center w-230px h-64px">
      <div class="flex items-center">
        <img src="${item.createdBy.avatar}" class="avatar avatar--small" />
        <div class="ml-12 flex flex-col">
          <span class="font-14 font-semibold leading-22 text-707683">${
            item.createdBy.name
          }</span>
        </div>
      </div>
    </div>
    <!-- FTitle  -->
    <div class="flex items-center w-230px h-64px">
      <p class="font-semibold font-14 leading-20 text-334D6E clamp-3 ">
        ${item.name}
      </p>
    </div>
    <!-- Description  -->
    <div class="flex items-center w-230px h-64px">
      <p class="font-semibold font-14 leading-20 text-334D6E clamp-3">
        ${item.description}
      </p>
    </div>
    <!-- Amount answer  -->
    <div class="flex items-center flex-center w-100px h-64px">
      <p class="font-semibold font-14 leading-20 text-334D6E">
        ${item.amountAnswer}
      </p>
    </div>
    <!-- Tag  -->
    <div class="flex items-center flex-center w-230px h-64px">
      <p class="font-semibold font-14 leading-20 text-334D6E">
      ${renderTags(item.tags)}
      </p>
    </div>
    <!-- Action  -->
    <div class="flex items-center flex-center w-230px h-64px">
      <a href="/edit">
      <i class="fa-solid fa-pen-to-square font-16 text-primary"></i>
      </a>
      <a onclick='handleDelete(${item.id})'>
      <i class="fa-solid fa-trash font-16 text-F7685B ml-16"></i>
      </a>
    </div>
    `
  );
};

function renderUI(UIDataTable) {
  const tableFormEl = $("#table");
  UIDataTable.forEach((row) => {
    const rowEl = document.createElement("div");
    rowEl.classList.add(
      "flex",
      "border-b-1",
      "border-EBEFF2",
      "gap-12",
      "table-item"
    );
    rowEl.innerHTML = row;
    tableFormEl.appendChild(rowEl);
  });
}

// call API
const BASE_API = "http://localhost:3000";
const API_GET_ALL_FORM = `${BASE_API}/forms`;
const resCallAPI = fetch(API_GET_ALL_FORM, {
  headers: {
    "Content-Type": "application/json",
  },
});

resCallAPI
  .then((resp) => resp.json())
  .then((data) => {
    const rows = renderRow(data);
    renderUI(rows);
  })
  .catch(() => {
    console.log("call api lỗi");
  });

function deleteForms(id) {
  return fetch(`${API_GET_ALL_FORM}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function handleDelete(id) {
  //call API Delete
  const resp = deleteForms(id);
  resp
    .then((res) => {
      if(res.status === 200) {
        location.reload()
      }
    })
    .catch(console.log("call API delete lỗi"));
}
