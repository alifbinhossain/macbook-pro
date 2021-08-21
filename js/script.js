/* ---------------------------- ALL PRICE ELEMENT --------------------------- */
let bestPriceElem = document.getElementById("best-price");
let memoryCostElem = document.getElementById("memory-cost");
let storageCostElem = document.getElementById("storage-cost");
let deliveryChargeElem = document.getElementById("delivery-charge");
let totalPriceElem = document.getElementById("total-price");
let totalPriceTitleElem = document.getElementById("total-price-title");

/* ------------------ COMMON FUNCTIONS TO USE ON MULTIPLE BUTTONS ----------------- */
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

//////////////FUNCTION FOR APPLY BUTTON
function btnApply() {
  let promoCodeField = document.getElementById("promo-code");

  //check condition: if the user provided right promo code or not
  if (promoCodeField.value == "stevekaku") {
    let totalPrice = parseFloat(totalPriceElem.innerText);
    let discountedPrice = totalPrice - totalPrice * 0.2;
    totalPriceTitleElem.innerText = discountedPrice;
  } else {
    alert("invalid promo code");
  }

  //clear field
  promoCodeField.value = "";
}
