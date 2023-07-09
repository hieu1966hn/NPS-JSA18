let menu = ["rau xào", "thịt luộc", "gà rán"];

let input = prompt("Mời người dùng nhập vào C,R,U,D").trim().toLocaleLowerCase();

do {
  if (input == "c") createMenu();
  else if (input == "r") readMenu();
  else if (input == "u") updateMenu();
  else if (input == "d") deleteMenu();
  else {
    alert("Chưa đúng cú pháp => The End!!!");
    break;
  }
  input = prompt("Mời người dùng nhập vào C,R,U,D");
}
while (input == "c" || input == "r" || input == "u" || input == "d");

function createMenu() {
  let menu = getLocalStorage();
  // console.log("Hàm createMenu đã chạy");
  menu.push(prompt("Mời người dùng nhập vào tên món ăn mới").trim());

  // Cập nhật dữ liệu  mảng menu mới lên LS
  updateLocalStorage(menu);
}
function readMenu() {
  let menu = getLocalStorage();
  console.log("menu: ", menu);
  alert(menu.join(", "))
}
function updateMenu() {
  let menu = getLocalStorage();
  let viTriMonAnMuonUpdate = menu.indexOf(prompt("Mời người dùng nhập vào tên món ăn muốn thay đổi").trim());
  menu[viTriMonAnMuonUpdate] = prompt("Mời người dùng nhập tên món mới cập nhật").trim();
  updateLocalStorage(menu);
}
function deleteMenu() {
  let menu = getLocalStorage();
  let viTriMonAnMuonDelete = menu.indexOf(prompt("Mời người dùng nhập vào tên món ăn muốn xóa").trim());
  menu.splice(viTriMonAnMuonDelete, 1);
  updateLocalStorage(menu)
}
// Hàm kiểm tra lấy dữ liệu menu về từ LocalStorage
function getLocalStorage() {
  // Trường hợp đã có mảng menu trên LocalStorage
  let menu = [];
  if (localStorage.menu) {
    menu = JSON.parse(localStorage.getItem("menu"));
  }
  // Trường hợp chưa có mảng menu trên localStorage
  else {
    localStorage.setItem("menu", JSON.stringify(menu));
  }
  console.log(menu);
  return menu; // Dạng đã cập nhật mới nhất từ LS về máy.
}
// Cập nhật dữ liệu mới nhất lên LocalStorage.
function updateLocalStorage(menu) {
  localStorage.setItem("menu", JSON.stringify(menu));
}