let select = document.querySelector("#itemSelect")
let additem = document.querySelector("#additem")
let qty = document.querySelector("#qty")
let total = document.querySelector("#totalAmount")
let printBtn = document.querySelector("#printbtn")
let itemCollection = document.querySelector("#itemsBody")




 let cart = []



select.addEventListener("change",()=>{
console.log(typeof(select.value))
   
})
console.log(typeof qty.value)


  additem.addEventListener("click",()=>{

      let value = select.value.split("|")
 let item = value[0]
  let price = value[1]
  console.log(typeof price)
  let quantity = qty.value
  cart.push({
    item: item,
    price:Number(price),
    qty: Number(quantity) ,
  });
 
cart.forEach((item)=>{
total.textContent ="Total:"+ item.qty *item.price+"PKR"
})
 
console.log(cart)  

})
function showData(arr){
  arr.forEach((item)=>{
    let span1 = document.createElement("td")
    span1.textContent = item.item
    let span2 = document.createElement("td")
    span2.textContent = item.price
     let span3 = document.createElement("td")
    span3.textContent = item.qty
     let span4= document.createElement("td")
    span4.textContent ="Total:"+ item.qty *item.price+"PKR"
    itemCollection.appendChild(span1)
     itemCollection.appendChild(span2)
      itemCollection.appendChild(span3)
       itemCollection.appendChild(span4)
    

  })
}
printBtn.addEventListener("click", () => {
  showData(cart);   
  window.print();   
});