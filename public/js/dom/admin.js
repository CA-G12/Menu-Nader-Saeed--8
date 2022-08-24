const sideBar = document.getElementById("side-bar");

const barsButton = document.getElementById("bars");

const editPopUpE = document.getElementById("popup");

barsButton.addEventListener("click", () => {
  sideBar.classList.toggle("open-slider");
  barsButton.classList.toggle("left-icon");
});
// closeEditPopUp
function closeEditPopUp() {
  editPopUpE.classList.remove("open-popup");
}
function editPopUp() {
  editPopUpE.classList.add("open-popup");
}
