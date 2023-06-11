/// LocalStorage là gì?
/*
- Dạng lưu trữ dữ liệu: trong trình duyệt web
- Tắt/ mở lại trình duyệt thì không mất dữ liệu: 


- Chỉ lưu trữ dữ liệu dưới dạng: String, Object

*/

////// Cú pháp khởi tạo lưu trữ trên localStorage với biến
// C1
localStorage.setItem("menu", JSON.stringify(["rau, thịt, cá"]));

// C2:
localStorage.obj = JSON.stringify(
  {
    name: "Hiếu",
    age: 25,
    address: "Hà Nội"
  }
);

///// Truy  vấn  dữ liệu trong localStorage: 


