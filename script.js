// Hàm để thay đổi màu sắc của ô vuông
function changeColor() {
    // Lấy đối tượng ô vuông
    var box = document.getElementById("colorBox");

    // Tạo một mảng chứa các màu
    var colors = ["red", "green", "blue", "yellow", "orange", "purple"];

    // Chọn ngẫu nhiên một màu từ mảng và áp dụng vào ô vuông
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
}
