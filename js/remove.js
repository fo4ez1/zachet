// const btn = document.querySelector(".product-remove");
// btn.addEventListener('click', function () {
    // let el = document.querySelector(".single-cart-item");
    // el.remove();
    // console.log('fdfgsdfsd')
// })

const buttons = document.querySelectorAll(".product-remove");
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const el = event.target.closest(".single-cart-item");
    el.remove();
  });
});



  

// function addToCart(e) {
//   let button = e.target;
//   button.disabled = true; // блокируем кнопку на время операции с корзиной
//   let cartData = getCartData() || {}; // получаем данные корзины или создаём новый объект, если данных еще нет
//   let parentBox = button.parentNode; // родительский элемент кнопки "Добавить в корзину";
//   let itemId = button.getAttribute("data-id"); // ID товара
//   let itemTitle = parentBox.querySelector(".item_title").innerHTML; // название товара
//   let itemPrice = parentBox.querySelector(".item_price").innerHTML; // стоимость товара
//   //console.log(cartData);
//   if (cartData.hasOwnProperty(itemId)) {
//     // если такой товар уже в корзине, то добавляем +1 к его количеству
//     cartData[itemId][2] += 1;
//   } else {
//     // если товара в корзине еще нет, то добавляем в объект
//     cartData[itemId] = [itemTitle, itemPrice, 1];
//   }
//   // Обновляем данные в LocalStorage
//   setCartData(cartData);
