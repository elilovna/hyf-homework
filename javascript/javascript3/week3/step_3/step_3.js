function Product(name, price) {
    if (name === "") {
        this.name = "unnamed"
    } else {
        this.name = name;
    }
    if (price === "") {
        this.price = 0
    } else {
        this.price = price;
    }
    this.selected = false;
}

let ul = document.createElement("ul");
document.getElementById("center").appendChild(ul);

function createShoppingCart(products) {

    return {
        addProduct: function (product) {
            products.push(product);
            const newProduct = product;
            window.localStorage.setItem("someVarKey", newProduct);
        },
        removeProduct: function (product) {
            if (document.getElementById('remember').checked) {
                alert("checked");
            } else {
                alert("You didn't check it! Let me check it for you.");
            }
            // const index = array.indexOf(product);
            // products.splice(index, 1)
        },
        getTotal: function () {
            let sum = 0
            products.forEach(product => {
                sum += product.price
            });
            console.log(sum)
            return sum;
        },
        renderProducts: function () {
            ul.innerHTML = "";
            products.forEach(product => {
                const div = document.createElement("div");
                div.innerHTML += `<span>Name: ${product.name}.</span> <span>Price: ${product.price}</span>`;
                ul.appendChild(div);
            })
        },
        selectProducts: function () {
            ul.innerHTML = "";
            const li = document.createElement("li");
            products.forEach(product => {
                const div = document.createElement("div");
                div.className = "style-product";
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.className = "check"
                div.appendChild(checkbox);
                div.innerHTML += `<span>Name: ${product.name}.</span> <span>Price: ${product.price}</span>`;
                li.appendChild(div);
            })
            ul.appendChild(li)
        },
        getUser: function () {
            return fetch("https://jsonplaceholder.typicode.com/users/1")
                .then(res => res.json())
        },
        changeProductName: function (newName) {
            console.log(this)
            this.name = newName;
        },
    }
}

const deletedButton = () => {
    const btn = document.createElement("button");
    btn.innerHTML = "Delete item";
    btn.addEventListener("click", () => {
        // deleted item 
    })
}

const shoppingCart = createShoppingCart([]);

const addNewProduct = () => {
    const name = prompt("Please enter product's name");
    const price = prompt("Please enter product's price");
    console.log(name, price)
    const newProduct = new Product(name, price);
    shoppingCart.addProduct(newProduct);
    shoppingCart.renderProducts();
}


const bread = new Product("bread", 45)
shoppingCart.addProduct(bread);
const cheese = new Product("cheese", 123)
shoppingCart.addProduct(cheese);
const tomatoes = new Product("tomatoes", 67)
shoppingCart.addProduct(tomatoes);
const potatoes = new Product("potatoes", 67)
shoppingCart.addProduct(potatoes);
const mango = new Product("mango", 49)
shoppingCart.addProduct(mango);

const total = shoppingCart.getTotal()
shoppingCart.renderProducts()
const showUserInfo = () => {
    shoppingCart.getUser()
        .then(user => {
            ul.innerHTML = "";
            ul.innerHTML = `<li> User name: ${user.name} <br> Total Price: ${total} </li>`;
        })
}


const showList = () => {
    shoppingCart.renderProducts();
    //doesn't finish
}

const selectProducts = () => {
    shoppingCart.selectProducts();
    const checkedValue = document.querySelector(...).value;
}

shoppingCart.changeProductName.bind(potatoes)("orange")
console.log(potatoes)



