let timer;

function generateOTP() {
// Generate 6-digit random OTP
const otp = Math.floor(100000 + Math.random() * 900000);
document.getElementById("otp-display").textContent = otp;

// Set expiry time (e.g. 30 seconds)
clearTimeout(timer);
let expiryText = document.getElementById("expiry");
expiryText.textContent = "OTP expires in 30 seconds";

timer = setTimeout(() => {
document.getElementById("otp-display").textContent = "Expired";
expiryText.textContent = "";
}, 30000);
}

generateOTP();