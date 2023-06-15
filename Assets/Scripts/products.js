let theArray = [
  {
    id: 1,
    image: "https://i.postimg.cc/TwPRbC2x/c2.png",
    name: "Only you perfume",
    size: 105,
    price: 1500,
    quantity: 1,
  },
  {
    id: 2,
    image: "https://i.postimg.cc/7hjptNgp/c2.jpg",
    name: "Berry & Berry Eau De Parfume",
    size: 100,
    price: 2000,
    quantity: 2,
    type: "M",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/j5B5jg33/c1.jpg",
    name: "La Scento Perfume",
    size: 105,
    price: 1080,
    quantity: 3,
    type: "M",
  },
  {
    id: 4,
    image: "https://i.postimg.cc/K8PBHD3C/w1.jpg",
    name: "Izia La Nuit",
    size: 90,
    quantity: 3,
    price: 1800,
    type: "M",
  },
  {
    id: 5,
    image: "https://i.postimg.cc/BQsK11Vg/w2.jpg",
    name: "FUNCTIONAL FRAGRANCE",
    size: 90,
    price: 3500,
    quantity: 3,
    type: "W",
  },
  {
    id: 6,
    image: "https://i.postimg.cc/VLpPVjP9/w4.jpg",
    name: "Oud for Greatness",
    size: 50,
    price: 2350,
    quantity: 1,
    type: "W",
  },
  {
    id: 7,
    image: "https://i.postimg.cc/m2w8c48P/w5.jpg",
    name: "Amouage Honour Woman",
    size: 100,
    price: 5000,
    quantity: 6,
    type: "W",
  },
  {
    id: 8,
    image: "https://i.postimg.cc/k5nCQ7dL/w6.jpg",
    name: "Coco Mademoiselle",
    size: 90,
    price: 3800,
    quantity: 3,
    type: "W",
  },
  {
    id: 9,
    image: "https://i.postimg.cc/gJRh7P5m/c2.jpg",
    name: "Eau de Parfum",
    size: 90,
    price: 3800,
    quantity: 3,
    price: 3800,
    type: "W",
  },
  {
    id: 10,
    image: "https://i.postimg.cc/gJRh7P5m/c2.jpg",
    name: "Eau de Parfum",
    size: 90,
    price: 3800,
    quantity: 3,
    type: "W",
  },
  {
    id: 11,
    image: "https://i.postimg.cc/gJRh7P5m/c2.jpg",
    name: "Eau de Parfum",
    size: 90,
    price: 3800,
    quantity: 3,
    type: "W",
  },
  {
    id: 12,
    image: "https://i.postimg.cc/gJRh7P5m/c2.jpg",
    name: "Eau de Parfum",
    size: 90,
    price: 3800,
    quantity: 3,
    type: "W",
  },
];

// function theMen() {
//   let myProducts = document.querySelector("#catMen");
//   theArray.forEach((dataM) => {
//     myProducts.innerHTML += `
//     <div class="col-12 col-md-3 col-sm-6 p-2 pt-5">
//     <div class="card p-1 m-1 mt-5 ">
//           <img id="photo" src="${dataM.image}" style="height: 20rem;" alt="${dataM.name}">
//           <div class="card-body text-center">
//           <h3>${dataM.name}</h3>
//           <p>${dataM.size}</p>
//           <p> R ${dataM.price}</p>
//           <button id="addToCart" onclick="addToCart(${dataM.id})" style="width: 6rem;">Add to 🛒</button>
//           </div>
//     </div>`;
    // theProducts.appendChild(menElement);
  // });
  let myProducts = [...new Set(theArray.map((dataM) => 
    {return dataM}))]
    let i=0;
    document.getElementById('catMen').innerHTML = myProducts.map((dataM) =>
    {
    let {image, name, price} = dataM;
  return (
    ` <div class="col-12 col-md-3 col-sm-6 p-2 pt-5 m-auto">
    <div class="card p-1 m-1 mt-5 ">
          <img id="photo" src="${image}" style="height: 20rem;" alt="${name}">
          <h3>${name}</h3>
          <p> R ${price}.00</p>
          <button id="addToCart" onclick="addToCart(a)" style="width: 6rem;">Add to 🛒</button>+
          </div>=
    </div>`
  )}).join('');
 

let cart = JSON.parse(localStorage.getItem('cartKey')) || [];
function cartDisplay(a) {
  let j = 0;
  // document.getElementById('show').innerHTML=cart.length
  if(cart.length==0) {
    document.getElementById('modalCart').innerHTML = "Your Cart Has Nothing"; 
  }
  else {
    document.getElementById("modalCart").innerHTML = cart.map((dataM)=> 
    {
      let {image, name, price} = dataM;
      return (
        `<div class="card p-1 m-1 mt-5  f-flex">
              <img id="photo" class="" src="${image}" style="wi: 20rem;" alt="${name}">
              <div class="card-body text-center">
              <h3>${name}</h3>
              <p>${size}</p>
              <p> R ${price}</p>
              <button id="addToCart" onclick="addToCart(a)" style="width: 6rem;">Add to 🛒</button>
              </div>
        </div>`
      )}).join('');
  }
}
// }



  // function oneDel(a) {
  //   cart.splice(a,1);
  //   cartDisplay(a)
  // }

  function addToCart(a) {
    cart.push({...myProducts[a]});
    cartDisplay(a);
  }
  



// function ready() {
//   let btnRemove = document.querySelector('#addToCart').innerHTML
//   for (let i = 0; i < btnRemove.length; i++) {
//       let btn = btnRemove[i]
//       btn.addEventListener('click',cartRemove)
//   }

//   let myInputs = document.querySelector('#input')
//   for (let i = 0; i < myInputs.length; i++) {
//       let input = myInputs[i]
//       input.addEventListener('change', quantityChanged)
//   }

//   let addToCartButtons = document.getElementsByClassName('shop-item-button')
//   for (let  i = 0; i < addToCartButtons.length; i++) {
//       let button = addToCartButtons[i]
//       button.addEventListener('click', addToCart)
//   }

//   document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
// }

// function purchaseClicked() {
//   alert('Thank you for your purchase')
//   let cartItems = document.getElementsByClassName('card s')[0]
//   while (cartItems.hasChildNodes()) {
//       cartItems.removeChild(cartItems.firstChild)
//   }
//   updateCartTotal()
// }

// functioncartRemove(event) {
//   let buttonClicked = event.target
//   buttonClicked.parentElement.parentElement.remove()
//   updateCartTotal()
// }

// function quantityChanged(event) {
//   let input = event.target
//   if (isNaN(input.value) || input.value <= 0) {
//       input.value = 1
//   }
//   updateCartTotal()
// }

// function addItemToCart(title, price, image) {
//   let cartContain = document.createElement('div')
//   cartContain.classList.add('cart-row')
//   let cartItems = document.getElementsByClassName('card s')[0]
//   let names = cartItems.getElementsByClassName('card -title')
//   for (let i = 0; i < names.length; i++) {
//       if (names[i].innerText == title) {
//           alert('Cannot Re-add items')
//           return
//       }
//   }
//   let inCart = 
//   cartItems.forEach((dataM) => {
//     let cartContain.innerHTML = inCart
//     cartContaicontnain.innerHTML += `
//     <div class="col-12 col-md-3 col-sm-6 p-2 pt-5">
//     <div class="card p-1 m-1 mt-5 ">
//           <img id="photo" src="${dataM.image}" ostyle="height: 90px;" alt="${dataM.name}">
//           <div class="card-body text-center">
//           <h3>${dataM.name}</h3>
//       </div>
//       <div>
//           <p id="price" class="text-center">${dataM.price}</>
//           <input class="numInput" type="number" value="1">
//           <button class="btn" id="addToCart" type="button">Remove</button>
//       </div>`;  cartContain.innerHTML = inCart
//   // cartItems.append(cartContain)
//   cartContain.querySelector('#addToCart')[0].addEventListener('click',cartRemove)
//   cartContain.getElementsByClassName('numInput')[0].addEventListener('change', quantityChanged)
// }

// function updateCartTotal() {
//   let cartItemContainer = document.getElementsByClassName('card s')[0]
//   let cartContains = cartItemContainer.getElementsByClassName('cart-row')
//   let total = 0
//   for (let i = 0; i < cartContains.length; i++) {
//       let cartContain = cartContains[i]
//       let priceElement = cartContain.getElementsByClassName('cart-price')[0]
//       let quantityElement = cartContain.getElementsByClassName('numInput')[0]
//       let price = parseFloat(priceElement.innerText.replace('R', ''))
//       let quantity = quantityElement.value
//       total = total + (price * quantity)
//   }
//   total = Math.round(total * 100) / 100
//   document.getElementsByClassName('cart-total-price')[0].innerText = R + total
// }
// let display = document.querySelector('#catMen');
// let filered = [];

// function display(items) {
//   display.innerHTML = '';

//   if (items.length === 0) {
//     display1.innerHTML = `<h1>Not in Budget</h1>`
//   } else  {
//     items.forEach((data) => {
//       `  <div class="col-12 col-md-3 col-sm-6 p-2">
//       <div class="card p-1 m-1 ">
//             <img id="photo" src="${data.image}" alt="${data.name}">
//             <div class="card-body text-center">
//             <h3>${data.name}</h3>
//             <p>${data.size}</p>
//             <p> R ${data.price}</p>
//             <button onclick="addToCart(${data.id})" style="width: 6rem;">Add to 🛒</button>
//             </div>
//       </div>`;
//     })
//   }
// }

// function filter() {
//   let min = document.getElementById('min').value;
//   let max = document.getElementById('min').value;

//   filered = theArray.filter((data) => {
//     let price = parseInt(data.price.replace(/\s/g,  ''));
//     return price >= min && max <= maxprice;
//   });
//   display(theArray)
// }

// document.getElementById('filter').addEventListener('click', filered)
// function addToCart(prodId) {
//   const cartContainer = document.getElementById("modal-body");
//   const product = myProducts.find((data) => data.id === prodId);

//   if (product && data.quantity > 0) {
//     cart.push(product);
//     data.quantity--;
//     updateTheCart();
//     myProducts.sort((data,) => data.id === {
   
//     });
//   }
// }

// updateTheCart()
// let myProducts = document.querySelector("#catMen");
// theArray.forEach((data) => {
//   myProducts.innerHTML += `
//     <div class="col-12 col-md-4 col-sm-6 mt-3 mb-3">
//       <div class="card p-1 m-1 ">
//         <img id="photo" src="${data.image}" alt="${data.name}" style="height: 20rem">
//         <div class="card-body text-center">
//         <h3>${data.name}</h3>
//         <p>${data.size}ml</p>
//         <p> R ${data.price}</p>
//         <p> R ${data.quantity}</p>
//         <button onclick="addToCart(${data.id})" style="width: 6rem;">Add to 🛒</button>
//         </div>
//         </div>
//     </div>
//   `;
// });


// let cart = JSON.parse(localStorage.getItem("data")) || [];
// // cart = document.querySelector('modalCart')
// // cart = document.querySelector('modal-body')
// let display = document.querySelector('modal-body')
// display = '';
// cart.forEach((newData) =>{
//  display.innerHTML += `
//     <div class="col-12 col-md-4 col-sm-6 mt-3 mb-3">
//       <div class="card p-1 m-1 ">
//         <img id="photo" src="${newData.image}" alt="${newData.name}" style="height: 20rem">
//         <div class="card-body text-center">
//         <h3>${newData.name}</h3>
//         <p>${newData.size}ml</p>
//         <p> R ${newData.price}</p>
//         <button onclick="addToCart(${newData.id})" style="width: 6rem;">Add to 🛒</button>
//         </div>
//         </div>
//     </div>   `

// })
// function addToCart() {
//     sessionStorage.setItem('myProducts', JSON.stringify(man));
//   }
// function sorT(){

//   // const itemsSort = Array.from(catMen);
//  man.sort(functoion(a,b){return a - b});

//   console.log(man)
// }
// let myData = JSON.parse(localStorage.getItem("data")) || [];

// function addToCart() {
//  let men = man.find(())
//   if ()
//   myData.push(men)
// }

// let myProducts = document.querySelector("#catMen");
// theArray.forEach((data) => {
//   myProducts.innerHTML += `
//     <div class="col-12 col-md-4 col-sm-6 mt-3 mb-3">
//       <div class="card p-1 m-1">
//         <img src="${data.image}" alt="${data.name}" style="height: 20rem">
//         <div class="card-body text-center">
//           <h3>${data.name}</h3>
//           <p>${data.size}ml</p>
//           <p>R ${data.price}</p>
//           <button onclick="addToCart(${data.id})" style="width: 6rem;">Add to 🛒</button>
//         </div>
//       </div>
//     </div>    
//   `;
// });


// let mySort = document.querySelector("#catMen");
// function functioDisplaySort(item) {
//   mySortHolder = 
// }
// theArray.forEach((data) => {
//   myProducts.innerHTML += `
//     <div class="col-12 col-md-4 col-sm-6 mt-3 mb-3">
//       <div class="card p-1 m-1">
//         <img src="${data.image}" alt="${data.name}" style="height: 20rem">
//         <div class="card-body text-center">
//           <h3>${data.name}</h3>
//           <p>${data.size}ml</p>
//           <p>R ${data.price}</p>
//           <button onclick="addToCart(${data.id})" style="width: 6rem;">Add to 🛒</button>
//         </div>
//       </div>
//     </div>    
//   `;
// });

// // let cart = JSON.parse(localStorage.getItem("data")) || [];

// function addToCart(prodId) {
//   const product = theArray.find((data) => data.id === prodId);

//   if (product && product.quantity > 0) {
//     const inCart = {
//       id: data.id,
//       image: data.image,
//       name: data.name,
//       price: data.price,
//     };
//     cart.push(inCart);
//     product.quantity--;
//     updateTheCart();
//   }
// }

// function updateTheCart() {
//   const cartContainer = document.getElementById("modal-body");
//   cartContainer.innerHTML = "";

//   cart.forEach((dataM) => {
//     cartContainer.innerHTML += `
//       <div class="card ">
//         <img src="${dataM.image}" alt="${dataM.name}" style="height: 5rem">
//         <div class="card -details">
//           <h4>${dataM.name}</h4>
//           <p>Price: R ${dataM.price}</p>
//           <button id="del">Del</button>
//         </div>
//       </div>
//     `;
//   });
//   localStorage.setItem("data", JSON.stringify(cart));
// }

// const cartModal = document.getElementById("modalCart");
// const closeBtn = document.getElementsByClassName("del")[0];
// const closeCart = () => {
//   cartModal.style.display = "none";
// };

// function 


