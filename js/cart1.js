const cartList = document.querySelector(".cart-list");

window.addEventListener("click", function (e) {
  if (e.target.hasAttribute("addCart")) {
    e.preventDefault();
    const product = e.target.closest(".single-product-wrapper");
    const img = product.querySelector("img").attributes[0].nodeValue;
    const price = product.querySelector(".product-price").lastChild.nodeValue;
    const id = product.querySelector(".product-description").attributes[0]
      .nodeValue;
    console.log(product);
    if (product) {
      const productInfo = {
        id: id,
        imgSrc: img,
        price: price,
      };
      console.log(productInfo);
    }
    const singleProduct = e.target.closest(".single_product_desc");
    if (singleProduct) {
      const productf = {
        id: Date.now(),
        price:
          singleProduct.querySelector(".product-price").lastChild.nodeValue,
      };
      console.log(productf);
    }
    function createItem(img, price, id) {
      return `<div class="single-cart-item">
                    <a href="#" class="product-image">
                        <img src=${img} class="cart-thumb" alt="">
                        <!-- Cart Item Desc -->
                        <div class="cart-item-desc">
                          <span class="product-remove"><i class="fa fa-close" aria-hidden="true"></i></span>
                            <span class="badge">Mango</span>
                            <h6>Button Through Strap Mini Dress</h6>
                            <p class="price">${price}</p>
                        </div>
                    </a>
                </div>`;
    }

    cartList.insertAdjacentHTML("beforeend", createItem(img, price, id));
  }
  const buttons = document.querySelectorAll(".product-remove");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const el = event.target.closest(".single-cart-item");
      el.remove();
    });
  });
});
