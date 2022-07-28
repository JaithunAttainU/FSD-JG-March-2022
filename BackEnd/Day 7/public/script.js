
const productDisplayEle = document.querySelector('#displayProducts')

async function getProducts() {
  const fetchProResponse = await fetch('/products')
  const products = await fetchProResponse.json()

  products.forEach((product) => {
    const productDiv = document.createElement('div')
    productDiv.innerText = `Product Name: ${product.productName}`

    const imageEle = document.createElement('img')
    imageEle.src = `files/${product.image}`
    imageEle.width = 300
    productDiv.appendChild(imageEle)

    productDisplayEle.appendChild(productDiv)
  })
  console.log(products)
}

getProducts()


