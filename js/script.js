/* ------------------------------- ALL BUTTONS ------------------------------ */
let btn8Gb = document.getElementById("btn-8gb");
let btn16Gb = document.getElementById("btn-16gb");
let btn256Gb = document.getElementById("btn-256gb");
let btn512Gb = document.getElementById("btn-512gb");
let btn1TB = document.getElementById("btn-1tb");
let btnFreeDelivery = document.getElementById("btn-free-delivery");
let btnFastDelivery = document.getElementById("btn-fast-delivery");
let btnApply = document.getElementById("btn-apply");

/* ---------------------------- ALL PRICE ELEMENT --------------------------- */
let bestPriceElem = document.getElementById("best-price");
let memoryCostElem = document.getElementById("memory-cost");
let storageCostElem = document.getElementById("storage-cost");
let deliveryChargeElem = document.getElementById("delivery-charge");
let totalPriceElem = document.getElementById("total-price");
let totalPriceTitleElem = document.getElementById("total-price-title");

/* ------------------ COMMON FUNCTIONS TO IGNORE REPEATTION ----------------- */
/////////////////GET TOTAL AMOUNT
function total() {
  let totalPrice =
    parseFloat(bestPriceElem.innerText) +
    parseFloat(memoryCostElem.innerText) +
    parseFloat(storageCostElem.innerText) +
    parseFloat(deliveryChargeElem.innerText);

  return totalPrice;
}
//////////////UPDATE FIELD & TOTAL PRICE
function updatePrice(priceEleID, price) {
  let productElem = document.getElementById(priceEleID);
  productElem.innerText = price;
  totalPriceElem.innerText = total();
  totalPriceTitleElem.innerText = total();
}

/* ------------------------- ALL BUTTONS FUNCTIONALLITY ------------------------- */
btn8Gb.addEventListener("click", function () {
  updatePrice("memory-cost", 0);
});
btn16Gb.addEventListener("click", function () {
  updatePrice("memory-cost", 180);
});
btn256Gb.addEventListener("click", function () {
  updatePrice("storage-cost", 0);
});
btn512Gb.addEventListener("click", function () {
  updatePrice("storage-cost", 100);
});
btn1TB.addEventListener("click", function () {
  updatePrice("storage-cost", 180);
});
btnFreeDelivery.addEventListener("click", function () {
  updatePrice("delivery-charge", 0);
});
btnFastDelivery.addEventListener("click", function () {
  updatePrice("delivery-charge", 20);
});
btnApply.addEventListener("click", function () {
  let promoCodeField = document.getElementById("promo-code");

  //check condition: if the user inserted right prome code or not
  if (promoCodeField.value == "stevekaku") {
    let totalPrice = parseFloat(totalPriceElem.innerText);
    let discountedPrice = totalPrice - totalPrice * 0.2;
    totalPriceTitleElem.innerText = discountedPrice;
  } else {
    alert("invalid promo code");
  }

  //clear field
  promoCodeField.value = "";
});
