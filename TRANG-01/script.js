const clicks = document.querySelector(".content-big");
clicks.addEventListener("click", function () {
  document.querySelector(".content-menu-danh-muc").style.display = "flex";
});
const clickPlus = document.querySelector(".iconPlus");
clickPlus.addEventListener("click", function () {
  document.querySelector("#menu-lever-2").style.display = "block";
  document.querySelector(".iconPlus").style.display = "none";
  document.querySelector(".iconMinus").style.display = "block";
});
const clickMinus = document.querySelector(".iconMinus");
clickMinus.addEventListener("click", function () {
  document.querySelector(".iconMinus").style.display = "none";
  document.querySelector(".iconPlus").style.display = "block";
  document.querySelector("#menu-lever-2").style.display = "none";
});
// add-cart-product-01
const addcart = document.querySelector("#addCart1");
addcart.addEventListener("click", function () {
  var addCarts = confirm("Bạn có muốn thêm sản phẩm vào giỏ hàng không?");
  if (addCarts == 1) {
    alert("Thêm thành công");
    return;
  }
});
// add-cart-product-02
const addcart2 = document.querySelector("#addCart2");
addcart2.addEventListener("click", function () {
  var addCarts = confirm("Bạn có muốn thêm sản phẩm vào giỏ hàng không?");
  if (addCarts == 1) {
    alert("Thêm thành công");
    return;
  }
});
