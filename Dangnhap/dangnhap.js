function clickdn() {
  var userName = document.getElementById("input-userName");
  var passWord = document.getElementById("input-passWord");
  var checkUS = userName.value;
  var checkPW = passWord.value;
  var usADMIN = checkUS;
  var pwADMIN = checkPW;
  var usUSER = checkUS;
  var pwUSER = checkPW;

  if (checkUS == "") {
    document.querySelector("#showErrorUS").style.display = "block";
    return;
  }
  if (checkUS != "") {
    document.querySelector("#showErrorUS").style.display = "none";
  }
  if (checkPW != "") {
    document.querySelector("#showErrorPW").style.display = "none";
  }
  if (checkPW == "") {
    document.querySelector("#showErrorPW").style.display = "block";
    return;
  }

  if (usADMIN == "admin" && pwADMIN == "admin123") {
    alert("Đăng nhập thành công");
    location.href = "/admin/admin.html";
    return;
  }

  if (usUSER == "user" && pwUSER == "user123") {
    alert("Đăng nhập thành công");
    location.href = "/TRANG-01/index.html";
    return;
  } else {
    alert("Thông tin tài khoản và mật khẩu không chính xác");
    return;
  }
}
var ShowPassWord = document.getElementById("input-passWord");
var showPass = document.querySelector("#eye-show");
showPass.addEventListener("click", function () {
  document.querySelector("#eye-show").style.display = "none";
  document.querySelector("#eye-hidden").style.display = "block";
  ShowPassWord.type = "text";
});
var hiddenPass = document.querySelector("#eye-hidden");
hiddenPass.addEventListener("click", function () {
  document.querySelector("#eye-show").style.display = "block";
  document.querySelector("#eye-hidden").style.display = "none";
  ShowPassWord.type = "password";
});
