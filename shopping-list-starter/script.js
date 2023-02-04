let shoppingListItems = ["pasta", "chocolate", "cat food"];

function addItem() {
   let item = document.getElementById("new-item-text").value;
    // add item to shoppingListItems
    shoppingListItems.push(item);
    console.log("before updateItems", shoppingListItems);
    updateItems()
    console.log("after updateItems", shoppingListItems);
}

function updateItems() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
    shoppingListItems.forEach((item) => {
        // console.log("Buy a (n): " + item);
        // console.log("You should buy a(n): ", item);
        // console.log('You must buy a(n): ${item}')
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement);
    })
}

