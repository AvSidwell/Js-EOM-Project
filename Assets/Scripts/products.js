const myAdmin = JSON.parse(localStorage.getItem("myAdmin")) || [];

let theArray = [
  {
    id: 1,
    image: "https://i.postimg.cc/TwPRbC2x/c2.png",
    name: "Only you perfume",
    size: 105,
    price: 1500,
    quantity: 1,
    type: "M",
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
    name: "Potion Slinger Love Potion Ritual Oil",
    size: 90,
    price: 3800,
    quantity: 3,
    price: 3800,
    type: "N",
  },
];

for (let i=0; i<myAdmin.length; i++) {
  theArray.push(myAdmin[i]);
};


let cart = JSON.parse(localStorage.getItem("cartKey")) || [];

// function cartDisplay() {
//   const modalCart = document.getElementById("modalCart");
//   if (cart.length === 0) {
//     modalCart.innerHTML = "Your Cart Is Empty";
//   } else {
//     modalCart.innerHTML = cart
//       .map((dataM) => {
//         const { id, image, name, price, quantity } = dataM;
//         return `
//           <div class="card p-1 m-auto" style="height: 20rem; width: 90%;">
//             <img id="photo" class="f-flex" src="${image}" style="height: 10rem;width: 100%;" alt="${name}">
//             <div class="card-body text-center" style="width: 100%;">
//               <h3>${name}</h3>
//               <p> R ${price}</p>
//               <button onclick="removeFromCart(${id})" style="height: 2rem;">Remove</button>
//               <input type="number" id="addProductAmount${id}" value="${quantity}" onchange="updateCartItemAmount(${id}, this.value)">
//             </div>
//           </div>`;
//       })
//       .join("");
//   }
// }

function cartDisplay() {
  const modalCart = document.getElementById("modalCart");
  if (cart.length === 0) {
    modalCart.innerHTML = "Your Cart Is Empty";
  } else {
    modalCart.innerHTML = cart
      .map((dataM) => {
        const { id, image, name, price, quantity } = dataM;
        const totalPrice = price * quantity;
        return `
          <div class="card p-1 m-auto p-auto" style="height: 25rem; width: 90%;">
            <img id="photo" class="f-flex" src="${image}" style="height: 5rem;width: 100%;" alt="${name}">
            <div class="card-body text-center" style="width: 50%;">
              <h3>${name}</h3>
              <p> R ${price}.00</p>
              <p>Quantity: ${quantity}</p>
              <p>Total Price: R ${totalPrice}.00</p>
              <button onclick="removeFromCart(${id})" style="height: 2rem;">Remove</button>
              <input type="number" id="addProductAmount${id}" value="${quantity}" onchange="updateCartItemAmount(${id}, this.value)">
            </div>
          </div>`;
      })
      .join("");
      for (let i=0; i<myAdmin.length; i++) {
        modalCart.push(myAdmin[i])
      };
  }
}


function addToCart(productId) {
  const product = theArray.find((item) => item.id === productId);
  if (product) {
    cart.push(product);
    localStorage.setItem("cartKey", JSON.stringify(cart));
    cartDisplay();
  }
}

function updateCartItemAmount(productId, amount) {
  const product = cart.find((item) => item.id === productId);
  if (product) {
    product.quantity = parseInt(amount);
    localStorage.setItem("cartKey", JSON.stringify(cart));
    cartDisplay();
  }
}

function removeFromCart(productId) {
  const index = cart.findIndex((item) => item.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
    localStorage.setItem("cartKey", JSON.stringify(cart));
    cartDisplay();
  }
}

function displayProducts(arr) {
  const products = document.getElementById("catMen");
  products.innerHTML = "";
  arr.forEach((dataM) => {
    products.innerHTML += `
      <div class="col-12 col-md-4 col-sm-6">
        <div class="card p-1 m-1 mt-5">
          <img id="photo" src="${dataM.image}" style="height: 20rem;" alt="${dataM.name}">
          <div class="card-body text-center">
            <h3>${dataM.name}</h3>
            <p> R ${dataM.price}.00</p>
            <button onclick="addToCart(${dataM.id})" style="width: 6rem;">Add to 🛒</button>
          </div>
        </div>
      </div>`;
  });
}

function filterProducts() {
  const selectCategory = document.getElementById("category");
  const selectedCategory = selectCategory.value;
  const selected = theArray.filter((data) => data.type === selectedCategory);
  displayProducts(selected);
}

displayProducts(theArray);
cartDisplay();


// let cart = JSON.parse(localStorage.getItem("cartKey")) || [];

// function cartDisplay() {
//   const modalCart = document.getElementById("modalCart");
//   if (cart.length === 0) {
//     modalCart.innerHTML = "Your Cart Is Empty";
//   } else {
//     modalCart.innerHTML = cart
//       .map((dataM) => {
//         const { id, image, name, price, quantity } = dataM;
//         return `
//           <div class="card p-1 m-auto" style="height: 20rem; width: 90%;">
//             <img id="photo" class="f-flex" src="${image}" style="height: 10rem;width: 100%;" alt="${name}">
//             <div class="card-body text-center" style="width: 100%;">
//               <h3>${name}</h3>
//               <p> R ${price}</p>
//               <button onclick="removeFromCart(${id})" style="height: 2rem;">Remove</button>
//               <input type="number" id="addProductAmount${id}" value="${quantity}" onchange="updateCartItemAmount(${id}, this.value)">
//             </div>
//           </div>`;
//       })
//       .join("");
//   }
// }

// function addToCart(productId) {
//   const product = theArray.find((item) => item.id === productId);
//   if (product) {
//     cart.push(product);
//     localStorage.setItem("cartKey", JSON.stringify(cart));
//     cartDisplay();
//   }
// }

// function updateCartItemAmount(productId, amount) {
//   const product = cart.find((item) => item.id === productId);
//   if (product) {
//     product.quantity = parseInt(amount);
//     localStorage.setItem("cartKey", JSON.stringify(cart));
//     cartDisplay();
//   }
// }

// function removeFromCart(productId) {
//   const index = cart.findIndex((item) => item.id === productId);
//   if (index !== -1) {
//     cart.splice(index, 1);
//     localStorage.setItem("cartKey", JSON.stringify(cart));
//     cartDisplay();
//   }
// }

// function displayProducts(arr) {
//   const products = document.getElementById("catMen");
//   products.innerHTML = "";
//   arr.forEach((dataM) => {
//     products.innerHTML += `
//       <div class="col-12 col-md-4 col-sm-6">
//         <div class="card p-1 m-1 mt-5">
//           <img id="photo" src="${dataM.image}" style="height: 20rem;" alt="${dataM.name}">
//           <div class="card-body text-center">
//             <h3>${dataM.name}</h3>
//             <p> R ${dataM.price}.00</p>
//             <button onclick="addToCart(${dataM.id})" style="width: 6rem;">Add to 🛒</button>
//           </div>
//         </div>
//       </div>`;
//   });
// }

// function filterProducts() {
//   const selectCategory = document.getElementById("category");
//   const selectedCategory = selectCategory.value;
//   const selected = theArray.filter((data) => data.type === selectedCategory);
//   displayProducts(selected);
// }

// displayProducts(theArray);
// cartDisplay();


// let cart = JSON.parse(localStorage.getItem("cartKey")) || [];



// function cartDisplay() {
//   if (cart.length === 0) {
//     document.getElementById("modalCart").innerHTML = "Your Cart Is Empty";
//   } else {
//     document.getElementById("modalCart").innerHTML = cart
//       .map((dataM) => {
//         let { image, name, price, quantity } = dataM;
//         return `<div class="card p-1 m-auto" style="height: 20rem; width: 90%;">
//                   <img id="photo" class="f-flex" src="${image}" style="height: 10rem;width: 100%;" alt="${name}">
//                   <div class="card-body text-center" style="width: 100%;">
//                     <h3>${name}</h3>
//                     <p> R ${price}</p>
//                     <button onclick="removeFromCart(${dataM.id})" style="height: 2rem;">Remove</button>
//                     <input type="number" id="addProductAmount" value="${quantity}" onchange="updateCartItemAmount(${id}, this.value)>
//                   </div>
//                 </div>`;
//       })
//       .join("");
//   }
// }



// function addToCart(productId) {
//   const product = theArray.find((item) => item.id === productId);
//   if (product) {
//     cart.push(product);
//     localStorage.setItem("cartKey", JSON.stringify(cart));
//     cartDisplay();
//   }
// }
// function updateCartItemAmount(productId, amount) {
//   const product = cart.find((item) => item.id === productId);
//   if (product) {
//     product.quantity = amount;
//     localStorage.setItem("cartKey", JSON.stringify(cart));
//     cartDisplay();
//   }
// }

// function removeFromCart(productId) {
//   const index = cart.findIndex((item) => item.id === productId);
//   if (index !== -1) {
//     cart.splice(index, 1);
//     localStorage.setItem("cartKey", JSON.stringify(cart));
//     cartDisplay();
//   }
// }

// function displayProducts(arr) {
//   const products = document.getElementById("catMen");
//   products.innerHTML = "";
//   arr.forEach((dataM) => {
//     products.innerHTML += `
//       <div class="col-12 col-md-4 col-sm-6">
//         <div class="card p-1 m-1 mt-5">
//           <img id="photo" src="${dataM.image}" style="height: 20rem;" alt="${dataM.name}">
//           <div class="card-body text-center">
//           <h3>${dataM.name}</h3>
//           <p> R ${dataM.price}.00</p>
//           <button onclick="addToCart(${dataM.id})" style="width: 6rem;">Add to 🛒</button>
//           </div>
//           </div>
//         </div>`;
//   });
// }

// function filterProducts() {
//   const selectCategory = document.getElementById("category");
//   const selectedCategory = selectCategory.value;
//   let selected = [];

//   theArray.forEach((data) => {
//     if (data.type == selectedCategory.split(" ")) {
//       selected.push(theArray[theArray.indexOf(data)]);
//     }
//   });
//   displayProducts(selected);
// }

 
// displayProducts(theArray);
// cartDisplay();
