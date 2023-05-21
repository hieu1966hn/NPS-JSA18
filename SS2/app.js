
// for(let i = 0; i< 5; i++){ 
//   console.log(i);
// }
// =>> kết quả đạt được: 0,1,2,3,4 (không thể bằng 5 do điều kiện ban đầu đặt ra phải nhỏ hơn 5)

/**
Mô tả cú pháp 
for(box1; box2; box3){
  Câu lệnh thực hiện....
}
**/

/**
Trong đó: 
- Box1: Câu lệnh được thực hiện lần đầu tiên và duy nhất của vòng lặp (từ lần lặp 2 sẽ không chạy ở đây nữa)
- Box2: Điều kiện dừng của vòng lặp (Mỗi lần lặp đều phải thỏa mãn vòng lặp này mới được chạy code bên trong)
- Box3; Câu lệnh được thực hiện cuối cùng mỗi lần lặp
**/



// let arr = [1, 2, 3, 4];

//// arr.length => số phần tử trong mảng = 4

///// arr.push() => thêm phần tử vào cuối mảng
// arr.push(12, 144);
// console.log(arr);

// //// arr.unshift() => thêm phần tử vào đầu mảng
// arr.unshift(0);
// console.log(arr);


// //// arr.shift() => xóa 1 phần thử ở đầu mảng
// arr.shift();
// console.log(arr);


// /// arr.pop() => xóa 1 phần thử ở cuối mảng
// arr.pop();
// console.log(arr);


// let arr = [1, 2, 3, 4];
////// Xử lý dữ liệu ở giữa mảng: xóa phần tử số 2 trong mảng;
// arr.splice(1, 1);
// console.log(arr);

/*
Cú pháp
arr.splice(box1 ,box2 , box3);
- Box1: Vị trí phần tử muốn edit
- Box2: số phần tử muốn xóa từ vị trí đó
- Box3: Số phần tử muốn thêm vào mảng tại vị trí dó
*/


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


/// Kiến thức thêm: tìm kiếm trong mảng với filter, find
let menu = ["cơm rang", "rau xào", "cơm chiên"];
//// Tìm kiếm vị trí món rau xào trong mảng menu
let vitriMonRauXao = menu.indexOf("rau xào");
console.log("vitriMonRauXao: ", vitriMonRauXao); // 1

/// Update tên món ăn vừa rồi => món khác 
menu[vitriMonRauXao] = "Rau mồng tơi"

console.log(menu);

/// Đề bài yêu cầu người dùng nhập vào?
let input = prompt("Mời người dùng nhập vào C,R,U,D");
console.log("input: ", input);
