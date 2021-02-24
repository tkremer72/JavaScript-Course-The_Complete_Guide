import { updateProducts } from './rendering';
import { products/*  as prods */ } from './products';

const titleEl = document.getElementById('title');
const priceEl = document.getElementById('price');

//let products = prods;

export function deleteProduct(prodId) {
  /* const updatedProducts = [];
  let deletedProduct;
  for (const prod of products) {
    if (prod.id !== prodId) {
      updatedProducts.push(prod);
    } else {
      deletedProduct = prod;
    }
  }
  products = updatedProducts; */
  const deletedProductIndex = products.findIndex(product => product.id === prodId);
  const deletedProduct = products[deletedProductIndex];
  products.splice(deletedProductIndex, 1);
  updateProducts(deletedProduct, prodId, deleteProduct, false);
}

export function addProduct(event) {
  const title = titleEl.value;
  const price = priceEl.value;

  if (title.trim().length === 0 || price.trim().length === 0 || +price < 0) {
    alert('Please enter some valid input values for title and price.');
    return;
  }

  const newProduct = {
    id: new Date().toString(),
    title: title,
    price: price
  };

  products.unshift(newProduct);
  updateProducts(newProduct, newProduct.id, deleteProduct, true);
}
