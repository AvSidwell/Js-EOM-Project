const myAdmin = JSON.parse(localStorage.getItem("myAdmin")) || [];
function addProducts() {
    const id = Math.floor(Math.random() * 1000000);
    const product = {
        id,
        image: document.getElementById("image").value,
        name: document.getElementById("prodName").value,
        price: parseFloat(document.getElementById("prodPrice").value),
        category: document.getElementById("category").value,
        quantity: parseInt(document.getElementById("quantity").value),
    }
    myAdmin.push(product);
    localStorage.setItem("myAdmin", JSON.stringify(myAdmin));
    displaymyAdmin();
}
const addBtn = document.getElementById("btn-add");
addBtn.addEventListener("click", addProducts)
function displaymyAdmin() {
    const listProducts = document.getElementById("product-list");
        listProducts.innerHTML = "";
        myAdmin.forEach((product) => {
            let adminTable = document.createElement("tr");
            adminTable.innerHTML = `
            <td>${product.id}</td>
            <td> <img src="${product.image}"> </td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
            <td>${product.quantity}</td>
            <td>
                <button class="deleteBtn" onclick="deleteProducts(${product.id})"> Delete </button>
            </td>
            `;
            listProducts.appendChild(adminTable);
        })
}
displaymyAdmin();
function deleteProducts(productId) {
    const adminIndex = myAdmin.findIndex((product) => product.id === productId);
    if(adminIndex !== -1) {
        myAdmin.splice(adminIndex, 1);
    }
    localStorage.setItem("myAdmin", JSON.stringify(myAdmin));
    displaymyAdmin();
}