var deleteProduct = document.querySelector("#delete-product");
deleteProduct.addEventListener("click", function () {
  var confirmDelete = confirm("Bạn có muốn xóa sản phẩm này không?");
  if (confirmDelete == 1) {
    document.querySelector(".section-container-three").style.display = "none";
  }
});
