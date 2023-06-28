const cart = document.querySelector(".overLay")
const cartBtn = document.querySelectorAll(".Cart-btn");
const menu = document.querySelector(".cart-menu");
const foodHeader = document.querySelectorAll(".orders-list")
const OrderList = document.querySelector('.orders-list');
const OrderButton = document.querySelectorAll('.add-btn');
const foodTabs = document.querySelectorAll('.food-card');

let children = OrderList.childNodes;

let totalSubPrice = document.querySelector('.subtotal-price');


totalSubPrice.innerText = "0 IQD"

for (var i = 0; i < OrderButton.length; i++) {    
    OrderButton[i].addEventListener('click', ((j) => {         
    return function() {
        addOrder(j);
    }
  })
    (i)
  )}

function toggleCart(){
    cart.classList.toggle("active");
    menu.classList.toggle("anim")
}
let itemsPrice = [];

function addOrder(index){
    const newOrder = document.createElement("li");
    newOrder.classList.add("cart-item");
    const OrderImage = document.createElement("img")
    OrderImage.classList.add("order-img")
    newOrder.appendChild(OrderImage);
    const itemInfo = document.createElement("div");
    itemInfo.classList.add("item-info")
    newOrder.appendChild(itemInfo);
    const itemHeader = document.createElement("h3");
    itemHeader.classList.add("item-header")
    itemInfo.appendChild(itemHeader);
    const itemPrice = document.createElement("p");
    itemPrice.classList.add("cart-price")
    itemInfo.appendChild(itemPrice);
    const deleteBTN = document.createElement("p");
    deleteBTN.classList.add("remove");
    itemInfo.appendChild(deleteBTN);
    OrderList.appendChild(newOrder);
    itemHeader.innerText = `${foodTabs[index].childNodes[3].childNodes[1].innerText}`;
    itemPrice.innerText = `${foodTabs[index].childNodes[3].childNodes[3].innerText}`;
    deleteBTN.innerText = "Remove";
    OrderImage.src = foodTabs[index].childNodes[1].src;
    toggleCart();
    deleteOrder();
    let subPriceText = foodTabs[index].childNodes[9].innerText;
    let lastPrice = parseInt(subPriceText);
    itemsPrice.push(lastPrice);
    totalSubPrice.innerText = `${(itemsPrice.reduce((a, b) => a + b, 0))} IQD`
    
};

function deleteOrder() {
    const removeBtn = document.querySelectorAll('.remove');
    
    for (var i = 0; i < removeBtn.length; i++) {    
        removeBtn[i].addEventListener('click', ((j) => {  
        
        return function() {
            let index = j;
            console.log("removed");
            const Order = removeBtn[index].parentNode.parentNode.remove();
        }
      })
        (i)
      )}
}


