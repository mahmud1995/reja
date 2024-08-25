console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
    return `
  <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja} </span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary btn-sm mr-1"
            >
              O'zgartirish
            </button>
            <button
            data-id="${item._id}"
              class="edit-me btn btn-danger btn-sm"
            >
              O'chirish
            </button>
          </div>
        </li>
  `;
}
let createField = document.getElementById("create-field");
console.log("send data front to backend")
document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    axios
    .post("/create-item", {reja: createField.value})
    .then((response) => {
        document
            .getElementById("item-list")
            .insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("Iltimos qaytadan harakat qiling!");
    });
});

// let createField = document.getElementById("create-field");
// console.log("A1: send data from front to backend");
// document.getElementById("create-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   axios
//     .post("/create-item", { reja: createField.value })
//     .then((response) => {
//       console.log("A5: recieving  data from backend to frontend");

//       document
//         .getElementById("item-list")
//         .insertAdjacentHTML("beforeend", itemTemplate(response.data));
//       createField.value = "";
//       createField.focus();
//     })
//     .catch((err) => console.log("Could get data"), err);
// });