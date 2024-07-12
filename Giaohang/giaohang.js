const clickPlus = document.querySelector(".icon-angle-plus");
clickPlus.addEventListener("click", function () {
  document.querySelector(".enter-information").style.display = "block";
  document.querySelector(".header-info-client").style.display = "block";
  document.querySelector(".icon-angle-minus").style.display = "block";
  document.querySelector(".icon-angle-plus").style.display = "none";
  document.querySelector(".container-five").style.top = "1400px";
  document.querySelector(".footer").style.top = "920px";
  document.querySelector(".container-three").style.height = "1312.4px";
});
const clickMinus = document.querySelector(".icon-angle-minus");
clickMinus.addEventListener("click", function () {
  document.querySelector(".enter-information").style.display = "none";
  document.querySelector(".header-info-client").style.display = "none";
  document.querySelector(".icon-angle-plus").style.display = "block";
  document.querySelector(".icon-angle-minus").style.display = "none";
  document.querySelector(".container-five").style.top = "923px";
  document.querySelector(".footer").style.top = "440px";
  document.querySelector(".container-three").style.height = "835.4px";
});
function send() {
  var noinhan1 = document.getElementById("radio-home");
  var noinhan2 = document.getElementById("radio-coquan");
  var noinhan3 = document.getElementById("checkbox");

  var name = document.getElementById("name-client");
  var phone = document.getElementById("phone-client");
  var diachi = document.getElementById("from-client");
  var selectArea = document.getElementById("thanh-pho");
  var selectDistrict = document.getElementById("huyen");
  var selectWard = document.getElementById("xa");
  var Addname = name.value;
  var Addphone = phone.value;
  var Adddiachi = diachi.value;
  var AddselectArea = selectArea.value;
  var AddselectDistrict = selectDistrict.value;
  var AddselectWard = selectWard.value;
  if (
    Addname == "" ||
    Addphone == "" ||
    Adddiachi == "" ||
    AddselectArea == "" ||
    AddselectDistrict == "" ||
    AddselectWard == ""
  ) {
    alert("Không được để trống thông tin");
    return;
  }
  var checkName = /^\w[a-zA-z]{1,12}$/;
  if (checkName.test(Addname) == false) {
    alert("Họ tên không hợp lệ");
    return;
  }
  //   if (isNaN(Addphone)) {
  //     alert("Số điện thoại không hợp lệ");
  //     return;
  //   }
  var checkPhone = /^\d[03|09]+\d{8}$/;
  if (checkPhone.test(Addphone) == false) {
    alert("Số điện thoại không hợp lệ");
    return;
  }
  if (!isNaN(Adddiachi)) {
    alert("Địa chỉ không hợp lệ");
    return;
  }
  if (noinhan1.checked == false || noinhan2 == false || noinhan3 == false) {
    alert("Bạn cần chọn nơi nhận");
  } else {
    alert("Lưu thành công");
    return;
  }
}
