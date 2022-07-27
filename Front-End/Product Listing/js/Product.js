function Product(productName, productPrice, categories = []) {
  this.id = Math.random()
  this.name = productName
  this.price = productPrice
  this.categories = categories
}