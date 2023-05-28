/**
 Yêu cầu bài toán: menu nhà hàng với mảng ban đầu cho: let menu = ["cơm rang", "Phở", "sườn chua ngọt"];
 1. Khi mới vào trang web hiện thông báo "Mời người dùng nhập vào C,R,U,D"
 2. Kiểm tra người dùng nhập vào gì: c,r,u,d => xử lý điều kiên như sau
 3. Nếu nhập c => Hiển thị thông báo "Mời người dùng nhập vào món ăn mới muốn thêm" => Hiển thị ra mảng món ăn đó trên màn hình
 4. Nếu nhập r => Hiển thị toàn bộ món ăn đang có trong mảng
 5. Nếu nhập u => Hiển thị thông báo "Mời người dùng nhập tên món ăn muốn thay thế" => Hiển thị thông báo "Mời người dùng nhập tên mới cập nhật"
 6. Nếu nhập d => Hiên thị thống báo "Mời người dùng nhập vào tên món ăn muốn xóa".

 Note:
 c: Create
 r: Read
 u: Update
 d: delete
*/


let menu = ["cơm rang", "Phở", "sườn chua ngọt"];


//// Nhận thông tin người dùng nhập vào ban đầu
let input;
input = prompt("Mời người dùng nhập vào C,R,U,D"); /// KDL:  String.


if (input === 'c') {
  menu.push(
    prompt("Mời người dùng nhập vào món ăn muốn thêm")
  )
}
else if (input === "r") {
  alert("Danh sách món ăn: " + menu);
}
else if (input === "u") {
  let viTriMonAnThayThe = menu.indexOf(
    prompt("Mời người dùng nhập vào tên món ăn muốn thay thế")
  );
  if (viTriMonAnThayThe < 0) {
    alert("Món ăn này hiện không có trong menu")
  }

  //// Update món ăn tại vị trí muốn thay thế
  menu[viTriMonAnThayThe] = prompt("Mời người dùng cập nhật món ăn mới");
}

