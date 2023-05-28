//////////// Duyệt mảng?
let arr = [1, 2, 3, 5, 6, 7, 8, 87, 5, 34, 5, 35, 546, 67, 7, 8, 23, 12, 3];

///// In ra từng phần tử mảng lên màn hình console.log
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }


///// For in
// for (let i in arr) {
//   // console.log(i);
//   console.log(arr[i]);
// }

/*
i: vị trí phần tử của mảng
*/

// for(let key of arr ){
//    console.log(key);
// }
////// => in ra phần tử mang 




////// Giới thiệu về đối tượng (Object) trong JS
/// Khai báo đối tượng
let obj = {
  /// Thuộc tính
  name: "Nguyễn Trung Hiếu",
  age: 25,
  gender: "male",
  cccd: "0123456789",
  hobbies: ["sleep", "code", "movie"],

  ///// Phương thức
  say: function () {
    alert("Hello, How are you?")
  }
}
console.log(obj.name);
obj.say();

/*
Object khi nào sử dụng?
*/

///// Thêm mới một thuộc tính: 
obj.job = "dev";
obj.name = "Hiếu"

//// Xóa 1 thuộc tính
delete obj.job;


/// Thêm mới một phương thức
obj.code = function () {
  alert("I am Coder");
}

obj.code();