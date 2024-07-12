var clickAngleUpVoucher = document.querySelector("#angle-up");
clickAngleUpVoucher.addEventListener("click", function () {
  document.querySelector(".text-su-dung-voucher-va-bixu").style.display =
    "block";
  document.querySelector("#angle-up").style.display = "none";
  document.querySelector("#angle-down").style.display = "block";
});
var clickAngleDownVoucher = document.querySelector("#angle-down");
clickAngleDownVoucher.addEventListener("click", function () {
  document.querySelector(".text-su-dung-voucher-va-bixu").style.display =
    "none";
  document.querySelector("#angle-up").style.display = "block";
  document.querySelector("#angle-down").style.display = "none";
});

// row-2
var clickAngleUpCod = document.querySelector("#khac-up");
clickAngleUpCod.addEventListener("click", function () {
  document.querySelector(".text-thanh-toan-cod").style.display = "none";
  document.querySelector("#khac-up").style.display = "none";
  document.querySelector("#khac-down").style.display = "block";
});
var clickAngleDownCod = document.querySelector("#khac-down");
clickAngleDownCod.addEventListener("click", function () {
  document.querySelector(".text-thanh-toan-cod").style.display = "block";
  document.querySelector("#khac-up").style.display = "block";
  document.querySelector("#khac-down").style.display = "none";
});
function clickthanhtoan() {
  var rdoVoucher = document.getElementById("rdo-voucher");
  var rdoBixu = document.getElementById("rdo-bixu");
  var rdoCod = document.getElementById("rdo-cod");
  if (
    rdoVoucher.checked == false &&
    rdoBixu.checked == false &&
    rdoCod.checked == false
  ) {
    alert("Vui lòng chọn hình thức thanh toán");
  } else {
    alert("Đơn hàng được xác nhận thành công");
  }
}
