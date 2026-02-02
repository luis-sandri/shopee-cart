// auais acções meu carrinho pode fazer

// Casos de uso
// Adicionar um item ao carrinho
async function addItem(userCart, item){
    userCart.push(item)
};
// Remover um item do carrinho
async function deleteItem(userCart, itemName){
    const index = userCart.findIndex((item) => item.name === itemName);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}
// Diminui uma unidade de item do carrinho
async function removeItem(userCart, item){
   const indexFound = userCart.findIndex((p) => p.name == item.name);

   if(indexFound == -1){
    console.log("Item não encontrado");
    return;
   }

   if(userCart[indexFound].quantity > 1){
    userCart[indexFound].quantity -= 1
    return;
   }

   if(userCart[indexFound].quantity == 1){
    userCart.splice(indexFound, 1);
    return;
   }

};
// Calcular o total do carrinho
async function calculateTotal(userCart){
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\nTotal: ${result}`);
};

async function displayCart(userCart){
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => { console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`);
    
    });
};

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart,
}