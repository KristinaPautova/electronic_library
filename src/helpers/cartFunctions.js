export function getCountProductsCart() {
  let cart = JSON.parse(localStorage.getItem("cars"));
  return cart ? cart.cars.length : 0;
}

export function getCountFavoritesCart() {
  let cart = JSON.parse(localStorage.getItem("favorite"));
  return cart ? cart.products.length : 0;
}

export function calcSumPrice(product) {
  // return product.count * product.item.oneDay
  if (product.count < 3) {
    return product.count * product.item.oneDay;
  } else if (product.count < 6) {
    return product.count * product.item.twoDay;
  } else {
    return product.count * product.item.threeDay;
  }
}

export function calcTotalPrice(products) {
  let totalPrice = 0;
  products.forEach((item) => {
    totalPrice += item.sumPrice;
  });
  return totalPrice;
}

export function checkProductInCart(id) {
  let cart = JSON.parse(localStorage.getItem("cars"));
  if (!cart) {
    cart = {
      cars: [],
      totalPrice: 0,
    };
  }
  let newCart = cart.cars.filter((elem) => elem.item.id === id);
  return newCart.length > 0 ? true : false;
}

export function checkProductInFavorites(id) {
  let cart = JSON.parse(localStorage.getItem("favorite"));
  if (!cart) {
    cart = {
      products: [],
      totalPrice: 0,
    };
  }
  let newCart = cart.products.filter((elem) => elem.item.id === id);
  return newCart.length > 0 ? true : false;
}
