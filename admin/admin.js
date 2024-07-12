function clickProduct() {
  document.querySelector(".section-table").style.display = "block";
  document.querySelector(".section-bg-ht").style.display = "none";
}
function clickHome() {
  document.querySelector(".section-table").style.display = "none";
  document.querySelector(".section-bg-ht").style.display = "block";
}
var logout = document.querySelector("#btn-logout");
logout.addEventListener("click", function () {
  var clicklogout = confirm("Bạn có muốn đăng xuất không");
  if (clicklogout == 1) {
    alert("Đăng xuất thành công");
    location.href = "/Dangnhap/dangnhap.html";
  }
});
function themmoi() {
  var them = confirm("Bạn có muốn thêm mới không?");
  if (them == 1) {
    alert("Thêm thành công!");
  }
}
function chinhsua() {
  var them = confirm("Bạn có muốn chỉnh sửa không?");
  if (them == 1) {
    alert("Sửa thành công!");
  }
}
function xoa() {
  var them = confirm("Bạn có muốn xóa không?");
  if (them == 1) {
    alert("Xóa thành công!");
  }
}
