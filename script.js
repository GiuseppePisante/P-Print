function openOrder(productName) {
  document.getElementById("product-input").value = productName;
  document.getElementById("order-section").classList.remove("hidden");
  document.getElementById("order-section").scrollIntoView({ behavior: "smooth" });
}
