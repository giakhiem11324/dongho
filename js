// script.js

// Biến lưu giờ báo thức (định dạng "HH:MM")
let alarmTime = null;

// Hàm cập nhật đồng hồ thời gian thực
function updateClock() {
    const now = new Date();  // Lấy thời gian hiện tại:contentReference[oaicite:4]{index=4}
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    // Đảm bảo hai chữ số
    hours   = hours   < 10 ? '0' + hours   : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;

    // Nếu giờ:phút hiện tại trùng giờ báo (và giây = 00), kích hoạt báo thức
    if (alarmTime === hours + ':' + minutes && seconds === '00') {
        triggerAlarm();
        alarmTime = null;
        document.getElementById('alarmStatus').textContent = 'Đã báo thức!';
    }
}

// Bắt sự kiện khi nhấn nút "Đặt báo thức"
document.getElementById('setAlarm').addEventListener('click', function() {
    const timeString = document.getElementById('alarmTime').value;  // Lấy giá trị "HH:MM" từ input:contentReference[oaicite:5]{index=5}
    if (timeString) {
        alarmTime = timeString;
        document.getElementById('alarmStatus').textContent = 'Báo thức đặt lúc: ' + alarmTime;
    }
});

// Hàm kích hoạt báo thức: phát âm thanh và hiện popup
function triggerAlarm() {
    const audio = document.getElementById('alarmSound');
    audio.play();  // Phát âm thanh báo thức:contentReference[oaicite:6]{index=6}
    const popup = document.getElementById('popup');
    popup.classList.add('show');  // Thêm class để hiện popup
}

// Đóng popup khi người dùng click vào
document.getElementById('popup').addEventListener('click', function() {
    this.classList.remove('show');
});

// Khởi động cập nhật đồng hồ mỗi giây
setInterval(updateClock, 1000);  // Gọi hàm mỗi giây:contentReference[oaicite:7]{index=7}:contentReference[oaicite:8]{index=8}
