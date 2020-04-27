let products=[

]
const filters={
    searchItem:""
}
const productJson=localStorage.getItem('products')
renderProduct=function(products,filters){
    const indexValue=products.filter(function (item) {
return item.title.toLowerCase().includes(filters.searchItem.toLowerCase())
    })
    document.querySelector('.click').innerHTML=""
    indexValue.forEach(function (item) {
const productEl=document.createElement('h1')
        productEl.textContent=item.title
        document.querySelector('.click').appendChild(productEl)
    })
}
renderProduct(products,filters)

document.querySelector('.search').addEventListener('input',function (e) {
filters.searchItem=e.target.value
    renderProduct(products,filters)
})
document.querySelector('.search-product').addEventListener('submit',function (e) {
e.preventDefault()
    products.push({
        title: e.target.elements.productTitle.value,
        exist:true
    })
    localStorage.setItem('products',JSON.stringify(products))
    e.target.elements.productTitle.value=""
    renderProduct(products,filters)
})
document.querySelector('.input-remove').addEventListener('click',function (e) {
const product=document.querySelectorAll('.click')
    product.forEach(function (item) {
item.remove()
    })
})